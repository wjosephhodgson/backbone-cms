define([
	'backbone',
	'../collections/ordersExclusions-blockedDeliveryDatesCollection',
	'../models/orders-exclusionsBlockedDeliveryDates-model',
	'../templates/orders-exclusions-blocked-delivery-dates-tpl',
	'global-events',
	'jquery'
	], 
	function(
		Backbone,
   	    OrdersExclusionBlockedDeliveryDatesCollection,
   	    OrderExclusionsBlockedDeliveryDatesModel, 
   	    OrdersExclusionBlockedDeliveryDatesTpl,
   	    GlobalEvents
   	    ) {
		var OrdersExclusionBlockedDeliveryDatesView = Backbone.View.extend({

			template: OrdersExclusionBlockedDeliveryDatesTpl,

           initialize: function(options) {
        	this.parent = options.parent;
        },

			render: function() {

				this.setElement(this.template(this.model.toJSON()));
				this.delegateEvents();

				return this;
			},

			events: {
				'click .icon-trash': 'handleDeleteExceptionsDeliveryDate'
			},

			handleDeleteExceptionsDeliveryDate: function() {
			 var self = this;

	            GlobalEvents.trigger(
	                'form:delete',
	                OrdersExclusionBlockedDeliveryDatesCollection.remove.bind(OrdersExclusionBlockedDeliveryDatesCollection, self.model)
	                );


	         setTimeout(function() { 
	            	self.parent.handleClosureDeliveryTableUpdate() 
	            }, 1500);

			}



		});

		return OrdersExclusionBlockedDeliveryDatesView;
	})