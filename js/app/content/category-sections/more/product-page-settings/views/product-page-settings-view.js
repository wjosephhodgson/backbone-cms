define([
	'backbone',
	'../templates/product-page-settings-tpl',
	'../models/product-page-settings-model',
	'global-events',
	'jqueryui'
], function(
	Backbone, 
	ProductPageSettingsTpl, 
	ProductPageSettingsModel, 
	GlobalEvents
) {
	var ProductPageSettingsView = Backbone.View.extend({
		tagName: 'form',

		id: 'p-product-page-settings',

		template: ProductPageSettingsTpl,

		initialize: function() {

		},

		render: function() {
			var self = this;

			ProductPageSettingsModel.fetchCustom().done(function(){
				this.$el.html(this.template(ProductPageSettingsModel.toJSON()));
				this.cacheElem();
				this.delegateEvents();
				this.applyToolTips();

			}.bind(this));

	

			return self;
		},


		cacheElem: function() {
			this.$tip 					  = this.$el.find('.tooltip-change');
			this.$categoryImage 		  = this.$el.find('.categoryImage');

			// Save Features
			this.$zipSwitchGroup          = this.$el.find('#zip-switch-group');

			this.$zipInputActive          = this.$el.find('#f-zipInputActive');
			this.$requireZipActive        = this.$el.find('#f-requireZipActive');
			this.$zipLookupActive         = this.$el.find('#f-zipLookupActive');
	
			this.$shareButtonsActive      = this.$el.find('#f-shareButtonsActive');
			this.$inStorePickup           = this.$el.find('#f-inStorePickup');
			this.$localDelivery           = this.$el.find('#f-localDelivery');
			this.$browseOnly              = this.$el.find('#f-browseOnly');
			this.$dropshipProducts        = this.$el.find('#f-dropshipProducts');

			this.$pageLayoutType          = this.$el.find('#f-pageLayoutType');
			this.$customAsShown           = this.$el.find('#f-customAsShown');
			this.$customDeluxe            = this.$el.find('#f-customDeluxe');
			this.$customPremium           = this.$el.find('#f-customPremium');

			this.$displayCrossSelling     = this.$el.find('#f-displayCrossSelling');
			this.$displayAddOns           = this.$el.find('#f-displayAddOns');
			this.$displaySocialMedia      = this.$el.find('#f-displaySocialMedia');
		},

		events: {
			'click #save-btn':                   'handleSave',
			'click #cancel-btn':                 'handleCancel',
			'change #f-pageLayoutType':          'changeLayout'
		},

		handleSave: function() {
			ProductPageSettingsModel.set({

				zipInputActive: this.$zipInputActive.is(':checked'),
				displayCrossSelling: this.$displayCrossSelling.is(':checked'),
				displayAddOns: this.$displayAddOns.is(':checked'),
				requireZipActive: this.$requireZipActive.is(':checked'),
				zipLookupActive: this.$zipLookupActive.is(':checked'),
				shareButtonsActive: this.$shareButtonsActive.is(':checked'),
				displaySocialMedia: this.$displaySocialMedia.is(':checked'),

				inStorePickup:this.$inStorePickup.val().trim(),
				localDelivery:this.$localDelivery.val().trim(),
				browseOnly:this.$browseOnly.val().trim(),
				dropshipProducts:this.$dropshipProducts.val().trim(),
				customAsShown:this.$customAsShown.val().trim(),
				customDeluxe:this.$customDeluxe.val().trim(),
				customPremium:this.$customPremium.val().trim(),
				pageLayoutType:this.$pageLayoutType.val()
			});

			GlobalEvents.trigger('form:save', this.$tip);

		},

		handleCancel: function() {
			GlobalEvents.trigger('form:reset', this.render.bind(this));
        },

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		changeLayout: function() {
            this.$categoryImage.attr("src",'/images/mock/'+$('option:selected', this.$pageLayoutType).attr('preview') + '.png');
        }

	});

	return new ProductPageSettingsView;
});