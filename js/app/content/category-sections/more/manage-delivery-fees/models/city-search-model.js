define([
  'backbone'
], function(Backbone) {
  var CitySearchModel = Backbone.Model.extend({
    defaults: {
      cityName: ''
    }
  });

  return CitySearchModel;
});