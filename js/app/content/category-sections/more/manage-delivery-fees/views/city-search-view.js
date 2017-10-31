define([
  'backbone',
  '../templates/city-search-tpl'
], function(Backbone, CitySearchTpl) {
  var CitySearchView = Backbone.View.extend({
    template: CitySearchTpl,

    initialize: function() {
      this.setElement(this.template(this.model.toJSON()));
    }
  });

  return CitySearchView;
});