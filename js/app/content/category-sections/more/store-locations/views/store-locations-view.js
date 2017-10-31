define([
	'backbone',
	'./store-locations-home-view',
	'./create-edit-location-view',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	StoreLocationsHomeView,
	CreateEditLocationView,
	GlobalEvents
) {
	var StoreLocationsView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			StoreLocationsHomeView.parent = this;
			CreateEditLocationView.parent = this;
		},

		regions: {
			visible: null
		},

		render: function() {
			this.showHome();

			return this;
		},

		replaceVisible: function(view) {
			if (view && this.regions.visible !== view) {
				this.$el.empty();
				this.$el.append(view.render().$el.fadeIn(200).focus());
				this.regions.visible = view;
			} else {
				view.render();
			}

			$(window).scrollTop(0);
		},

		showHome: function() {
			this.replaceVisible(StoreLocationsHomeView);
		},

		showCreateEdit: function(model) {
			var self = this;

			GlobalEvents.trigger('form:cancel', function(){
				CreateEditLocationView.model = model;
				self.replaceVisible(CreateEditLocationView);
			});

		}
	});

	return new StoreLocationsView;
});