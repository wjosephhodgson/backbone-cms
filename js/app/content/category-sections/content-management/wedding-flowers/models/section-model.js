define([
	'backbone'
], function(Backbone) {
	var SectionModel = Backbone.Model.extend({

		defaults: {
			id: null,
			sequence: null,
			sectionStatus: true,
			sectionTitle:"",
			sectionDescription:"",
			leftTitle:"",
			leftCaption:"",
			leftImage:"",
			middleTitle:"",
			federated:false,
			middleCaption:"",
			middleImage:"",
			rightTitle:"",
			rightCaption:"",
			rightImage:""
		}
	
	
	});

	return SectionModel;
});