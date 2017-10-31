define([
  'backbone',
  '../models/tier-model'
], function(Backbone, TierModel) {
  var TierCollection = Backbone.Collection.extend({ model: TierModel });

  return TierCollection;
});