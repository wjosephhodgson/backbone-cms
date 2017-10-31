define([
	'backbone',
	'../templates/marketing-campaigns-home-view-tpl',
	'../models/marketing-campaigns-model',
	'../collections/marketing-campaigns-collection',
	'components/featured-occasions/collections/all-occasions-collection',
	'./campaign-view',
	'global-events',
	'settings',
	'datatables',
	'jqueryui'
	// 'jqueryval'
], function(
	Backbone,
	MarketingCampaignHomeTpl,
	CampaignModel,
	CampaignCollection,
	AllOccasionsCollection,
	CampaignView,
	GlobalEvents,
	Settings
) {
	var MarketingCampaignHomeView = Backbone.View.extend({
		tagName: 'form',
		id: 'm-marketing-campaign',
		template: MarketingCampaignHomeTpl,

		render: function() {
				var self = this;

			AllOccasionsCollection.fetchCustom().done(function() {
				self.$el.html(self.template({
					baseUrl: Settings.marketingCampaignBaseUrl,
					allOccasions: AllOccasionsCollection.toJSON()
				}));
				self.cacheElem();
				self.delegateEvents();
			});

			// add all products when product collection and occasions have loaded
			$.when(CampaignCollection.fetchCustom(), AllOccasionsCollection.fetchCustom()).done(function(){
				self.dataTable && self.dataTable.destroy();
				self.collection = CampaignCollection.deepClone();
				self.applyDataTables();
				self.cacheElem();
				self.addAllProducts(self.collection);
				self.applyToolTips();
				// self.handleSort();
				// self.validate();
				// self.uiCheckBoxes();
			});
			
			this.listenTo(CampaignCollection, 'sort', this.addAllProducts);

			return self;
		},

		events: {
			'click #new-btn':'handleCreate',
			'click #cancel-btn': 'handleCancel',
			'click #save-btn': 'handleSave',
			'click .sort-btn': 'handleSort'
		},

		cacheElem: function() {
			this.$productList = this.$el.find('#product-list');
			this.$productTable = this.$el.find('#product-table');
			this.$sortButtons = this.$el.find('.sort-btn');
			this.$tip = this.$el.find('.tooltip-change');


		},

		handleCreate: function(e) {
			e.preventDefault();
			e.stopPropagation();
			GlobalEvents.trigger('form:cancel:url', e.currentTarget.href);
			var newCampaign = new CampaignModel();
		},

		handleSave: function(e) {
		//	if(this.$el.valid()) {
				CampaignCollection.set(this.collection.toJSON());
				GlobalEvents.trigger('form:save', this.$tip);
				
			//} else {
			//	GlobalEvents.trigger('form:invalid', this.$tip);
		//	}
		},

		handleCancel: function() {

		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		addProduct: function(product) {
			var newView = new CampaignView({
				model: product,
				parent: this
			});

			this.$productList.append(newView.render().el);
			// console.log(newView);
		},

		addAllProducts: function(collection) {
			this.$productList.empty();

			collection.each(this.addProduct, this);
		},



		applyDataTables: function() {
			this.dataTable = this.$productTable.DataTable({
				autoWidth: false,
				deferRender: false,
				jQueryUI: false,
				lengthChange: false,
				ordering: true,
				processing: false,
				searching: true,
				serverSide: false,
				stateSave: false,
				bDestroy: true,
				columns: [
					{'orderable':true},
					{'orderable':false},
					{'orderable':true},
					{'orderable':true},
					{'orderable':true},
					{'orderable':false},
					{'orderable':false}
				],

				order: [],

				"columnDefs": [
			    { "orderable": true, "targets": 0 }
			  ],

				// Disable everything but paging and info
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

				// What order everything should be in
				dom: 'lrt<"data-tables-pagination"ip>'
			});
		}
    	
		// validate: function() {
		// 	this.$el.validate({
		// 		/*
		// 		rules: {
		// 			'myPrice': {
		// 				dollars: true,
		// 				required: true
		// 			},

		// 			'holidayPrice': {
		// 				dollars: true,
		// 				required: true
		// 			}
		// 		}
		// 		*/
		// 	});
		//     jQuery.validator.addClassRules({
		//       'f-myPrice': {
		//         required: true,
		//         number: true,
		//         dollars: true
		//       },
		//       'f-holidayPrice': {
		//         number: true,
		//         dollars: true
		//       }
		//     });			
		// }
	});

	return new MarketingCampaignHomeView;
});