define([
	'underscore',
	'backbone',
	'../templates/suspension-tpl',
	'../collections/suspension-collection',
	'global-events'
], function(_, Backbone, SuspensionTpl, SuspensionCollection, GlobalEvents) {
	var SuspensionView = Backbone.View.extend({
		template: SuspensionTpl,

		initialize: function() {
			var self = this;

			self.listenTo(SuspensionCollection, 'remove', function(model) {
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
			'click .icon-trash':'handleDelete'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				SuspensionCollection.remove.bind(SuspensionCollection, this.model)
			);
		}
	});

	return SuspensionView;
});