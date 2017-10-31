define([
	'backbone',
	'../templates/create-edit-collection-tpl',
	'components/featured-product/views/featured-product-view',
	'../collections/collection-collection',
	'../models/collection-model',
	'./sub-collection-view',
	'components/featured-product/collections/featured-product-collection',
	'content/shared/collections/blank-collection',
	'global-events',
	'jqueryval',
	'jqueryui'
], function(
	Backbone,
	CreateEditCollectionTpl,
	FeaturedProductView,
	CollectionCollection,
	CollectionModel,
	SubCollectionView,
	FeaturedProductCollection,
	BlankCollection,
	GlobalEvents
) {
	var CreateEditCollectionView = Backbone.View.extend({
		template: CreateEditCollectionTpl,

		tagName: 'div',

		id: 'm-create-edit-collection',

		render: function() {
			var self = this;

			self.$el.html(self.template(self.model.toJSON()));
			self.delegateEvents();

			self.cacheElem();

			self.featuredProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(self.model.get('featuredProducts')),
				title: self.model.get('parent') ? 'Selected Subcollection Products' : 'Selected Collection Products',
				selectAll: true
			});

			self.$productContainer.append(self.featuredProductView.render().$el);

			self.subCollections = [];

			// console.log(self.subCollections);

			if(self.model.get('parent') === 0) {
				self.model.get('children').forEach(function(id) {
					self.subCollections.push(CollectionCollection.get(id));
				});
			}

			this.addAllSubCollections();
			this.applyAccordion();
			this.applyToolTips();
			this.applyDates();
			this.validateForm();

			return this;
		},

		cacheElem: function() {
						
			this.$optional = this.$el.find('#optional');  // Optional SEO toggle
			
			this.$accordion = this.$el.find('#accordion');

			this.$productContainer = this.$el.find('#featured-products');
			this.$subCollectionList = this.$el.find('#sub-collection-list');
			this.$createEditForm = this.$el.find('#create-edit-form');

			this.$image1Preview = this.$el.find('#f-image-1-preview');
			this.$image2Preview = this.$el.find('#f-image-2-preview');
			this.$image3Preview = this.$el.find('#f-image-3-preview');
			this.$image4Preview = this.$el.find('#f-image-4-preview');
			this.$image5Preview = this.$el.find('#f-image-5-preview');

			// Form elements
			this.$name = this.$el.find('#f-name');
			this.$active = this.$el.find('#f-active');
			this.$sharingActive = this.$el.find("#f-sharing-active");
			this.$subHeaderActive = this.$el.find('#f-subHeader-active');
			this.$subTitle = this.$el.find('#f-sub-title');
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$promoDesc = this.$el.find('#f-promo-desc');
			this.$imageUrl1 = this.$el.find('#f-image-url-1');
			this.$imageUrl2 = this.$el.find('#f-image-url-2');
			this.$imageUrl3 = this.$el.find('#f-image-url-3');
			this.$imageUrl4 = this.$el.find('#f-image-url-4');
			this.$imageUrl5 = this.$el.find('#f-image-url-5');
			this.$metaDesc = this.$el.find('#f-meta-desc');
			this.$metaTags = this.$el.find('#f-meta-tags');
			this.$metaTitle = this.$el.find('#f-meta-title');
			this.$metaKeywords = this.$el.find('#f-meta-keywords');

			this.$img1 = this.$el.find('#f-image-1');
			this.$img2 = this.$el.find('#f-image-2');
			this.$img3 = this.$el.find('#f-image-3');
			this.$img4 = this.$el.find('#f-image-4');
			this.$img5 = this.$el.find('#f-image-5');

			this.$tip = this.$el.find('.tooltip-change');

			this.$hideSubCollectionArea = this.$el.find('#hide-SubCollectionArea');

			this.$minProdError = this.$el.find('#min-products-error');

		},

		events: {
			'click #cancel-btn': 'handleCancel',
			'click #save-btn': 'handleSave',
			'click #new-btn': 'handleAdd',
			'click #delete-btn': 'handleDelete',
			'click #f-image-url-1': 'handleFileUpload',
			'click #f-image-url-2': 'handleFileUpload',
			'click #f-image-url-3': 'handleFileUpload',
			'click #f-image-url-4': 'handleFileUpload',
			'click #f-image-url-5': 'handleFileUpload',
			'change #f-subHeader-active': 'handlesubHeaderCollectionActiveToggle'
		},

		requireImg: function(el) {
			var 
				self = this,
				imgel = el.find('img');
			console.log(imgel.attr('src'));
			if( imgel.attr('src') !== '' ){
				self.hideImgError(el);
			} else {
				self.showImgError(el);
			}
		},

		showMinError: function() {
			var self = this;
			GlobalEvents.trigger('form:invalid', this.$tip);
			this.$minProdError.fadeIn(200);
			setTimeout(function(){
				self.$minProdError.fadeOut(200);
			}, 10000);

		},

		minSelected: function(min) {
			// this function returns true if the minimum number of selected items in the feature view meets the option
			var
				self = this,
				totalActive = this.featuredProductView.collection.where({featured:true}).length;
			if( totalActive >= min ){
				return true;
			} else {
				return false;
			}
		},

		handleSave: function(model) {
			var self = this;

			if( this.model.get('collectionType') !== 'Teleflora' ){
				if( this.model.get('parent') !== 0 ) { 
					//subcollection
					self.requireImg(this.$img1);
					self.requireImg(this.$img2);
				} else {
					//parent collection
					self.requireImg(this.$img1);
					self.requireImg(this.$img2);
					self.requireImg(this.$img3);
					self.requireImg(this.$img4);
					self.requireImg(this.$img5);												
				}

				if( this.$el.find('.image-form-section.error').is('*') ){
					GlobalEvents.trigger('form:invalid', this.$tip);
					return false;
				}
			}

			if( self.minSelected(1) ) {
				// do nothing, we are good
			} else {
				self.showMinError();
				return false;
			}

			if(this.$createEditForm.valid()) {
				var parentChildren;

				this.model.set({
					name: this.$name.val().trim(),
					active: this.$active.is(':checked'),
					sharingActive: this.$sharingActive.is(':checked'),
					subHeaderActive: this.$subHeaderActive.is(':checked'),
					subTitle: this.$subTitle.val().trim(),
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					promoDesc: this.$promoDesc.val().trim(),

					// change this when actually implementing to send file

					imgUrl1: this.$image1Preview.attr('src'),
					imgUrl2: this.$image2Preview.attr('src'),
					imgUrl3: this.$image3Preview.attr('src'),
					imgUrl4: this.$image4Preview.attr('src'),
					featuredProducts: this.featuredProductView.collection.toJSON()
				});

				if (!CollectionCollection.get(this.model)) {
					this.model.set('id', new Date().getTime());
					CollectionCollection.add(this.model);

					if(this.model.get('parent')) {
						CollectionCollection.get(this.model.get('parent'))
							.get('children').push(this.model.get('id'));
					}
				}

				// Collection
				if (this.model.get('parent') === 0) {
					this.model.set({
						metaDesc: this.$metaDesc.val().trim(),
						metaTags: this.$metaTags.val().trim(),
						metaTitle: this.$metaTitle.val().trim(),
						metaKeywords: this.$metaKeywords.val().trim()
					});
				}

				GlobalEvents.trigger('form:save', this.$tip);
				this.showHome();
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		showImgError: function(el) {
			var	self = this;
			$(el).addClass('error');
			$(el).append('<label class="error">This image is required</label>');
		},

		hideImgError: function(el) {
			var	self = this;
			$(el).removeClass('error');
			$(el).find('label.error').remove();
		},

		handleDelete: function() {
			var self = this;

			GlobalEvents.trigger('form:delete', function() {
				CollectionCollection.remove(self.model);
				self.parent.showHome();
			});
		},

		handleCancel: function() {
			GlobalEvents.trigger(
				'form:cancel',
				this.parent.showHome.bind(this.parent)
			);
		},

				// toggle display of sku discount list
		handlesubHeaderCollectionActiveToggle: function(e) {
			var self = this;

			var togglevalue = this.$subHeaderActive.is(':checked');

			if(togglevalue  === true) {
				this.$hideSubCollectionArea.show();
			} else {
				this.$hideSubCollectionArea.hide();
			}
		},

		showHome: function() {
			this.parent.showHome();
		},

		addSubCollection: function(collection) {
			if (collection) {
				var newView = new SubCollectionView({
					model: collection,
					parent: this
				}),
					parent = collection.get('parent');
 
				this.$subCollectionList.append(newView.render().el);
			}
		},

		addAllSubCollections: function() {
			this.$subCollectionList.empty();

			this.subCollections.forEach(this.addSubCollection, this);
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		handleAdd: function() {
			var newModel = new CollectionModel();

			newModel.set('parent', this.model.get('id'));

			this.handleEdit(newModel);
		},

		handleFileUpload: function(e) {
			var
				self = this,
				id   = e.currentTarget.id,
				seq, image, name;

			if(id === self.$imageUrl1[0].id) {

				image = self.$image1Preview;
				seq = 1;

				if(!self.model.get('parent')) {
					name = 'Logo';
				}				

			} else if(id === self.$imageUrl2[0].id) {

				image = self.$image2Preview;
				seq = 2;

			} else if(id === self.$imageUrl3[0].id) {

				image = self.$image3Preview;
				seq = 3;

			}else if(id === self.$imageUrl4[0].id) {

				image = self.$image4Preview;
				seq = 4;

			}else if(id === self.$imageUrl5[0].id) {

				image = self.$image5Preview;
				seq = 5;

			} else {

			}
			name = 'Logo';
			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					image.prop('src', url);
					self.hideImgError(self.$el.find('#f-image-'+seq));
				},

				active: image.prop('src'),

				name: name
			});
		},

		applyAccordion: function() {
	       var self = this;

	          this.$optional.click(function() {

	         var thisElem = $(this);

	           self.$accordion.fadeToggle(200).toggleClass('active');

	        if(thisElem.hasClass('icon-opened')) {

	           thisElem.switchClass('icon-opened', 'icon-closed');

	        } else {

	           thisElem.switchClass('icon-closed', 'icon-opened');

	        }

	        return false;
	      }).closest('.row').next().hide();
	    },

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
			    onSelect: function(selected) {
			        self.$endDate.datepicker('option', 'minDate', selected)
			    },

			    dateFormat: 'mm/dd/y'
			});

			self.$endDate.datepicker({
			    onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected)
			    },

			    dateFormat: 'mm/dd/y'
			});
		},

		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					// 'f-name': 'required',
					'f-meta-title': 'noCarets',
					'f-start-date': 'dateCustom',
					'f-end-date': 'dateCustom',
					'f-meta-keywords': 'noCarets',
					'f-meta-desc': 'noCarets',
					'f-image-1-preview': {
						//required: true,
						accept: 'image/jpg, image/jpeg, image/png'
					},
					'f-image-2-preview': {
						//required: true,
						accept: 'image/*'
					},
					'f-image-3-preview': {
						//required: true,
						accept: 'image/*'
					},
					'f-image-4-preview': {
						//required: true,
						accept: 'image/*'
					},
					'f-image-5-preview': {
						//required: true,
						accept: 'image/*'
					}

				}
			});
		}
	});

	return new CreateEditCollectionView;
});