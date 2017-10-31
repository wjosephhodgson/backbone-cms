define([
	'backbone',
	'../models/customer-accounts-model',
	'../templates/customer-accounts-tpl',
	'global-events',
	'jquery',
    'jqueryval'
], 
	function(Backbone, CustomerAccountsModel, CustomerAccountsTpl, GlobalEvents) {
		var CustomerAccountsView = Backbone.View.extend({
			tagName: 'form',

			id: "f-customer-accounts-info",

			template: CustomerAccountsTpl,

		
		render: function() {
				var self = this;

			   CustomerAccountsModel.fetchCustom().done(function(){
				   self.$el.html(self.template(CustomerAccountsModel.toJSON()));
				   self.delegateEvents();
				   self.cacheElem();
				   self.applyToolTips();
			   });

			   return self;
			},

		events: {
			'click #save-btn': 'handleSave',
			'click #cancel-btn': 'handleCancel'
		},

		cacheElem: function(){
			this.$FacebookAppID = this.$el.find('#f-facebookApp');
			this.$OrderTracking = this.$el.find('#f-orderTracking-active');
			this.$Statement = this.$el.find('#f-statement-active');
			this.$tip = this.$el.find('.tooltip-change');

		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleSave: function() {
			CustomerAccountsModel.set({
				FacebookAppId: this.$FacebookAppID.val().trim(),
				OrderTrackingActive: this.$OrderTracking.is(':checked'),
				ProvideStatementActive: this.$Statement.is(':checked')			
			});

		 GlobalEvents.trigger('form:save', this.$tip);
		},

		handleCancel: function() {

			 GlobalEvents.trigger('form:reset', this.render.bind(this));
		}

		});

		return new CustomerAccountsView;
	});
