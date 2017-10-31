define([
	'backbone',
	'../models/find-a-florist-model',
	'../models/find-a-florist-top20-model',
	'../templates/find-a-florist-tpl',
	'../collections/find-a-florist',
	'./top20-view',
	'global-events',
	'jqueryval'
], function(
	Backbone, 
	FindAFloristModel, 
	FindAFloristTopTwentyModel,
	FindAFloristTpl, 
	FindAFloristCollection,
	TopTwentyView,
	GlobalEvents
) {
	var FindAFloristView = Backbone.View.extend({


		template: FindAFloristTpl,

		render: function() {
			var self = this;

			FindAFloristModel.fetchCustom().done(function(){
				self.$el.html(self.template(FindAFloristModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.applyDates();

				FindAFloristCollection.fetchCustom().done(function() {
					self.addAllStats();
				});

			});

			return self;
		},


		events: {
			'click #go-btn': 'handleGo',
			'click #print-top20Report-btn': 'handleReportTabPrint',
			'change #start-date': 'handleStartChange',
			'change #end-date': 'handleEndChange'
		},

		cacheElem: function() {
			this.$goBtn = this.$el.find('#go-btn');
			this.$startDate = this.$el.find('#start-date');
			this.$endDate = this.$el.find('#end-date');
			this.$reports = this.$el.find('.find-a-florist-report');
			this.$topTwentyContainer = this.$el.find('#find-a-florist-top20-table');
			this.$dateForm = this.$el.find('#f-find-a-florist-date-form');
		},

		handleStartChange: function() {
			var 
				self = this,
				from;
	        from = this.$startDate.datepicker('getDate');
			this.$endDate.val('');
			
			var monthMillisec=152*24*60*60*1000;
			var maxDater=new Date();
			maxDater.setTime( from.getTime() + monthMillisec );
			var minDater = new Date();
			minDater.setTime( from.getTime() );
			this.$endDate.removeAttr('disabled');
			this.$endDate.datepicker('option', 'minDate', minDater);
			this.$endDate.datepicker('option', 'maxDate', maxDater);
		},

		handleEndChange: function() {

		},

		handleGo: function() {
			var self = this;
			self.valForm();
			if(self.$dateForm.valid()) {
				this.$reports.show();
			}
		},

		 handleReportTabPrint: function() {
		    var title = document.title;
	        var divElements = document.getElementById('print-top-20-section').innerHTML;

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

		addStat: function(stat) {
			var newView = new TopTwentyView({
				model: stat,
				parent: this
			});

			this.$topTwentyContainer.append(newView.render().el);
		},

		addAllStats: function() {
			this.$topTwentyContainer.empty();
			FindAFloristCollection.each(this.addStat, this);
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
				dateFormat: 'MM yy',

			    onSelect: function(selected) {
			        //self.$endDate.datepicker('option', 'minDate', selected);
			        self.$startDate.trigger('blur');
			    },

		        beforeShow: function(el, dp) { 
		            $('#ui-datepicker-div').addClass('hide-calendar');
		        },

			    onClose: function(dateText, inst) {
					$('#ui-datepicker-div').removeClass('hide-calendar');
					var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
					console.log('month',month);
					var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
					console.log('year',year);
					var theD = new Date(year, month, 15);
					console.log('theD',theD);
					$(this).datepicker('setDate', null);
					$(this).datepicker('option','defaultDate',theD);
					$(this).datepicker('setDate', theD);
					var curdate = $(this).datepicker('getDate');
					console.log('curdate',curdate);
					self.$startDate.trigger('change');
			        //self.handleStartChange();
			    }
			});

			self.$endDate.datepicker({
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
				dateFormat: 'MM yy',

				onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected);
			        self.$endDate.trigger('blur');
			    },

			    beforeShow: function(el, dp) { 
		            $('#ui-datepicker-div').addClass('hide-calendar');
		        },

			    onClose: function(dateText, inst) {
					$('#ui-datepicker-div').removeClass('hide-calendar');
					var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
					console.log('month',month);
					var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
					console.log('year',year);
					$(this).datepicker('setDate', new Date(year, month, 15));
			    }
			}); 

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

	return new FindAFloristView;
});