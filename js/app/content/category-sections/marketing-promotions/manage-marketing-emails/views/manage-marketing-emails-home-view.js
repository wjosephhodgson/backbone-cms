define([
	'backbone',
	'../templates/manage-marketing-emails-home-tpl',
	'../models/manage-marketing-emails-model',
	'../collections/email-campaign-collection',
	'./email-campaign-view',
	'global-events',
	'jqueryui',
	'datatables'
], function(
	Backbone,
	ManageMarketingEmailsHomeTpl,
	ManageMarketingEmailsModel,
	EmailCampaignCollection,
	EmailCampaignView,
	GlobalEvents
) {
	var ManageMarketingEmailsHomeView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-manage-marketing-emails',

		template: ManageMarketingEmailsHomeTpl,

		initialize: function() {
			var self = this;

			$.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
				if(settings.nTable.id !== 'email-campaign-table') {
					return true;
				} else {
					var
						date = (new Date(data[1])).getTime(),
						emailCampaignActive = self.$emailCampaignActive.is(':checked');

					return emailCampaignActive || date < (new Date()).getTime();
				}
			});

			$.when(ManageMarketingEmailsModel.fetch(), EmailCampaignCollection.fetch()).done(this.render.bind(this));
		},

		render: function() {
			this.$el.html(this.template(ManageMarketingEmailsModel.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			this.addAllEmailCampaigns();
			this.applyToolTips();
			this.paginateTable();

			return this;
		},

		events: {
			'change #f-campaign-active': 'handleButtonSwitch',
			'click #save-btn': 'handleSave'
		},

		cacheElem: function() {
			this.$emailCampaignActive = this.$el.find('#f-campaign-active');
			this.$emailCampaignList = this.$el.find('#email-campaign-list');
			this.$emailCampaignTable = this.$el.find('#email-campaign-table');
			this.$emailAlert = this.$el.find('#m-email-campaign-alert');
			this.$tip = this.$el.find('.tooltip-change');
		},

		handleEdit: function(model) {
			this.parent.showEdit(model);
		},

		addEmailCampaign: function(campaign) {
			if(ManageMarketingEmailsModel.get('emailCampaignActive')
				|| !campaign.get('editable')) {

				var newView = new EmailCampaignView({
					model: campaign,
					parent: this
				});

				this.$emailCampaignList.append(newView.render().el);
			}
		},

		addAllEmailCampaigns: function() {
			this.$emailCampaignList.empty();

			EmailCampaignCollection.each(this.addEmailCampaign, this);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleSave: function() {
			GlobalEvents.trigger('form:save', this.$tip);
		},

		// show/hide email table and alert message when email ON/OFF switch is changed
		handleButtonSwitch: function(e) {
			GlobalEvents.trigger('form:editing');
			var targetElement = $(e.target);

			if(targetElement.is(':checked')) {
				this.$emailAlert.addClass('hidden');
			} else {
				this.$emailAlert.removeClass('hidden');
			}

			ManageMarketingEmailsModel.set('emailCampaignActive', targetElement.is(':checked'));

			this.dataTable.columns(1).search('').draw();
		},

		paginateTable: function() {
			this.dataTable = this.$emailCampaignTable.DataTable({
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
		}
	});

	return new ManageMarketingEmailsHomeView;
});