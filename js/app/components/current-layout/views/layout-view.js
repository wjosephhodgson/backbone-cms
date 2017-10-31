define([
	'underscore',
	'backbone',
	'../templates/layout-tpl',
	'global-events'
], function(_, Backbone, LayoutTpl, GlobalEvents) {
	var LayoutView = Backbone.View.extend({
		template: LayoutTpl,

		initialize: function(options) {
			this.parent = options.parent;
			this.listenTo(this.model, 'change:active', this.changeActive);
		},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));

			return this;
		},

		events: {
			'click': 'displayActive'
		},

		displayActive: function() {
			if(this.parent.cb) {
				this.parent.cb(this.model);
			}

			this.parent.setAllInactive();
			this.parent.displayActive(this.model.get('imgUrl'));

			this.model.set('active', true);
			GlobalEvents.trigger('form:editing');
		},

		changeActive: function() {
			if(this.model.get('active')) {
				this.$el.addClass('active');
			} else {
				this.$el.removeClass('active');
			}
		}
	});

	return LayoutView;
});