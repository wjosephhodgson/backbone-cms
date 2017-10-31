define([
	'underscore',
	'backbone',
	'../templates/all-featured-product-tpl'
], function(_, Backbone, AllFeaturedProductTpl) {
	var AllFeaturedProductView = Backbone.View.extend({
		template: AllFeaturedProductTpl,

		initialize: function(options) {
			var data = this.model.toJSON();

			this.disabled = data.disabled = options.disabled;
			this.parent = options.parent;
			//this.selectAll = this.parent.options.selectAll;

			this.setElement(this.template(data));

			this.$el.data('model', this.model);
		
			this.listenTo(this.model, 'change:featured', this.handleChange);



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
			'click':'handleAdd'   // This event responds to the the CLicking of the Products View 
		},

		handleAdd: function() {
			var self = this;

			if(!this.disabled) {
				if(!this.model.get('featured')) {

					var totalActive = this.parent.collection.where({featured:true}).length;

					if( totalActive < this.maxNumberProducts ) {
						
						this.model.set('featured', true);
						
					} else {
						this.parent.$productAlert.removeClass('hidden');

						setTimeout( function() {
							self.parent.$productAlert.fadeOut(0).addClass('hidden');
						}, 1000);    

						                // Reduced the Time here "previous" .fadeOut(800) , timeout 5000
					}
				} else {
					this.model.set('featured', false);

					this.parent.$productAlert.addClass('hidden');					
				}
			}
		},

		handleChange: function(model) {
			var added = model.get('featured');

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