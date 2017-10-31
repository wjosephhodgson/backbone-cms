define([
  './add-promo-code-base-view',
  '../templates/order-totaled-tiered-discounts-promo-condition-offer-tpl',
  './tier-view',
  '../collections/tier-collection'
], function(
  AddPromoCodeBaseView,
  OrderTotaledTieredDiscountsPromoConditionOfferTpl,
  TierView,
  TierCollection
) {
  var OrderTotalTieredDiscountsView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Order Total',
      subtitle: 'Tiered Discounts',
      description: 'Different discount on the order total based on different amount of order total (Tier Discount)',
      promotionConditions: OrderTotaledTieredDiscountsPromoConditionOfferTpl(),
      promotionOffer: false
    },

    augment: {
      render: function() {
        this.cacheElem();
        this.stopListening(this.tierCollection);
        this.tierCollection = new TierCollection();
        this.listenTo(this.tierCollection, 'add remove', this.addAllTiers);
        this.addAllTiers(this.tierCollection);
      },

      events: {
        'click #add-tier-btn': 'addNewTier'
      }
    },

    cacheElem: function() {
      this.$tierList = this.$el.find('#tier-list');
    },

    minSelected: function(min) {
      // this function returns true if the minimum number of selected items in the feature view meets the option
      var
        self = this,
        totalActive;

      totalActive = this.tierCollection.length;
      console.log(totalActive);

      if( totalActive >= min ){
        return true;
      } else {
        return false;
      }
    },  

    addNewTier: function() {
      this.tierCollection.add({});
    },

    addTier: function(tier) {
      var newView = new TierView({
        model: tier,
        collection: this.tierCollection
      });

      this.$tierList.append(newView.render().el);
    },

    addAllTiers: function() {
      this.$tierList.empty();
      this.tierCollection.each(this.addTier, this);
    }
  });

  return new OrderTotalTieredDiscountsView;
});