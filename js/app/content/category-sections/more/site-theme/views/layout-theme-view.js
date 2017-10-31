define([
	'backbone',
	'../templates/layout-theme-tpl',
	'global-events'
], function(Backbone, LayoutThemeTpl, GlobalEvents) {
	var LayoutThemeView = Backbone.View.extend({
		template: LayoutThemeTpl,

		initialize: function(options) {
			this.parent = options.parent;

			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
		},

		cacheElem: function() {
			this.$colorSchemes = this.$el.find('.site-theme-color-schemes');
		},

		events: {
			'click .site-theme-layout-theme': 'showColorSchemes',
			'click .color-scheme': 'markActiveColorScheme',
		},

		showColorSchemes: function(e) {
			if ($(e.currentTarget).hasClass('seasonal-layout')) {
				this.parent.showSeasonalToggle();
				GlobalEvents.trigger('form:editing');
			} else {
				this.parent.hideSeasonalToggle();
			}

			this.parent.showColorSchemes();
			this.$colorSchemes.fadeIn(200);
			this.parent.updateState('noSubtheme');
		},

		markActiveColorScheme: function(e) {
			var ids, newState;

			ids = e.currentTarget.getAttribute('id').match(/^l(\d)s(\d)$/);

			this.parent.markActiveColorScheme('#' + ids[0]);

			newState = {
				themeId: ids[1],
				themeSchemeId: ids[2]
			};

			this.parent.updateState(newState);

			GlobalEvents.trigger('form:editing');
		}
	});

	return LayoutThemeView;
});