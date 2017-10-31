define([
	'backbone',
	'../collections/drop-ship-collection',
	'../templates/create-edit-drop-ship-tpl',
	// UH OH DON'T DO THIS
	'../../delivery-days-times/collections/days-collection',
	'../../delivery-days-times/views/list-view',
	'global-events',
	'jquery',
	'jqueryui',
	'jqueryval'
], function(Backbone, DropShipCollection, CreateEditDropShipTpl, DaysCollection, DaysListView, GlobalEvents) {
	var CreateEditDropShipView = Backbone.View.extend({
		template: CreateEditDropShipTpl,

		initialize: function() {},

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.addAllDays();
			this.applyToolTips();
			this.validateForm();

			return this;
		},

		cacheElem: function() {
			this.$serviceType = this.$el.find('#f-service-type');
			this.$minDaysDelivery = this.$el.find('#f-min-days-delivery');
			this.$standardDeliveryFee = this.$el.find('#f-standard-delivery-fee');
			this.$alaskaDeliveryActive = this.$el.find('#f-alaska-delivery-active');
			this.$hawaiiDeliveryActive = this.$el.find('#f-hawaii-delivery-active');
			this.$checkoutText = this.$el.find('#f-checkout-text');
			this.$comments = this.$el.find('#f-comments');
			this.$daysList = this.$el.find('#m-delivery-days-list');
			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$tip               = this.$el.find('.tooltip-change');
		},

		events: {
			'click #cancel-btn': 'handleCancelClick',
			'click #save-btn': 'handleSaveClick',
		},

		handleCancelClick: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		// On save, create the page (doesn't perform any validation)
		handleSaveClick: function() {
			var fee, suffix;

			if (this.$createEditForm.valid()) {

				fee = Number(this.$standardDeliveryFee.val().trim().replace(/[^0-9\.]+/g,"")) + '';
				suffix = fee.match(/\.\d{2}/);

				if (!suffix || Number(suffix[0]) === 0) {
					fee += '.00';
				}

				this.model.set({
					serviceType: this.$serviceType.find('option:selected').val().trim(),
					minDaysDelivery: this.$minDaysDelivery.val().trim(),
					standardDeliveryFee: '$' + fee,
					alaskaDeliveryActive: this.$alaskaDeliveryActive.is(':checked'),
					hawaiiDeliveryActive: this.$hawaiiDeliveryActive.is(':checked'),
					checkoutText: this.$checkoutText.val().trim(),
					comments: this.$comments.val().trim()
				});

				if (!DropShipCollection.get(this.model)) {
					this.model.set('id', new Date().getTime()); // fake value
					DropShipCollection.add(this.model);
				}

				// Return to home view
				this.parent.showHome();

				GlobalEvents.trigger('form:save', this.$tip);
			}
			else {
                GlobalEvents.trigger('form:invalid', this.$tip);
            }

		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		addDay: function(day) {
			var newView = new DaysListView({
				model: day
			});

			this.$daysList.append(newView.render().el);
		},

		addAllDays: function() {
			this.$daysList.empty();

			DaysCollection.each(this.addDay, this);
		},

		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					'f-standard-delivery-fee': {
						required: true,
						dollars: true
					},
					'f-service-type': {
						required: function(e) {
							return $(e).find('option:selected').val() === '';
						}
					},
					'f-checkout-text': 'required',
					'f-min-days-delivery': {
						required: true,
						min: 0
					}
				}
			});
		}
	});

	return new CreateEditDropShipView;
});