 define([
	'backbone',
	'../templates/product-page-modal-view-tpl',
  // '../models/settings-model',
  // '../models/pricing-model',
  'components/featured-product/collections/featured-product-collection',
  'components/featured-product/views/featured-product-view',
	'global-events'
], function(
	Backbone, 
	ProductPageModalTpl, 
  //GeneralProductSettingsModel,
  // PricingModel,
  FeaturedProductCollection,
  FeaturedProductView,
	GlobalEvents
) { 

return Backbone.View.extend({

    template: ProductPageModalTpl,

    initialize: function() {
      var self = this;
    },

    render: function() {    
      var self = this;

		  // this.viewModel = this.model.toJSON();
      self.$el.html(self.template());
      console.log(self.parent);

      // Feature Products should be loaded from ProdutPageModalView
      // self.featuredProductView = new FeaturedProductView({
      //   collection: new FeaturedProductCollection(self.model.get('featuredProducts')),
      //   title: 'Selected Products'
      // });

      // // this.featuredProductView = new FeaturedProductView({
      // //     collection: new FeaturedProductCollection(this.parent.model.get('featuredProducts')),
      // //     title: 'Selected Products'
      // // });
      this.cacheElem();
      this.$featuredProduct.append(self.parent.featuredProductView.render().$el);
  		
  		this.delegateEvents();

    return this;

    },

    events: {
		'click #save-btn': 'handleSave',
		'click #cancel-btn': 'closeModal'
    },

  	cacheElem: function() {
      // Save Features
      this.$featuredProduct = this.$el.find('#featured-product');
  	},

  
      // For modal changes
    handleSave: function() {

      // this.model.set({
       
      // });

      this.closeModal();
    },

  	closeModal: function() {
  		this.parent.closeModal();
  	}

  });

});




























 
