define([
	'backbone',
	'../templates/orders-exclusions-home-tpl',
	'../collections/ordersExclusions-blockedDeliveryDatesCollection',
	'../models/orders-exclusionsBlockedDeliveryDates-model',
	'./orders-exclusionsBlockedDeliveryDates-view',
	'../collections/ordersExclusions-ExceptionsDeliveryDatesCollection',
	'../models/orders-exclusionsExceptionDeliveryDates-model',
	'./orders-exclusionsExceptionsDeliveryDates-view',
	'./create-new-ExceptionsDeliveryDate-view',
	'./create-new-BlockedDeliveryDates-view',
	'datatables',
	'jquery',
	'jqueryui',
	'global-events'
   ], 
   function(
   	Backbone, 
   	OrderBlocksExclusionsHomeTpl, 
   	OrdersExclusionBlockedDeliveryDatesCollection,
   	OrderExclusionsBlockedDeliveryDatesModel, 
   	OrdersExclusionBlockedDeliveryDatesView,
    OrdersExclusionExceptionDeliveryDatesCollection,
    OrderExclusionsExceptionsDeliveryDatesModel,
    OrdersExclusionExceptionsDeliveryDatesView,
    CreateNewExceptionsDeliveryDateView,
    CreateNewBlockedDeliveryDatesView,
   	GlobalEvents
   	){

		var OrderBlocksExclusionsHomeView = Backbone.View.extend({

			template: OrderBlocksExclusionsHomeTpl,

		    initialize: function() {
		    	CreateNewBlockedDeliveryDatesView.parent = this;
		    	CreateNewExceptionsDeliveryDateView.parent = this;

		    	OrdersExclusionExceptionsDeliveryDatesView.parent = this;
		    	OrdersExclusionBlockedDeliveryDatesView.parent = this;

			},

			render: function() {

				var self = this;

				self.$el.html(self.template());
				self.delegateEvents();
				self.cacheElem();

				self.dataTable && self.dataTable.destroy();

				OrdersExclusionBlockedDeliveryDatesCollection.fetchCustom().done(function() {
					self.addAllBlockedDisabledDeliveryDates();
					self.applyDates();
					self.addAllBlockedDeliveryDates();
					self.applyDataTablesBlockedDeliveryDates();
					self.setModalClosureDeliveryBlock();
					
				});

				OrdersExclusionExceptionDeliveryDatesCollection.fetchCustom().done(function() {
					self.addAllExceptionsDeliveryDates();
					self.applyDataTablesExceptionsDeliveryDates();
					self.setModalExceptionDeliveryDateModal();
				});	
				

				return self;

			},

			events: {
				'click #add-new-Exception-btn': 'handleCreateNewException',
				'click #add-new-BlockedDeliveryDate-btn': 'handleCreateNewBlockedDeliveryDate'

			},

			cacheElem: function() {
                


                this.$CreateNewClosureDeliveryBlockModal = this.$el.find('#create-new-Exception-deliveryDateModal');

                this.$CreateNewExceptionDeliveryDateModal = this.$el.find('#create-new-closure-delivery-BlockModal');

				this.$BlockedDeliveryDatesList = this.$el.find('#BlockedDeliveryDates-List');
				
				this.$ExceptionsDeliveryList = this.$el.find('#ExceptionsDeliveryDates-List');

                this.$ExceptionsDeliveryTable = this.$el.find('#Exceptions-Delivery-Table');
               
                this.$BlockedDeliveryTable = this.$el.find('#Blocked-Delivery-Table');

                this.$OrdersAvailableDates = this.$el.find('#OrdersExclusions-Available-dates');

			},

			handleCreateNewBlockedDeliveryDate: function(model) {
				this.showModalClosureDeliveryBlock(CreateNewBlockedDeliveryDatesView, new OrderExclusionsBlockedDeliveryDatesModel);

			},

			handleCreateNewException: function(model) {
				this.showModalExceptionDeliveryDateModal(CreateNewExceptionsDeliveryDateView, new OrderExclusionsExceptionsDeliveryDatesModel);

			},

			addBlockedDeliveryDate: function(deliverydates) {

				var newView = new OrdersExclusionBlockedDeliveryDatesView({
					model: deliverydates,
					parent: this
				});

				this.$BlockedDeliveryDatesList.append(newView.render().el);

			},

			addAllBlockedDeliveryDates: function() {

				this.$BlockedDeliveryDatesList.empty();

				OrdersExclusionBlockedDeliveryDatesCollection.each(this.addBlockedDeliveryDate, this);
			},


              // add Exception Delivery Date
			addExceptionsDeliveryDate: function(exceptionsdate) {
				var newView = new OrdersExclusionExceptionsDeliveryDatesView({
					model: exceptionsdate,
					parent: this
				});

				this.$ExceptionsDeliveryList.append(newView.render().el);
			},

			// add all Exception Delivery Dates
			addAllExceptionsDeliveryDates: function() {

				this.$ExceptionsDeliveryList.empty();

				OrdersExclusionExceptionDeliveryDatesCollection.each(this.addExceptionsDeliveryDate, this);
			},

             // resequemce collection table after save or delete Closure delivery table
			handleClosureDeliveryTableUpdate: function(model) {
				this.addAllBlockedDeliveryDates();
			},


           // resequemce collection table after save or delete
			handleExceptionTableUpdate: function(model) {
	        	this.addAllExceptionsDeliveryDates();

            },

			applyDataTablesBlockedDeliveryDates: function() {
			  this.dataTable1 = this.$BlockedDeliveryTable.DataTable({
			        autoWidth: false,
			        deferRender: false,
			        jQueryUI: false,
			        lengthChange: false,
			        ordering: false,
			        processing: false,
			        searching: true,
			        serverSide: false,
			        stateSave: false,
			        destroy: true,
			        info: true,
			        pading: true,

			        infoCallback: function(settings, start, end, max, total, pre) {
			          return start + " - " + end + " of " + total;
			        },

			        pagingType: "simple",
			        "language": {
			          "paginate": {
			            "previous": " ",
			            "next": " "
			          }
			        },

			        dom: 'lrt<"data-tables-pagination"ip>'
			});
		},

			applyDataTablesExceptionsDeliveryDates: function() {

				var self = this;

			  self.dataTable2 = self.$ExceptionsDeliveryTable.DataTable({
			        autoWidth: false,
			        deferRender: false,
			        jQueryUI: false,
			        lengthChange: false,
			        ordering: false,
			        processing: false,
			        searching: true,
			        serverSide: false,
			        stateSave: false,
			        destroy: true,
			        info: true,
			        pading: true,

			        infoCallback: function(settings, start, end, max, total, pre) {
			          return start + " - " + end + " of " + total;
			        },

			        pagingType: "simple",
			        "language": {
			          "paginate": {
			            "previous": " ",
			            "next": " "
			          }
			        },

			        dom: 'lrt<"data-tables-pagination"ip>'
			});
		},


		
	/* create an array of days which need to be disabled */

		addBlockedDisabledDeliveryDates: function(dates) {

			 var self = this;

	      

			var newView = new OrdersExclusionBlockedDeliveryDatesView({
				model: dates,
				parent: self
			});
 
			var row = newView.model.get('startDate');

             DISABLESPECIFICDAYS.push(row);        

		},
         // add all blocked disabled delivery dates
		addAllBlockedDisabledDeliveryDates: function() {
			 var self = this;
			  
	          DISABLESPECIFICDAYS = [];

	          OrdersExclusionBlockedDeliveryDatesCollection.each(self.addBlockedDisabledDeliveryDates, self);

		},

	    setModalClosureDeliveryBlock: function() {

		      this.$CreateNewClosureDeliveryBlockModal.dialog({
		        autoOpen: false,
		        modal: true,
		        draggable: false,
		        show: {
		          effect: 'fade',
		          speed: 200
		        },
		        hide: {
		          effect: 'fade',
		          speed: 100
	        	}
	      	  });
    	},

		showModalClosureDeliveryBlock: function(view, model) {
			
	    	view.model = model;

	    	this.$CreateNewClosureDeliveryBlockModal.empty();
	    	this.$CreateNewClosureDeliveryBlockModal.append(view.render().el);
	        this.$CreateNewClosureDeliveryBlockModal.dialog('open');
    	},
    	// ClosureDeliveryBlock Modal Ends here




        setModalExceptionDeliveryDateModal: function() {

		      this.$CreateNewExceptionDeliveryDateModal.dialog({
		        autoOpen: false,
		        modal: true,
		        draggable: false,
		        show: {
		          effect: 'fade',
		          speed: 200
		        },
		        hide: {
		          effect: 'fade',
		          speed: 100
	        	}
	      	  });
    	},

		showModalExceptionDeliveryDateModal: function(view, model) {
			
	    	view.model = model;

	    	this.$CreateNewExceptionDeliveryDateModal.empty();
	    	this.$CreateNewExceptionDeliveryDateModal.append(view.render().el);
	        this.$CreateNewExceptionDeliveryDateModal.dialog('open');
    	},

		applyDates: function() {
               /** init datepicker */
				this.$OrdersAvailableDates.datepicker({
		            beforeShowDay: this.disableSpecificDaysAndWeekends,
		            dateFormat: 'mm/dd/yy'
		        });    

		}, // applydates ends here
       /** Days to be disabled as an array */
		

		disableSpecificDaysAndWeekends: function(date) {

			// var DISABLESPECIFICDAYS = ["3/21/2015", "3/24/2015", "3/25/2015", "10/01/2015"];

		    var m = date.getMonth();
		    var d = date.getDate();
		    var y = date.getFullYear();


		    for (var i = 0; i < DISABLESPECIFICDAYS.length; i++) {
		        if ($.inArray((m + 1) + '/' + d + '/' + y, DISABLESPECIFICDAYS) != -1 || new Date() > date) {
		            return [false];
		        }
		    }

		    return [true];
		}




		});

  return new OrderBlocksExclusionsHomeView;
});
