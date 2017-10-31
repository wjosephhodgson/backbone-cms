define([
	'backbone',
	'../templates/create-edit-merchandising-icons-tpl',
	'../collections/merchandising-Icons-home-collection',
	'components/featured-product/views/featured-product-view',
    'components/featured-product/collections/featured-product-collection',
	'global-events',
	'jquery',
	'jqueryval'
	],
	function(
		Backbone, 
		CreateEditMerchandisingTpl, 
		merchandisingIconsHomeCollection,
		FeaturedProductView,
        FeaturedProductCollection, 
		GlobalEvents)
	{
		var CreateEditMerchandisingView = Backbone.View.extend({


			template: CreateEditMerchandisingTpl,


			render: function() {

				var self = this;



				self.setElement(self.template(self.model.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.handleValForm();
				self.applyTooltips();
				
						      // products
		        self.featuredProductView && self.featuredProductView.remove();
		        self.featuredProductView = new FeaturedProductView({
			        collection: new FeaturedProductCollection(self.model.get('products')),
			        bodyOnly: true,
			        title: 'Selected Products',
			        selectAll: true
		      });
		    
		       self.$featuredProduct.append(self.featuredProductView.render().el);

                
				return self;
			},




			events: {
				'click #save-btn': 'handleSave',
				'click #cancel-btn': 'handleCancel',
				'click #delete-btn': 'handleDeleteBtn',
				'click #merchandising-btn-logo': 'handleFileUploadMerchandisingImage'
			},




			cacheElem: function() {
				
				this.$MerchandisingImage = this.$el.find('#preview-merchandising-Img');
				this.$featuredProduct  = this.$el.find('#featured-product');
				this.$IconName = this.$el.find('#f-create-edit-icon-name');
				this.$IconTag = this.$el.find('#f-attribute-tag-icon');
				this.$IconActiveStatus = this.$el.find('.merchandisingActive-switch');
				this.$CreateEditMerchandisingIconForm = this.$el.find('#create-edit-merchandising-icon-form');
				this.$tip               = this.$el.find('.tooltip-change');
			},


			applyTooltips: function() {
				this.$el.find('.icon-tool-tip').tooltip();
			},

			handleSave: function () {


				if(this.$CreateEditMerchandisingIconForm.valid()) {

						this.model.set({
							merchandisingIconName: this.$IconName.val().trim(),
							merchandisingIconTag: this.$IconTag.val().trim(),
							merchandisingconImage: this.$MerchandisingImage.prop('src'), 
							products: this.featuredProductView.collection.toJSON(),
							merchandisingActiveStatus: this.$IconActiveStatus.is(':checked')
						});

						if(!merchandisingIconsHomeCollection.get(this.model)) {
		                    this.model.set('id', Date.now());
		                    merchandisingIconsHomeCollection.add(this.model);
	                    }

		                GlobalEvents.trigger('form:save', this.$tip);
		 
		                this.parent.showHome();

		          } // Valid if check ends here

	            else {
		                GlobalEvents.trigger('form:invalid', this.$tip);
	            }

			},


			handleCancel: function() {
				this.parent.showHome();
			},



			handleDeleteBtn: function() {

	            var self = this;

	            GlobalEvents.trigger(
	                'form:delete',
	                   merchandisingIconsHomeCollection.remove.bind(merchandisingIconsHomeCollection, this.model)
	                );

	               this.parent.showHome();
           },





			handleFileUploadMerchandisingImage: function(e) {
	            var self = this;


	            GlobalEvents.trigger('form:image-upload', {

	                cb: function(url) {
	                    self.$MerchandisingImage.prop('src', url);
	                },

	                active: self.$MerchandisingImage.prop('src'),

	                name: 'Merchandising Icons'
                 });
           },

	         handleValForm: function() {

	         	var self = this;

		         	self.$CreateEditMerchandisingIconForm.validate({
		         		 rules: {    
			                    'f-create-edit-icon-name': 'required',
			                    'f-attribute-tag-icon': 'required'
			                }

		         	});

	         }

		});

		return new CreateEditMerchandisingView;

	});