define([
	'backbone',
	'../templates/campaign-tpl',
	'settings',
	'global-events'
], function(Backbone, CampaignTpl, Settings, GlobalEvents) {
	var CampaignView = Backbone.View.extend({
	
		template: CampaignTpl,

		render: function() {
			var viewModel = this.model.toJSON();
			viewModel.baseUrl = Settings.marketingCampaignBaseUrl;

			this.setElement(this.template(viewModel));
			this.cacheElem();
			this.delegateEvents();
			this.applyDates();

			return this;
		},

		events: {
			'click .edit-link': 'handleEdit',
			'change input.on-off-switch': 'toggleActive',
			'change input': 'triggerChange',
			'change input[name="f-startDate"]': 'changeStartDate',
			'change input[name="f-endDate"]': 'changeEndDate'
		},

		triggerChange: function() {
			GlobalEvents.trigger('form:editing');
		},

		cacheElem: function() {
			this.$active  = this.$el.find('active-' + this.model.get('id'));

			// this.$startDate = this.$el.find('f-startDate');
			// this.$endDate = this.$el.find('f-endDate');

			this.$startDate = this.$el.find('input[name="f-startDate"]');
			this.$endDate = this.$el.find('input[name="f-endDate"]');
			// this.$myPriceForm      = this.$el.find('myPrice-form-' + this.model.get('id'));
			// this.$holidayPriceForm = this.$el.find('holidayPrice-form-' + this.model.get('id'));
		},

		handleEdit: function(e) {
			e.preventDefault();
			e.stopPropagation();
			GlobalEvents.trigger('form:cancel:url', e.currentTarget.href);
		},

		toggleActive: function() {
			GlobalEvents.trigger('form:editing');
			this.model.set('active', this.$active.is('checked'));
		},



		changeStartDate: function() {
			console.log(this.model);
			GlobalEvents.trigger('form:editing');
			this.model.set('startDate', this.$startDate.val().trim());
		},

		changeEndDate: function() {
			GlobalEvents.trigger('form:editing');
			this.model.set('endDate', this.$endDate.val().trim());
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
	});

	return CampaignView;
});