define([
    'backbone',
    '../models/top50-products-model',
    '../templates/top-products-tpl',
    '../collections/top-products-collection',
    './top-products-ReportTab-view',
    'global-events',
    'jqueryui',
    'jqueryval'
],
 function(
 	Backbone, 
 	TopFiftyProductsModel, 
 	TopProductTpl,
 	TopProductsCollection, 
 	TopProductsReportView, 
 	GlobalEvents
 	) {

 	var TopProductsView = Backbone.View.extend({
 		

     template: TopProductTpl,

  
     render: function() {

     	var self = this;

     		TopProductsCollection.fetchCustom().done(function(){

	     		self.$el.html(self.template());
	     		self.delegateEvents();
	     		
	     		self.cacheElem();
	     		self.valForm();
	     		self.applyDates();

				self.collection = TopProductsCollection.deepClone();
				self.addAllTopProducts();

				self.addAllChartsRows();

				google.load('visualization', '1.0',  {'callback':self.drawChart,
            'packages':['corechart']});

			   // Load the Visualization API and the Barchart package.


		        // Set a callback to run when the Google Visualization API is loaded.
		

		        // Callback that creates and populates a data table,
		        // instantiates the bar chart, passes in the data and
		        // draws it
          self.listenTo(TopProductsCollection, 'sort', self.addAllTopProducts);

				}.bind(self));


     	return self;

     },

     events: {
     	'click #go-btn': 'handleGo',
     	'click #print-productChart-btn': 'handlePrintChartAndReport',
     	'click .sort-btn': 'handleSort'

     },

     cacheElem: function() {
			this.$goBtn = this.$el.find('#go-btn');
			this.$startDate = this.$el.find('#start-date');
			this.$endDate = this.$el.find('#end-date');
			this.$reports = this.$el.find('.top-Products-Report');
			this.$topProductsReportsContainer = this.$el.find('#top-products-ReportingTable');
			this.$dateForm = this.$el.find('#topProducts-date-form');
			this.$chartDivContainer = this.$el.find('#chart_div');
			this.$sortButtons = this.$el.find('.sort-btn');
     },

      handleGo: function() {
			var self = this;

			if(self.$dateForm.valid()) {
				document.getElementById("show-report-Chart-section").style.visibility = "visible";
			}
		},

		addTopProduct: function(codes) {

			var newView = new TopProductsReportView({
				model: codes,
				parent: this
			});

			this.$topProductsReportsContainer.append(newView.render().el);
           
		},

		addAllTopProducts: function() {

			this.$topProductsReportsContainer.empty();


			TopProductsCollection.each(this.addTopProduct, this);
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
			    onSelect: function(selected) {
			        self.$endDate.datepicker('option', 'minDate', selected);
			        self.$startDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});

			self.$endDate.datepicker({
			    onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected);
			        self.$endDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});
		},

		


	    handlePrintChartAndReport: function() {
			    var title = document.title;

			    var divElements1 = document.getElementById('chart_div').innerHTML;

			    var divElements2 = document.getElementById('print-top-products-section').innerHTML;

		        var printWindow = window.open();

		        //open the window
		        printWindow.document.open();

		        //write the html to the new window, link to css file
	            printWindow.document.write('<html><head><title>' + title + '</title><style>@media print{html, body{height: auto;}} button{display:none!important;}</style><link href="css/styles.css" type="text/css" rel="stylesheet"></head><body style="width:722px;" >');
		        printWindow.document.write(divElements1);
		        printWindow.document.write(divElements2);
		        printWindow.document.write('</body></html>');
		        printWindow.document.close();
		        printWindow.focus();

		        //The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
		        setTimeout(function() {
		            printWindow.print();
		            printWindow.close();
		        }, 300);
	   },

	   addChartsRows: function(codes) {

	        var self = this;

	      

			var newView = new TopProductsReportView({
				model: codes,
				parent: self
			});
 
			var row = [newView.model.get('productId'),newView.model.get('numbersSold')];

          
           if(ROWARRAY.length < 10) 
           { 
             ROWARRAY.push(row);
            }

  },

		addAllChartsRows: function() {

		 var self = this;
		  
          ROWARRAY = [];

          TopProductsCollection.each(self.addChartsRows, self);

		},


     drawChart: function(codes) {
        
        // Create the data table.

      //  var self = this;

       var i = 0;

        var data = new google.visualization.DataTable();
         data.addColumn('string', 'productId');
         data.addColumn('number', 'UnitS Sold');

         data.addRows(ROWARRAY);   
       

        // Set chart options
        var options = {'title':'',
                       'width':600,
                       'height':400,
                       'vAxis': {title:'',textStyle:{color: 'black', fontSize: 11}}
                   }; 

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);


      },
       
        handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				TopProductsCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				TopProductsCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				TopProductsCollection.changeSort(attribute, 'ascending');
			}

			TopProductsCollection.sort();
		},


	    valForm: function() {
			var self = this;

			self.$dateForm.validate({
				rules: {
					'start-date':  {
						required: true
					},
					'end-date': {
						required: true
					}	

					}		
			});
		}

 	}); 


     return new TopProductsView;
 }); 