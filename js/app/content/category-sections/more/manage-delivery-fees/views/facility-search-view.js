define([
  'backbone',
  '../templates/facility-search-tpl'
], function(Backbone, FacilitySearchTpl) {
  var FacilitySearchView = Backbone.View.extend({
    template: FacilitySearchTpl,

    initialize: function() {
      this.setElement(this.template(this.model.toJSON()));
    }
  });

  return FacilitySearchView;
});