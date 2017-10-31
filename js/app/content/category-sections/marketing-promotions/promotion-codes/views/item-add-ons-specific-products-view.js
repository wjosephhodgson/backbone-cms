define([
  './add-promo-code-base-view',
  'components/featured-product/views/featured-product-view',
  'components/featured-product/collections/featured-product-collection'
], function(
  AddPromoCodeBaseView,
  FeaturedProductView,
  FeaturedProductCollection
) {
  var ItemAddOnsSpecificProductsView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Item Total',
      subtitle: 'Specific Products discount',
      description: 'Discount on the item total (item + add on) when specific item is in the order.',
      promotionConditions: '<div id="products-container"></div>',
      promotionOffer: true
    },

    augment: {
      render: function() {
        this.cacheElem();
        this.featuredProductView = new FeaturedProductView({
          collection: new FeaturedProductCollection(),
          selectAll: true
        });

        this.$productsContainer.append(this.featuredProductView.render().el);
        this.$prodPanel.removeClass('panel');
        this.$removeRow.hide();
        this.$productsContainer.unwrap().unwrap().unwrap();
      }
    },

    minSelected: function(min) {
      // this function returns true if the minimum number of selected items in the feature view meets the option
      var
        self = this,
        totalActive = this.featuredProductView.collection.where({featured:true}).length;
      if( totalActive >= min ){
        return true;
      } else {
        return false;
      }
    },

    cacheElem: function() {
      this.$productsContainer = this.$el.find('#products-container');
      this.$prodCol12 = this.$productsContainer.closest('.col-12');
      this.$removeRow = this.$prodCol12.find('.row:first');
      this.$featuredProducts = this.$el.find('#m-featured-products');
      this.$prodPanel = this.$featuredProducts.find('.panel:first');
    }
  });

  return new ItemAddOnsSpecificProductsView;
});