define([
  'backbone',
  '../models/flower-model'
], function(Backbone, FlowerModel) {
  var FlowerCollection = Backbone.Collection.extend({

    model: FlowerModel
    
  });

  return new FlowerCollection;
});