define([
'backbone'
], function(Backbone){
	var OrderExclusionsExceptionsDeliveryDatesModel = Backbone.Model.extend({

		defaults: {
			 id: null,
			 exceptionReason: '',
			 exceptionDate: ''
		}
	});

   return OrderExclusionsExceptionsDeliveryDatesModel;
});