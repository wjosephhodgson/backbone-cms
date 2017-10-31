define([
  'backbone'
], function(Backbone) {
  var TierModel = Backbone.Model.extend({
    defaults: {
      minOrderTotal: '',
      discountType: '',
      discountAmount: ''
    }
  });

  return TierModel;
});