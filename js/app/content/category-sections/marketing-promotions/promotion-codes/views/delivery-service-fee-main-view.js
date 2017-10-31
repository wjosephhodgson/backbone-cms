define([
  './condition-base-view',
  './delivery-service-fee-local-view',
  './delivery-service-fee-minimum-item-view',
  './delivery-fee-discount-view'
], function(
  ConditionBaseView,
  DeliveryServiceFeeLocalView,
  DeliveryServiceFeeMinimumItemView,
  DeliveryFeeDiscountView
) {
  var DeliveryServiceFeeMainView = ConditionBaseView.extend({
    initialize: function() {
      DeliveryServiceFeeLocalView.parent = this;
      DeliveryServiceFeeMinimumItemView.parent = this;
      DeliveryFeeDiscountView.parent = this;
    },

    templateOptions: {
      title: 'Add New Promotion Code On Delivery/Service Fee',
      description: 'Please use one of the Promotion Conditions below to create a new promotion code for discounting on Delivery/Service fee.'
    },

    category: 'Delivery/Service Fee',

    handleEdit: function(model, el) {
      var toSwitch;

      switch(model.get('number')) {
        case '01':
          toSwitch = DeliveryServiceFeeLocalView;
          break;
        case '02':
          toSwitch = DeliveryServiceFeeMinimumItemView;
          break;
        case '03':
          toSwitch = DeliveryFeeDiscountView;
          break;
      }

      toSwitch.model = model;
      toSwitch && this.parent.replaceVisible(toSwitch, el);
      if( el ) { 
        el.find('div:first').css('opacity',1);      
      }
    }
  });

  return new DeliveryServiceFeeMainView;
});