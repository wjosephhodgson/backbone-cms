define([
  'backbone',
  '../models/city-search-model'
], function(Backbone, CitySearchModel) {
  var CitySearchCollection = Backbone.Collection.extend({
    url: '/mock/cities.json',
    
    model: CitySearchModel
  });

  return new CitySearchCollection;
});