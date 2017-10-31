define([
	'backbone'
], function(Backbone) {
	'use strict';
	
	var QuickLinksModel = Backbone.Model.extend({
		defaults: {
			id: null,
			name:'',
			nickName:'',
			icon:'',
			imgUrl:'',
			active: false,
			url:''
		}
	});

	return QuickLinksModel;
});