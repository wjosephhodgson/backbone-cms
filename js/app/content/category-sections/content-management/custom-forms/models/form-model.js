define([
	'backbone'
], function(Backbone) {
	var FormModel = Backbone.Model.extend({
		defaults: {
			id: null,
			formName:'',
			formUrl: '',
			formEmail: '',
			pageHeader: '',
			active: true,
			captcha: true,
			metaDesc:'',
			pageTitle:'',
			metaKeywords:'',
			metaTags:'',
			wrapper:true,
			pageMainContent:'',
			startDate: '',
			endDate: ''
		}
	});

	return FormModel;
});