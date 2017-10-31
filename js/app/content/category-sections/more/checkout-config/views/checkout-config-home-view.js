define([
	'backbone',
	'../models/checkout-config-model',
	'components/featured-occasions/views/featured-occasion-view',
	'../templates/checkout-config-home-tpl',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	CheckoutConfigModel,
	FeaturedOccasionView,
	CheckoutConfigHomeTpl,
	GlobalEvents
) {
	var CheckoutConfigHomeView = Backbone.View.extend({
		tagName: 'form',

		id: 'p-footer-management',

		template: CheckoutConfigHomeTpl,

		render: function() {
			var self = this;

			CheckoutConfigModel.fetchCustom().done(function(){
				self.$el.html(self.template(CheckoutConfigModel.toJSON()));
				self.delegateEvents();

				self.cacheElem();


				FeaturedOccasionView.options = {
					noText: true,
					title: "What's Next Featured Occasion"
				}

				self.$featuredOccasionContainer.append(FeaturedOccasionView.render().el);
				self.applyToolTips();
			});

			return self;
		},

		cacheElem: function() {
			this.$featuredOccasionContainer = this.$el.find('#featured-occasion-container');

			this.$reqDelZip = this.$el.find('#f-reqDelZip');
			this.$reqDelPhone = this.$el.find('#f-reqDelPhone');
			this.$useAVS = this.$el.find('#f-useAVS');
			this.$subPolicy = this.$el.find('#f-subPolicy') ;
			this.$delInfoText = this.$el.find('#f-delInfoText');
			this.$reminderDisplay = this.$el.find('#f-reminderDisplay');
			this.$reminderDefault = this.$el.find('#f-reminderDefault') ;
			this.$displayTC = this.$el.find('#f-displayTC');
			this.$TCtext = this.$el.find('#f-TCtext');
			this.$emailDefault = this.$el.find('#f-emailDefault') ;
			this.$emailMessage = this.$el.find('#f-emailMessage');
			this.$confHeadline = this.$el.find('#f-confHeadline');
			this.$tip = this.$el.find('.tooltip-change');
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		events: {
			'click #save-btn': 'handleSave'
		},

		handleSave: function() {
			CheckoutConfigModel.set({
				reqDelZip: this.$reqDelZip.is(':checked'),
				reqDelPhone: this.$reqDelPhone.is(':checked'),
				useAVS: this.$useAVS.is(':checked'),
				subPolicy: this.$subPolicy.find('option:selected').val(),
				delInfoText: this.$delInfoText.val().trim(),
				reminderDisplay: this.$reminderDisplay.is(':checked'),
				reminderDefault: this.$reminderDefault.find('option:selected').val(),
				displayTC: this.$displayTC.is(':checked'),
				TCtext: this.$TCtext.val().trim(),
				emailDefault: this.$emailDefault.find('option:selected').val(),
				emailMessage: this.$emailMessage.val().trim(),
				confHeadline: this.$confHeadline.val().trim()
			});

			GlobalEvents.trigger('form:save', this.$tip);
		}
	});

	return new CheckoutConfigHomeView;
});