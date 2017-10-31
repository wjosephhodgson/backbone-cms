define([
    'backbone',
    '../models/top50-referrals-model',
    '../templates/top-referrals-tpl',
    '../collections/top-referrals-collection',
    './top-referrals-ReportTab-view',
    'global-events',
    'jqueryui',
    'jqueryval'
],
 function(
 	Backbone, 
 	TopFiftyReferralsModel, 
 	TopReferralsTpl,
 	TopReferralsCollection, 
 	TopReferralsReportView, 
 	GlobalEvents
 	) {

 	var TopReferralsView = Backbone.View.extend({
 		

     template: TopReferralsTpl,

     render: function() {

     	var self = this;

     		TopReferralsCollection.fetchCustom().done(function(){

	     		self.$el.html(self.template());
	     		self.delegateEvents();
	     		self.cacheElem();
	     		self.valForm();
	     		self.applyDates();


     			self.dataTable && self.dataTable.destroy();
				self.collection = TopReferralsCollection.deepClone();
				self.addAllTopReferrals();

				self.addAllChartsRows();

				google.load('visualization', '1.0',  {'callback':self.drawChart,
            'packages':['corechart']});

			   // Load the Visualization API and the Barchart package.


		        // Set a callback to run when the Google Visualization API is loaded.
		

		        // Callback that creates and populates a data table,
		        // instantiates the bar chart, passes in the data and
		        // draws it.
     		 self.listenTo(TopReferralsCollection, 'sort', self.addAllTopReferrals);

				}.bind(self));


     	return self;

     },

     events: {
     	'click #go-btn': 'handleGo',
     	'click #print-topReferrals-reports-btn': 'handlePrintReport',
     	'click #print-ReferralsChart-btn': 'handlePrintChart',
     	'click .sort-btn': 'handleSort'
     },

     cacheElem: function() {
			this.$goBtn = this.$el.find('#go-btn');
			this.$startDate = this.$el.find('#start-date');
			this.$endDate = this.$el.find('#end-date');
			this.$reports = this.$el.find('.top-Referrals-Report');
			this.$topReferralsReportsContainer = this.$el.find('#top-Referrals-ReportingTable');
			this.$dateForm = this.$el.find('#topReferrals-date-form');
			this.$topReferralsTable = this.$el.find('#top-referrals-table');
			this.$chartDivContainer = this.$el.find('#chart_div');
			this.$sortButtons = this.$el.find('.sort-btn');
     },

      handleGo: function() {
			var self = this;

			if(self.$dateForm.valid()) {
				document.getElementById("reportandChart-section").style.visibility = "visible";
			}
		},

		addTopReferrals: function(codes) {

			var newView = new TopReferralsReportView({
				model: codes,
				parent: this
			});

			this.$topReferralsReportsContainer.append(newView.render().el);
           
		},

		addAllTopReferrals: function() {
			this.$topReferralsReportsContainer.empty();
            
			TopReferralsCollection.each(this.addTopReferrals, this);
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


	    handlePrintChart: function() {


			    var title = document.title;
		        var divElements1 = document.getElementById('chart_div').innerHTML;
                var divElements2 = document.getElementById('print-top-referrals-section').innerHTML;

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

	      

			var newView = new TopReferralsReportView({
				model: codes,
				parent: self
			});
 
			var row = [newView.model.get('refWebsiteAddress'),newView.model.get('numberofVisits')];

          
           if(ROWARRAY.length < 10) 
           { 
             ROWARRAY.push(row);
            }

  },

		addAllChartsRows: function() {

		 var self = this;
		  
          ROWARRAY = [];

          TopReferralsCollection.each(self.addChartsRows, self);

		},


     drawChart: function(codes) {
        
        // Create the data table.

      //  var self = this;


        var data = new google.visualization.DataTable();
         data.addColumn('string', 'Website Address');
         data.addColumn('number', '');

         data.addRows(ROWARRAY);   
       

        // Set chart options
        var options = {'title':'Number of Visits',
                       'width':650,
                       'height':400,
                       legend: {position: 'none'},
                       'vAxis': 
                       {textStyle:{color: 'black', fontSize: 11, paddingRight: '100',marginRight: '100'}},
                       textPosition: 'none'
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
				TopReferralsCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				TopReferralsCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				TopReferralsCollection.changeSort(attribute, 'ascending');
			}

			TopReferralsCollection.sort();
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


     return new TopReferralsView;
 });