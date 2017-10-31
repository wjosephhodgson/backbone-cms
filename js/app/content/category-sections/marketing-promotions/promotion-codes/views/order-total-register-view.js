define([
  './add-promo-code-base-view'
], function(
  AddPromoCodeBaseView
) {
  var OrderTotalRegisterView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Order Total',
      subtitle: 'First Time Purchase by Registered Customers',
      description: 'Discount on the Order Total for registered customers placing order for the first time.  The customer will receive the promotion code in her email after registration.',
      promotionConditions: '<div class="row row-spaced"><div class="col-12 font-size-l">The customer should be registered and placing the order for the first time.</div></div>',
      promotionOffer: true
    }
  });

  return new OrderTotalRegisterView;
});