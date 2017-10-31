define([
	'backbone',
	'../templates/date-time-delivery-fee-tpl',
	'../collections/date-time-delivery-fee-collection',
	'global-events'
], function(Backbone, DateTimeDeliveryFeeTpl, DateTimeDeliveryFeeCollection, GlobalEvents) {
	var DateTimeDeliveryFeeView = Backbone.View.extend({
		template: DateTimeDeliveryFeeTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.setElement(this.template(this.model.toJSON()));

			this.listenTo(DateTimeDeliveryFeeCollection, 'remove', function(model) {
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
				DateTimeDeliveryFeeCollection.remove.bind(DateTimeDeliveryFeeCollection, this.model)
			);
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		}
	});

	return DateTimeDeliveryFeeView;
});