define([
  'backbone',
  '../models/deal-model'
], function(Backbone, DealModel) {
  var SkuEntryCollection = Backbone.Collection.extend({
    model: DealModel,



  });



  return SkuEntryCollection;
});