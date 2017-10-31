define([
	'backbone'
], function(Backbone) {
	var ProductModel = Backbone.Model.extend({
		defaults: {
        "name": "",
        "number": "",
        "id": null,
        "pricePoints": "Primary",
        "type": "Custom",
        "type2": "",
        "type3": "Vase Arrangement",
        "suggestedPrice": "Custom",
        "myPrice":"",
        "holidayPrice":"",
        "taxFreeActive":"",
        "active": true,
        "imgA1": false,
        "imgA2": false,
        "imgA3": false,
        "imgB1": false,
        "imgB2": false,
        "imgB3": false,
        "imgC1": false,
        "imgC2": false,
        "imgC3": false,      
        "imgD1": false,  
        "imgD2": false,  
        "imgD3": false,  
        "imgD4": false,                  
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
        "metaTitle":"",
        "metaKeywords":"",
        "metaDescription":"",
        "metaTags":"",
        "discountAmount":"",
        "discountVariantsActive": false,
        "productDescriptionVariantsActive": false,
        "sizeDimensionVariantsActive": false,
        "discountStartDate": "",
        "discountEndDate": "",
        "localDeliveryActive": true,
        "noSameDayDeliveryActive": true,
        "inStorePickupActive": true,
        "taxFreeActive": true,
        "merchandisingHighlight": "",
        "recipe":"",
        "relatedProducts": [],
        "dropshipMethods": [],
        "addons": [],
        "flowers":[
            {
                "id": 1,
                "name":"Hydrangea",
                "imgUrl": "http://www.fillmurray.com/400/400",
                "active": false
            },
            {
                "id": 2,
                "name":"Asiatic Lily",
                "imgUrl":"http://www.fillmurray.com/300/300",
                "active": false
            },
            {
                "id": 3,
                "name": "Gerbera",
                "imgUrl": "http://www.fillmurray.com/500/500",
                "active": false
            }
        ],
        "bouquetStyles":[
            {
                "id": 1,
                "style":"Exotic",
                "active": false
            },
            {
                "id": 2,
                "style":"Elegant",
                "active": false
            },
            {
                "id": 3,
                "style":"Fun",
                "active":false
            },
            {
                "id": 4,
                "style":"Traditional",
                "active": false
            },
            {

                "id": 5,
                "style":"Modern",
                "active": false
            }
        ],
        "colors":[
            {
                "id": 1,
                "color": "Red",
                "active": false
            },
            {
                "id": 2,
                "color":"Yellow",
                "active": false
            },
            {
                "id": 3,
                "color": "White",
                "active": false
            },
            {

                "id": 4,
                "color": "Blue",
                "active": false
            },
            {

                "id": 5,
                "color": "Pink",
                "active": false
            },
            {
                "id": 6,
                "color": "Beige",
                "active": false
            }
        ],
        "width":0,
        "height":0,
        "productClassification": "Bouquet",
        "productOrientation": "One Sided",
        "categoriesVariantsActive": true,
        "attributesVariantsActive": true,
    },

    initialize: function() {
    	this.set('imgUrl', "http://s7d2.scene7.com/is/image/Teleflora/" + this.get('number') + "?wid=150&hei=215&fmt=jpeg&qlt=90,0&op_sharpen=0&resMode=bilin&op_usm=1.0,0.5,1.0,0&iccEmbed=0&layer=1&opac=0&layer=2&opac=55&layer=5&opac=0");
    }
	});

	return ProductModel;
});