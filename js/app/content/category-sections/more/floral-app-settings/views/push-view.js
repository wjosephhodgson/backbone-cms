define([
	'backbone',
	'../templates/push-view-tpl',
	'../collections/push-collection',
	'global-events'
], function(
	Backbone, 
	PushTpl, 
	PushCollection, 
	GlobalEvents
) {
	var PushView = Backbone.View.extend({
		template: PushTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.setElement(this.template(this.model.toJSON()));


			// // whenever a row is deleted, you have to have dataTable redraw it or else the change won't be reflected
			// this.listenTo(PromoCollection, 'remove', function(model) {
			// 	if(model === this.model) {
			// 		this.parent.dataTable.row(this.$el).remove().draw();
			// 		this.remove();
			// 	}
			// });

			// // Get rid of zombie view
			// this.listenTo(this.parent, 'reset', function() {
			// 	this.remove();
			// });
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit',
			'click .icon-search': 'handleEdit'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				PushCollection.remove.bind(PushCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handlePushEdit(this.model);
		}
	});

	return PushView;
});