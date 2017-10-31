define([
    'backbone',
    '../models/ordersandtraffic-model',
    '../models/ordersandtraffic-reportingTabs-model',
    '../templates/ordersandtraffic-tpl',
    '../collections/ordersAndTraffic-collection',
    './ordersandtraffic-reportTab-view',
    'global-events',
    'jqueryui',
    'jqueryval'
],
 function(
 	Backbone, 
 	OrdersAndTrafficModel, 
 	OrdersAndTrafficReportingTabModel,
 	OrdersAndTrafficTpl,
 	OrdersAndTrafficCollection, 
 	OrdersAndTrafficReportView, 
 	GlobalEvents
 	) {

 	var OrdersAndTrafficView = Backbone.View.extend({
 		
		template: OrdersAndTrafficTpl,

		render: function() {

	     	var self = this;

			OrdersAndTrafficModel.fetchCustom().done(function() {
	     		self.$el.html(self.template(OrdersAndTrafficModel.toJSON()));
	     		self.delegateEvents();
	     		self.cacheElem();
	     		self.applyDates();
	     		self.valForm();


				OrdersAndTrafficCollection.fetchCustom().done(function(){
					self.collection = OrdersAndTrafficCollection.deepClone();
					self.addAllOrdersAndTrafficCodes();

					self.addAllChartsRows();

					google.load('visualization', '1.0',  {'callback':self.drawChart,
					'packages':['corechart']});

					// Load the Visualization API and the Barchart package.

					// Set a callback to run when the Google Visualization API is loaded.


					// Callback that creates and populates a data table,
					// instantiates the bar chart, passes in the data and
					// draws it.
					self.applyDataTables(self.$orderAndTrafficCodeTable);
				}.bind(self));

	     	 });

			self.listenTo(OrdersAndTrafficCollection, 'sort', self.addAllOrdersAndTrafficCodes);

			return self;

		},

		events: {
			'click #go-btn': 'handleGo', 
			'click #print-OrdersChart-btn': 'handleChartAndReportPrint',
			'change #f-displayed-chart': 'addAllChartsRows',
			'click .sort-btn': 'handleSort'
		},

		cacheElem: function() {
			this.$goBtn = this.$el.find('#go-btn');
			this.$startDate = this.$el.find('#start-date');
			this.$endDate = this.$el.find('#end-date');
			this.$reports = this.$el.find('.ordersAndTraffic-Code-Report');
			this.$orderAndTrafficReportsContainer = this.$el.find('#ordersAndTraffic-ReportingTable');
			this.$dateForm = this.$el.find('#ordersAndTarffic-date-form');
			this.$orderAndTrafficCodeTable = this.$el.find('#ordersAndTraffic-code-table');
			this.$displayedChartContainer = this.$el.find('#displayed-content-container');
			this.$displayedChart = this.$el.find('#f-displayed-chart');
			this.$sortButtons = this.$el.find('.sort-btn');
		},

		handleGo: function() {
			var self = this;

			if(self.$dateForm.valid()) {
				this.$reports.show();
			}
		},

		addCodes: function(codes) {
			var newView = new OrdersAndTrafficReportView({
				model: codes,
				parent: this
			});

			this.$orderAndTrafficReportsContainer.append(newView.render().el);
		},

		addAllOrdersAndTrafficCodes: function() {
			this.$orderAndTrafficReportsContainer.empty();
			OrdersAndTrafficCollection.each(this.addCodes, this);
		},

		applyDates: function() {
			var self = this;
			console.log("applyDates");
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

		applyDataTables: function() {
			this.dataTable = this.$orderAndTrafficCodeTable.DataTable({ 
				autoWidth: false,
				deferRender: false,
				jQueryUI: false,
				lengthChange: false,
				ordering: false,
				processing: false,
				//  searching: true,
				serverSide: false,
				stateSave: false,
				bDestroy: true,

				// Disable everything but paging and info
				info: false,
				paging: false,

				infoCallback: function(settings, start, end, max, total, pre) {
					return start + " - " + end + " of " + total;
				},

				pagingType: "simple",
				"pageLength": 50,
				"language": {
					"paginate": {
						"previous": " ",
						"next": " "
					}
				},

				// What order everything should be in
				dom: 'lrt<"data-tables-pagination"ip>'
			});
		},

        handleChartAndReportPrint: function() {
            var title = document.title;
	        var divElements1 = document.getElementById('chart_div').innerHTML;
	        var divElements2 = document.getElementById('print-OrdersAndTraffic-codes-section').innerHTML;

	        var printWindow = window.open();

	        //open the window
	        printWindow.document.open();

	        //write the html to the new window, link to css file
            printWindow.document.write('<html><head><title>' + title + '</title><style>@media print{html, body{height: auto;}} button{display:none!important;} </style><link href="css/styles.css" type="text/css" rel="stylesheet"></head><body style="width:722px;" >');
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

		addChartsRowsVisitors: function(codes) {
	        var self = this;

			var newView = new OrdersAndTrafficReportView({
				model: codes,
				parent: self
			});
 
			var rowVisitors = [newView.model.get('orderandTrafficReportDate'),newView.model.get('numberofVisitors')];

			CHARTOPTIONS = {'title':'Visitors',
	                       'width':650,
	                       'height':400,
	                       legend: { position: 'none' },
	                       'vAxis': 
	                       {textStyle:{color: 'black', fontSize: 11}},
	                       textPosition: 'in'};
   
            if(ROWARRAY.length < 10) { 
             ROWARRAY.push(rowVisitors);
            }
        },

		addChartsRowsPageViews: function(codes) {
	        var self = this;

			var newView = new OrdersAndTrafficReportView({
				model: codes,
				parent: self
			});

			CHARTOPTIONS = {'title':'Page Views',
	           'width':650,
	           'height':400,
	           legend: { position: 'none' },
	           'vAxis': 
	           {textStyle:{color: 'black', fontSize: 11}},
	           textPosition: 'in'};

 
			var rowPageViews = [newView.model.get('orderandTrafficReportDate'),newView.model.get('pageViews')];
          
            if(ROWARRAY.length < 10) { 
             ROWARRAY.push(rowPageViews);
            }
        },


       addChartsRowsNumberofOrders: function(codes) {
	        var self = this;

			var newView = new OrdersAndTrafficReportView({
				model: codes,
				parent: self
			});

			CHARTOPTIONS = {'title':'Orders',
               'width':650,
               'height':400,
                legend: { position: 'none' },
               'vAxis': 
               {textStyle:{color: 'black', fontSize: 11}},
               textPosition: 'in',};
 
			var rownumberofOrders = [newView.model.get('orderandTrafficReportDate'),newView.model.get('numberofOrders')];
          
            if(ROWARRAY.length < 10) { 
             ROWARRAY.push(rownumberofOrders);
            }
        },

        addChartsRowsConversionRate: function(codes) {

            var self = this;

       	 	var newView = new OrdersAndTrafficReportView({
				model: codes,
				parent: self
			});

			CHARTOPTIONS = {'title':'',
               'width':650,
               'height':400,
                vAxis: {format: '#.00\'%\''}
               };   //  
			
            var rowConverstionRate = [newView.model.get('orderandTrafficReportDate'),newView.model.get('conversionRate')];
          
            if(ROWARRAY.length < 10) { 
				ROWARRAY.push(rowConverstionRate);
            }
        },


		addAllChartsRows: function() {

			var self = this;

			var value = self.$displayedChart.find('option:selected').val();

			self.$displayedChartContainer.empty();

			ROWARRAY = [];

			if (value === 'Visitors') {
				OrdersAndTrafficCollection.each(self.addChartsRowsVisitors, self);

				google.load('visualization', '1.0',  {'callback':self.drawChart,
				'packages':['corechart']});
            }
            else if (value === 'PageViews') {
				self.$displayedChartContainer.fadeIn(200);
				OrdersAndTrafficCollection.each(self.addChartsRowsPageViews, self);

	            google.load('visualization', '1.0',  {'callback':self.drawChart,
	            'packages':['corechart']});

			}
			else if (value === 'Orders') {
				self.$displayedChartContainer.fadeIn(200);
				OrdersAndTrafficCollection.each(self.addChartsRowsNumberofOrders, self);

		        google.load('visualization', '1.0',  {'callback':self.drawChart,
		        	'packages':['corechart']});
 
			}
			else if (value === 'ConversionRate') {
				self.$displayedChartContainer.fadeIn(200);

				OrdersAndTrafficCollection.each(self.addChartsRowsConversionRate, self);

		        google.load('visualization', '1.0',  {'callback':self.drawConversionRateChart,
		        	'packages':['corechart']});

		        // only conversion rate chart is called seperately due to percentage configuration
			}
			 else {
				self.$displayedChartContainer.fadeOut(200);
			}

		},
         // for all other charts except Conversion Rate
		drawChart: function(codes) {
        // Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Date');
			data.addColumn('number', '');
			data.addRows(ROWARRAY);    
	     
        // Set chart options
	        var options = CHARTOPTIONS;            
	        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	        chart.draw(data, options);
		},

		drawConversionRateChart: function(codes) {
        // Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Date');
			data.addColumn('number', 'Conversion Rate');
			data.addRows(ROWARRAY);   
	      
        // Set chart options 
	        var options = CHARTOPTIONS; 

	        var formatter = new google.visualization.NumberFormat({suffix: '%', negativeColor: '#FF0000', decimalSymbol: '.', fractionDigits: 2});
		    formatter.format(data, 1); 

	        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	        chart.draw(data, options);
		},

		handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				OrdersAndTrafficCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				OrdersAndTrafficCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				OrdersAndTrafficCollection.changeSort(attribute, 'ascending');
			}

			OrdersAndTrafficCollection.sort();
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

	return new OrdersAndTrafficView;
 }); 