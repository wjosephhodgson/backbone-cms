define([
  'backbone',
  '../templates/print-recipe-tpl'
  ], function(
	Backbone,
	PrintRecipeTpl
	) { 
 	var PrintRecipeView = Backbone.View.extend({

 	   tagName: 'form',

 	   id: 'printRecipeModal',

	   template: PrintRecipeTpl,

		initialize: function() {

			var self = this;

		},

	   render: function(viewModel) {

            this.viewModel = this.model.toJSON();

			this.$el.html(this.template(this.viewModel));

			this.delegateEvents();

            var self = this;
            return this;

       },

	   events: {
         'click #cancel-btn': 'closeModal',

         'click #print-btn': 'handlePrint'
	   },

	   handlePrint: function() {


		    var title = document.title;
	        var divElements = document.getElementById('print-recipe-section').innerHTML;

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
			this.$el.parent().dialog('close');
		}


 	} ); // Print View ends here

  return new PrintRecipeView;

}); // define View ends here