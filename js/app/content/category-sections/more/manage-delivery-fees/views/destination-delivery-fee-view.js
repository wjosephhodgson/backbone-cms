define([
	'backbone',
	'../templates/destination-delivery-fee-tpl',
	'../collections/destination-delivery-fee-collection',
	'global-events'
], function(Backbone, DestinationDeliveryFeeTpl, DestinationDeliveryFeeCollection, GlobalEvents) {
	var DestinationDeliveryFeeView = Backbone.View.extend({
		template: DestinationDeliveryFeeTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.setElement(this.template(this.model.toJSON()));


			// whenever a row is deleted, you have to have dataTable redraw it or else the change won't be reflected
			this.listenTo(DestinationDeliveryFeeCollection, 'remove', function(model) {
				if(model === this.model) {
					this.parent.dataTable.row(this.$el).remove().draw();
					this.remove();
				}
			});

			// Get rid of zombie view
			this.listenTo(this.parent, 'reset', function() {
				this.remove();
			});
		},

		events: {
			'click .icon-trash': 'handleDelete',
			'click .icon-edit': 'handleEdit'
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				DestinationDeliveryFeeCollection.remove.bind(DestinationDeliveryFeeCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return DestinationDeliveryFeeView;
});