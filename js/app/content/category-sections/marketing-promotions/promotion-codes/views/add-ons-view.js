define([
  'backbone',
  '../templates/add-promo-base-tpl',
  '../templates/add-ons-promo-condition-tpl',
  'components/general-product/views/general-product-view',
  'content/shared/collections/addons-collection'
], function(
  Backbone,
  AddPromoBaseTpl,
  AddOnsPromoConditionTpl,
  GeneralProductView,
  AddonsCollection
) {
  var AddOnsView = Backbone.View.extend({
    render: function() {
      this.$el.html(AddPromoBaseTpl(_.extend({
        title: 'Promo Discount On Item\'s Add-On',
        subtitle: '',
        description: 'Discount on the item\'s Add-On when item total (item + add-on) is greater than or equal specific amount.  Also when any item from a specific category is in the order.  Example: 30% off the balloon for birthday bouquet.',
        promotionConditions: AddOnsPromoConditionTpl(this.model.toJSON()),
        promotionOffer: true
      }, this.model.toJSON())));
      this.delegateEvents();
      this.cacheElem();

      AddonsCollection.fetchCustom().done(function() {
        this.addonsCollection = AddonsCollection.deepClone();
        this.addonsCollection.each(function(model){
          model.set('active', false);
        });

        this.$addonsContainer.append(
          this.getAddonsComponent(this.addonsCollection).render().el
        );

        this.toggleAddOns();

      }.bind(this));

      return this;
    },

    cacheElem: function() {
      this.$addonsContainer = this.$el.find('#add-ons-container');
      this.$allAddOns = this.$el.find('#f-allAddOns');
    },

    events: {
      'click #cancel-btn': 'showAdd',
      'change #f-allAddOns': 'toggleAddOns'
    },

    showAdd: function() {
      this.parent.showHome();
    },

    toggleAddOns: function() {
      var self = this;
      if( self.$allAddOns.is(':checked') ){
        self.$addonsContainer.hide();
      } else {
        self.$addonsContainer.show();
      }
    },

    minSelected: function(min) {
      // this function returns true if the minimum number of selected items in the feature view meets the option
      var
        self = this,
        totalActive,
        query = {};

      query[this.selectAddons.activeAttribute] = true;
      totalActive = this.selectAddons.collection.where(query).length;

      if( totalActive >= min ){
        return true;
      } else {
        return false;
      }
    },      

    getAddonsComponent: function(collection) {
      this.selectAddons = new GeneralProductView({
        activeTitle:'Selected Product Add-Ons',
        activeTableTitle:'Add-on',
        allTitle:'Add-on Search',
        allSearchPlaceholder: 'Add-on Search Term',
        activeAttribute:'active',
        nameAttribute:'name',
        async: false,
        collection: collection,
        imageSearch: true
      });
      return this.selectAddons;
    }

  });



  return new AddOnsView;
});