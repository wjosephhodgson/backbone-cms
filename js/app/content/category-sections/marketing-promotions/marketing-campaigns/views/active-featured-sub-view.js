define([
	'underscore',
	'backbone',
	'../templates/active-featured-sub-tpl'
], function(_, Backbone, ActiveFeaturedSubTpl) {
	var ActiveFeaturedSubView = Backbone.View.extend({
		template: ActiveFeaturedSubTpl,

		initialize: function() {
			this.listenTo(this.model, 'change:featured', this.remove);
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
			this.model.set('featured', false);
		}
	});

	return ActiveFeaturedSubView;
});