define([
	'backbone',
	'../templates/nav-item-tpl',
	'global-events'
], function(
	Backbone, 
	NavItemTpl, 
	GlobalEvents
) {
	var NavItemView = Backbone.View.extend({
		template: NavItemTpl,

		initialize: function(options) {
			var self = this;

			self.parent = options.parent;
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();

			return this;
		},

		cacheElem: function() {
			this.$edit = this.$el.find('.icon-edit');
		},

		events: {
			'click': 'handleEdit',
			'click .icon-trash': 'handleDelete'
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
		
	});

	return NavItemView;
});