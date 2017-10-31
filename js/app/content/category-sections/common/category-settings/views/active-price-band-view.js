define([
	'../templates/active-price-band-tpl',
], function(ActivePriceBandTpl) {
	var ActivePriceBandView = Backbone.View.extend({
		template: ActivePriceBandTpl,

		initialize: function(options) {
			// this.listenTo(this.model, 'change:active', this.remove);
			this.parent = options.parent;
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.delegateEvents();

			return this;
		},

		events: {
			'click .icon-trash':'handleDelete'
		},

		handleDelete: function() {
			this.model.set('active', false);
			this.parent.$priceBandAlert.addClass('hidden');
		}
	});

	return ActivePriceBandView;
});