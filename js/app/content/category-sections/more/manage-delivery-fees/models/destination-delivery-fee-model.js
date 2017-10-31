define([
	'backbone'
], function(Backbone) {
	var DestinationDeliveryFeeModel = Backbone.Model.extend({
		defaults: {
			id:null,
			active: true,
			conditionType:'',
			conditionValue:'',
			deliveryFee:'0.00',
			wireFee:'0.00',
			additionalFee:'0.00',
			additionalFeeName:'',
			country:'',
			state:'',
			city:'',
			zip:''
		}
	});

	return DestinationDeliveryFeeModel;
});