define([
	'backbone'
], function(Backbone){
	var ThirdPartyProductCatalogsModel = Backbone.Model.extend({

		defaults: {
			id: null,
			ProductCatalogName: '',
			SubscribeStatusActive: true
		}

	});

	return ThirdPartyProductCatalogsModel;
	
});