define([
	'underscore',
	'backbone',
	'../templates/navigation-tpl',
	'settings',
	'hoverintent'
], function(_, Backbone, NavigationTpl, Settings) {
	var NavigationView = Backbone.View.extend({
		template: NavigationTpl,

		initialize: function() {
			this.setElement(this.template(Settings));
			this.cacheElem();
			this.$helpGroup.addClass('help-group');
			// HoverIntent used
			this.$el.find('.nav-group').hoverIntent({
				over: function() {
				$(this).addClass('active');
			},
			out: function() {
				$(this).removeClass('active');
			},
			timeout: 400

			});
		},

		cacheElem: function() {
			this.$navGroups = this.$el.find('.nav-group');
			this.$helpGroup = this.$el.find('.nav-group:has(.nav-title#help)');
		},

		events: {
			'click a': 'handleLink',
			'click .help-group': 'goHelp'
		},

		goHelp: function() {
			var win = window.open('/#', '_blank');
		},

		showNav: function() {
			$(this).addClass('active');
		},

		hideNav: function() {
			$(this).removeClass('active');
		},

		handleLink: function(e) {
			$(e.target).closest('.nav-group').trigger('mouseleave');
		}
	});

	return new NavigationView;
});