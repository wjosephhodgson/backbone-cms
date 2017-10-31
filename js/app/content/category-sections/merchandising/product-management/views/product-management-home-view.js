define([
	'backbone',
	'../templates/products-home-tpl',
	'../models/product-model',
	'../collections/product-collection',
	'components/featured-occasions/collections/all-occasions-collection',
	'./product-view',
	'global-events',
	'settings',
	'datatables',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	ProductManagementHomeTpl,
	ProductModel,
	ProductCollection,
	AllOccasionsCollection,
	ProductView,
	GlobalEvents,
	Settings
) {
	var ProductManagementHomeView = Backbone.View.extend({
		tagName: 'form',
		id: 'm-product-management',

		template: ProductManagementHomeTpl,

		initialize: function() {
			var self = this;

			//  data table search for product table
			$.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
				if(settings.nTable.id !== 'product-table') {
					return true;
				} else {
					if(!self.collection) return true;

					var data = self.collection.toJSON()[dataIndex];

					var searchTeleflora = self.$telefloraCheckbox.is(':checked');
					var searchCustom = self.$customCheckbox.is(':checked');
					var searchActive = self.$activeCheckbox.is(':checked');
					var searchInactive = self.$inactiveCheckbox.is(':checked');
					//var searchSubscription = self.$subscriptionCheckbox.is(':checked');
					//var searchNonsubscription = self.$nonsubscriptionCheckbox.is(':checked');
					var searchSkus = self.$skusCheckbox.is(':checked');
					var selectCategory = self.$selectCategory.find('option:selected').val().trim();
					var productSearch = self.$productSearch.val().trim();
					var toTest = new RegExp(productSearch, 'gi'); // make it fuzzy

					return (toTest.test(data.name) || toTest.test(data.number))
						&& (searchTeleflora || data.type === 'Custom')
						&& (searchCustom || data.type === 'Teleflora')

						&& (searchActive || data.active === false)
						&& (searchInactive || data.active === true)

						&& (searchSkus || data.isBaseSku === true)

						//&& (searchSubscription || data.subscription === false)
						//&& (searchNonsubscription || data.subscription === true)

						&& (!selectCategory || data.categories.indexOf(selectCategory) > -1);
				}
			});

			// Create an array with the values of all the input boxes in a column
			$.fn.dataTable.ext.order['dom-text-dollars'] = function  ( settings, col )
			{
			    return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
			      return parseFloat($('input', td).val().replace('$', ''));
			    });
			}
		},

		render: function() {
			var self = this;

			AllOccasionsCollection.fetchCustom().done(function() {
				self.$el.html(self.template({
					baseUrl: Settings.productManagementBaseUrl,
					allOccasions: AllOccasionsCollection.toJSON()
				}));
				self.cacheElem();
				self.delegateEvents();
			});

			// add all products when product collection and occasions have loaded
			$.when(ProductCollection.fetchCustom(), AllOccasionsCollection.fetchCustom()).done(function(){
				self.dataTable && self.dataTable.destroy();
				self.collection = ProductCollection.deepClone();
				self.addAllProducts(self.collection);
				self.applyDataTables();
				self.applyToolTips();
				self.validate();
				self.uiCheckBoxes();
			});

			return self;
		},

		events: {
			'click #new-btn':'handleCreate',
			'click #save-btn': 'handleSave',
			'keydown #productSearch': 'handleSearch',
			'change #productCheckbox-Teleflora':'handleSearch',
			'change #productCheckbox-Custom':'handleSearch',
			'change #productCheckbox-Active':'handleSearch',
			'change #productCheckbox-Inactive':'handleSearch',
			'change #productCheckbox-Subscription':'handleSearch',
			'change #productCheckbox-Nonsubscription':'handleSearch',
			'change #productCheckbox-Skus':'handleSearch',
			'click #filter-view': 'toggleFilterView',
			'click #close-filter-view': 'toggleFilterView',	
			'change #selectCategory':'handleSearch'

		},

		cacheElem: function() {
			this.$productList = this.$el.find('#product-list');
			this.$productTable = this.$el.find('#product-table');

			this.$telefloraCheckbox = this.$el.find('#productCheckbox-Teleflora');
			this.$customCheckbox = this.$el.find('#productCheckbox-Custom');

			this.$activeCheckbox = this.$el.find('#productCheckbox-Active');
			this.$inactiveCheckbox = this.$el.find('#productCheckbox-Inactive');

			this.$subscriptionCheckbox = this.$el.find('#productCheckbox-Subscription');
			this.$nonsubscriptionCheckbox = this.$el.find('#productCheckbox-Nonsubscription');

			this.$skusCheckbox = this.$el.find('#productCheckbox-Skus');		

			this.$skusCheckbox = this.$el.find('#productCheckbox-Skus');
			this.$selectCategory = this.$el.find('#selectCategory');
			this.$filterPanel = this.$el.find('.search-filters');
			this.$filterBtn = this.$el.find('#filter-view');
			this.$tip = this.$el.find('.tooltip-change');
			this.$productSearch = this.$el.find('#productSearch');
			this.$filterChecks = this.$el.find('#product-search-checkboxes');
		},

		toggleFilterView: function(e) {
			this.$filterPanel.fadeToggle(200);
			this.$filterBtn.toggleClass('active');
		},

		handleCreate: function(e) {
			e.preventDefault();
			e.stopPropagation();
 			GlobalEvents.trigger('form:cancel:url', e.currentTarget.href);
		},


		handleSave: function() {
		//	if(this.$el.valid()) {
				ProductCollection.set(this.collection.toJSON());
				GlobalEvents.trigger('form:save', this.$tip);
			//} else {
			//	GlobalEvents.trigger('form:invalid', this.$tip);
		//	}
		},

		addProduct: function(product) {
			var newView = new ProductView({
				model: product,
				parent: this
			});

			this.$productList.append(newView.render().el);
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
					null,
					{'orderable':false},
					null,
					{'orderable':false},
					{ "orderDataType": "dom-text-dollars", type: 'numeric' },
					{ "orderDataType": "dom-text-dollars", type: 'numeric' },
					{'orderable':false},
					{'orderable':false}
				],

				order: [],

				"columnDefs": [
			    { "orderable": false, "targets": 0 }
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
		},
		
		uiCheckBoxes: function() {
			this.$filterChecks.buttonset();
		},

		debounce: null,

		handleSearch: function() {
			var self = this;

			if(self.debounce) {
				clearTimeout(self.debounce);
			}

			self.debounce = setTimeout(function() {
				self.dataTable.draw();
			}, 100);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validate: function() {
			this.$el.validate({
				/*
				rules: {
					'myPrice': {
						dollars: true,
						required: true
					},

					'holidayPrice': {
						dollars: true,
						required: true
					}
				}
				*/
			});
		    jQuery.validator.addClassRules({
		      'f-myPrice': {
		        required: true,
		        number: true,
		        dollars: true
		      },
		      'f-holidayPrice': {
		        number: true,
		        dollars: true
		      }
		    });			
		}
	});

	return new ProductManagementHomeView;
});