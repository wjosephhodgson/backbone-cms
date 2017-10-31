define([
	'backbone'
], function(Backbone) {
	var SiteMetaModel = Backbone.Model.extend({
		url: '/mock/user-site-meta.json',

		defaults: {
			homeTitle:   '',
			homeDesc:    '',
			homeKwords:  '',
			homeTags:    '',
			aboutTitle:  '',
			aboutDesc:   '',
			aboutKwords: '',
			aboutTags:   '',
			catTitle:    '',
			catDesc:     '',
			catKwords:   '',
			catTags:     '',
			prodTitle:   '',
			prodDesc:    '',
			prodKwords:  '',
			prodTags:    '',
			helpTitle:   '',
			helpDesc:    '',
			helpKwords:  '',
			helpTags:    ''
		}
	});

	return new SiteMetaModel();
});