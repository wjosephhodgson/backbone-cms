define([
	'backbone',
	'../templates/create-edit-date-time-delivery-fee-tpl',
	'../collections/date-time-delivery-fee-collection',
	'global-events',
	'jqueryui',
	'spectrum',
	'jqueryval'
], function(
	Backbone,
	CreateEditDateTimeDeliveryFeeTpl,
	DateTimeDeliveryFeeCollection,
	GlobalEvents
) {
	var CreateEditDateTimeDeliveryFeeView = Backbone.View.extend({
		tagName:'div',

		id:'p-create-edit-date-time-delivery-fee',

		template: CreateEditDateTimeDeliveryFeeTpl,

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			this.applyToolTips();
			this.applyDates();
			this.validateForm();
			this.initSpectrum();

			return this;
		},

		events: {
			'click #cancel-btn': 'handleCancel',
			'click #delete-btn': 'handleDelete',
			'click #save-btn':'handleSave',
			'change #f-start-date': 'hasValidForm',
			'change #f-end-date': 'hasValidForm',
			'change #f-feetype': 'handleFeeType'
		},

		cacheElem: function() {
			this.$active = this.$el.find('#f-active');
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$fee = this.$el.find('#f-fee');
			this.$feeMessageActive = this.$el.find('#f-fee-message-active');
			this.$calendarColor = this.$el.find('#f-calendar-color');
			this.$feeMessage = this.$el.find('#f-fee-message');
			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$ftype = this.$el.find('#f-feetype');
			this.$flabel = this.$el.find('#f-fee-label');
			this.$tip = this.$el.find('.tooltip-change');
		},

		initSpectrum: function() {
			// runs the color picker plugin
			var self = this;
			self.$calendarColor.spectrum({
			    color: "#ECC",
			    showInput: true,
			    className: "full-spectrum",
			    showInitial: true,
			    showPalette: true,
			    showSelectionPalette: true,
			    maxSelectionSize: 10,
			    preferredFormat: "hex",
			    localStorageKey: "spectrum.demo",
			    move: function (color) {
			        
			    },
			    show: function () {
			    
			    },
			    beforeShow: function () {
			    
			    },
			    hide: function () {
			    
			    },
			    change: function() {
			        
			    },
			    palette: [
			        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
			        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
			        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
			        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
			        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
			        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
			        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
			        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
			        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
			        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
			        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
			        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
			        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
			        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
			    ]
			});

		},

		showHome: function() {
			this.parent.showHome();
		},

		handleCancel: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleFeeType: function() {
			var
				self = this,
				ftype = this.$ftype.val();
			if( ftype == 'Fee' ){
				this.$flabel.text('Fee Amount');
			} else {
				this.$flabel.text('Discount Amount');
			}

		},

		handleDelete: function() {
			var self = this;

			GlobalEvents.trigger('form:delete', function() {
				DateTimeDeliveryFeeCollection.remove(self.model);
				self.showHome();
				GlobalEvents.trigger('form:finished');
			});
		},

		getDollarFormat: function(value) {
			var formatted, suffix;

			formatted = Number(value.replace(/[^0-9\.]+/g,"")) + '';
			suffix = formatted.match(/\.\d{2}/);

			if (!suffix || Number(suffix[0]) === 0) {
				formatted += '.00';
			}

			return '$' + formatted;
		},

		hasValidForm: function() {
			return this.$createEditForm.valid();
		},

		handleSave: function() {
			if (this.hasValidForm()) {
				this.model.set({
					active: this.$active.is(':checked'),
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					fee: this.getDollarFormat(this.$fee.val()),
					feeMessageActive: this.$feeMessageActive.is(':checked'),
					calendarColor: this.$calendarColor.val(),
					feeMessage: this.$feeMessage.val().trim()
				});

				if(!this.model.get('id')) {
					this.model.set('id', new Date().getTime()); // fake value
					DateTimeDeliveryFeeCollection.add(this.model);
				}

				this.showHome();

				GlobalEvents.trigger('form:save', this.$tip);
			}
		},

        applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
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

		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					'f-start-date': {
						dateCustom: true,
						required: true
					},

					'f-end-date': {
						dateCustom: true,
						required: true
					},

					'f-fee': {
						dollars: true,
						max: 999.99,
						required: true
					},

					// 'f-calendar-color': {
					// 	color: true
					// }
				}
			});
		}
	});

	return new CreateEditDateTimeDeliveryFeeView;
});