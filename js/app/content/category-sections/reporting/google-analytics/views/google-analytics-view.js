define([
	'underscore',
	'backbone',
	'../models/google-analytics-model',
	'../templates/google-analytics-tpl',
	'global-events'
], 

  function(_, Backbone, GoogleAnalyticsModel, GoogleAnalyticsTpl, GlobalEvents) {
	var GoogleAnalyticsView = Backbone.View.extend({
		tagName: 'form',

		id:"p-google-analytics",

		template: GoogleAnalyticsTpl,

		render: function() {
			var self = this;

           
			GoogleAnalyticsModel.fetchCustom().done(function(){
				self.$el.html(self.template(GoogleAnalyticsModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.applyToolTips();
			});

			return self;
		},

		events: {
			'click #save-btn': 'handleSave'
		},

		cacheElem: function() {
			this.$googleAccount = this.$el.find('#f-googleAccount');
			this.$googleConversionTrackingCode = this.$el.find('#f-googleConversionTrackingCode');
			this.$tip = this.$el.find('.tooltip-change');
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleSave: function() {
			GoogleAnalyticsModel.set({
				googleAccount: this.$googleAccount.val().trim(),
				googleConversionTrackingCode: this.$googleConversionTrackingCode.val().trim()
			});

			GlobalEvents.trigger('form:save', this.$tip);
		}
	});

	return new GoogleAnalyticsView;
});