define([
  'backbone'
], function(Backbone) {
  var ConditionModel = Backbone.Model.extend({
    defaults: {
      number: '',
      condition: ''
    }
  });

  return ConditionModel;
});