define([
	'underscore',
	'backbone',
	'../templates/all-featured-sub-tpl'
], function(_, Backbone, AllFeaturedSubTpl) {
	var AllFeaturedSubView = Backbone.View.extend({
		template: AllFeaturedSubTpl,

		initialize: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.listenTo(this.model, 'change:featured', this.handleChange);
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
			'click':'toggleAdded'
		},

		toggleAdded: function() {
			this.model.set('featured', !this.model.get('featured'));
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

	return AllFeaturedSubView;
});