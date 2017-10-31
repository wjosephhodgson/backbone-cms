define([
	'backbone',
	'./manage-collections-home-view',
	'./create-edit-collection-view',
	'global-events'
], function(
	Backbone,
	ManageCollectionsHomeView,
	CreateEditCollectionView,
	GlobalEvents
) {
	var ManageCollectionsView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			ManageCollectionsHomeView.parent = this;
			CreateEditCollectionView.parent = this;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(ManageCollectionsHomeView);

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
			this.$el.empty();
			this.$el.append(view.render().$el.fadeIn(200).focus());

			$(window).scrollTop(0);
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(ManageCollectionsHomeView);
		},

		showCreateEdit: function(model) {
			GlobalEvents.trigger('form:cancel', function() {
				CreateEditCollectionView.model = model;
				this.replaceVisible(CreateEditCollectionView);
			}.bind(this));
		}
	});

	return new ManageCollectionsView;
});