define([
	'backbone',
	'../templates/product-tpl',
	'settings',
	'global-events'
], function(Backbone, ProductTpl, Settings, GlobalEvents) {
	var PageView = Backbone.View.extend({
		template: ProductTpl,

		render: function() {
			var viewModel = this.model.toJSON();
			viewModel.baseUrl = Settings.productManagementBaseUrl;

			this.setElement(this.template(viewModel));
			this.cacheElem();
			this.delegateEvents();

			return this;
		},

		events: {
			'click .edit-link': 'handleEdit',
			'change input.on-off-switch': 'toggleActive',
			'change input[name="f-myPrice"]': 'changeMyPrice',
			'change input[name="f-holidayPrice"]': 'changeHolidayPrice'
		},

		cacheElem: function() {
			this.$active           = this.$el.find('active-' + this.model.get('id'));
			this.$myPrice          = this.$el.find('input[name="f-myPrice"]');
			this.$holidayPrice     = this.$el.find('input[name="f-holidayPrice"]');
			this.$myPriceForm      = this.$el.find('myPrice-form-' + this.model.get('id'));
			this.$holidayPriceForm = this.$el.find('holidayPrice-form-' + this.model.get('id'));
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

		changeMyPrice: function() {
			GlobalEvents.trigger('form:editing');
			this.model.set('myPrice', this.$myPrice.val().trim());  
		},

		changeHolidayPrice: function() {
			GlobalEvents.trigger('form:editing');
			this.model.set('holidayPrice', this.$holidayPrice.val().trim());
		}
	});

	return PageView;
});