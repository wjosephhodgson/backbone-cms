define([
	'backbone',
	'../templates/checkout-messaging-management-home-TABLE',
	'../collections/checkoutMessagingManagementHomeCollection',
	'global-events'
], function(
	Backbone,
	CheckoutMessagingTABLETpl, 
	CheckoutMessagingManagementHomeCollection, 
	GlobalEvents) {
	
	var CheckoutMessagingManagementHomeTableView = Backbone.View.extend({

		template: CheckoutMessagingTABLETpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function(options) {
			var self = this;

				this.setElement(this.template(this.model.toJSON()));

				self.listenTo(CheckoutMessagingManagementHomeCollection, 'remove', function(model) {
					if(model === self.model) {
						self.$el.fadeOut(200, function() {
							self.remove();
						});
					}
				});

				self.delegateEvents();

			return self;
		},

		events: { 
			'click .icon-edit': 'handleEdit',
			'click .icon-search': 'handleEdit',
			'click .icon-trash': 'handleDelete'
		},

		handleEdit: function(model) {
			this.parent.handleEdit(this.model);
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete', 
				CheckoutMessagingManagementHomeCollection.remove.bind(CheckoutMessagingManagementHomeCollection, this.model)
			);
		}
	});

	return CheckoutMessagingManagementHomeTableView;
});