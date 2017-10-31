define([
'backbone'
], function(Backbone){
	var OrderExclusionsBlockedDeliveryDatesModel = Backbone.Model.extend({

		defaults: {
			 id: null,
			 closureReason: '',
			 startDate: '',
			 resumeDate: '',
			 repeatsYearly: ''
		}
	});

   return OrderExclusionsBlockedDeliveryDatesModel;
});