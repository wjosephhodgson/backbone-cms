define([
	'backbone',
	'../templates/create-edit-product-tpl',
	'../models/product-model',
	'../collections/product-collection',
	'./sku-entry-view',
	'./print-recipe-view',
	'./sku-discount-view',
	'./sku-product-description-view',
	'./sku-product-adddescription-view',
	'./sku-size-dimension-view',
	'../collections/sku-entry-collection',
	'global-events',
	'settings',
	'content/category-sections/more/drop-shipping-setup/collections/drop-ship-collection',
	'./dropship-view',
	'components/general-product/views/general-product-view',
	'content/shared/collections/addons-collection',
    './categories-view',
    './product-management-view',
	'components/featured-product/views/featured-product-view',
    'components/featured-product/collections/featured-product-collection',
	'content/shared/collections/blank-collection',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	CreateEditProductTpl,
	ProductModel,
	ProductCollection,
	SkuEntryView,
	PrintRecipeView,
	SkuDiscountView,
	SkuProductDescriptionView,
	SkuProductAddDescriptionView,
	SkuSizeDimensionView,
	SkuEntryCollection,
	GlobalEvents,
	Settings,
	DropshipCollection,
	DropshipView,
	GeneralProductView,
	AddonsCollection,
	CategoriesView,
	CustomHtmlPagesView,
    FeaturedProductView,
    FeaturedProductCollection,
	BlankCollection
) {
	var CreateEditProductView = Backbone.View.extend({
		tagName: 'form',
		id: 'm-product-management',
		template: CreateEditProductTpl,
 
 initialize: function() {
             PrintRecipeView.parent = this;
		},

		skuList: null,
		dopshipCollection: null,
		addonsCollection: null,
		categoriesView: null,
		relatedProductsCollection: null,
		mainFlowerCollection: null,
		colorsCollection: null,
		bouquetStylesCollection: null,

		

		render: function(options) {


			var self = this; 
			var modelId = options.id;



			ProductCollection.fetchCustom().done(function() {
				// get model from id (id is from route). no id = creation
				self.model = modelId
					? ProductCollection.get(modelId)
					: new ProductModel();

				// if not base sku, get base sku and show edit screen
				if(!self.model.get('isBaseSku')) {
					self.model = ProductCollection.get(
						self.model.get('baseSkuId')
					);
				}

				// model to use by template
				viewModel = self.model.toJSON();
                 
                 
				self.renderVisible(viewModel);  // Print Recipe Modal

				// when changing type2, update edit screen without updating underlying model
				options.type2 && (viewModel.type2 = self.type2 = options.type2);

				// set up view
				self.$el.html(self.template(viewModel));
				self.cacheElem();
				self.delegateEvents();

				// create sku list collection for temp use from array
				self.skuList = new SkuEntryCollection();
				self.skuList.add(self.model.toJSON());
				self.skuList.add(
					self.model.get('skuList').map(function(id) {
						return ProductCollection.get(id).toJSON();
					})
				);

				// add drop ship options and override fees/status
				DropshipCollection.fetchCustom().done(function() {
					self.dropshipCollection = DropshipCollection.deepClone();
					self.dropshipCollection.set(
						self.model.get('dropshipMethods'),
						{ merge: true }
					);
					self.addAll(
						self.$dropshipList,
						self.dropshipCollection,
						self.addDropship.bind(self)
					);
				});

				// add addons
				AddonsCollection.fetchCustom().done(function() {
					self.addonsCollection = AddonsCollection.deepClone();

					self.addonsCollection.set(
						self.model.get('addons'),
						{ merge: true, remove: false }
					);

					self.$addonsContainer.append(
						self.getAddonsComponent(self.addonsCollection).render().el
					);
				});

				// Categories
				self.categoriesView = new CategoriesView({
					model: self.model
				});

				self.$mainCategoriesContainer.append(
					self.categoriesView.render().el
				);

				self.addAllSkuCategories();

				// Related Products Featured Product View (NEW)
				this.relatedProductsView && this.relatedProductsView.remove();
				this.relatedProductsView = new FeaturedProductView({
					collection: new FeaturedProductCollection(self.model.get('relatedProducts')),
					id: 'm-related-products',
					selectAll: true,
					primarySku: false
				});
				self.$relatedProductsContainer.append(this.relatedProductsView.render().el);

				// Attributes
				self.mainFlowerCollection = new BlankCollection(self.model.get('flowers'));
				self.colorsCollection = new BlankCollection(self.model.get('colors'));
				self.bouquetStylesCollection = new BlankCollection(self.model.get('bouquetStyles'));

			    self.$bouquetStyleContainer.append(new GeneralProductView({
			    	activeTitle:'Selected Styles',
			        activeTableTitle:'Style',
			        allTitle:'Style Search',
			        allSearchPlaceholder: 'Style Search Terms',
			        activeAttribute:'active',
			        nameAttribute:'style',
			        async: false,
			        collection: self.bouquetStylesCollection,
			        imageSearch: false,
			        selectAll: true,
			        disabled: self.model.get('type') === 'Teleflora',
			        hideGrids: true
			    }).render().el);


			    self.$bouquetColorContainer.append(new GeneralProductView({
			        activeTitle:'Selected Bouquet Colors',
			        activeTableTitle:'Color',
			        allTitle:'Bouquet Color Search',
			        allSearchPlaceholder: 'Color Search Terms',
			        activeAttribute:'active',
			        nameAttribute:'color',
			        async: false,
			        collection: self.colorsCollection,
			        imageSearch: false,
			        selectAll: true,
			        disabled: self.model.get('type') === 'Teleflora',
			        hideGrids: true
			    }).render().el);

				self.$mainFlowerContainer.append(new GeneralProductView({
			        activeTitle:'Selected Flowers',
			        activeTableTitle:'Flower',
			        allTitle:'Flower Search',
			        allSearchPlaceholder: 'Flower Search Terms',
			        activeAttribute:'active',
			        nameAttribute:'name',
			        async: false,
			        collection: self.mainFlowerCollection,
			        imageSearch: false,
			        selectAll: true,
			        disabled: self.model.get('type') === 'Teleflora'
			    }).render().el);

	      		self.stopListening(self.skuList);

				self.listenTo(self.skuList,'add', function(model) {
					self.addSku(model);
					// self.addSkuFlower(model);
					self.addSkuCategory(model);
					self.showSKUToggle();
					self.handleProductDescriptionVariantToggle();
				});

				self.listenTo(self.skuList,'remove', function() {
					self.showSKUToggle();
					self.handleProductDescriptionVariantToggle();
				});


				// add all sku stuff
				self.addAllSkus();
				//self.addAllSkuFlowers();

				// apply jqueryui
				setTimeout( function(){
					self.applyToolTips();
				}, 500);
				self.applyDates();
				self.applyTabs();
				self.applyAccordians();
				self.showSKUToggle();
				self.handleProductDescriptionVariantToggle();
				self.handleAddSku();
				self.handleToggleKeepsake();
				self.validate();
			}.bind(this));

			return self;
		},


		// For modal changes
		renderVisible: function(model) {

			this.visibleModel = model;

			this.$el.html(this.template(this.model.toJSON()));

			this.delegateEvents();

			this.cacheElem();

			this.setModal();
		},


		addSkuCategory: function(model){
			var newView = new CategoriesView({
				model: model,
				parent: this
			});

			this.$skuCategoriesContainer.append(
				newView.render().el
			);
		},

		addAllSkuCategories: function(){
			var self = this;

			self.$skuCategoriesContainer.empty();

			self.skuList.each(function(sku) {
				if(self.model.get('id') !== sku.get('id')) {
					self.addSkuCategory(sku);
				}
			});
		},

		// addSkuFlower: function(model) {
		// 	var newView = new AttributesView({
		// 		model: model,
		// 		parent: this
		// 	});

		// 	this.$skuFlowersContainer.append(newView.render().el);
		// },

		// addAllSkuFlowers: function(){
		// 	this.$skuFlowersContainer.empty();

		// 	this.skuList.each(function(sku) {
		// 		if(this.model.get('id') !== sku.get('id')) {
		// 			this.addSkuFlower(sku);
		// 		}
		// 	}, this);
		// },

		cacheElem: function() {
			// normal human being form fields
			this.$modal = $('#print-recipe-modal');
			this.$name = this.$el.find('#f-name');
			this.$number = this.$el.find('#f-number');
			this.$active = this.$el.find('#f-active');
			this.$type2 = this.$el.find('#f-type2');
			// this.$startDate = this.$el.find('#f-startDate');
			// this.$endDate = this.$el.find('#f-endDate');
			this.$discountAmount = this.$el.find('#f-discountAmount');
			this.$discountStartDate = this.$el.find('#f-discountStartDate');
			this.$discountEndDate = this.$el.find('#f-discountEndDate');
			this.$discountVariantsActive = this.$el.find('#f-discountVariantsActive');
			this.$productDescriptionVariantsActive = this.$el.find('#f-productDescriptionVariants');
			this.$description = this.$el.find('#f-description');
			this.$additionalInfo = this.$el.find('#f-additionalInfo');
			this.$legalInfo = this.$el.find('#f-legalInfo');
			this.$metaTitle = this.$el.find('#f-meta-title');
			this.$metaKeywords = this.$el.find('#f-meta-keywords');
			this.$metaDescription = this.$el.find('#f-meta-desc');
			this.$metaTags = this.$el.find('#f-meta-tags');
			this.$productClassification = this.$el.find('#f-productClassification');
			this.$width = this.$el.find('#f-width');
			this.$height = this.$el.find('#f-height');
			this.$attributesVariantsActive = this.$el.find('#f-attributesVariantsActive');
			this.$localDeliveryActive = this.$el.find('#f-localDeliveryActive');
			this.$noSameDayDeliveryActive = this.$el.find('#f-noSameDayDeliveryActive');
			this.$inStorePickupActive = this.$el.find('#f-inStorePickupActive');
			this.$taxFreeActive = this.$el.find('#f-taxFreeActive');
			this.$merchandisingHighlight = this.$el.find('#f-merchandisingHighlight');
			this.$recipe = this.$el.find('#f-recipe');

			this.$skuList = this.$el.find('#sku-list');
			this.$skuDiscountList = this.$el.find('#sku-discount-list');

			this.$skuSizeDimensionList = this.$el.find('#sku-size-dimension-list');

			this.$additionalProductInfo = this.$el.find('.additionalProductInfo');
			this.$skuProductDescriptionList = this.$el.find('#sku-product-description-list');
			this.$skuProductAddDescriptionList = this.$el.find('#sku-product-adddescription-list');
			this.$skuAlert = this.$el.find('#sku-alert');
			this.$dropshipList = this.$el.find('#dropship-list');

			// containers
			this.$addonsContainer = this.$el.find('#addons-container');
			this.$relatedProductsContainer = this.$el.find('#related-products-container');
			this.$skuFlowersContainer = this.$el.find('#sku-flowers-container');
			this.$skuCategoriesContainer = this.$el.find('#sku-categories-container');
			this.$mainFlowerContainer = this.$el.find('#main-flower-container');
			this.$mainCategoriesContainer = this.$el.find('#main-categories-container');
			this.$bouquetStyleContainer = this.$el.find('#bouquet-style-container');
			this.$bouquetColorContainer = this.$el.find('#bouquet-color-container');

			this.$hideSection = this.$el.find('.hideSection');
			this.$applyToAllSkus = this.$el.find('#applyToAllSkus');

			this.$tip = this.$el.find('.tooltip-change');
			this.$alertTip = this.$el.find('.hidden-field-tip');

			this.$keepsake = this.$el.find('#f-keepsake');
			this.$keepsakefields = this.$el.find('.f-keepsake-field');
			this.$keepsakeimg = this.$el.find('#f-keepsake-img');
			this.$keepsakepreview = this.$el.find('#f-keepsake-preview');
		},

		events: {
			'click #cancel-btn': 'handleCancel',
			'click #save-btn': 'handleSave',
			'click #reset-btn': 'handleReset',
			'click #add-sku-btn': 'handleAddSku',
			'change #f-discountVariantsActive': 'handleDiscountVariantToggle',
			'change #f-productDescriptionVariants': 'handleProductDescriptionVariantToggle',
			'change #f-attributesVariantsActive': 'handleAttributesVariantToggle',
			'change #f-categoriesVariantsActive': 'handleCategoriesVariantToggle',
			'change #f-type2': 'handleType2Change',	
			'change #allow-updates': 'handleUpdateConfirm',
			'focus #f-name': 'handleShowAlertTip',
			'blur #f-name': 'handleHideAlertTip',			
			'change #f-keepsake': 'handleToggleKeepsake',
			'click  #print-recipe-btn': 'handleRecipePrint'
		},

		handleUpdateConfirm: function() {
			var self = this;
			// console.log('at least it changed');
			GlobalEvents.trigger('modal:custom', {
        		template: {
	        		title: 'Lock Merchandising',
	          		text: 'Are you sure you want to change this setting? Turning on the merchandising lock will prevent this product from receiving any automatic updates.'
        		}
      		});
		},

		handleToggleKeepsake: function() {
			var self = this;
			if( self.$keepsake.is(':checked')) {
				this.$keepsakefields.fadeIn(200);
			} else {
				this.$keepsakefields.fadeOut(200);
			}			
		},

		handleShowAlertTip: function() {
			var self = this;
			self.$alertTip.fadeIn();
		},

		handleHideAlertTip: function() {
			var self = this;
			self.$alertTip.fadeOut();
		},		
		
		handleReset: function() {
           var self = this;
                 // Attempted to find a short solution,but nothing


			GlobalEvents.trigger('modal:custom', {

				 template: {
                    title: 'Reset Settings',
                    text: 'Are you sure? This will reset all applicable fields to their default Teleflora/group values.'
               	 },

             confirmFn: function(){

				self.$name.val(self.model.get('name'));    //.val(self.model.get(''));
				self.$number.val(self.model.get('number'));
				self.$active.prop('checked', true);
				self.$type2.val(self.model.get('type2'));
				// self.$startDate.val(self.model.get('startDate'));
				// self.$endDate.val(self.model.get('endDate'));
				self.$discountAmount.val(self.model.get('discountAmount'));
	            self.$discountStartDate.val(self.model.get('discountStartDate'));
	            self.$discountEndDate.val(self.model.get('discountEndDate'));
				self.$discountVariantsActive.prop('checked', true);
				self.$description.val(self.model.get('description'));
				self.$additionalInfo.val(self.model.get('additionalInfo'));
				self.$legalInfo.val(self.model.get('legalInfo'));
				self.$metaTitle.val(self.model.get('metaTitle'));
				self.$metaKeywords.val(self.model.get('metaKeywords'));
				self.$metaDescription.val(self.model.get('metaDescription'));
				self.$metaTags.val(self.model.get('metaTags'));
				self.$productClassification.val(self.model.get('productClassification'));
				self.$width.val(self.model.get('width'));
				self.$height.val(self.model.get('height'));

				self.$attributesVariantsActive.prop('checked', true);
				self.$localDeliveryActive.prop('checked', true);
				self.$noSameDayDeliveryActive.prop('checked', true);
				self.$inStorePickupActive.prop('checked', true);
				self.$taxFreeActive.prop('checked', true);
				self.$merchandisingHighlight.val(self.model.get('merchandisingHighlight'));
				self.$recipe.val(self.model.get('recipe'));
			 },

			cancelFn: function(){
                    // do nothing, they clicked cancel
                }  

			});

		},

		/*
		handleMerchChange: function(event) {
            var self = self,
            cbox = this.$merch;
            event.preventDefault();

            console.log(this.$merch);

            GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Reset Settings',
                    text: 'Are you sure you want to reset all your settings?'
                },
                confirmFn: function(){
                    cbox.prop("checked", !cbox.prop("checked"));
                },
                cancelFn: function(){
                    // do nothing, they clicked cancel
                }               
                
            });
        },*/

		// show error when adding > 10 elements in custom products
		showError: function() {
			this.$skuAlert.fadeIn(200);
		},

		hideError: function() {
			this.$skuAlert.fadeOut(200);
		},

		showSKUToggle: function() {
			if (this.skuList.length > 1) {
				this.$applyToAllSkus.show();
			} else {
				this.$applyToAllSkus.hide();
			}
		},

		handleRecipePrint: function() {
            
	        this.showModal(PrintRecipeView);
		},

		setModal: function() {

	      this.$el.find('#print-recipe-modal').dialog({
	        autoOpen: false,
	        modal: true,
	        draggable: false,
	        show: {
	          effect: 'fade',
	          speed: 200
	        },
	        hide: {
	          effect: 'fade',
	          speed: 100
        	}
      	  });
    	},

		showModal: function(view) {
			
	    	view.model = this.model;

	    	this.$modal.empty();
	    	this.$modal.append(view.render().el);
	        this.$modal.dialog('open');
    	},


		// toggle display of sku discount list
		handleDiscountVariantToggle: function(e) {
			var self = this;
			if( self.$discountVariantsActive.is(':checked')) {
				this.$skuDiscountList.fadeIn(200);
			} else {
				this.$skuDiscountList.fadeOut(200);
			}

		},

		// toggle display of sku discount list
		handleProductDescriptionVariantToggle: function(e) {
			var self = this;
			var togglevalue = this.$productDescriptionVariantsActive.is(':checked');

			if(togglevalue) {
				this.$additionalProductInfo.show();
				// self.$skuProductAddDescriptionList.show();
			} else {
				this.$additionalProductInfo.hide();
				// self.$skuProductAddDescriptionList.hide();
			}
		},

		handleAttributesVariantToggle: function(e) {
			if($(e.currentTarget).is(':checked')) {
				this.$skuFlowersContainer.fadeOut(200);
			} else {
				this.$skuFlowersContainer.fadeIn(200);
			}
		},

		handleCategoriesVariantToggle: function(e) {
			if($(e.currentTarget).is(':checked')) {
				this.$skuCategoriesContainer.fadeIn(200);
			} else {
				this.$skuCategoriesContainer.fadeOut(200);
			}
		},

		handleType2Change: function() {
			var self = this;
			self.render({
				id: self.model.get('id'),
				type2: self.$type2.find('option:selected').val()
			})
		},

		// add sku to both sku and discount list
		handleAddSku: function() {
			var model = this.model.deepClone();
			var self = this;

			
			if( this.skuList.length == 1 ) {
				skuNumber = "Deluxe"
			} else if ( this.skuList.length == 2 ) {
				skuNumber = "Premium"
			} else {
				skuNumber = ""
			}

			// set initial values to be identical, with these fields reset
			model.set({
				id: model.get('id') + '-' + Date.now(),
				name: model.get('name'),
				skuLabel: skuNumber,
				myPrice: '0.00',
				holidayPrice: '0.00',
				isBaseSku: false
			});

			// must be custom and have less than 12 to add, otherwise throw error
			if((this.model.get('type') === 'Custom') && (this.skuList.length < 12)) {
				this.hideError();
				this.skuList.add(model);
			} else if(this.model.get('type')==='Custom') {
				this.showError();
				setTimeout(function(){
					self.hideError();
				}, 5000);
			} else {
				// do nothing
			}
		},

		// append view to both containers
		addSku: function(model) {
			var browseOnly = this.type2 === 'Browse Only';

			var skuEntryView = new SkuEntryView({
				model: model,
				collection: this.skuList,
				browseOnly: browseOnly
			});

			this.$skuList.append(skuEntryView.render().el);

			if(model.get('id') !== this.model.get('id')) {
				var skuDiscountView = new SkuDiscountView({
					model: model,
					collection: this.skuList
				});

				this.$skuDiscountList.append(skuDiscountView.render().el);
			}


			if(model.get('id') !== this.model.get('id')) {
				var skusizeDimensionView = new SkuSizeDimensionView({
					model: model,
					collection: this.skuList
				});

				this.$skuSizeDimensionList.append(skusizeDimensionView.render().el);
			}

			if(model.get('id') !== this.model.get('id')) {

				var skuProductDescriptionView = new SkuProductDescriptionView({
					model: model,
					collection: this.skuList
				});
				this.$skuProductDescriptionList.append(skuProductDescriptionView.render().el);	

				// var skuProductAddDescriptionView = new SkuProductAddDescriptionView({
				// 	model: model,
				// 	collection: this.skuList
				// });
				// this.$skuProductDescriptionList.append(skuProductAddDescriptionView.render().el);


			}

		},


		addAllSkus: function() {
			this.$skuList.empty();
			this.$skuDiscountList.empty();
			this.$skuProductAddDescriptionList.empty();
			this.$skuSizeDimensionList.empty();

			this.$skuProductDescriptionList.empty();
			this.handleDiscountVariantToggle();
			this.skuList.each(this.addSku, this);

		},

		addDropship: function(dropship) {
			var newView = new DropshipView({
				model: dropship
			});

			this.$dropshipList.append(newView.render().$el);
		},

		// jquery container element, collection, callback for each call
		addAll: function(container, collection, callback) {
			container.empty();
			collection.each(callback);
		},

		handleCancel: function(e) {
			GlobalEvents.trigger(
				'form:cancel:url',
				Settings.productManagementBaseUrl
			);
		},

		// a lot more logic to be added
		handleSave: function() {

			var self = this;

			if(this.$el.valid()){
				var self = this;
				// right now, only type gets selected
				this.model.set({
					name: this.$name.val().trim(),
					number: this.$number.val().trim(),
					active: this.$active.is(':checked'),
					type2: this.$type2.find('option:selected').val(),
					// startDate: this.$startDate.val().trim(),
					// endDate: this.$endDate.val().trim(),
					discountAmount: this.$discountAmount.val().trim(),
					discountStartDate: this.$discountStartDate.val().trim(),
					discountEndDate: this.$discountEndDate.val().trim(),
					discountVariantsActive: this.$discountVariantsActive.is(':checked'),
					productDescriptionVariantsActive: this.$productDescriptionVariantsActive.is(':checked'),
					description: this.$description.val().trim(),
					additionalInfo: this.$additionalInfo.val().trim(),
					metaTitle: this.$metaTitle.val().trim(),
					metaKeywords: this.$metaKeywords.val().trim(),
					metaDescription: this.$metaDescription.val().trim(),
					metaTags: this.$metaTags.val().trim(),
					productClassification: this.$productClassification.find('option:selected').val(),
					width: this.$width.val().trim(),
					height: this.$height.val().trim(),
					attributesVariantsActive: this.$attributesVariantsActive.is(':checked'),
					merchandisingHighlight: this.$merchandisingHighlight.find('option:selected').val(),
					relatedProducts: this.relatedProductsView.collection.toJSON(),

					// the not so normal fields
					// whole collection to JSON example
					addons: this.addonsCollection.toJSON(),

					// whole collection to ID example
					categories: this.categoriesView.getCollection()
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),

					// new attribute ('related') example
					// relatedProducts: this.relatedProductsCollection.toJSON().filter(function(m) {
					// 	return m.related;
					// })
				});	

				if(this.model.get('type') === 'Teleflora') {
					this.model.set({
						recipe: this.$recipe.val().trim()
					})
				}

				if(this.model.get('type2') === 'Drop Shipped') {
					this.model.set({
						taxFreeActive: this.$taxFreeActive.is(':checked'),
						dropshipMethods: this.dropshipCollection.toJSON()
					});
				}

				if(this.model.get('type2') === 'Hand Delivered') {
					this.model.set({
						localDeliveryActive: this.$localDeliveryActive.is(':checked'),
						noSameDayDeliveryActive: this.$noSameDayDeliveryActive.is(':checked'),
						inStorePickupActive: this.$inStorePickupActive.is(':checked'),
						taxFreeActive: this.$taxFreeActive.is(':checked')
					});
				}



				// Return to home view
				GlobalEvents.trigger('form:save', this.$tip);
				GlobalEvents.trigger('form:cancel:url', Settings.productManagementBaseUrl);
			} 
			else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},


		applyDates: function() {
			var self = this;

			// self.$startDate.datepicker({
		 //    onSelect: function(selected) {
		 //        self.$endDate.datepicker('option', 'minDate', selected);
		 //        self.$startDate.trigger('blur');
		 //    },

		 //    dateFormat: 'mm/dd/y'
			// });

			// self.$endDate.datepicker({
		 //    onSelect: function(selected) {
		 //        self.$startDate.datepicker('option', 'maxDate', selected);
		 //        self.$endDate.trigger('blur');
		 //    },

		 //    dateFormat: 'mm/dd/y'
			// });

			self.$discountStartDate.datepicker({
		    onSelect: function(selected) {
		        self.$discountEndDate.datepicker('option', 'minDate', selected);
		        self.$discountStartDate.trigger('blur');
		    },

		    dateFormat: 'mm/dd/y'
			});

			self.$discountEndDate.datepicker({
		    onSelect: function(selected) {
		        self.$discountStartDate.datepicker('option', 'maxDate', selected);
		        self.$discountEndDate.trigger('blur');
		    },

		    dateFormat: 'mm/dd/y'
			});

		},

		applyTabs: function() {
			this.$el.find('#tabs').tabs();
		},

		applyAccordians: function() {
			this.$el.find('.accordian').accordion({
				heightStyle: "content"
			});

			this.applyAccordians2();
		},

		getAddonsComponent: function(collection) {
			return new GeneralProductView({
				activeTitle:'Selected Product Add-Ons',
				activeTableTitle:'Add-On',
				allTitle:'Add-On Search',
				allSearchPlaceholder: 'Add-On Search Term',
				activeAttribute:'active',
				nameAttribute:'name',
				async: false,
				collection: collection,
				nofilter: false,
				sequence: true,
				imageSearch: true
			});
		},

		applyAccordians2: function() {
			this.$el.find('#additional-information').click(function() {
				var self = $(this);

				self.next().fadeToggle(200).toggleClass('active');

				if(self.find('.icon').hasClass('icon-opened')) {
					self.find('.icon').switchClass('icon-opened', 'icon-closed');
				} else {
					self.find('.icon').switchClass('icon-closed', 'icon-opened');
				}

				return false;
			}).next().hide();
		},

		validate: function() {
			this.$el.validate({
				rules: {
					'f-name': {
						required: true
					},

					'f-number': {
						required: true
					},
					// 'f-startDate': {
					// 	dateCustom: true
					// },

					// 'f-endDate': {
					// 	dateCustom: true
					// },
					'f-discountAmount': {
						dollars: true,
						min: 1
					},

					'f-discountStartDate': {
						dateCustom: true
					},

					'f-discountEndDate': {
						dateCustom: true
					},

					'f-myPrice': {
						dollars: true,
						required: false
					},

					'f-holidayPrice': {
						dollars: true
					},

         			'f-meta-title': 'noCarets',
         			'f-meta-keywords': 'noCarets',
         			'f-meta-desc': 'noCarets'
          		}
			});
			jQuery.validator.addClassRules({
				'f-name': {
					required: true
				},

				'f-number': {
					required: true
				},

				'f-discountAmount': {
					dollars: true,
					min: 1
				},

				'f-discountStartDate': {
					dateCustom: true
				},

				'f-discountEndDate': {
					dateCustom: true
				},

				'f-myPrice': {
					dollars: true,
					required: false
				},
				'f-myPrice-teleflora': {
					dollars: true,
					required: false
				},

				'f-holidayPrice': {
					dollars: true
				}							
			});
		}
	});

	return new CreateEditProductView;
});
