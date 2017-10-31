define([
    'backbone',
    '../models/promo-code-models',
    '../models/promo-code-reportingTabs-model',
    '../templates/promo-codes-tpl',
    '../collections/promo-codes-collection',
    './promo-codes-reportTab-view',
    'global-events',
    'jqueryval'
],
 function(
 	Backbone, 
 	PromoCodeModel, 
 	PromoCodeReportingTabModel,
 	PromoCodeTpl,
 	PromoCodeReportCollection, 
 	PromoCodesReportView,
 	GlobalEvents
 	) {

 	var PromoCodesView = Backbone.View.extend({
 		

     template: PromoCodeTpl,

     initialize: function() {

      GlobalEvents.off('form:editing');  // removes Global Events editing state
     },

     render: function() {

     	var self = this; 



     	PromoCodeModel.fetchCustom().done(function(){     		
     		self.$el.html(self.template(PromoCodeModel.toJSON()));
     		self.delegateEvents();
     		self.cacheElem();
     		self.applyDates();
     		self.applyTooltips();
     		self.valForm();

     		PromoCodeReportCollection.fetchCustom().done(function(){

				self.addAllPromoCodes();

	     	});
});
     	 self.listenTo(PromoCodeReportCollection, 'sort', self.addAllPromoCodes);
     	return self;

     },

     events: {
     	'click #go-btn': 'handleGo',
     	'click #print-promoCodes-btn': 'handlePrint',
     	'click .sort-btn': 'handleSort'

     	// ,'keyup #f-source-code-search-value': 'handleSearch'
     },

     cacheElem: function() {
			this.$goBtn = this.$el.find('#go-btn');
			this.$startDate = this.$el.find('#start-date');
			this.$endDate = this.$el.find('#end-date');
			this.$reports = this.$el.find('.promo-Code-Report');
			this.$promoCodeReportsContainer = this.$el.find('#promo-codes-ReportingTable');
			this.$dateForm = this.$el.find('#promoCode-date-form');
			//this.$sourceCodeSearch = this.$el.find('#f-source-code-search-value');

			this.$promoCodeTable = this.$el.find('#promo-code-table');

			//search table fields
			this.$promoCodesSearch = this.$el.find('#f-promo-code-search-value');
			this.$sortButtons = this.$el.find('.sort-btn');

     },

      handleGo: function() {
			var self = this;

			if(self.$dateForm.valid()) {
				this.$reports.show();
			}
		},

		applyTooltips: function() {
	        this.$el.find('.icon-tool-tip').tooltip();
	    },
	        
		addCodes: function(codes) {

			var newView = new PromoCodesReportView({
				model: codes,
				parent: this
			});

			this.$promoCodeReportsContainer.append(newView.render().el);

		},

		addAllPromoCodes: function() {
			this.$promoCodeReportsContainer.empty();

			PromoCodeReportCollection.each(this.addCodes, this);
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

		applyDataTables: function() {
		      this.dataTable = this.$promoCodeTable.DataTable({ 
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


          handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				PromoCodeReportCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				PromoCodeReportCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				PromoCodeReportCollection.changeSort(attribute, 'ascending');
			}

			PromoCodeReportCollection.sort();
		},


        handlePrint: function() {


			    var title = document.title;
		        var divElements = document.getElementById('print-promo-codes-section').innerHTML;

		        var printWindow = window.open();

		        //open the window
		        printWindow.document.open();

		        //write the html to the new window, link to css file
	            printWindow.document.write('<html><head><title>' + title + '</title><style>@media print{html, body{height: auto;}}button{display:none!important;} </style><link href="css/styles.css" type="text/css" rel="stylesheet"></head><body style="width:722px;" >');
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

	   handleSearch: function() {
	   	
			this.dataTable.columns(2).search(this.$promoCodesSearch.val()).draw();
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


     return new PromoCodesView;
 }); 