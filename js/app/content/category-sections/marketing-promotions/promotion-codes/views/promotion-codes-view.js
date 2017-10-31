define([
  'backbone',
  './promotion-codes-home-view',
  './add-promo-code-view',
  './item-only-view',
  './add-ons-view',
  './order-total-main-view',
  './delivery-service-fee-main-view',
  './item-add-ons-main-view',
  './quick-promo-view',
  './bulk-view',
  'global-events'
], function(
  Backbone,
  PromotionCodesHomeView,
  AddPromoCodeView,
  ItemOnlyView,
  AddOnsView,
  OrderTotalMainView,
  DeliveryServiceFeeMainView,
  ItemAddOnsMainView,
  QuickPromoView,
  BulkView,
  GlobalEvents
) {
  var PromotionCodesView = Backbone.View.extend({
    tagName: 'div',

    id: 'p-promotion-codes',

    // set parent of all nested views, allow them to navigate to each other
    initialize: function() {
      PromotionCodesHomeView.parent = this;
      AddPromoCodeView.parent = this;
      ItemOnlyView.parent = this;
      AddOnsView.parent = this;
      OrderTotalMainView.parent = this;
      DeliveryServiceFeeMainView.parent = this;
      ItemAddOnsMainView.parent = this;
      QuickPromoView.parent = this;
      BulkView.parent = this;
    },

    regions: {
      visible: null
    },

    render: function() {
      this.showHome();
      el = null; 
      return this;
    },

    replaceVisible: function(view, el) {
      var self = this;
      if(el){
        GlobalEvents.trigger('form:cancel', function() {
          el.empty();
          el.append(view.render().$el.fadeIn(200).focus());
        });
      } else {
        GlobalEvents.trigger('form:cancel', function() {
          self.$el.empty();
          self.$el.append(view.render().$el.fadeIn(200).focus());
          self.regions.visible = view;
        });

        $(window).scrollTop(0);
      }
    },

    showHome: function() {
      this.replaceVisible(PromotionCodesHomeView);
    },

    showAdd: function() {
      this.replaceVisible(AddPromoCodeView);
    },

    showQuick: function() {
      this.replaceVisible(QuickPromoView);
    },

    handleEdit: function(model) {
      switch(model.get('category')) {
        case 'Order Total':
          this.showOrderTotal(model);
          break;
        case 'Item + Add Ons':
          this.showItemAddOns(null, model);
          break;
        case 'Delivery/Service Fee':
          this.showDeliveryServiceFee(null, model);
          break;
        case 'Item Only':
          this.showItemOnly(model);
          break;
        case 'Item Add-Ons':
          this.showAddOns(null, model);
          break;
      }
    },

    checkAddOns: function() {
      return AddOnsView.minSelected(1);
    },

    checkProducts: function() {
      return ItemAddOnsMainView.minProdSelected(1);
    },

    checkCats: function() {
      return ItemAddOnsMainView.minCatSelected(1);
    },

    checkTiers: function() {
      return OrderTotalMainView.minTierSelected(1);
    },    

    showItemOnly: function(model, el) {
      ItemOnlyView.model = model;
      this.replaceVisible(ItemOnlyView, el);
    },

    showBulk: function(model, el) {
      BulkView.model = model;
      this.replaceVisible(BulkView, el);
    },

    showAddOns: function(model, el) {
      AddOnsView.model = model;
      this.replaceVisible(AddOnsView, el);
    },

    // tables
    showOrderTotal: function(el, model) {
      if(model) {
        OrderTotalMainView.handleEdit(model);
      } else {
        this.replaceVisible(OrderTotalMainView, el);
      }
    },

    showDeliveryServiceFee: function(el, model) {
      if(model) {
        DeliveryServiceFeeMainView.handleEdit(model);
      } else {
        this.replaceVisible(DeliveryServiceFeeMainView, el);
      }
    },

    showItemAddOns: function(el, model) {
      if(model) {
        ItemAddOnsMainView.handleEdit(model);
      } else {
        this.replaceVisible(ItemAddOnsMainView, el);
      }
    }
  });

  return new PromotionCodesView;
});