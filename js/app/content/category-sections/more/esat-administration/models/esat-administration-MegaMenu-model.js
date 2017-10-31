define([
    'backbone'
], function(Backbone) {
	var EsatAdminMegaMenuModel = Backbone.Model.extend({
		url: 'mock/user-esat-megamenu.json',
		
		defaults: {
			id: null,
			MegaMenuName: '',
			MegaMenuActive: true,
			MegaMenuAssociatedSection: '',
			MegaMenuBlockTitle: '',
			MegaMenuBlockContent: ''
		}

	});

	return EsatAdminMegaMenuModel;
});