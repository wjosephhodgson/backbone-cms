define([
	'backbone',
	'../models/date-time-delivery-settings-model',
	'../templates/setup-by-date-time-home-tpl',
	'../models/date-time-delivery-fee-model',
	'../collections/date-time-delivery-fee-collection',
	'./date-time-delivery-fee-view',
	'global-events',
	'datatables'
], function(
	Backbone,
	DateTimeDeliverySettingsModel,
	SetupByDateTimeHomeTpl,
	DateTimeDeliveryFeeModel,
	DateTimeDeliveryFeeCollection,
	DateTimeDeliveryFeeView,
	GlobalEvents
) {
	var SetupByDateTimeHomeView = Backbone.View.extend({
		tagName: 'div',

		id:'p-setup-by-date-time-home',

		template: SetupByDateTimeHomeTpl,

		render: function() {
			var self = this;

			DateTimeDeliverySettingsModel.fetchCustom().done(function() {
				self.$el.html(self.template(DateTimeDeliverySettingsModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();

				DateTimeDeliveryFeeCollection.fetchCustom().done(function() {
					self.addAllDateTimeDeliveryFees();
					self.applyDataTables();
				});
				self.validateForm();
			});

			return self;
		},

		events: {
			'click #add-btn': 'handleCreate',
			'click #cancel-btn': 'handleCancel',
			'click #save-btn': 'handleSave'
		},

		cacheElem: function() {
			this.$dateTimeDeliveryFeeList = this.$el.find('#date-time-delivery-fee-list');
			this.$dateTimeDeliveryFeeTable = this.$el.find('#date-time-delivery-fee-table');
			this.$early = this.$el.find('#f-early-fee-active');
			this.$form = this.$el.find('#f-early-delivery');
			this.$tip = this.$el.find('.tooltip-change');
		},

		addDateTimeDeliveryFee: function(fee) {
			var newView = new DateTimeDeliveryFeeView({
				model: fee,
				parent: this
			});

			this.$dateTimeDeliveryFeeList.append(newView.render().el);
		},

		addAllDateTimeDeliveryFees: function() {
			this.$dateTimeDeliveryFeeList && this.$dateTimeDeliveryFeeList.empty();
			this.trigger('reset');

			DateTimeDeliveryFeeCollection.each(this.addDateTimeDeliveryFee, this);
		},

		handleCreate: function() {
			this.handleEdit(new DateTimeDeliveryFeeModel());
		},

		handleSave: function() {
			var self = this;
			if( this.$form.valid() ){
				GlobalEvents.trigger('form:save', this.$tip);
				self.parent.showParentHome();
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		handleEdit: function(model) {
			this.parent.showEdit(model);
		},

		handleCancel: function() {
			this.parent.showParentHome();
		},

		validateForm: function() {
			var 
				self = this;
			self.$form.validate({
				rules: {
					'f-early-fee': {
						required: {
							depends: function(element) {
								return self.$early.is(':checked');
							}
						},
						dollars: true,
						min: 1
					},
					'f-front-end-message': {
						required: {
							depends: function(element) {
								return self.$early.is(':checked');
							}
						}
					}
				}
			});
		},

		applyDataTables: function() {
			this.dataTable = this.$dateTimeDeliveryFeeTable.DataTable({
				autoWidth: false,
				deferRender: false,
				jQueryUI: false,
				lengthChange: false,
				ordering: false,
				processing: false,
				searching: false,
				serverSide: false,
				stateSave: false,
				bDestroy: true,


				// Disable everything but paging and info
				info: true,
				paging: true,
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
		}
	});

	return new SetupByDateTimeHomeView;
});