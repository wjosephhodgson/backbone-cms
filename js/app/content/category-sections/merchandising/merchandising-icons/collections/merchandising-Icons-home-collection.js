define([
	'backbone',
	'../models/merchandising-icons-model'
	],
	function(Backbone, MerchandisingIconsHomeModels){
		var merchandisingIconsHomeCollection = Backbone.Collection.extend({
			url: '/mock/user-merchandising-icons.json',

			model: MerchandisingIconsHomeModels
		});

		return new merchandisingIconsHomeCollection;

	});