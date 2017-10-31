define([
	'backbone',
	'../collections/ordersExclusions-ExceptionsDeliveryDatesCollection',
	'../models/orders-exclusionsExceptionDeliveryDates-model',
	'../templates/orders-exclusions-excpetions-DeliveryDates-tpl',
    'global-events',
	'jquery'
	], 
	function(
		Backbone,
   	    OrdersExclusionExceptionDeliveryDatesCollection,
        OrderExclusionsExceptionsDeliveryDatesModel,
   	    OrdersExclusionExceptionsDeliveryDatesTpl,
   	    GlobalEvents
   	    ) {
		var OrdersExclusionExceptionsDeliveryDatesView = Backbone.View.extend({

			template: OrdersExclusionExceptionsDeliveryDatesTpl,

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
	                OrdersExclusionExceptionDeliveryDatesCollection.remove.bind(OrdersExclusionExceptionDeliveryDatesCollection, self.model)
	                );


	         setTimeout(function() { 
	            	self.parent.handleExceptionTableUpdate() 
	            }, 1500);

			}


		});

		return OrdersExclusionExceptionsDeliveryDatesView;
	})