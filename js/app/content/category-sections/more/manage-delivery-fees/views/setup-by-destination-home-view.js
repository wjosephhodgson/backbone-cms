define([
	'backbone',
	'text!../templates/setup-by-destination-home-tpl.html',
	'../models/destination-delivery-fee-model',
	'../collections/destination-delivery-fee-collection',
	'./destination-delivery-fee-view',
	'jqueryui',
	'datatables'
], function(
	Backbone,
	SetupByDestinationHomeTpl,
	DestinationDeliveryFeeModel,
	DestinationDeliveryFeeCollection,
	DestinationDeliveryFeeView
) {
	var SetupByDestinationHomeView = Backbone.View.extend({
		tagName: 'div',

		id:'p-setup-by-destination-home',

		template: SetupByDestinationHomeTpl,

		render: function() {
			var self = this;

			self.$el.html(self.template);
			self.delegateEvents();
			self.cacheElem();
			self.initModals();

			DestinationDeliveryFeeCollection.fetchCustom().done(function() {
				self.addAllDesinationDeliveryFees();
				self.applyDataTables();
			});

			return self;
		},

		events: {
			'click #add-btn': 				'handleCreate',
			'change #f-condition-type': 	'handleConditionTypeSearch',
			'keydown #f-condition-value': 	'handleConditionValueSearch',
			'change #f-import-fees': 		'handleListUpload',
			'click #success-close-btn': 	'closeSuccessModal',
			'click #cancel-btn': 			'handleCancel'
		},

		cacheElem: function() {
			this.$destinationDeliveryFeeList 	= this.$el.find('#destination-delivery-fee-list');
			this.$destinationDeliveryFeeTable 	= this.$el.find('#destination-delivery-fee-table');
			this.$conditionTypeSearch 			= this.$el.find('#f-condition-type');
			this.$conditionValueSearch 			= this.$el.find('#f-condition-value');
			this.$loadingModal 					= this.$el.find('#loading-modal');
			this.$successModal 					= this.$el.find('#success-modal');
			this.$progressBar 					= this.$el.find('#progressbar');
			this.$progressLabel 				= this.$el.find('.progress-label');
		},

		addDestinationDeliveryFee: function(fee) {
			var newView = new DestinationDeliveryFeeView({
				model: fee,
				parent: this
			});

			this.$destinationDeliveryFeeList.append(newView.render().el);
		},

		initModals: function() {
			var self = this;
			self.loadmodal = self.$loadingModal.dialog({
				autoOpen: false,
				modal: true,
				draggable: false,
				show: {
					effect: 'fade',
					speed: 10
				},
				hide: {
					effect: 'fade',
					speed: 200
				}
			});
			self.successmodal = self.$successModal.dialog({
				autoOpen: false,
				modal: true,
				draggable: false,
				show: {
					effect: 'fade',
					speed: 200
				},			
				open: function() {
					$(this).find('#success-close-btn').on('click',function(){
						self.successmodal.dialog('close');
					});
				},
				hide: {
					effect: 'fade',
					speed: 200
				}
			});			
		},

		handleListUpload: function() {
			var self = this;
			self.openLoadModal();
		},

		openLoadModal: function() {
			var self = this;

			self.loadmodal.dialog('open');

			self.$progressBar.progressbar({
				value: false,
				change: function() {
					self.$progressLabel.text( self.$progressBar.progressbar( "value" ) + "%" );
				},
				complete: function() {
					self.$progressLabel.text( "Complete!" );
					setTimeout( function(){
						self.loadmodal.dialog('close');
						self.successmodal.dialog('open');
					}, 500 );		
				}
			});

			function progress() {
				self.$progressBar.removeClass('loading');
				var val = self.$progressBar.progressbar( "value" ) || 0;

				self.$progressBar.progressbar( "value", val + 2 );

				if ( val < 99 ) {
					setTimeout( progress, 80 );
				}	
			}

			setTimeout( progress, 2000 );	
	
		},

		openSuccessModal: function() {
			var self = this;
			this.loadmodal.dialog('close');
			self.successmodal.dialog('open');
		},

		closeSuccessModal: function() {
			var self = this;
			self.successmodal.dialog('close');
		},

		addAllDesinationDeliveryFees: function() {
			this.$destinationDeliveryFeeList.empty();
			this.trigger('reset');

			DestinationDeliveryFeeCollection.each(this.addDestinationDeliveryFee, this);
		},

		handleCreate: function() {
			this.handleEdit(new DestinationDeliveryFeeModel());
		},

		handleEdit: function(model) {
			this.parent.showEdit(model);
		},

		handleCancel: function() {
			this.parent.showParentHome();
		},

		applyDataTables: function() {
			this.dataTable = this.$destinationDeliveryFeeTable.DataTable({
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

		handleConditionTypeSearch: function(e) {
			this.dataTable.columns(0).search(e.target.value).draw();
		},

		handleConditionValueSearch: function(e) {
			var self = this;

			window.setTimeout(function() {
				self.dataTable.columns(1).search(e.target.value).draw();
			}, 0);
		}
	});

	return new SetupByDestinationHomeView;
});