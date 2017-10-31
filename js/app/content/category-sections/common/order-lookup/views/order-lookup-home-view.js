define([
	'backbone',
	'text!../templates/order-lookup-home-tpl.html',
	'../models/order-model',
	'../collections/order-collection',
	'./order-view',
	'datatables',
	'jqueryui',
	'jqueryval'
], function(Backbone, OrderLookupHomeTpl, OrderModel, OrderCollection, OrderView) {
	var OrderLookupHomeView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-order-lookup',

		template: OrderLookupHomeTpl,

		initialize: function() {
			// $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
			// 	if(settings.nTable.id !== 'orders-table') {
			// 		return true;
			// 	} else {
			// 		var date = data[0],
			// 			fromDate = $('#f-from-date').val() || '00/00/00',
			// 			toDate = $('#f-to-date').val() || '99/99/99';

			// 		return date >= fromDate && date <= toDate;
			// 	}
			// });
		},

		render: function() {
			var self = this;

			self.$el.html(this.template);
			self.delegateEvents();
			self.cacheElem();

			OrderCollection.fetchCustom().done(function() {
				self.applyDataTables(self.$ordersTable);
				self.addAllOrders();
				self.validateForm();
				
			})

			self.applyDates();


			return self;
		},

		cacheElem: function() {
			this.$createEditForm  = this.$el.find('#p-form');
			this.$ordersList = this.$el.find('#orders-list');
			this.$ordersTable = this.$el.find('#orders-table');
			this.$doveNumber = this.$el.find('#f-dove-number');
			this.$confirmationNumber = this.$el.find('#f-confirmation-number');
			this.$senderLastName = this.$el.find('#f-sender-last-name');
			this.$recipientLastName = this.$el.find('#f-recipient-last-name');
			this.$fromDate = this.$el.find('#f-from-date');
			this.$toDate = this.$el.find('#f-to-date');
			this.$searchAlert = this.$el.find('#search-alert');
		},

		events: {
			'change #f-dove-number':'validateFields',
			'change #f-confirmation-number':'validateFields',
			'change #f-sender-last-name':'validateFields',
			'change #f-recipient-last-name':'validateFields',
			'change #f-from-date': 'validateFields',
			'change #f-to-date': 'validateFields',
			'click #search-btn': 'handleSearch'
		},

		showError: function() {
			this.$searchAlert.fadeIn(1000);
		},

		hideError: function() {
			this.$searchAlert.fadeOut(1000);
		},

		addOrder: function(order) {
			var newView = new OrderView({
				model: order,
				parent: this.parent
			});

			this.$ordersList.append(newView.render().el);
		},

		addAllOrders: function() {
			this.$ordersList.empty();
			this.$ordersList.addClass('hidden');

			OrderCollection.each(this.addOrder, this);
		},

		applyDataTables: function(table) {
			this.dataTable = table.DataTable({
				autoWidth: false,
				deferRender: false,
				jQueryUI: false,
				lengthChange: false,
				ordering: false,
				processing: false,
				// searching: false,
				serverSide: false,
				stateSave: false,
				destroy: true,

				// Disable everything but paging and info
				info: true,
				pading: true,
				// scrollX: false,
				// scrollY: false,

				// What to show in info
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

				// What order everything should be in
				dom: 'lrt<"data-tables-pagination"ip>'
			});
		},

		applyDates: function() {
			var self = this;

			self.$fromDate.datepicker({
			    onSelect: function(selected) {
			        self.$toDate.datepicker('option', 'minDate', selected);
			        self.$fromDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});

			self.$toDate.datepicker({
			    onSelect: function(selected) {
			        self.$fromDate.datepicker('option', 'maxDate', selected);
			        self.$toDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});
		},

		handleSearch: function() {
			var self = this;

			
			if(self.$createEditForm.valid()) {
			// 	// console.log("if the input fields are empty, this should not be valid");
				var dove = this.$doveNumber.val();
				var confirm = this.$confirmationNumber.val();
				var senderLast = this.$senderLastName.val();
				var recipLast = this.$recipientLastName.val();
				var from = this.$fromDate.val();
				var to = this.$toDate.val();

				if(dove.length > 0 || confirm.length > 0 || senderLast.length > 0 || recipLast.length > 0 || (from.length > 0 && to.length > 0)) {

					this.$ordersList.removeClass('hidden');
				}

			} 
			
		},

		validateFields: function() {
			var self = this;

			self.$doveNumber.valid();
			self.$confirmationNumber.valid();
			self.$senderLastName.valid();
			self.$recipientLastName.valid();
			self.$fromDate.valid();
			self.$toDate.valid();
			
		},

		validateForm: function() {
			var self = this;

			self.$createEditForm.validate({
				rules: {
					'f-dove-number': {
						required: {
							depends: function(element) {
								if( !( self.$confirmationNumber.is(':filled') || self.$senderLastName.is(':filled') || self.$recipientLastName.is(':filled') ) ){
									return true;
								}
							}
						} 
					},
					'f-confirmation-number': {
						required: {
							depends: function(element) {
								if( !( self.$doveNumber.is(':filled') || self.$senderLastName.is(':filled') || self.$recipientLastName.is(':filled') ) ){
									return true;
								}
							}		
						} 
					},
					'f-sender-last-name': {
						required: {
							depends: function(element) {
								if( !( self.$confirmationNumber.is(':filled') || self.$doveNumber.is(':filled') || self.$recipientLastName.is(':filled') ) ){
									return true;
								}
							}		
						} 
					},
					'f-recipient-last-name': {
						required: {
							depends: function(element) {
								if( !( self.$confirmationNumber.is(':filled') || self.$senderLastName.is(':filled') || self.$doveNumber.is(':filled') ) ){
									return true;
								}
							}	
						} 
					},
					'f-from-date': {
						required: true
					},
					'f-to-date':{
						required: true
					}
				}
			});
		}


	});

	return new OrderLookupHomeView;
});
