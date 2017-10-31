define([
	'backbone',
	'../templates/email-settings-tpl',
	'../models/email-settings-model',
	'components/current-layout/views/current-layout-view',
	'components/current-layout/collections/layout-collection',
	'global-events',
	'jqueryval'
], function(
	Backbone,
	EmailSettingsTpl,
	EmailSettingsModel,
	CurrentLayoutView,
	LayoutCollection,
	GlobalEvents
) {
	var EmailSettingsView = Backbone.View.extend({
		tagName: 'form',

		id:'p-homepage-customization',

		template: EmailSettingsTpl,

		render: function() {
			var self = this;

			EmailSettingsModel.fetchCustom().done(function() {
				self.layoutCollection = new LayoutCollection(EmailSettingsModel.get('featuredLayout'));

				self.currentLayoutView = new CurrentLayoutView({
					type:'Email',
					collection: self.layoutCollection
				});

				self.$el.html(self.template(EmailSettingsModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.applyToolTips();

				self.$currentLayoutContainer.append(self.currentLayoutView.render().el);
				self.validateForm();
			});

			return self;
		},

		events: {
			'click #save-btn': 'handleSave',
			'click #cancel-btn': 'handleCancel'
		},

		cacheElem: function() {
			this.$currentLayoutContainer = this.$el.find('#current-layout-container');

			this.$merchantConfirmationActive = this.$el.find('#merchant-confirmation-active');
			this.$merchantConfirmationEmail = this.$el.find('#merchant-confirmation-email');
			this.$orderConfirmationActive = this.$el.find('#order-confirmation-active');
			this.$confirmationEmailHeader = this.$el.find('#confirmation-email-header');
			this.$confirmationEmailFooter = this.$el.find('#confirmation-email-footer');
			this.$thankYouActive = this.$el.find('#thank-you-active');
			this.$welcomeActive = this.$el.find('#welcome-active');
			this.$giftRemindersActive = this.$el.find('#gift-reminders-active');
			this.$tip = this.$el.find('.tooltip-change');
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validateForm: function() {
			var self = this;

			self.editForm = self.$el.validate({
				rules: {
					'merchant-confirmation-email': {
						email: true,

						required: function() {
							return self.$merchantConfirmationActive.is(':checked');
						}
					},
					'confirmation-email-header': {
						maxlength: 1000
					},
					'confirmation-email-footer': {
						maxlength: 1000
					}
				}
			});
		},

		handleSave: function() {
			var self = this;

				if(this.editForm.valid()) {
					var self = this;

					EmailSettingsModel.set({
						merchantConfirmationActive: this.$merchantConfirmationActive.is(':checked'),
						merchantConfirmationEmail: this.$merchantConfirmationEmail.val().trim(),
						orderConfirmationActive: this.$orderConfirmationActive.is(':checked'),
						confirmationEmailHeader: this.$confirmationEmailHeader.val().trim(),
						confirmationEmailFooter: this.$confirmationEmailFooter.val().trim(),
						thankYouActive: this.$thankYouActive.is(':checked'),
						welcomeActive: this.$welcomeActive.is(':checked'),
						giftRemindersActive: this.$giftRemindersActive.is(':checked'),
						featuredLayout:  self.layoutCollection.where({active: true})[0].toJSON()
					});

					GlobalEvents.trigger('form:save', this.$tip);

				} else {
					GlobalEvents.trigger('form:invalid', this.$tip);
				}

		},

		handleCancel: function() {
			GlobalEvents.trigger('form:reset', this.render.bind(this));
		}
	});

	return new EmailSettingsView;
})