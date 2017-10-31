define([
	'underscore',
	'backbone',
	'../templates/active-item-tpl'
], function(_, Backbone, ActiveItemTpl) {
	var ActivedItemView = Backbone.View.extend({
		template: ActiveItemTpl,

		initialize: function(options) {
			this.listenTo(this.model, 'change:active', this.remove);
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
		}
	});

	return ActivedItemView;
});