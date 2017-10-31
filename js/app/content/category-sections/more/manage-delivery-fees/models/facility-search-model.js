define([
  'backbone'
], function(Backbone) {
  var FacilitySearchModel = Backbone.Model.extend({
    defaults: {
      stateZip: '',
      facilityName: ''
    }
  });

  return FacilitySearchModel;
});