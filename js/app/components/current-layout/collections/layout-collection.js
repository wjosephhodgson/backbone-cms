define([
	'backbone',
	'../models/layout-model'
], function(Backbone, LayoutModel) {
	var LayoutCollection = Backbone.Collection.extend({
		url: '/mock/layouts.json',

		model: LayoutModel,

		getActive: function() {
			return this.where({
				active: true
			});
		},

		setAllInactive: function() {
			this.getActive().forEach(function(layout) {
				layout.set('active', false);
			});
		}
	});

	return LayoutCollection;
});