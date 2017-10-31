 define([
	'backbone',
	'../templates/product-page-modal-view-tpl',
	'../models/pricing-model',
	'global-events'
], function(
	Backbone, 
	ProductPageModalTpl, 
	PricingModel,
	GlobalEvents
) { 

var ProductPageModalView = Backbone.View.extend({
    template: ProductPageModalTpl,

    initialize: function() {
      var self = this;
    },

    render: function() {    

    	console.log(this.model);
    //   var self = this;
  		this.viewModel = this.model.toJSON();
  		// console.log(this.viewModel);
  		this.$el.html(this.template(this.viewModel));

  		// this.cacheElem();
  		this.delegateEvents();

    //   console.log(this.viewModel);

    return this;

    },

    events: {
		'click #save-btn': 'handleSave',
		'click #cancel-btn': 'closeModal',
		'click #print-btn': 'handlePrint'
    },

  	cacheElem: function() {
      // Save Features

  	},

  
      // For modal changes
    handleSave: function() {

      this.model.set({
       
      });

      this.closeModal();
      // this.parent.addAllSections();
    },

    handlePrint: function() {

  		var title = document.title;
  		var divElements = document.getElementById('product-modal').innerHTML;

  		var printWindow = window.open();

  		//open the window
  		printWindow.document.open();

  		//write the html to the new window, link to css file
  		printWindow.document.write('<html><head><title>' + title + '</title><style>@media print{html, body{height: auto;}} </style><link href="css/styles.css" type="text/css" rel="stylesheet"></head><body>');
  		printWindow.document.write(divElements);
  		printWindow.document.write('</body></html>');
  		printWindow.document.close();
  		printWindow.focus();

  		//The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
  		setTimeout(function() {
  			printWindow.print();
  			printWindow.close();
  		}, 300);
  	},

  	closeModal: function() {
  		this.parent.closeModal();
  	}

  });

  return new ProductPageModalView;
});




























 
