define([
	'underscore',
	'backbone',
	'../templates/active-featured-product-list-tpl',
	'../templates/active-featured-product-grid-tpl',
	'global-events'
], function(
	_,
	Backbone,
	ActivedFeaturedProductListTpl,
	ActivedFeaturedProductGridTpl,
	GlobalEvents
) {
	var ActivedFeaturedProductView = Backbone.View.extend({
		template: {
			list: ActivedFeaturedProductListTpl,
			grid: ActivedFeaturedProductGridTpl
		},

		initialize: function(options) {
			this.disabled = options.disabled;
			this.listenTo(this.model, 'change:featured', this.remove);
			this.template = this.template[options.type];
			this.parent = options.parent;
		},

		render: function() {
			var data = this.model.toJSON();

			data.disabled = this.disabled;

			this.setElement(this.template(data));
			this.delegateEvents();

			return this;
		},


		events: {
			'click .icon-trash':'handleDelete',
			'click .icon-edit':'handleEdit'
		},

		handleEdit: function(e) {
			var 
				self = this,
				pid = self.$el.data('id');
			
			GlobalEvents.trigger('form:product-modal', {
				pid: pid
			});
		},

		handleDelete: function() {
			if(!this.disabled) {
				var self = this;

				self.$el.fadeOut(100, function() {
					self.model.set('featured', false);
				})
				this.parent.$productAlert.addClass('hidden');
			}
		}
	});

	return ActivedFeaturedProductView;
});