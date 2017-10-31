define([
      './add-promo-code-base-view',
      '../templates/delivery-service-fee-minimum-item-promo-condition-tpl',
      'components/general-product/views/general-product-view',
      'components/featured-occasions/collections/all-occasions-collection',
      'components/featured-product/views/featured-product-view',
      'components/featured-product/collections/featured-product-collection',
      '../models/promotion-code-model',
      'global-events'
], function(
      AddPromoCodeBaseView,
      DeliveryServiceFeeMinimumItemPromoConditionTpl,
      GeneralProductView,
      AllOccasionsCollection,
      FeaturedProductView,
      FeaturedProductCollection,
      PromotionCodeModel,
      GlobalEvents
) {
    var DeliveryServiceFeeMinimumItemView = AddPromoCodeBaseView.extend({
        options: {
            title: 'Promo Discount On Delivery Fee',
            description: 'Discount on Delivery/Service Fee when item total (item + add-on) is greater than or equal specific amount, OR when specific item, OR any item from a specific category is in the order.  Example: $10 off the delivery fee for the birthday bouquet.',
            promotionConditions: DeliveryServiceFeeMinimumItemPromoConditionTpl((this.model || new PromotionCodeModel).toJSON()),
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
                }.bind(this));

                this.featuredProductView = new FeaturedProductView({
                    collection: new FeaturedProductCollection(),
                    selectAll: true
                });

                this.$productsContainer.append(this.featuredProductView.render().el);
            },

            events: {
                'change #f-selectedProductsCategories': 'handleToggle',
                'click #f-stackingActive': 'handleStackToggle'
            },
         },

        cacheElem: function() {
          this.$categoriesContainer = this.$el.find('#categories-container');
          this.$productsContainer = this.$el.find('#products-container');
          this.$toggler = this.$el.find('#f-selectedProductsCategories');
          this.$stackingActive = this.$el.find('#f-stackingActive');
        },

        handleStackToggle: function(e) {
          var
            self = this,
            targEl = $(e.target);
            
            if(targEl.is(":checked")) {
              e.preventDefault();

              GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Allow Stacking?',
                    text: 'Any promotions that are set as stackable can be combined resulting in the customer receiving multiple discounts. Are you sure you want to activate this?',
                    confirmBtnText: 'OK',
                    cancelBtnText: 'Cancel'
                },

                confirmFn: function(){
                    console.log(e.target.checked);
                    targEl.prop("checked",!targEl.prop("checked"));
                
                  // self.$stackingActive.prop('checked',true);
                 
                        
                },
                cancelFn: function(){
                    // do nothing
                }
              });
            } else {
              //do nothing
              !self.$stackingActive.is('checked');
              // self.$stackingActive.prop('checked',true);
              // targEl.prop("checked", !targEl.prop("checked"));
              console.log("reaching Else");
              
            }

    },


    handleToggle: function() {
      var togVal = this.$toggler.find('option:selected').val();
      if( togVal == 'All Products' ){
        this.$productsContainer.hide();
        this.$categoriesContainer.hide();
      } else if ( togVal == 'Specific Products' ){
        this.$productsContainer.show();
        this.$categoriesContainer.hide();        
      } else if ( togVal == 'Specific Categories' ){
        this.$productsContainer.hide();
        this.$categoriesContainer.show();        
      }
    },

    getCategoriesComponent: function(collection) {
      return new GeneralProductView({
        activeTitle:'Selected Categories',
        activeTableTitle:'Category',
        allTitle:'Category Search',
        allSearchPlaceholder: 'Category Search Terms',
        activeAttribute:'active',
        nameAttribute:'occasion',
        async: false,
        hoverTitle: true,
        collection: collection,
        hideGrids: true,
        showCategoryID: true
      });
    }
  });

  return new DeliveryServiceFeeMinimumItemView;
});