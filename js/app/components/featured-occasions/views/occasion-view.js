define([
	'underscore',
	'backbone',
	'../templates/occasion-tpl',
	'global-events'
], function(_, Backbone, OccasionTpl, GlobalEvents) {
	var OccasionView = Backbone.View.extend({
		template: OccasionTpl,

		initialize: function(options) {
			var self = this;

			self.parent = options.parent;
			self.collection = self.parent.collection;

			self.listenTo(self.collection, 'remove', function(model) {
				if(model === self.model) {
					self.$el.fadeOut(200, function() {
						self.remove();
					});
				}
			});
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));

			return this;
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				this.collection.remove.bind(this.collection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return OccasionView;
});