define([
	'underscore',
	'backbone',
	'../templates/category-tpl',
	'../collections/category-collection',
	'global-events',
	'jqueryui'
], function(_, Backbone, CategoryTpl, CategoryCollection, GlobalEvents) {
	var CategoryView = Backbone.View.extend({
		template: CategoryTpl,

		initialize: function(options) {
			this.parent = options.parent;
			this.level = options.level;
		},

		render: function() {
			var data = this.model.toJSON();

			data.level = this.level;

			this.setElement(this.template(data));
			this.applyToolTips();

			return this;
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'change .on-off-switch': 'handleSwitch'
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		},

		handleSwitch: function(e) {

			var children = this.model.get('children');

			this.model.set('active', e.target.checked);

			if (children.length) {

			}

			GlobalEvents.trigger('form:editing');
		},

		applyToolTips: function() {
			this.$el.find('.icon-page-tip').tooltip();
		}
	});

	return CategoryView;
});