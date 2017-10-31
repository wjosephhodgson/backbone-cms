define([
	'jquery',
	'backbone',
	'../templates/home-tpl',
	'../collections/quick-links-collection',
	'./quick-links-modal-view',
	'global-events',
	'jqueryui'
], function($, Backbone, HomeTpl, QuickLinksCollection, QuickLinksModalView, GlobalEvents) {
	'use strict';

	var HomeView = Backbone.View.extend({
		tagName: 'div',

		template: HomeTpl,

		initialize: function() {
			// Set modal parent to this view
			QuickLinksModalView.parent = this;
		},

		events: {
			'click #open-modal-btn': 'openModal',
			'click #save-btn': 'handleSave',
			'change #f-site-notes': 'editNotes'
		},

		render: function() {
			var self = this;

			QuickLinksCollection.fetchCustom().done(function() {
				var data = {
					quickLinks: QuickLinksCollection.toJSON()
				};

				self.$el.html(self.template(data));
				self.setModal();
				self.applyToolTips();

				self.cacheElem();
				self.delegateEvents();
			});

			return self;
		},

		editNotes: function() {
			GlobalEvents.trigger('form:editing');
		},

		cacheElem: function() {
			this.$modal = $('#quick-links-modal');
			this.$saveBtn = this.$modal.find('#save-btn');
			this.$cancelBtn = this.$modal.find('#cancel-btn');
			this.$tip = this.$el.find('.tooltip-change');
			this.$notes = this.$el.find('#f-site-notes');
		},

		setModal: function() {
			if(this.modal && this.modal.dialog('instance')) {
				this.modal.dialog('destroy');
			}

			this.modal = this.$el.find('#quick-links-modal').dialog({
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
				},
				resizable: false
			});
		},

		openModal: function() {
			QuickLinksModalView.render();
			this.modal.dialog('open');
		},

        handleSave: function() {
            var self = this;

            GlobalEvents.trigger('form:save', this.$tip);

        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        }

	});

	return new HomeView;
});