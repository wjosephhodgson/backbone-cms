define([
	'underscore',
	'backbone',
	'../templates/homepage-tpl',
	'../collections/homepage-collection',
	'global-events'
], function(_, Backbone, HomepageTpl, HomepageCollection, GlobalEvents) {
	var HomepageView = Backbone.View.extend({
		template: HomepageTpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function() {
			var self = this;

			self.setElement(self.template(self.model.toJSON()));

			self.listenTo(HomepageCollection, 'remove', function(model) {
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
			GlobalEvents.trigger('form:delete', HomepageCollection.remove.bind(HomepageCollection, this.model));
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return HomepageView;
});