define([
	'backbone'
], function(Backbone) {
	var SiteNavModel = Backbone.Model.extend({
		defaults: {
			id: null,
			title: 'New Menu',
			sectionActive: true,
			contentType: '',
			contentLabel: '',
			columns: '',
			dropdown: true,
			showMore: false,
			menuLink: '',
			html: '',
			type: '',
			entries: {
				columns: '1',
				dropdown: true,
				showMore: true,
				menuLink: '',
				contentType: '',
				contentLabel: 'New Nav Item',			
				navContent: '<div class="col-12">Nav content goes here</div>',	
				html: '',
				content: []
			}
		}
	});

	return SiteNavModel;
});