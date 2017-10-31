define([
	'backbone'
], function(Backbone) {
	var GalleryModel = Backbone.Model.extend({
		// url: '/mock/user-wedding-gallery.json',
		  
		defaults: {
			id: null,
			sequence: "",
			name: "",
			galleryStatus: true,
			enableGallery: true,
			type: "Custom",
			metaTitle: "",
			metaKeywords: "",
			metaDescription: "",
			metaTags: "",
			sections:[]
		}
	});

	return GalleryModel;
});