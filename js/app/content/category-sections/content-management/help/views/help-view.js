define([
	'backbone',
	'./help-home-view',
	'./create-edit-help-view',
	'jqueryui'
], function(
	Backbone, 
	HelpHomeView,
	CreateEditHelpView
) {
	var HelpView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			HelpHomeView.parent = this;
			CreateEditHelpView.parent = this;
		},

		regions: {
			visible: null
		},

		render: function() {
			this.replaceVisible(HelpHomeView.render());

			return this;
		},

		replaceVisible: function(view) {
			if (view && this.regions.visible !== view) {
				this.$el.empty();
				this.$el.append(view.render().$el.fadeIn(200).focus());
				this.regions.visible = view;
			}

			$(window).scrollTop(0);
		},

		showHome: function() {
			this.replaceVisible(HelpHomeView);
		},

		showCreateEdit: function(collection, model) {
			CreateEditHelpView.model = model;
			CreateEditHelpView.collection = collection;
			this.replaceVisible(CreateEditHelpView);
		}
	});

	return new HelpView;
});