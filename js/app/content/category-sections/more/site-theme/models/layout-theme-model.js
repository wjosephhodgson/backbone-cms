define([
	'backbone'
], function(Backbone) {
	var LayoutThemeModel = Backbone.Model.extend({
		defaults: {
			name: '',
			imgUrl:'',
			colorSchemes: []
		}
	});

	return LayoutThemeModel;
});