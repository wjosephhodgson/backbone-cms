define([
	'underscore',
	'backbone',
	'../templates/active-quick-link-tpl'
], function(_, Backbone, ActiveQuickLinkTpl) {
	var ActiveQuickLinkView = Backbone.View.extend({
		template: ActiveQuickLinkTpl,

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

	return ActiveQuickLinkView;
});