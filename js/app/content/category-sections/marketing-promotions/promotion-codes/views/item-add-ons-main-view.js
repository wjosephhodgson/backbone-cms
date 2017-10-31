define([
  './condition-base-view',
  './item-add-ons-in-store-view',
  './item-add-ons-local-view',
  './item-add-ons-minimum-item-view',
  './item-add-ons-specific-category-view',
  './item-add-ons-specific-products-view'
], function(
  ConditionBaseView,
  ItemAddonsInStoreView,
  ItemAddonsLocalView,
  ItemAddonsMinimumItemView,
  ItemAddonsSpecificCategoryView,
  ItemAddonsSpecificProductsView
) {
  var ItemAddOnsMainView = ConditionBaseView.extend({
    initialize: function() {
      ItemAddonsInStoreView.parent = this;
      ItemAddonsLocalView.parent = this;
      ItemAddonsMinimumItemView.parent = this;
      ItemAddonsSpecificCategoryView.parent = this;
      ItemAddonsSpecificProductsView.parent = this;
    },

    templateOptions: {
      title: 'Add New Promotion Code On Item Total',
      description: 'Please use one of the Promotion Conditions below to create a new promotion code for discounting on Item Total (Item + Add Ons).'
    },

    category: 'Item + Add Ons',

    minProdSelected: function(min) {
        return ItemAddonsSpecificProductsView.minSelected(min);
    },

    minCatSelected: function(min) {
        return ItemAddonsSpecificCategoryView.minSelected(min);
    },

    handleEdit: function(model, el) {
      var toSwitch;

      switch(model.get('number')) {
        case '01':
          toSwitch = ItemAddonsSpecificProductsView;
          break;
        case '02':
          toSwitch = ItemAddonsSpecificCategoryView;
          break;
        case '03':
          toSwitch = ItemAddonsMinimumItemView;
          break;
        case '04':
          toSwitch = ItemAddonsInStoreView;
          break;
        case '05':
          toSwitch = ItemAddonsLocalView;
          break;          
      }

      toSwitch.model = model;
      toSwitch && this.parent.replaceVisible(toSwitch, el);
      if( el ){
        el.find('div:first').css('opacity',1);      
      }
    }
  });

  return new ItemAddOnsMainView;
});