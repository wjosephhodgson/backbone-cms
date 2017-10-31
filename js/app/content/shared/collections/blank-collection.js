define([
  'backbone',
  '../models/blank-model'
], function(Backbone, BlankModel) {
  var BlankCollection = Backbone.Collection.extend({
    model: BlankModel
  });

  return BlankCollection;
});