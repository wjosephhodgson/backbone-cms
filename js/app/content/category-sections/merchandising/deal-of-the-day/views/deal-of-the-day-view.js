define([
  'backbone',
  './deal-of-the-day-home-view',
  'global-events'
], function(
  Backbone,
  DealoftheDayHomeView,
  GlobalEvents
) {
  var DealoftheDayView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      // Set parent of nested views to this view
      // Allows nested views to call functions to change visible views
      DealoftheDayHomeView.parent = this;
    },

    render: function() {
      // Initialize with home view (displays graph)
      this.replaceVisible(DealoftheDayHomeView.render());

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
      this.replaceVisible(DealoftheDayHomeView);
    },

    showCreateEdit: function(model, collection) {
      // var self = this;

      // GlobalEvents.trigger('form:cancel', function() {
      //   EditSectionView.model = model;
      //   EditSectionView.collection = collection;
      //   self.replaceVisible(EditSectionView);
      // });
    }
  });

  return new DealoftheDayView;
});