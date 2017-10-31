define([
	'underscore',
	'backbone',
	'../models/site-meta-model',
	'../templates/site-meta-tpl',
	'global-events'
], function(_, Backbone, SiteMetaModel, SiteMetaTpl, GlobalEvents) {
	var SiteMetaView = Backbone.View.extend({
		tagName: 'form',

		id: "p-site-meta",

		template: SiteMetaTpl,

		render: function() {
			var self = this;

			SiteMetaModel.fetchCustom().done(function(){
				self.$el.html(self.template(SiteMetaModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.validate();
				self.applyToolTips();
			});

			return this;
		},

		events: {
			'click #save-btn': 'handleSave',
			'change #f-defaultInfoActive': 'handleToggle'
		},

		cacheElem: function() {
			this.$homeTitle   = this.$el.find('#f-homeTitle');
			this.$homeDesc    = this.$el.find('#f-homeDesc');
			this.$homeKwords  = this.$el.find('#f-homeKwords');
			this.$homeTags    = this.$el.find('#f-homeTags');
			this.$aboutTitle  = this.$el.find('#f-aboutTitle');
			this.$aboutDesc   = this.$el.find('#f-aboutDesc');
			this.$aboutKwords = this.$el.find('#f-aboutKwords');
			this.$aboutTags   = this.$el.find('#f-aboutTags');
			this.$catTitle    = this.$el.find('#f-catTitle');
			this.$catDesc     = this.$el.find('#f-catDesc');
			this.$catKwords   = this.$el.find('#f-catKwords');
			this.$catTags     = this.$el.find('#f-catTags');
			this.$prodTitle   = this.$el.find('#f-prodTitle');
			this.$prodDesc    = this.$el.find('#f-prodDesc');
			this.$prodKwords  = this.$el.find('#f-prodKwords');
			this.$prodTags    = this.$el.find('#f-prodTags');
			this.$helpTitle   = this.$el.find('#f-helpTitle');
			this.$helpDesc    = this.$el.find('#f-helpDesc');
			this.$helpKwords  = this.$el.find('#f-helpKwords');
			this.$helpTags    = this.$el.find('#f-helpTags');

			this.$defaultInfoActive = this.$el.find('#f-defaultInfoActive');
			this.$tip = this.$el.find('.tooltip-change');


		},

		handleToggle: function(e) {
			var self = this;

			GlobalEvents.trigger('form:editing');

			// If setting default info to active
			if(self.$defaultInfoActive.is(':checked')) {
				// Prevent animation first
				self.$defaultInfoActive.prop('checked', false);

				// Trigger form reset modal, if confirmed continue with checking and
				// update all fields to default value
				GlobalEvents.trigger('form:reset', function() {
					self.$defaultInfoActive.prop('checked', true);

					self.$homeTitle.prop('disabled', true).val(SiteMetaModel.get('homeTitle'));
					self.$homeDesc.prop('disabled', true).val(SiteMetaModel.get('homeDesc'));
					self.$homeKwords.prop('disabled', true).val(SiteMetaModel.get('homeKwords'));
					self.$homeTags.prop('disabled', true).val(SiteMetaModel.get('homeTags'));
					self.$aboutTitle.prop('disabled', true).val(SiteMetaModel.get('aboutTitle'));
					self.$aboutDesc.prop('disabled', true).val(SiteMetaModel.get('aboutDesc'));
					self.$aboutKwords.prop('disabled', true).val(SiteMetaModel.get('aboutKwords'));
					self.$aboutTags.prop('disabled', true).val(SiteMetaModel.get('aboutTags'));
					self.$catTitle.prop('disabled', true).val(SiteMetaModel.get('catTitle'));
					self.$catDesc.prop('disabled', true).val(SiteMetaModel.get('catDesc'));
					self.$catKwords.prop('disabled', true).val(SiteMetaModel.get('catKwords'));
					self.$catTags.prop('disabled', true).val(SiteMetaModel.get('catTags'));
					self.$prodTitle.prop('disabled', true).val(SiteMetaModel.get('prodTitle'));
					self.$prodDesc.prop('disabled', true).val(SiteMetaModel.get('prodDesc'));
					self.$prodKwords.prop('disabled', true).val(SiteMetaModel.get('prodKwords'));
					self.$prodTags.prop('disabled', true).val(SiteMetaModel.get('prodTags'));
					self.$helpTitle.prop('disabled', true).val(SiteMetaModel.get('helpTitle'));
					self.$helpDesc.prop('disabled', true).val(SiteMetaModel.get('helpDesc'));
					self.$helpKwords.prop('disabled', true).val(SiteMetaModel.get('helpKwords'));
					self.$helpTags.prop('disabled', true).val(SiteMetaModel.get('helpTags'));
				});

			// If setting default to inactive enable editing
			} else {
				this.$homeTitle.prop('disabled', false);
				this.$homeDesc.prop('disabled', false);
				this.$homeKwords.prop('disabled', false);
				this.$homeTags.prop('disabled', false);
				this.$aboutTitle.prop('disabled', false);
				this.$aboutDesc.prop('disabled', false);
				this.$aboutKwords.prop('disabled', false);
				this.$aboutTags.prop('disabled', false);
				this.$catTitle.prop('disabled', false);
				this.$catDesc.prop('disabled', false);
				this.$catKwords.prop('disabled', false);
				this.$catTags.prop('disabled', false);
				this.$prodTitle.prop('disabled', false);
				this.$prodDesc.prop('disabled', false);
				this.$prodKwords.prop('disabled', false);
				this.$prodTags.prop('disabled', false);
				this.$helpTitle.prop('disabled', false);
				this.$helpDesc.prop('disabled', false);
				this.$helpKwords.prop('disabled', false);
				this.$helpTags.prop('disabled', false);
			}
		},

		handleSave: function() {
			// Set whether or not default info is active
			SiteMetaModel.set({
				defaultInfoActive: this.$defaultInfoActive.is(':checked')
			});

			// If default info is inactive, update custom values
			if(!SiteMetaModel.get('defaultInfoActive')) {
				SiteMetaModel.set({
					homeTitleCustom: this.$homeTitle.val().trim(),
					homeDescCustom: this.$homeDesc.val().trim(),
					homeKwordsCustom: this.$homeKwords.val().trim(),
					homeTagsCustom: this.$homeTags.val().trim(),
					aboutTitleCustom: this.$aboutTitle.val().trim(),
					aboutDescCustom: this.$aboutDesc.val().trim(),
					aboutKwordsCustom: this.$aboutKwords.val().trim(),
					aboutTagsCustom: this.$aboutTags.val().trim(),
					catTitleCustom: this.$catTitle.val().trim(),
					catDescCustom: this.$catDesc.val().trim(),
					catKwordsCustom: this.$catKwords.val().trim(),
					catTagsCustom: this.$catTags.val().trim(),
					prodTitleCustom: this.$prodTitle.val().trim(),
					prodDescCustom: this.$prodDesc.val().trim(),
					prodKwordsCustom: this.$prodKwords.val().trim(),
					prodTagsCustom: this.$prodTags.val().trim(),
					helpTitleCustom: this.$helpTitle.val().trim(),
					helpDescCustom: this.$helpDesc.val().trim(),
					helpKwordsCustom: this.$helpKwords.val().trim(),
					helpTagsCustom: this.$helpTags.val().trim()
				});

			// Otherwise remove all custom values
			} else {
				SiteMetaModel.set({
					homeTitleCustom: '',
					homeDescCustom: '',
					homeKwordsCustom: '',
					homeTagsCustom: '',
					aboutTitleCustom: '',
					aboutDescCustom: '',
					aboutKwordsCustom: '',
					aboutTagsCustom: '',
					catTitleCustom: '',
					catDescCustom: '',
					catKwordsCustom: '',
					catTagsCustom: '',
					prodTitleCustom: '',
					prodDescCustom: '',
					prodKwordsCustom: '',
					prodTagsCustom: '',
					helpTitleCustom: '',
					helpDescCustom: '',
					helpKwordsCustom: '',
					helpTagsCustom: ''
				});
			}

			GlobalEvents.trigger('form:save', this.$tip);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validate: function() {
			this.$el.validate();
			jQuery.validator.addClassRules({
				'f-meta-title': {
					noCarets: true
				},
				'f-meta-desc': {
					noCarets: true
				},
				'f-meta-keywords': {
					noCarets: true
				}					
			});
		}		
	});

	return new SiteMetaView;
});