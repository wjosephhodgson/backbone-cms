define([
  'backbone',
  '../models/condition-model'
], function(Backbone, ConditionModel) {
  var ConditionCollection = Backbone.Collection.extend({
    url: '/mock/promotion-code-conditions.json',

    model: ConditionModel,

    getByCategory: function(category) {
      return this.where({category: category});
    }
  });

  return new ConditionCollection;
});