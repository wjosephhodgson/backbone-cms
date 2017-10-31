define([
	'backbone'
], function(Backbone) {
	var HomepageCustomizationModel = Backbone.Model.extend({
		url: '/mock/user-homepage-customization.json',

		defaults: {
			shopInfo: '',
			h1: '',
			promoText: '',
			promoElement: 'YouTube Video',
			youtubeUrl: '',
			promoTitle: '',
			linkedImages1: '[]',
			promoImageUrl: '',
			buttonText: '',
			buttonTextActive: true,
			buttonLink: '',
			tileLink: '',
			tileTitle: '',
			shopNowText:'',
			tileImageUrl: '',
			videosTitle: '',
			videosText: '',
			collageLabel1: '',
			collageLink1: '',
			collageLabel2: '',
			collageLink2: '',
			collageLabel3: '',
			collageLink3: '',
			collageLabel4: '',
			collageLink4: '',
			collageLabel5: '',
			collageLink5: '',
			collageLabel6: '',
			videoBgUrl: '',
			collageLink6: '',			
			videoUrl1: '',
			videoUrl2: ''
		}
	});

	return new HomepageCustomizationModel;
});