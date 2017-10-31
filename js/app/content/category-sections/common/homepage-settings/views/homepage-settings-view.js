define([
	'underscore',
	'backbone',
	'../templates/homepage-settings-tpl',
	'../models/homepage-settings-model',
	'components/current-layout/views/current-layout-view',
	'../collections/homepage-layout-collection',
	'global-events',
	'jqueryval'
], function(
	_,
	Backbone,
	HomepageSettingsTpl,
	HomepageSettingsModel,
	CurrentLayoutView,
	HomepageLayoutCollection,
	GlobalEvents
) {
	var HomepageSettingsView = Backbone.View.extend({
		tagName: 'form',

		id: 'm-hompeage-settings',

		template: HomepageSettingsTpl,

		render: function() {
			var self = this;

			HomepageSettingsModel.fetchCustom().done(function() {
				self.currentLayoutView = new CurrentLayoutView({
					type:'Homepage',
					collection: new HomepageLayoutCollection(
						HomepageSettingsModel.get('featuredLayout')
					),
					cb: self.updateFeaturedCounts.bind(self)
				});

				var data = HomepageSettingsModel.toJSON();

				data.activeLayout = HomepageSettingsModel.get('featuredLayout');

				self.$el.html(self.template(data));
				self.cacheElem();
				self.delegateEvents();
				self.applyToolTips();
				self.$homepageLayoutContainer.append(self.currentLayoutView.render().el);
			});

			return self;
		},

		events: {
			'click #save-btn':'handleSave'
		},

		cacheElem: function() {
			this.$homepageLayoutContainer = this.$el.find('#homepage-layout-container');
			this.$featuredItemCount = this.$el.find('#f-featured-item-count');
			this.$homepageFooterText = this.$el.find('#f-homepage-footer-text');
			this.$maxCountDisplay = this.$el.find('#max-count-display');
			this.$suggestedCountDisplay = this.$el.find('#suggested-count-display');
			this.$tip = this.$el.find('.tooltip-change');
			this.$recNumber = this.$el.find('#featured-products-number-text');
		},

		handleSave: function() {
			HomepageSettingsModel.set({
				homepageFooterText: this.$homepageFooterText.val().trim(),
				featuredItemCount: this.$featuredItemCount.find('option:selected').val(),
				featuredLayout: this.currentLayoutView.collection.where({active:true})[0].toJSON()
			});

			GlobalEvents.trigger('form:save', this.$tip);
		},

		updateFeaturedItemSelect: function(suggested) {
			this.$featuredItemCount.empty();

			var frag = document.createDocumentFragment();
			var option;

			for(var i = 0; i < suggested; ++i) {
		    option = document.createElement('option');
		    option.value = i + 1;
		    option.text = i + 1;
		    frag.appendChild(option);
			}

			this.$featuredItemCount.append(frag);
			this.$featuredItemCount.val(suggested);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		updateFeaturedCounts: function(model) {
			this.activeLayout = model;

			var max = model.get('maxNumber');
			var suggested = model.get('suggestedNumber');

			this.updateFeaturedItemSelect(suggested);
			this.$maxCountDisplay.text(max);
			this.$recNumber.attr('title','We think this homepage looks best with '+suggested+' featured products.');
			this.$suggestedCountDisplay.text(model.get('suggestedNumber'));
		}
	});

	return new HomepageSettingsView;
});