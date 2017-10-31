define([
	'backbone'
], function(Backbone) {
	var SourceCodeReportingTabModel = Backbone.Model.extend({
		url: '/mock/user-source-codesReport.json',

		defaults: {
			sourcecodeReportDate: '',
			sourceCodes: '',
			SourceCode: '',
			Orders: '',
			sales: '',
			orderValue: ''
		}
	});

	return SourceCodeReportingTabModel;

});