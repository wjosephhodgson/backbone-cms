define([
	'jquery',
	'backbone',
	'../templates/help-tpl'
], function(
	$, 
	Backbone, 
	helpTpl
) {
	'use strict';

	var helpView = Backbone.View.extend({
		tagName: 'div',

		template: helpTpl,

		initialize: function() {

		},

		events: {
			'click #help-btn': 'goHome'
		},

		goHome: function() {
			window.location.href = '/#'
		},

		render: function() {
			var self = this;

			self.$el.html(self.template());
			self.cacheElem();
			self.delegateEvents();

			return self;
		},

		cacheElem: function() {
			// this.$modal = $('#quick-links-modal');
			// this.$saveBtn = this.$modal.find('#save-btn');
			// this.$cancelBtn = this.$modal.find('#cancel-btn');
		}

	});

	return new helpView;
});