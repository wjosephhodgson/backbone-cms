define([
	'backbone'
], function(Backbone) {
	var ShopValueIconsModel = Backbone.Model.extend({
		defaults: {
			id: null,
			name: '',
			imgUrl: '',
			active: false
		}
	});

	return ShopValueIconsModel;
});