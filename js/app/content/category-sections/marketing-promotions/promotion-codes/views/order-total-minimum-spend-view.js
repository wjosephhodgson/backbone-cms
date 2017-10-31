define([
  './add-promo-code-base-view',
  '../models/promotion-code-model',
  '../templates/order-total-minimum-spend-promo-condition-tpl'
], function(
  AddPromoCodeBaseView,
  PromotionCodeModel,
  OrderTotalMinimumSpendPromoConditionTpl
) {
  var OrderTotalMinimumSpendView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Order Total',
      subtitle: 'Minimum Spend Required',
      description: 'Discount on the Order Total fbased on the amount of order total.',
      promotionConditions: OrderTotalMinimumSpendPromoConditionTpl((this.model || new PromotionCodeModel).toJSON()),
      promotionOffer: true
    }
  });

  return new OrderTotalMinimumSpendView;
});