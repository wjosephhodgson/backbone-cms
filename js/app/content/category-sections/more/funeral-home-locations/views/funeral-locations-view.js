define([
	'backbone',
	'./funeral-locations-home-view',
	'./create-edit-location-view',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	FuneralLocationsHomeView,
	CreateEditLocationView,
	GlobalEvents
) {
	var FuneralLocationsView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			FuneralLocationsHomeView.parent = this;
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
			this.replaceVisible(FuneralLocationsHomeView);
		},

		showCreateEdit: function(model) {
			var self = this;

			GlobalEvents.trigger('form:cancel', function(){
				CreateEditLocationView.model = model;
				self.replaceVisible(CreateEditLocationView);
			});

		}
	});

	return new FuneralLocationsView;
});