define([
	'backbone'
], function(Backbone) {
	var EmailCampaignModel = Backbone.Model.extend({
		defaults: function() {
			return {
				name:'',
				featuredProductsNum:6,
				active: true,
				subject: '',
				sendDate: '',
				pullDate: '',
				description: '',
				promotionCode:'',
				featuredProducts: [],
				customSubject: '',
				customFeaturedProducts: null,
				editable: true
			}
		},

		initialize: function() {
			var pullDate = this.get('pullDate');

			if(pullDate && (new Date(pullDate)).getTime() > (new Date()).getTime()) {
				this.set('editable', true);
			} else {
				this.set('editable', false);
			}
		}
	});

	return EmailCampaignModel;
});