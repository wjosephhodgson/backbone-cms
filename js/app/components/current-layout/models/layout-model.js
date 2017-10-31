define([
	'backbone'
], function(Backbone) {
	var LayoutModel = Backbone.Model.extend({
		defaults: {
			id:'',
			name:'',
			imgUrl:'',
			active: false
		}
	});

	return LayoutModel;
});