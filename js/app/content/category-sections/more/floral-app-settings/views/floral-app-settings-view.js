define([
	'jquery',
	'backbone',
	'../templates/floral-app-settings-view-tpl',
	'../models/settings-model',
	'./quick-promo-edit-view',
	'./promo-code-edit-view',
	'./promo-code-view',
	'../collections/promo-collection',
	'../models/promo-model',
	'./push-edit-view',
	'./push-view',
	'../collections/push-collection',
	'../models/push-model',
	'global-events',
	'jqueryui'
], function(
	$,
	Backbone,
	SettingsTpl,
	SettingsModel,
	QuickPromoEditView,
	PromoCodeEditView,
	PromoCodeView,
	PromoCollection,
	PromoModel,
	PushEditView,
	PushView,
	PushCollection,
	PushModel,
	GlobalEvents
) {
	var SettingsView = Backbone.View.extend({
		tagName:'form',

		id: 'p-floral-app-settings',

		template: SettingsTpl,

		render: function() {
			var self = this;

			SettingsModel.fetchCustom().done(function() {
				self.$el.html(self.template(SettingsModel.toJSON()));
				self.cacheElem();
				self.delegateEvents();
				self.applyTabs();
				self.applyToolTips();
				self.initModals();

				PromoCollection.fetchCustom().done(function() {
					self.addAllPromos();
				});

				PushCollection.fetchCustom().done(function() {
					self.addAllPushes();
				});			

			});



			return self;
		},

		cacheElem: function() {
			// jQuery UI tabs
			this.$tabs = this.$el.find('#tabs');
			this.$tip = this.$el.find('.tooltip-change');
			// <tbody> to insert promo code rows into
			this.$promoTable = this.$el.find('#promo-list');
			this.$pushTable = this.$el.find('#push-list');

			// modals
			this.$quickPromoModal = this.$el.find('#quick-promo-modal');
			this.$advPromoModal = this.$el.find('#adv-promo-modal');
			this.$pushModal  = this.$el.find('#push-modal');

			this.$emailImg = this.$el.find('#f-emailImg-image');
			this.$aboutUsImg = this.$el.find('#f-aboutUs-image');

		},

		events: {
			'click #save-btn': 'handleSave',
			'click #f-advanced-promo': 'handleAdvancedAdd',
			'click #f-quick-promo': 'handleQuickAdd',
			'click #f-new-push': 'handlePushAdd',
			'click .image-upload':'handleImageUpload'
		},

		handleImageUpload: function(e) {

			var self = this;
			var imgId = e.currentTarget.id;

			if(imgId === "f-image-email") {

				GlobalEvents.trigger('form:image-upload', {
					cb: function(url) {
						self.$emailImg.prop('src', url);
					},

					active: self.$emailImg.prop('src'),

					name: 'Floral App Settings'

				});

			} else if (imgId === "f-image-about") {

				GlobalEvents.trigger('form:image-upload', {
					cb: function(url) {
						self.$aboutUsImg.prop('src', url);
					},

					active: self.$aboutUsImg.prop('src'),

					name: 'Floral App Settings'

				});
			}
		},

		applyTabs: function() {
			this.$tabs.tabs();
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		initModals: function() {
			this.$quickPromoModal.dialog({
				autoOpen: false,
				modal: true,
				draggable: false,
					show: {
					effect: 'fade',
					speed: 200
				},
				hide: {
					effect: 'fade',
					speed: 100
				}
			});
			this.$advPromoModal.dialog({
				autoOpen: false,
				modal: true,
				width: 700,
				dialogClass: 'adv-promo-modal',
				draggable: false,
					show: {
					effect: 'fade',
					speed: 200
				},
				hide: {
					effect: 'fade',
					speed: 100
				}
			});
			this.$pushModal.dialog({
				autoOpen: false,
				modal: true,
				draggable: false,
					show: {
					effect: 'fade',
					speed: 200
				},
				hide: {
					effect: 'fade',
					speed: 100
				}
			});
		},

		addPromo: function(promo) {
			var newView = new PromoCodeView({
				model: promo,
				parent: this
			});
			this.$promoTable.append(newView.render().el);
		},

		addAllPromos: function() {
			this.$promoTable.empty();
			PromoCollection.each(this.addPromo, this);
		},

		addPush: function(push) {
			var newView = new PushView({
				model: push,
				parent: this
			});
			this.$pushTable.append(newView.render().el);
		},

		addAllPushes: function() {
			this.$pushTable.empty();
			PushCollection.each(this.addPush, this);
		},

		handlePromoEdit: function(promo) {
			this.$advPromoModal.empty();
			var newView = new PromoCodeEditView({
				parent: this,
				model: promo
			});
			this.$advPromoModal.append(newView.render().el)
			this.$advPromoModal.dialog('open');
		},

		handlePushEdit: function(push) {
			this.$pushModal.empty();
			var newView = new PushEditView({
				parent: this,
				model: push
			});
			this.$pushModal.append(newView.render().el)
			this.$pushModal.dialog('open');
		},

		handlePushAdd: function() {
			var push = new PushModel();
			this.handlePushEdit(push);
		},

		handleQuickAdd: function() {
			var promo = new PromoModel();
			var newView = new QuickPromoEditView({
				parent: this,
				model: promo
			});
			this.$quickPromoModal.empty();
			this.$quickPromoModal.append(newView.render().el);
			this.$quickPromoModal.dialog('open');
		},

		handleAdvancedAdd: function() {
			var promo = new PromoModel();
			this.handlePromoEdit(promo);
		},

		handleSave: function() {
			// SettingsCollection.set(this.settingsCollection.toJSON());

			SettingsModel.set({
				emailImg: this.$emailImg.attr('src'),
				aboutUsImg: this.$aboutUsImg.attr('src')
			})

			GlobalEvents.trigger('form:save', this.$tip);
		}
	});

	return new SettingsView;
});