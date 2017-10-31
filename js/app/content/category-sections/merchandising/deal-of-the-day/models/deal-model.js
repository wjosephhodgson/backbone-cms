define([
	'backbone'
], function(Backbone) {
	var DealModel = Backbone.Model.extend({
	    url: '/mock/user-products.json',

		defaults: {
			"metaTitle":'',
			"metaKeywords":'',
			"metaDescription":'',
			"metaTags":'',
			"name": "",
			"number": "",
			"id": null,
			"sequence": 1,
			"pricePoints": "Primary",
			"type": "Custom",
			"type2": "",
			"type3": "Vase Arrangement",
			"suggestedPrice": "Custom",
			"myPrice":"",
			"holidayPrice":"",
			"taxFreeActive":"",
			"active": true,
			"backgroundImage":"",
			"productImage":"",
			"imgA1": false,
			"imgA2": false,
			"imgA3": false,
			"imgB1": false,
			"imgB2": false,
			"imgB3": false,
			"imgC1": false,
			"imgC2": false,
			"imgC3": false,                
			"categories": [],
			"isBaseSku": true,
			"baseSkuId":"",
			"skuLabel": "Standard",
			"skuList":[],
			"subscription": true,
			"startDate": "",
			"endDate": "",
			"description":"",
			"additionalInfo":"",
			"legalInfo":"",
			"discountAmount":"",
			"discountVariantsActive": false,
			"discountStartDate": "",
			"discountEndDate": "",
			"localDeliveryActive": true,
			"noSameDayDeliveryActive": true,
			"inStorePickupActive": false,
			"taxFreeActive": true,
			"merchandisingHighlight": "",
			"recipe":"",
			"relatedProducts": [],
			"dropshipMethods": [],
			"addons": [],
			"flowers":[],
			"occasions":[],
			"bouquetStyles":[],
			"colors":[],
			"width":0,
			"height":0,
			"productClassification": "Bouquet",
			"categoriesVariantsActive": true,
			"attributesVariantsActive": true

		}

	});

	return DealModel;
});


		