define([
  './add-promo-code-base-view',
  'components/general-product/views/general-product-view',
  'components/featured-occasions/collections/all-occasions-collection'
], function(
  AddPromoCodeBaseView,
  GeneralProductView,
  AllOccasionsCollection
) {
  var ItemAddOnsSpecificCategoryView = AddPromoCodeBaseView.extend({
    options: {
      title: 'Promo Discount On Item Total',
      subtitle: 'Specific Category Discount',
      description: 'Discount on the item total (item + add on) when any item from a specific category is in the order.',
      promotionConditions: '<div id="categories-container"><div class="panel-title">Category Selection</div></div>',
      promotionOffer: true
    },

    augment: {
      render: function() {
        this.cacheElem();

        AllOccasionsCollection.fetchCustom().done(function() {
          this.occasionsCollection = AllOccasionsCollection.deepClone();
          this.occasionsCollection.each(function(model) {
            model.set('active', false);
          });

          this.$categoriesContainer.append(
            this.getCategoriesComponent(this.occasionsCollection).render().el
          );
          
          this.$removePanel = this.$el.find('.general-product .panel:first');
          this.$removePanel.removeClass('panel').wrapInner('<div class="col-12"></div>');
          this.$categoriesContainer.unwrap();
          this.$removeRow.hide();

        }.bind(this));
      }
    },

    minSelected: function(min) {
      // this function returns true if the minimum number of selected items in the feature view meets the option
      var
        self = this,
        totalActive,
        query = {};

      query[catSelect.activeAttribute] = true;
      totalActive = catSelect.collection.where(query).length;

      if( totalActive >= min ){
        return true;
      } else {
        return false;
      }
    },  

    cacheElem: function() {
      this.$categoriesContainer = this.$el.find('#categories-container');
      this.$catCol12 = this.$categoriesContainer.closest('.col-12');
      this.$removeRow = this.$catCol12.find('.row:first');      
    },

    getCategoriesComponent: function(collection) {
      catSelect = new GeneralProductView({
        activeTitle:'Selected Categories',
        activeTableTitle:'Category',
        allTitle:'Category Search',
        allSearchPlaceholder: 'Category Search Terms',
        activeAttribute:'active',
        nameAttribute:'occasion',
        async: false,
        hoverTitle: true,
        selectAll: false,
        collection: collection,
        hideGrids: true
      });
      return catSelect;
    }
  });

  return new ItemAddOnsSpecificCategoryView;
});