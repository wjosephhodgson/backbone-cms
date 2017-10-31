define([
  'backbone',
  './sympathy-page-home-view',
  './edit-view',
  'global-events'
], function(
  Backbone,
  SympathyPageHomeView,
  EditSectionView,
  GlobalEvents
) {
  var AboutUsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      // Set parent of nested views to this view
      // Allows nested views to call functions to change visible views
      SympathyPageHomeView.parent = this;
      EditSectionView.parent = this;
    },

    render: function() {
      // Initialize with home view (displays graph)
      this.replaceVisible(SympathyPageHomeView.render());

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
      this.replaceVisible(SympathyPageHomeView);
    },

    showCreateEdit: function(model, collection) {
      var self = this;

      GlobalEvents.trigger('form:cancel', function() {
        EditSectionView.model = model;
        EditSectionView.collection = collection;
        self.replaceVisible(EditSectionView);
      });
      
    }

  });

  return new AboutUsView;
});