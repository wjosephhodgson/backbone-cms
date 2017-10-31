define([
	'backbone'
], function(Backbone) {
	var SectionModel = Backbone.Model.extend({
		defaults: {
			id: null,
			title: '',
			sectionActive: true,
			sectionDescription:'',
			imgActive: true,
			imgUrl:''
		}
	});

	return SectionModel;
});