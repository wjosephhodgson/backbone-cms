define([
  'backbone',
  './product-attributes-home-view',
  'global-events'
], function(
  Backbone,
  ProductAttributesHomeView,
  GlobalEvents
) {
  var ProductAttributesView = Backbone.View.extend({
    tagName: 'div',

    initialize: function() {
      // Set parent of nested views to this view
      // Allows nested views to call functions to change visible views
      ProductAttributesHomeView.parent = this;
    },

    render: function() {
      // Initialize with home view (displays graph)
      this.replaceVisible(ProductAttributesHomeView.render());

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
      this.replaceVisible(ProductAttributesHomeView);
    }

  });

  return new ProductAttributesView;
});