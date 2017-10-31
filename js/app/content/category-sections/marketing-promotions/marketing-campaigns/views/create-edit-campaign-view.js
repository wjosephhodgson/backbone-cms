define([
	'backbone',
	'../templates/create-edit-campaign-tpl',
	'../models/marketing-campaigns-model',
	'../collections/marketing-campaigns-collection',
	'components/featured-product/views/featured-product-view',
	'./featured-sub-view',
	'components/featured-product/collections/featured-product-collection',
	'../collections/featured-sub-collection',
	'global-events',
	'settings',
	'components/general-product/views/general-product-view',
	'components/featured-occasions/collections/all-occasions-collection',
	'content/category-sections/merchandising/manage-collections/collections/collection-collection',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	CreateEditCampaignTpl,
	CampaignModel,
	CampaignCollection,
	FeaturedProductView,
	FeaturedSubView,
	FeaturedProductCollection,
	FeaturedSubCollection,
	GlobalEvents,
	Settings,
	GeneralProductView,
	AllOccasionsCollection,
	CollectionCollection
) {
	var CreateEditCampaignView = Backbone.View.extend({
		tagName: 'form',
		id: 'm-marketing-campaign',
		template: CreateEditCampaignTpl,

		render: function(options) {
			var self = this;
			var modelId = options.id;

			CampaignCollection.fetchCustom().done(function() {
				// get model from id (id is from route). no id = creation
				self.model = modelId
					? CampaignCollection.get(modelId)
					: new CampaignModel();

				// model to use by template
				viewModel = self.model.toJSON();

				// set up view
				self.$el.html(self.template(viewModel));
				self.cacheElem();
				self.delegateEvents();
				self.applyTabs();
				self.applyDates();
				self.showTables();
				self.validate();
				self.applyToolTips();

			}.bind(this));

			return self;
		},

		showTables: function() {
			var self = this;
			// START OF "LINK TO" TABLES
			// A unique table for each drop down value
			
			AllOccasionsCollection.fetchCustom().done(function() {
		        homeCatsCollection   = AllOccasionsCollection.deepClone();
		        catCatsCollection    = AllOccasionsCollection.deepClone();
		        gridCatsCollection   = AllOccasionsCollection.deepClone();
		        prodCatsCollection   = AllOccasionsCollection.deepClone();
		        catAppear1Collection = AllOccasionsCollection.deepClone();
		        catAppear2Collection = AllOccasionsCollection.deepClone();

		        homeCatsCollection.set(
		          self.model.get('homeCatFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

		        self.homeCatView = new GeneralProductView({
					activeTitle:'Link-To Location',
					activeTableTitle:'Selected Category',
					allTitle:'All Categories',
					allSearchPlaceholder: 'Category Search Terms',
					activeAttribute:'active',
					nameAttribute:'occasion',
					async: false,
					hoverTitle: true,
					maxNumberProducts: 2,
					sequence: true,
					showCategoryID: true,
					collection: homeCatsCollection,
					hideGrids: true
				});
				self.$homepageCategory.append(self.homeCatView.render().el);

		        catCatsCollection.set(
		          self.model.get('catSidebarFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );				

				self.sidebarCatView = new GeneralProductView({
					activeTitle:'Link-To Location',
					activeTableTitle:'Selected Category',
					allTitle:'All Categories',
					allSearchPlaceholder: 'Category Search Terms',
					activeAttribute:'active',
					nameAttribute:'occasion',
					async: false,
					hoverTitle: true,
					maxNumberProducts: 1,
					showCategoryID: true,
					collection: catCatsCollection,
					hideGrids: true
				});

				self.$sidebarCategory.append(self.sidebarCatView.render().el);


		        gridCatsCollection.set(
		          self.model.get('gridFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$gridcategory.html(
					new GeneralProductView({
					activeTitle:'Link-To Location',
					activeTableTitle:'Selected Category',
					allTitle:'All Categories',
					allSearchPlaceholder: 'Category Search Terms',
					activeAttribute:'active',
					nameAttribute:'occasion',
					async: false,
					hoverTitle: true,
					maxNumberProducts: 1,
					showCategoryID: true,
					collection: gridCatsCollection,
					hideGrids: true
				}).render().el);	
		    
		        prodCatsCollection.set(
		          self.model.get('prodFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$productTabCategory.html(
					new GeneralProductView({
					activeTitle:'Link-To Location',
					activeTableTitle:'Selected Category',
					allTitle:'All Categories',
					allSearchPlaceholder: 'Category Search Terms',
					activeAttribute:'active',
					nameAttribute:'occasion',
					async: false,
					hoverTitle: true,
					maxNumberProducts: 1,
					showCategoryID: true,
					collection: prodCatsCollection,
					hideGrids: true
				}).render().el);	

		        catAppear1Collection.set(
		          self.model.get('catAppear1').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

		        self.sidebarAppearView = new GeneralProductView({
					activeTitle:'Categories In Which This Appears',
					activeTableTitle:'Selected Categories',
					allTitle:'All Categories',
					allSearchPlaceholder: 'Category Search Terms',
					activeAttribute:'active',
					nameAttribute:'occasion',
					async: false,
					hoverTitle: true,
					maxNumberProducts: 20,
					showCategoryID: true,
					collection: catAppear1Collection,
					hideGrids: true
				});
				self.$sidebarAppear.append(self.sidebarAppearView.render().el);	

		        catAppear2Collection.set(
		          self.model.get('catAppear2').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$grid1TableContainer.html(
					new GeneralProductView({
					activeTitle:'Categories In Which This Appears',
					activeTableTitle:'Selected Categories',
					allTitle:'All Categories',
					allSearchPlaceholder: 'Category Search Terms',
					activeAttribute:'active',
					nameAttribute:'occasion',
					async: false,
					hoverTitle: true,
					maxNumberProducts: 100,
					showCategoryID: true,
					collection: catAppear2Collection,
					hideGrids: true
				}).render().el);	

		    }.bind(self));

			CollectionCollection.fetchCustom().done(function() {
		        homeCollectionCollection = CollectionCollection.deepClone();
		        catCollectionCollection  = CollectionCollection.deepClone();
		        gridCollectionCollection = CollectionCollection.deepClone();
		        prodCollectionCollection = CollectionCollection.deepClone();

		        homeCollectionCollection.set(
		          self.model.get('homeFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$homepageCollections.html(
					new GeneralProductView({
						activeTitle:'Link-To Location',
						activeTableTitle:'Selected Collection',
						allTitle:'All Collections',
						allSearchPlaceholder: 'Collection Search Terms',
						activeAttribute:'featured',
						nameAttribute:'name',
						async: false,
						hoverTitle: true,
						maxNumberProducts: 1,
						selectAll: true,
						collection: homeCollectionCollection,
						hideGrids: true
					})
				.render().el);

		        catCollectionCollection.set(
		          self.model.get('catFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$sidebarCollections.html(
					new GeneralProductView({
						activeTitle:'Link-To Location',
						activeTableTitle:'Selected Collection',
						allTitle:'All Collections',
						allSearchPlaceholder: 'Collection Search Terms',
						activeAttribute:'featured',
						nameAttribute:'name',
						async: false,
						hoverTitle: true,
						maxNumberProducts: 1,
						selectAll: true,
						collection: catCollectionCollection,
						hideGrids: true
					})
				.render().el);

		        gridCollectionCollection.set(
		          self.model.get('gridFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$gridcollections.html(
					new GeneralProductView({
						activeTitle:'Link-To Location',
						activeTableTitle:'Selected Collection',
						allTitle:'All Collections',
						allSearchPlaceholder: 'Collection Search Terms',
						activeAttribute:'featured',
						nameAttribute:'name',
						async: false,
						hoverTitle: true,
						maxNumberProducts: 1,
						selectAll: true,
						collection: gridCollectionCollection,
						hideGrids: true
					})
				.render().el);

		        prodCollectionCollection.set(
		          self.model.get('prodFeature').map(function(id) {
		            return {
		              id: id,
		              active: true
		            }
		          }),
		          { merge: true, remove: false }
		        );

				self.$productTabCollections.html(
					new GeneralProductView({
						activeTitle:'Link-To Location',
						activeTableTitle:'Selected Collection',
						allTitle:'All Collections',
						allSearchPlaceholder: 'Collection Search Terms',
						activeAttribute:'featured',
						nameAttribute:'name',
						async: false,
						hoverTitle: true,
						maxNumberProducts: 1,
						selectAll: true,
						collection: prodCollectionCollection,
						hideGrids: true
					})
				.render().el);								
		    }.bind(self));



			self.homeProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(self.model.get('homeFeature')),
				maxNumberProducts: 1,
				selectAll: true
			});
			self.$homepageProductPage.append(self.homeProductView.render().el);

			self.catProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(self.model.get('catFeature')),
				maxNumberProducts: 1,
				selectAll: true
			});
			self.$sidebarProductPage.append(self.catProductView.render().el);

			self.gridProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(self.model.get('gridFeature')),
				maxNumberProducts: 1,
				selectAll: true
			});
			self.$gridproductPage.append(self.gridProductView.render().el);

			self.prodProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(self.model.get('prodFeature')),
				maxNumberProducts: 1,
				selectAll: true
			});
			self.$productTabProductPage.append(self.prodProductView.render().el);

			self.prodAppearsProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(self.model.get('prodAppear')),
				maxNumberProducts: 100,
				selectAll: true
			});
			self.$productTableContainer.append(self.prodAppearsProductView.render().el);			

		},

		cacheElem: function() {
		// 	// normal human being form fields
			this.$name = this.$el.find('#f-name');
			this.$active = this.$el.find('#f-active');
			this.$type1 = this.$el.find('#f-type1');
			this.$type2 = this.$el.find('#f-type2');
			this.$type3 = this.$el.find('#f-type3');
			this.$type4 = this.$el.find('#f-type4');
			this.$startDate = this.$el.find('#f-startDate');
			this.$endDate = this.$el.find('#f-endDate');
			this.$setEndDate = this.$el.find('#f-setEndDate');
			this.$priority = this.$el.find('#f-priority');
			// images
			this.$homepageImage = this.$el.find('#homepage-image');
			this.$mobileHomepageImage = this.$el.find('#mobile-homepage-image');
			this.$sidebarImage = this.$el.find('#sidebar-image');
			this.$gridImage = this.$el.find('#grid-image');
			this.$mobileGridImage = this.$el.find('#mobile-grid-image');
			this.$productImage = this.$el.find('#product-image');

			// Alt Text
			this.$homeAltText = this.$el.find('#f-homeAltText');
			this.$mobileHomeAltText = this.$el.find('#f-mobileHomeAltText');
			this.$sidebarAltText = this.$el.find('#f-sidebarAltText');
			this.$gridAltText = this.$el.find('#f-gridAltText');
			this.$mobileGridAltText = this.$el.find('#f-mobileGridAltText');
			this.$productAltText = this.$el.find('#f-productAltText');

			this.$landingPageLink = this.$el.find('#f-landingPageLink');
			this.$catPageLink = this.$el.find('#f-catPageLink');
			this.$gridPageLink = this.$el.find('#f-gridPageLink');
			this.$productPageLink = this.$el.find('#f-productPageLink');
			this.$linkActive = this.$el.find('#f-link-active');
			this.$catLinkActive = this.$el.find('#f-cat-link-active'); 
			this.$gridLinkActive = this.$el.find('#f-grid-link-active');
			this.$productLinkActive = this.$el.find('#f-product-link-active');


		// 	// General Product View Containers
			this.$homepageCategory = this.$el.find('#homepage-category');
			this.$homepageCollections = this.$el.find('#homepage-collections');
			this.$homepageProductPage = this.$el.find('#homepage-productpage');
			this.$homepageLinkLanding = this.$el.find('#homepage-linklanding');

			this.$sidebarAppear = this.$el.find('#sidebar-appear-container')

			this.$sidebarCategory = this.$el.find('#sidebar-category');
			this.$sidebarCollections = this.$el.find('#sidebar-collections');
			this.$sidebarProductPage = this.$el.find('#sidebar-productpage');
			this.$sidebarLinkLanding = this.$el.find('#sidebar-linklanding');


			this.$grid1TableContainer = this.$el.find('#grid1-table-container');
			this.$grid2TableContainer = this.$el.find('#grid2-table-container');
			this.$gridcategory = this.$el.find('#grid-category');
			this.$gridcollections = this.$el.find('#grid-collections');
			this.$gridproductPage = this.$el.find('#grid-productpage');
			this.$gridlinkLanding = this.$el.find('#grid-linklanding');

			this.$productTabCategory = this.$el.find('#product-tab-category');
			this.$productTabCollections = this.$el.find('#product-tab-collections');
			this.$productTabProductPage = this.$el.find('#product-tab-productpage');
			this.$productTabLinkLanding = this.$el.find('#product-tab-linklanding');



			this.$categoriesContainer = this.$el.find('#categories-container');
			this.$homepagetabContainer = this.$el.find('#homepage-container');
			this.$sidebarContainer = this.$el.find('#sidebar-container');
			this.$sidebarLinksToContainer = this.$el.find('#sidebar-linksto-container');
			this.$productTableContainer = this.$el.find('#product-table-container');

			// featured product
			this.$productContainer = this.$el.find('#product-or-subcategory');
			

			// Select Link Values
			this.$homeOne = this.$el.find('#homeone');
			this.$homeTwo = this.$el.find('#hometwo');
			this.$homeThree = this.$el.find('#homethree');
			this.$homeFour = this.$el.find('#homefour');
			this.$homeZero = this.$el.find('#homezero');
			this.$sideOne = this.$el.find('#sideone');
			this.$sideTwo = this.$el.find('#sidetwo');
			this.$sideThree = this.$el.find('#sidethree');
			this.$sideFour = this.$el.find('#sidefour');
			this.$sideZero = this.$el.find('#sidezero');
			this.$gridOne = this.$el.find('#gridone');
			this.$gridTwo = this.$el.find('#gridtwo');
			this.$gridThree = this.$el.find('#gridthree');
			this.$gridFour = this.$el.find('#gridfour');
			this.$gridZero = this.$el.find('#gridzero');
			this.$productOne = this.$el.find('#productone');
			this.$productTwo = this.$el.find('#producttwo');
			this.$productThree = this.$el.find('#productthree');
			this.$productFour = this.$el.find('#productfour');
			this.$productZero = this.$el.find('#productzero');

			// Banner Links To Containers
			this.$homeCategory = this.$el.find('#homeBanner-Category');
			this.$homeCollections = this.$el.find('#homeBanner-Collections');
			this.$homeProduct = this.$el.find('#homeBanner-Product');
			this.$homeLinkLanding = this.$el.find('#homeBanner-LinkLanding');
			this.$sideCategory = this.$el.find('#side-Category');
			this.$sideCollections = this.$el.find('#side-Collections');
			this.$sideProduct = this.$el.find('#side-Product');
			this.$sideLinkLanding = this.$el.find('#side-LinkLanding');
			this.$gridCategory = this.$el.find('#grid-Category');
			this.$gridCollections = this.$el.find('#grid-Collections');
			this.$gridProduct = this.$el.find('#grid-Product');
			this.$gridLinkLanding = this.$el.find('#grid-LinkLanding');
			this.$productCategory = this.$el.find('#product-Category');
			this.$productCollections = this.$el.find('#product-Collections');
			this.$productProduct = this.$el.find('#product-Product');
			this.$productLinkLanding = this.$el.find('#product-LinkLanding');

			this.$tip = this.$el.find('.tooltip-change');
			// this.$producttabImage = this.$el.find('#producttab-imgAlt');
		},

		events: {
			'click #cancel-btn': 'handleCancel',
			'click #save-btn': 'handleSave',
			'click #delete-btn': 'handleDelete',
			'click .image-upload': 'handleTileImageUpload',
			'click .preview-btn': 'handleMerchChange',
			'change #f-type1': 'handleType1Change',
			'change #f-type2': 'handleType2Change',
			'change #f-type3': 'handleType3Change',
			'change #f-type4': 'handleType4Change',
			'change #f-setEndDate': 'handleToggle'
		},
		
	    handleTileImageUpload: function(e) {
			var self = this;
			var target = e.currentTarget.id;

			switch(target) {

				case 'homepage-image-button':
					GlobalEvents.trigger('form:image-upload', {
						cb: function(url) {
							self.$homepageImage.prop('src', url);	         
						},
							active: self.$homepageImage.prop('src'),
							name: 'Wedding Galleries'
					});
				break;


				case 'mobile-homepage-image-button':
					GlobalEvents.trigger('form:image-upload', {
						cb: function(url) {
							self.$mobileHomepageImage.prop('src', url);	         
						},
							active: self.$mobileHomepageImage.prop('src'),
							name: 'Wedding Galleries'
					});
				break;

				case 'sidebar-image-button':
					GlobalEvents.trigger('form:image-upload', {
						cb: function(url) {
							self.$sidebarImage.prop('src', url);	         
						},
							active: self.$sidebarImage.prop('src'),
							name: 'Wedding Galleries'
					});
				break;

				case 'grid-image-button':
					GlobalEvents.trigger('form:image-upload', {
						cb: function(url) {
							self.$gridImage.prop('src', url);
						},
							active: self.$gridImage.prop('src'),
							name: 'Wedding Galleries'
					});
				break;

				case 'mobile-grid-image-button':
					GlobalEvents.trigger('form:image-upload', {
						cb: function(url) {
							self.$mobileGridImage.prop('src', url);
						},
							active: self.$mobileGridImage.prop('src'),
							name: 'Wedding Galleries'
					});
				break;

				case 'product-image-button':
					GlobalEvents.trigger('form:image-upload', {
						cb: function(url) {
							self.$productImage.prop('src', url);
						},
							active: self.$productImage.prop('src'),
							name: 'Wedding Galleries'
					});
				break;


				default:
				console.log("the default");
			}
	    },

		// Handle change of section in HomePage tab
	    handleType1Change: function() {
			var self = this;
			self.$homeCategory.css({"display":"none"});
			self.$homeCollections.css({"display":"none"});
			self.$homeProduct.css({"display":"none"});
			self.$homeLinkLanding.css({"display":"none"});			

			if(self.$homeOne.is('option:selected')) {
				self.$homeCategory.css({"display":"block"});
			} else if (self.$homeTwo.is('option:selected')) {
				self.$homeCollections.css({"display":"block"});
			} else if (self.$homeThree.is('option:selected')){
				self.$homeProduct.css({"display":"block"});
			} else if (self.$homeFour.is('option:selected')) {
				self.$homeLinkLanding.css({"display":"block"});
			} 

		},

		// Handle change of section in Sidebar tab
		handleType2Change: function() {
			var self = this;
			self.$sideCategory.css({"display":"none"});
			self.$sideCollections.css({"display":"none"});
			self.$sideProduct.css({"display":"none"});
			self.$sideLinkLanding.css({"display":"none"});			

				if(self.$sideOne.is('option:selected')) {
					self.$sideCategory.css({"display":"block"});
				} else if (self.$sideTwo.is('option:selected')) {
					self.$sideCollections.css({"display":"block"});
				} else if (self.$sideThree.is('option:selected')){
					self.$sideProduct.css({"display":"block"});
				} else if (self.$sideFour.is('option:selected')) {
					self.$sideLinkLanding.css({"display":"block"});
				}

		},

		// Handle change of section in grid tab
		handleType3Change: function() {
			var self = this;
			self.$gridCategory.css({"display":"none"});
			self.$gridCollections.css({"display":"none"});
			self.$gridProduct.css({"display":"none"});
			self.$gridLinkLanding.css({"display":"none"});			

				if(self.$gridOne.is('option:selected')) {
					self.$gridCategory.css({"display":"block"});
				} else if (self.$gridTwo.is('option:selected')) {
					self.$gridCollections.css({"display":"block"});
				} else if (self.$gridThree.is('option:selected')){
					self.$gridProduct.css({"display":"block"});
				} else if (self.$gridFour.is('option:selected')) {
					self.$gridLinkLanding.css({"display":"block"});
				}

		},

		// Handle change of section in Product tab
		handleType4Change: function() {

			var self = this;
			self.$productCategory.css({"display":"none"});
			self.$productCollections.css({"display":"none"});
			self.$productProduct.css({"display":"none"});
			self.$productLinkLanding.css({"display":"none"});			

				if(self.$productOne.is('option:selected')) {
					self.$productCategory.css({"display":"block"});
				} else if (self.$productTwo.is('option:selected')) {
					self.$productCollections.css({"display":"block"});
				} else if (self.$productThree.is('option:selected')){
					self.$productProduct.css({"display":"block"});
				} else if (self.$productFour.is('option:selected')) {
					self.$productLinkLanding.css({"display":"block"});
				}

		},
		
		handleMerchChange: function(event) {
            var self = this,
            cbox = this.$merch;
            event.preventDefault();

            console.log(event);

            GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Page Preview',
                    text: 'The preview page should be rendered here in this modal.'
                },
                confirmFn: function(){
                    cbox.prop("checked", !cbox.prop("checked"));
                },
                cancelFn: function(){
                    // do nothing, they clicked cancel
                }               
                
            });
        },

        handleToggle: function(e) {
			var self = this;

			GlobalEvents.trigger('form:editing');

			// If setting default info to active
			if(self.$setEndDate.is(':checked')) {
				// Prevent animation first
				// self.$setEndDate.prop('checked', false);

				// Trigger form reset modal, if confirmed continue with checking and
				// update all fields to default value
				GlobalEvents.trigger('form:reset', function() {
					self.$setEndDate.prop('checked', true);

					self.$startDate.prop('disabled', false).val(self.model.get('startDate'));
					self.$endDate.prop('disabled', false).val(self.model.get('endDate'));

				});

			// If setting default to inactive enable editing
			} else {
				this.$startDate.prop('disabled', true);
				this.$endDate.prop('disabled', true);
			}
		},

		handleDelete: function() {
			var self = this;
			GlobalEvents.trigger('form:delete', function() {
				CampaignCollection.remove(self.model);
				this.parent.showHome();
				}.bind(this));

		
		},

		handleCancel: function(e) {
			GlobalEvents.trigger(
				'form:cancel:url',
				Settings.marketingCampaignBaseUrl
			);
		},

		// // a lot more logic to be added
		handleSave: function() {

			var self = this;
			if(this.$el.valid()){
		// 		// right now, only type gets selected
		
				this.model.set({
					name: this.$name.val().trim(),
					active: this.$active.is(':checked'),
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					setEndDate: this.$setEndDate.is(':checked'),
					priority: this.$priority.val().trim(),
					landingPageLink: this.$landingPageLink.val().trim(),
					catPageLink: this.$catPageLink.val().trim(),
					gridPageLink: this.$gridPageLink.val().trim(),
					productPageLink: this.$productPageLink.val().trim(),
					linkActive: this.$linkActive.is(':checked'),


					// tab link active
					homeLinkActive: this.$linkActive.is(':checked'),
					catLinkActive: this.$catLinkActive.is(':checked'),
					gridLinkActive: this.$gridLinkActive.is(':checked'),
					productLinkActive: this.$productLinkActive.is(':checked'),

					// Alt Text
					// homeAltText: this.$homeAltText.val().trim(),
					// mobileHomeAltText: this.$mobileHomeAltText.val().trim(),
					// sidebarAltText: this.$sidebarAltText.val().trim(),
					// gridAltText: this.$gridAltText.val().trim(),
					// mobileGridAltText: this.$mobileGridAltText.val().trim(),
					// productAltText: this.$productAltText.val().trim(),

					// homepageContainer: AllOccasionsCollection.toJSON(),
					// Images

					homepageImage: this.$homepageImage.attr('src'),
					mobileHomepageImage: this.$mobileHomepageImage.attr('src'),
					sidebarImage: this.$sidebarImage.attr('src'),
					gridImage: this.$gridImage.attr('src'),
					mobileGridImage: this.$mobileGridImage.attr('src'),
					productImage: this.$productImage.attr('src'),

					homeFeature: self.homeProductView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),							
					homeCatFeature: self.homeCatView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),					
					catFeature: self.catProductView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),
					gridFeature: self.gridProductView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),																
					prodFeature: self.prodProductView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),		
					prodAppear: self.prodAppearsProductView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),		
					catAppear1: self.sidebarAppearView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),		
					catSidebarFeature: self.sidebarCatView.collection
						.where({active:true})
						.map(function(m) {
							return m.get('id');
						}),		

					// sidebarContainer: this.collection.toJSON(),
					type1: this.$type1.find('option:selected').val(),
					type2: this.$type2.find('option:selected').val()
				});
	
				if (!CampaignCollection.get(this.model)) {
		          this.model.set('id', Date.now()); // fake value
		          CampaignCollection.add(this.model);
		        }
		        
				GlobalEvents.trigger('form:save', this.$tip);
				GlobalEvents.trigger('form:cancel:url', Settings.marketingCampaignBaseUrl);
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
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

		    dateFormat: 'mm/dd/y'
			});

			self.$endDate.datepicker({
		    onSelect: function(selected) {
		        self.$startDate.datepicker('option', 'maxDate', selected);
		        self.$endDate.trigger('blur');
		    },

		    dateFormat: 'mm/dd/y'
			});

		},

		applyTabs: function() {
			this.$el.find('#tabs').tabs();
		},

		validate: function() {
			this.$el.validate({
				rules: {
					'f-name': {
						required: true
					},

					'f-startDate': {
						dateCustom: true,
						required: true
					},

					'f-endDate': {
						dateCustom: true,
						required: true
					},

					'f-priority': {						
						required: true
					}
          		}
			});
			// jQuery.validator.addClassRules({
			// 	'f-name': {
			// 		required: true
			// 	},

			// 	'f-number': {
			// 		required: true
			// 	},

			// 	'f-discountAmount': {
			// 		dollars: true,
			// 		min: 1
			// 	},

			// 	'f-discountStartDate': {
			// 		dateCustom: true
			// 	},

			// 	'f-discountEndDate': {
			// 		dateCustom: true
			// 	},

			// 	'f-myPrice': {
			// 		dollars: true,
			// 		required: true,
			// 		min: 1
			// 	},

			// 	'f-holidayPrice': {
			// 		dollars: true,
			// 		min: 0
			// 	}							
			// });
		}
	});

	return new CreateEditCampaignView;
});
