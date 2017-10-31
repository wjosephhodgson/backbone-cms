define([
	'backbone',
	'../models/layout-theme-model'
], function(Backbone, LayoutThemeModel) {
	var LayoutThemeCollection = Backbone.Collection.extend({
		url: '/mock/site-theme-layouts.json',

		model: LayoutThemeModel
	});

	return new LayoutThemeCollection;
});