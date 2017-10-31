define([
  'backbone',
  '../models/facility-search-model'
], function(Backbone, FacilitySearchModel) {
  var FacilitySearchCollection = Backbone.Collection.extend({
    url: '/mock/facilities.json',

    model: FacilitySearchModel
  });

  return new FacilitySearchCollection;
});