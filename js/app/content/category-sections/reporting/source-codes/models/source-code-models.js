define([
	'backbone'
], function(Backbone) {
	 var SourceCodeModel = Backbone.Model.extend({
	 	url: '/mock/user-source-codes.json',

	 	defaults: {
	 		totalSales: '',
	 		totalOrders: '',
	 		averageOrderValues: ''
	 	}
	 }); // Model ends here

       return new SourceCodeModel;

	});  // define ends here