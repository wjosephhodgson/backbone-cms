define([
	'backbone'
], function(Backbone) {
	var CodeModel = Backbone.Model.extend({	
	
		
		defaults: {
			id: null,
			type:'Custom',
			active: true,
			siteID:'',
			floralCode:'',
			pathName:'',
			fVal:''
		}

	});
	return CodeModel;
});