define([
	'backbone',
	'text!../templates/audit-log-home-view-tpl.html',
	'../collections/audit-collection',
	'./audit-view',
	'datatables',
	'jqueryui',
	'jqueryval'
], function(
	Backbone, 
	AuditLogHomeTpl,
	AuditCollection,
	AuditView
	) {
	var EsatAuditLogHomeView = Backbone.View.extend({
		tagName: 'div',

		id: 'f-order-lookup',

		template: AuditLogHomeTpl,

		initialize: function() {
			this.listenTo(AuditCollection, 'sort', this.addwithoutHide);

		},

		render: function() {
			var self = this;

			self.$el.html(this.template);
			self.delegateEvents();
			self.cacheElem();

			AuditCollection.fetchCustom().done(function() {
				self.addAllAuditLogs();
				self.applyDataTables(self.$auditTable);
				self.validateForm();
			});

			self.applyDates();

			return self;
		},

		cacheElem: function() {
			this.$createEditForm  = this.$el.find('#p-form');
			this.$auditList = this.$el.find('#audit-list');
			this.$auditTable = this.$el.find('#audit-table');
			this.$telefloraID = this.$el.find('#f-teleflora-id');
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$siteID = this.$el.find('#f-site-id');
			this.$userID = this.$el.find('#f-user-id');
			this.$searchAlert = this.$el.find('#search-alert');

			this.$showResults = this.$el.find('.showResults');
			this.$sortButtons = this.$el.find('.sort-btn');
		},

		events: {
			'change #f-teleflora-id':'validateFields',
			'change #f-start-date':'validateFields',
			'change #f-end-date':'validateFields',
			'change #f-site-id':'validateFields',
			'change #f-user-id': 'validateFields',
			'click #search-btn': 'handleSearch',
			'click .sort-btn': 'handleSort'
		},

		showError: function() {
			this.$searchAlert.fadeIn(1000);
		},

		hideError: function() {
			this.$searchAlert.fadeOut(1000);
		},

		addAuditLog: function(auditlog) {
			var newView = new AuditView({
				model: auditlog,
				parent: this.parent
			});

			this.$auditList.append(newView.render().el);
		},

		addAllAuditLogs: function() {
			this.$auditList.empty();
			this.$showResults.addClass('hidden');

			AuditCollection.each(this.addAuditLog, this);
		},

		addwithoutHide: function() {
			this.$auditList.empty();
			// this.$showResults.addClass('hidden');

			AuditCollection.each(this.addAuditLog, this);
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

		handleSearch: function() {
			var self = this;

			if(self.$createEditForm.valid()) {

				var TID = this.$telefloraID.val();
				var from = this.$startDate.val();
				var to = this.$endDate.val();
				var siteID = this.$siteID.val();
				var userID = this.$userID.val();

				this.$showResults.addClass('hidden');

				if((TID.length > 0 && from.length > 0 && to.length > 0) || (siteID.length > 0 && from.length > 0 && to.length > 0)) {
					this.$showResults.removeClass('hidden');
				}
			} 
			
		},

		handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				AuditCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				AuditCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				AuditCollection.changeSort(attribute, 'ascending');
			}

			AuditCollection.sort();
		},

		validateFields: function() {
			var self = this;

			self.$telefloraID.valid();
			self.$startDate.valid();
			self.$endDate.valid();
			self.$siteID.valid();
			self.$userID.valid();
			
		},

		validateForm: function() {
			var self = this;

			self.$createEditForm.validate({
				rules: {
					'f-teleflora-id': {
						required: {
							depends: function(element) {
								if( !( self.$siteID.is(':filled') || self.$userID.is(':filled') || self.$startDate.is(':filled') ) ) {
									return true;
								}
							}
						} 
					},
					'f-site-id': {
						required: {
							depends: function(element) {
								if( !( self.$telefloraID.is(':filled') || self.$userID.is(':filled') || self.$startDate.is(':filled') ) ) {
									return true;
								}
							}	
						} 
					},
					'f-user-id':{
						required: {
							depends: function(element) {
								if( !( self.$telefloraID.is(':filled') || self.$siteID.is(':filled') || self.$startDate.is(':filled') ) ) {
									return true;
								}
							}	
						}
					},
					'f-start-date': {
						required: true
					},
					'f-end-date': {
						required: true
					}
				}
			});
		}

	});

	return new EsatAuditLogHomeView;
});
