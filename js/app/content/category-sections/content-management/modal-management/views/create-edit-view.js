define([
	'backbone',
	'../templates/create-edit-view-tpl',
	'../models/modal-model',
	'../collections/modal-collection',
	'components/featured-occasions/collections/all-occasions-collection',
	'components/featured-product/collections/featured-product-collection',
	'components/featured-product/views/featured-product-view',
	'components/general-product/views/general-product-view',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	CreateEditTpl,
	ModalModel,
	ModalCollection,
	AllOccasionsCollection,
	FeaturedProductCollection,
	FeaturedProductView,
	GeneralProductView,
	GlobalEvents,
	tinymce
) {
	var CreateEditView = Backbone.View.extend({
		tagName:'form',

		id: 'm-create-edit',

		template: CreateEditTpl,

		initialize: function() {

		},

		render: function() {

			var self = this;
			
			ModalCollection.fetchCustom().done(function() {
				self.$el.html(self.template(self.model.toJSON()));
				self.delegateEvents();
				self.cacheElem();

				// Featured Product View
				self.homeProductView = new FeaturedProductView({
					collection: new FeaturedProductCollection(self.model.get('product')),
					title: "Selected Products",
					selectAll: true,
					maxNumberProducts: 3
				});
				self.$productTable.append(self.homeProductView.render().el);
				// Featured Product View

				// General Product View
				AllOccasionsCollection.fetchCustom().done(function() {

					self.categoryCollection = AllOccasionsCollection.deepClone();     
					// Category Table
					self.categoryCollection.set(
						self.model.get('category').map(function(id) {
							return {
								id: id,
								active: true
							}
						}),
						{ merge: true, remove: false }
					);
					self.catSelect = new GeneralProductView({
						activeTitle:'Selected Categories',
						activeTableTitle:'Selected Category',
						allTitle:'All Categories',
						allSearchPlaceholder: 'Category Search Terms',
						activeAttribute:'active',
						nameAttribute:'occasion',
						selectAll: false,
						nosearch: false,
						async: false,
						hoverTitle: true,
						collection: self.categoryCollection,
						hideGrids: true,
						showCategoryID: true
					});
					self.$categoryTable.html(self.catSelect.render().el);
				 
				}.bind(this)); 
				// General Product View 

				self.applyDates();
				

				if(self.model.get('type') === "Teleflora") {
					self.applyTinymceTeleflora();
				}
				else {
					self.applyTinymce();
				}

				self.applyToolTips();
				self.modalSizeContainer();
				self.handleDropDownChange();
				self.validateForm();

			}.bind(this));

			return self;
		},

		events: {
			'click #save-btn': 'handleSave',
			'click #cancel-btn': 'handleCancel',
			'click #delete-btn': 'handleDelete',
			'change #f-size': 'modalSizeContainer',
			'change #f-modalShowsOn': 'handleDropDownChange'
		},

		cacheElem: function() {
			this.$modalName = this.$el.find('#f-modal-name');
			this.$startDate = this.$el.find('#f-startDate');
			this.$endDate = this.$el.find('#f-endDate');
			this.$modalContent = this.$el.find('#f-modalContent');
			this.$specificUrl = this.$el.find('#f-specificUrl');
			this.$status = this.$el.find('#f-status');

			this.$modalSize = this.$el.find('#f-size');
			this.$customSizeContainer = this.$el.find('#customSizeContainer')
			this.$modalWidth = this.$el.find('#f-modalWidth');
			this.$modalHeight = this.$el.find('#f-modalHeight');
			this.$modalShowsOn = this.$el.find('#f-modalShowsOn');

			// Modal Tables
			this.$homepageTable = this.$el.find('#f-homepage-table');
			this.$categoryTable = this.$el.find('#f-category-table');
			this.$productTable = this.$el.find('#f-product-table');
			this.$basketTable = this.$el.find('#f-basket-table');
			this.$checkoutDeliveryTable = this.$el.find('#f-checkout-delivery-table');
			this.$checkoutBillingTable = this.$el.find('#f-checkout-billing-table');
			this.$orderConfirmationTable = this.$el.find('#f-order-confirmation-table');
			this.$specificURLTable = this.$el.find('#f-specific-url-table');

			// id from select drop down
			this.$homePage = this.$el.find('#homePage');
			this.$categoryPage = this.$el.find('#categoryPage');
			this.$productPage = this.$el.find('#productPage');
			this.$basketPage = this.$el.find('#basketPage');
			this.$checkoutDeliveryPage = this.$el.find('#checkoutDeliveryPage');
			this.$checkoutBillingPage = this.$el.find('#checkoutBillingPage');
			this.$orderConfirmationPage = this.$el.find('#orderConfirmationPage');
			this.$specificPageURL = this.$el.find('#specificPageURL');

			// table view containers for drop down
			this.$homepageBanner = this.$el.find('#homepage-banner');
			this.$categoryBanner = this.$el.find('#category-banner');
			this.$productBanner = this.$el.find('#product-banner');
			this.$basketBanner = this.$el.find('#basket-banner');
			this.$checkoutDeliveryBanner = this.$el.find('#checkout-delivery-banner');
			this.$checkoutBillingBanner = this.$el.find('#checkout-billing-banner');
			this.$orderConfirmationBanner = this.$el.find('#order-confirmation-banner');
			this.$specificURLBanner = this.$el.find('#specific-url-banner');

			this.$tip = this.$el.find('.tooltip-change');
			this.$minCatError = this.$el.find('#min-cat-error');
			this.$minProdError = this.$el.find('#min-prod-error');
		},

		// Handle change of section in HomePage tab
		handleDropDownChange: function() {
			var self = this;

			self.$homepageBanner.css({"display":"none"});
			self.$categoryBanner.css({"display":"none"});
			self.$productBanner.css({"display":"none"});
			self.$basketBanner.css({"display":"none"});
			self.$checkoutDeliveryBanner.css({"display":"none"});  
			self.$checkoutBillingBanner.css({"display":"none"});  
			self.$orderConfirmationBanner.css({"display":"none"}); 
			self.$specificURLBanner.css({"display":"none"});  

			if(self.$homePage.is('option:selected')) {
				self.$homepageBanner.css({"display":"block"});
			} else if (self.$categoryPage.is('option:selected')) {
				self.$categoryBanner.css({"display":"block"});
			} else if (self.$productPage.is('option:selected')){
				self.$productBanner.css({"display":"block"});
			} else if (self.$basketPage.is('option:selected')) {
				self.$basketBanner.css({"display":"block"});
			} else if (self.$checkoutDeliveryPage.is('option:selected')) {
				self.$checkoutDeliveryBanner.css({"display":"block"});
			} else if (self.$checkoutBillingPage.is('option:selected')) {
				self.$checkoutBillingBanner.css({"display":"block"});
			} else if (self.$orderConfirmationPage.is('option:selected')) {
				self.$orderConfirmationBanner.css({"display":"block"});
			} else if (self.$specificPageURL.is('option:selected')) {
				self.$specificURLBanner.css({"display":"block"});
			} 

		},

		modalSizeContainer: function() {
			var self = this;

			if(self.$modalSize.find('option:selected').val() === "Custom") {
				self.$customSizeContainer.css({"display":"block"});
			} else {
				self.$customSizeContainer.css({"display":"none"});
			}
		},

		handleDelete: function() {
			var self = this;

			GlobalEvents.trigger('form:delete', function() {
				ModalCollection.remove(self.model);
				self.parent.showparenthome();
			});

		},

		validateForm: function() {
			var 
				self = this,
				mSize;

			this.$el.validate({
				rules: {
					'f-modal-name': "required",
					'f-modalContent': "required",
					'f-size': "required",
					'f-startDate': "required",
					'f-endDate': "required",
					'f-modalShowsOn': "required",
					'f-modalWidth': {
						required: function (element) {
							mSize = self.$modalSize.find('option:selected').val();
							return mSize == 'Custom';
						},
						digits: true
					},
					'f-specificUrl': {
						url3: true
					},
					'f-modalHeight': {
						required: function (element) {
							mSize = self.$modalSize.find('option:selected').val();
							return mSize == 'Custom';
						},
						digits: true
					}
				}
			});
		},

	    showMinCatError: function() {
	      var self = this;
	      GlobalEvents.trigger('form:invalid', this.$tip);
	      this.$minCatError.fadeIn(200);
	      setTimeout(function(){
	        self.$minCatError.fadeOut(200);
	      }, 15000);

	    },

	    showMinProdError: function() {
	      var self = this;
	      GlobalEvents.trigger('form:invalid', this.$tip);
	      this.$minProdError.fadeIn(200);
	      setTimeout(function(){
	        self.$minProdError.fadeOut(200);
	      }, 15000);

	    },

	    minCatSelected: function(min) {
	      // this function returns true if the minimum number of selected items in the feature view meets the option
	      var
	        self = this,
	        totalActive,
	        query = {};

	      query[self.catSelect.activeAttribute] = true;
	      totalActive = self.catSelect.collection.where(query).length;

	      if( totalActive >= min ){
	        return true;
	      } else {
	        return false;
	      }
	    },  

		minProdSelected: function(min) {
			// this function returns true if the minimum number of selected items in the feature view meets the option
			var
				self = this,
				totalActive = this.homeProductView.collection.where({featured:true}).length;
			if( totalActive >= min ){
				return true;
			} else {
				return false;
			}
		},	    

		handleSave: function() {
			var 
				self = this,
				modalPage = self.$modalShowsOn.find('option:selected').val();

			if( modalPage == 'CategoryPage' ){

				if( self.minCatSelected(1) ) {
					// do nothing, we are good
				} else {
					self.showMinCatError();
					return false;
				}
			} else if( modalPage == 'ProductPage' ){
				if( self.minProdSelected(1) ) {
					// do nothing, we are good
				} else {
					self.showMinProdError();
					return false;
				}
			}



			if (this.$el.valid()) {     
				this.model.set({
					name: this.$modalName.val().trim(),
					status: this.$status.is(':checked'),
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					size: this.$modalSize.find('option:selected').val(),
					modalWidth: this.$modalWidth.val().trim(),
					modalHeight: this.$modalHeight.val().trim(), 
					modalContent: tinymce.activeEditor.getContent(),
					modalShowsOn: this.$modalShowsOn.val(),
					specificUrl: this.$specificUrl.val().trim(),
					product: self.homeProductView.collection.toJSON(),
					category: self.categoryCollection.toJSON()
				})

				if (!ModalCollection.get(this.model)) {
					this.model.set('id', Date.now()); // fake value
					ModalCollection.add(this.model);
				}

				GlobalEvents.trigger('form:save', this.$tip);
				self.parent.showparenthome();
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}

		},

		handleCancel: function() {
			GlobalEvents.trigger('form:cancel', function() {
				this.parent.showparenthome();
			}.bind(this));
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
				onSelect: function(selected) {
					self.$endDate.datepicker('option', 'minDate', selected);
					self.$startDate.trigger('blur');
				},
				onClose: function(){
					$('#ui-datepicker-div');
				},
					dateFormat: 'mm/dd/yy'
			});

			self.$endDate.datepicker({     
				onSelect: function(selected) {
					self.$startDate.datepicker('option', 'maxDate', selected);
					self.$endDate.trigger('blur');
				},
				onClose: function(){
					$('#ui-datepicker-div')
				},
					dateFormat: 'mm/dd/yy'
			});
		},

		applyTinymce: function() {
			var self = this;
			setTimeout(function() {
				tinymce.remove();

				tinymce.init({
					setup: function(editor) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editor.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editor.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editor.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Custom HTML' 
								});               
							}
						});

						editor.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});
					},

					selector: 'textarea.tinymce',
					height: 200,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},



		applyTinymceTeleflora: function() {
			var self = this;
			setTimeout(function() {
				tinymce.remove();

				tinymce.init({
					setup: function(editor) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editor.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editor.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editor.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Custom HTML' 
								});               
							}
						});

						editor.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});
					},

					selector: 'textarea.tinymce',
					readonly : true,
					height: 200,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},


		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		}

	 

	});

	return new CreateEditView();
});