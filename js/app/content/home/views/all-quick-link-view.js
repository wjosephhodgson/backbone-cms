define([
	'underscore',
	'backbone',
	'../templates/all-quick-link-tpl'
], function(_, Backbone, AllQuickLinkTpl) {
	var AllQuickLinkView = Backbone.View.extend({
		template: AllQuickLinkTpl,

		initialize: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.listenTo(this.model, 'change:active', this.handleChange);
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
			'click':'toggleAdded',
		},

		toggleAdded: function() {
			this.model.set('active', !this.model.get('active'));
		},

		handleChange: function(model) {
			var added = model.get('active');

			if (added) {
				this.$icon.removeClass('icon-add');
				this.$icon.addClass('icon-added');
			} else {
				this.$icon.removeClass('icon-added');
				this.$icon.addClass('icon-add');
			}
		}
	});

	return AllQuickLinkView;
});