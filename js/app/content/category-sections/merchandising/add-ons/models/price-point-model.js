define(['backbone'], function(Backbone) {
  var PricePointModel = Backbone.Model.extend({
    defaults: {
      isDefault: false,
      label: '',
      price: ''
    }
  });

  return PricePointModel;
});