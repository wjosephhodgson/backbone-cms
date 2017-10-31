define([
  'backbone',
  'components/current-layout/models/layout-model'
], function(Backbone, LayoutModel) {
  var HomepageLayoutCollection = Backbone.Collection.extend({
    url: '/mock/homepage-layouts.json',

    model: LayoutModel,

    getActive: function() {
      return this.where({
        active: true
      });
    },

    setAllInactive: function() {
      this.getActive().forEach(function(layout) {
        layout.set('active', false);
      });
    }
  });

  return HomepageLayoutCollection;
});