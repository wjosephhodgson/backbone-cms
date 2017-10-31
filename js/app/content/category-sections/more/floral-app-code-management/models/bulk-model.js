define([
	'backbone'
], function(Backbone) {
	var BulkModel = Backbone.Model.extend({	
	
		
		defaults: {
			id: null
		}

	});
	return new BulkModel;
});