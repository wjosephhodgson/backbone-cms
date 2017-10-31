define([
	'backbone',
	'../templates/checkout-messaging-management-home-tpl',
	'../models/checkout-messaging-management-model',
	'../collections/checkoutMessagingManagementHomeCollection',
	'./checkoutMessagingManagementHomeTABLEView',
	'global-events',
	'datatables',
	'jqueryui'
	],
	function(
		Backbone, 
		CheckoutMessagingTpl, 
		CheckoutMessagingManagementModel, 
		CheckoutMessagingManagementHomeCollection,
		CheckoutMessagingManagementHomeTableView,
		GlobalEvents)
	{
		var CheckoutMessagingHomeView = Backbone.View.extend({

			template: CheckoutMessagingTpl,

			initialize: function() {

				CheckoutMessagingManagementHomeTableView.parent = this;
			},

			render: function() {

				var self = this;

				this.$el.html(this.template());
					self.delegateEvents();

				CheckoutMessagingManagementHomeCollection.fetchCustom().done(function() {
					self.cacheElem();
					self.addAllCheckoutMessaging();

					// used data tables to add pagination. datatables was loading and changing the DOM elements
					// therefore making homeTableView not accessible. a timeout was used to load datatables after the 
					// DOM is loaded
					setTimeout(function() {
						self.applyDataTables();
					}, 100)
				});

				return self;
			},

			events: {
				'click #add-new-message-btn': 'handleAddNewCheckoutMessage',
				'click #save-btn': 'handleActiveSave'
			},
	 
			cacheElem: function() {
				this.$tip = this.$el.find('.tooltip-change');
				this.$CheckoutMessagingList = this.$el.find('#CheckoutMessagingMangement-List');
				this.$checkoutTable = this.$el.find('#checkout-table');
			},

			handleAddNewCheckoutMessage: function() {
				this.parent.showCreateEdit(new CheckoutMessagingManagementModel());
			},

			handleEdit: function(model) {
				this.parent.showCreateEdit(model);
			},
	
			handleSaveEach: function(model) {
				var 
					self = this,
					model_id = model.get('id'),
					CheckoutMessagingStatusVal = self.$el.find('input[data-id="'+ model_id + '"]'),
					elID = CheckoutMessagingStatusVal.attr('data-id');

				model.set({
					CheckoutMessagingActive: CheckoutMessagingStatusVal.is(':checked')
				});
			},

			handleActiveSave: function() {
				var self = this;
				CheckoutMessagingManagementHomeCollection.each(self.handleSaveEach, this);
				GlobalEvents.trigger('form:save', this.$tip);
			},

			addEachCheckoutMessaging: function(messaging) {
				var newView = new CheckoutMessagingManagementHomeTableView({
					model: messaging,
					parent: this
				});
				this.$CheckoutMessagingList.append(newView.render().el, this);
			},

			addAllCheckoutMessaging: function() {
				this.$CheckoutMessagingList.empty();
				CheckoutMessagingManagementHomeCollection.each(this.addEachCheckoutMessaging, this);
			},

			applyDataTables: function() {
				this.dataTable = this.$checkoutTable.DataTable({
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
					paging: true,

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
			}
			

		});
		return new CheckoutMessagingHomeView;
});