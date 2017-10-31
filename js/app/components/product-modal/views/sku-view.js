define([
  'underscore',
  'backbone',	
  '../templates/product-modal-sku-tpl'
], function(
  _, 
  Backbone, 	
  SkuTpl
) {
	var SkuView = Backbone.View.extend({
		initialize: function(){

		},

		template: SkuTpl,

		render: function(options){
		    var template = SkuTpl;
		    var self = this;	
	        self.$el.html(self.template({
            	myPrice: self.model.get('myPrice'),
            	type1: self.model.get('type'),
            	holidayPrice: self.model.get('holidayPrice'),
            	label: self.model.get('skuLabel'),
            	suggestedPrice: self.model.get('suggestedPrice')
	        }));			
			return this;
		}
	});

	return SkuView;

});