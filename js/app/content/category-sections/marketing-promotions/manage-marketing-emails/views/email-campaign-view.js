define([
	'backbone',
	'../templates/email-campaign-tpl',
	'global-events'
], function(Backbone, EmailCampaignTpl, GlobalEvents) {
	var EmailCampaignView = Backbone.View.extend({
		tagName: 'tr',

		template: EmailCampaignTpl,

		initialize: function(options) {
			this.parent = options.parent;
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			this.delegateEvents();
			this.cacheElem();

			return this;
		},

		cacheElem: function() {
			this.$active = this.$el.find('.on-off-switch');
		},

		events: {
			'click .icon-edit': 'handleEdit',
			'click .icon-undo': 'handleUndo',
			'click .on-off-switch': 'handleSwitch'
		},

		handleEdit: function() {
			this.parent.handleEdit(this.model);
		},

		handleUndo: function() {
			if(this.model.get('editable')) {
				this.model.set({
					active: true,
					customSubject: '',
					customFeaturedProducts: null
				});

				setTimeout(this.render.bind(this), 100);
			}
		},

		handleSwitch: function(e) {
			if(this.model.get('editable')) {
				GlobalEvents.trigger('form:editing');
				this.model.set({
					active: this.$active.is(':checked')
				});

				// Render after switch is finished switching
				//
				// I chose to render rather than manipulate reset button visibility
				// because reset may still be visible even if active was set to
				// true (because other things can be reset)
				setTimeout(this.render.bind(this), 100);
			} else {
				e.preventDefault()
			}
		}
	});

	return EmailCampaignView;
});