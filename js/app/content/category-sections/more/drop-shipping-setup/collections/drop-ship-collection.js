define([
	'backbone',
	'../models/drop-ship-model'
], function(Backbone, DropShipModel) {
	var DropShipCollection = Backbone.Collection.extend({
		url: '/mock/user-drop-ships.json',

		model: DropShipModel
	});

	return new DropShipCollection;
});