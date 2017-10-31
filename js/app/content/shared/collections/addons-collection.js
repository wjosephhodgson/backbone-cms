define([
  'backbone',
  '../models/addons-model'
], function(Backbone, AddonsModel) {
  var AddonsCollection = Backbone.Collection.extend({
    model: AddonsModel,

    url:'/mock/add-ons.json'
  });

  return new AddonsCollection;
});