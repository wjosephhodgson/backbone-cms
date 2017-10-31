define([
	'backbone',
	'../templates/page-tpl',
	'../collections/custom-html-page-collection',
	'global-events'
], function(Backbone, PageTpl, CustomHtmlPageCollection, GlobalEvents) {
	var PageView = Backbone.View.extend({
		template: PageTpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function() {
			var self = this;

			self.setElement(self.template(self.model.toJSON()));

			self.listenTo(CustomHtmlPageCollection, 'remove', function(model) {
				if(model === self.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});

			return self;
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				CustomHtmlPageCollection.remove.bind(CustomHtmlPageCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return PageView;
});