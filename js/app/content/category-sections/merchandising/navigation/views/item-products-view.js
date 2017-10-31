define([
	'backbone',
	'../templates/item-products-tpl',
	'components/featured-product/views/featured-product-view',
	'components/featured-product/collections/featured-product-collection',	
	'global-events'
], function(
	Backbone, 
	ItemProductsTpl,
	FeaturedProductView,
	FeaturedProductCollection,	
	GlobalEvents
) {
	var ItemProductsView = Backbone.View.extend({
		template: ItemProductsTpl,
		render: function() {
			var self = this;
			//this.setElement(this.template(this.model.toJSON()));
			self.$el.html(self.template(self.model.toJSON()));
			if (this.featuredProductView) {
				this.featuredProductView.remove(); // can use .detach if elements are to be re-rendered
			}

			this.featuredProductView = new FeaturedProductView({
				collection: new FeaturedProductCollection(this.model.get('content')),
				maxNumberProducts: 2,
				selectAll: true
			});
									
			this.cacheElem();
			this.handleColumnsChange();
			this.$featuredProduct.append(this.featuredProductView.render().el);
			this.delegateEvents();
			
			//this.validateForm();

			return this;
		},

		events: {
			'change #f-products-columns': 'handleColumnsChange'
		},

		cacheElem: function() {
			this.$featuredProduct  = this.$el.find('#featured-product');
			this.$columns          = this.$el.find('#f-products-columns');
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

		handleColumnsChange: function() {
			var 
				self = this,
				cval = this.$columns.find('option:selected').val();

			if( cval == '2 Columns' ){
				this.featuredProductView.remove();
				this.featuredProductView = new FeaturedProductView({
					collection: new FeaturedProductCollection(this.model.get('content')),
					maxNumberProducts: 4,
					selectAll: true
				});
				this.$featuredProduct.append(this.featuredProductView.render().el);				
			} else if( cval == '4 Columns' ) {
				this.featuredProductView.remove();
				this.featuredProductView = new FeaturedProductView({
					collection: new FeaturedProductCollection(this.model.get('content')),
					maxNumberProducts: 8,
					selectAll: true
				});
				this.$featuredProduct.append(this.featuredProductView.render().el);				
			} 
			else {
				this.featuredProductView = new FeaturedProductView({
					collection: new FeaturedProductCollection(this.model.get('content')),
					maxNumberProducts: 4,
					selectAll: true
				});
			}

		},

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					title: "required"
				}
			});
		}	
	});

	return new ItemProductsView;
});