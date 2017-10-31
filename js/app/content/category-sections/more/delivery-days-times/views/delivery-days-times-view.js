define([
	'jquery',
	'backbone',
	'text!../templates/days-page-tpl.html',
	'../collections/days-collection',
	'./list-view',
	'../models/orders-exclusionsExceptionDeliveryDates-model',
	'./orders-exclusionsExceptionsDeliveryDates-view',
	'./create-new-ExceptionsDeliveryDate-view',	
	'../collections/ordersExclusions-ExceptionsDeliveryDatesCollection',
	'global-events',
	'datatables',
	'jqueryui'
], function(
	$,
	Backbone,
	DaysPageViewTpl,
	DaysCollection,
	DaysListView,
	OrderExclusionsExceptionsDeliveryDatesModel,
	OrdersExclusionExceptionsDeliveryDatesView,
    CreateNewExceptionsDeliveryDateView,	
    OrdersExclusionExceptionDeliveryDatesCollection,
	GlobalEvents
) {
	var DaysPageView = Backbone.View.extend({
		tagName:'form',

		id: 'p-delivery-days-times',

	    initialize: function() {
	    	CreateNewExceptionsDeliveryDateView.parent = this;
	    	OrdersExclusionExceptionsDeliveryDatesView.parent = this;
		},

		template: DaysPageViewTpl,

		render: function() {
			var self = this;

			self.$el.html(self.template);
			self.cacheElem();

			DaysCollection.fetchCustom().done(function() {
				self.daysCollection = DaysCollection.deepClone();

				self.addAllDays();
				self.delegateEvents();
				self.applyToolTips();
			});

			OrdersExclusionExceptionDeliveryDatesCollection.fetchCustom().done(function() {
				self.addAllExceptionsDeliveryDates();
				self.applyDataTablesExceptionsDeliveryDates();
				self.setModalExceptionDeliveryDateModal();
			});	

			return self;
		},

		cacheElem: function() {
			this.$daysList = this.$el.find('#m-delivery-days-list');
			this.$tip = this.$el.find('.tooltip-change');
            this.$CreateNewExceptionDeliveryDateModal = this.$el.find('#create-new-Exception-deliveryDateModal');
			this.$ExceptionsDeliveryList = this.$el.find('#ExceptionsDeliveryDates-List');
            this.$ExceptionsDeliveryTable = this.$el.find('#Exceptions-Delivery-Table');			
		},

		events: {
			'click #save-btn': 'handleSave',
			'click #add-new-Exception-btn': 'handleCreateNewException'
		},

		handleCreateNewException: function(model) {
			this.showModalExceptionDeliveryDateModal(CreateNewExceptionsDeliveryDateView, new OrderExclusionsExceptionsDeliveryDatesModel);
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

       // resequemce collection table after save or delete
		handleExceptionTableUpdate: function(model) {
        	this.addAllExceptionsDeliveryDates();
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

		addDay: function(day) {
			var newView = new DaysListView({
				model: day
			});

			this.$daysList.append(newView.render().el);
		},

		addAllDays: function() {
			this.$daysList.empty();

			this.daysCollection.each(this.addDay, this);
		},

		handleSave: function() {
			DaysCollection.set(this.daysCollection.toJSON());
			GlobalEvents.trigger('form:save', this.$tip);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		}
	});

	return new DaysPageView;
});