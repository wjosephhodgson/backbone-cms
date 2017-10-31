define([
	'underscore',
	'backbone',
	'../templates/all-featured-product-tpl'
], function(_, Backbone, AllFeaturedProductTpl) {
	var AllFeaturedProductView = Backbone.View.extend({
		template: AllFeaturedProductTpl,

		initialize: function(options) {
			var viewModel = this.model.toJSON();
			this.parent = options.parent;
			viewModel.active = this.model.get(this.parent.activeAttribute);
			viewModel.name = this.model.get(this.parent.nameAttribute);
			viewModel.caticons = this.parent.options.caticons;
			viewModel.icon = this.model.get(this.parent.iconAttribute);
			viewModel.showCategoryID = this.parent.options.showCategoryID;
			this.setElement(this.template(viewModel));
			this.$el.data('model', viewModel);

			this.listenTo(this.model, 'change:' + this.parent.activeAttribute, this.handleChange);

			this.maxNumberProducts = this.parent.maxNumberProducts;
		},

		render: function() {
			this.delegateEvents();
			this.cacheElem();

			return this;
		},

		cacheElem: function() {
			this.$icon = this.$el.find('.icon');
			
		},

		events: {
			'click':'handleAdd'
		},


		handleAdd: function() {
			var self = this;

				if(!this.model.get(this.parent.activeAttribute)) {

					var query = {};
						query[this.parent.activeAttribute] = true;
						var totalActive = this.parent.collection.where(query).length;

					if( totalActive < this.maxNumberProducts ) {
						
						this.model.set(this.parent.activeAttribute, true);
						
					} else {
						this.parent.$productAlert.removeClass('hidden');

						setTimeout( function() {
							self.parent.$productAlert.fadeOut(0).addClass('hidden');
						}, 100);    

						                // Reduced the Time here "previous" .fadeOut(800) , timeout 5000
					}
				} 
			   else {
	            
		            this.model.set(this.parent.activeAttribute, false);
					this.parent.$productAlert.addClass('hidden');				
				
				}
			
		},




		handleChange: function(model) {
			var added = model.get(this.parent.activeAttribute);

			if (added) {
				this.$icon.removeClass('icon-add');
				this.$icon.addClass('icon-added');
			} else {
				this.$icon.removeClass('icon-added');
				this.$icon.addClass('icon-add');
			}
		}
	});

	return AllFeaturedProductView;
});