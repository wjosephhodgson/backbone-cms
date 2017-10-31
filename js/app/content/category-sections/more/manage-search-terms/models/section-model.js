define([
	'backbone'
], function(Backbone) {
	var SectionModel = Backbone.Model.extend({

		defaults: {
			id: null,
			searchTerm:'',
			type: 'Custom',
			landingPageOrBannerImage:'',
			bannerImage:'',
			imageAlt:'',
			landingPageURL:'',
			searchActiveStatus: true
		}

	});

	return SectionModel;
});