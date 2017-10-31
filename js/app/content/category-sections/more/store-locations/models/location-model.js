define([
	'backbone'
], function(Backbone) {
	var LocationModel = Backbone.Model.extend({
		defaults: {
			id: null,
			inStorePickupActive: true,
			locationDescription: '',
			address1:'',
			address2:'',
			city:'',
			state:'',
			zip:'',
			country:'',
			phoneNumber:'',
			editTaxCode: false,
			taxCode: 'EF-OK',			
			geoCode:''
		}
	});

	return LocationModel;
});