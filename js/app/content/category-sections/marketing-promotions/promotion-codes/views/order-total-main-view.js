define([
  './condition-base-view',
  './order-total-local-delivery-view',
  './order-total-max-allowed-view',
  './order-total-minimum-spend-view',
  './order-total-register-view',
  './order-total-tiered-discounts-view'
], function(
  ConditionBaseView,
  OrderTotalLocalDeliveryView,
  OrderTotalMaxAllowedView,
  OrderTotalMinimumSpendView,
  OrderTotalRegisterView,
  OrderTotalTieredDiscountsView
) {
  var OrderTotalMainView = ConditionBaseView.extend({
    initialize: function() {
      OrderTotalLocalDeliveryView.parent = this;
      OrderTotalMaxAllowedView.parent = this;
      OrderTotalMinimumSpendView.parent = this;
      OrderTotalRegisterView.parent = this;
      OrderTotalTieredDiscountsView.parent = this;
    },

    templateOptions: {
      title: 'Add New Promotion Code On Order Total',
      description: 'Please use one of the Promotion Conditions below to create a new promotion code for discounting on Order Total.'
    },

    category: 'Order Total',

    minTierSelected: function(min) {
        return OrderTotalTieredDiscountsView.minSelected(min);
    },

    handleEdit: function(model, el) {
      var toSwitch;

      switch (model.get('number')) {
        case '01':
          toSwitch = OrderTotalMinimumSpendView;
          break;
        case '02':
          toSwitch = OrderTotalMaxAllowedView;
          break;
        case '03':
          toSwitch = OrderTotalTieredDiscountsView;
          break;
        case '04':
          toSwitch = OrderTotalLocalDeliveryView;
          break;
        case '05':
          toSwitch = OrderTotalRegisterView;
          break;
      }

      toSwitch.model = model;
      toSwitch && this.parent.replaceVisible(toSwitch, el);
      if( el ){
        el.find('div:first').css('opacity',1);
      }
    }
  });

  return new OrderTotalMainView;
});