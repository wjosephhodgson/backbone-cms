define([
	'backbone',
	'../templates/reward-modal-view-tpl',
	'../models/manage-rewards-model',
	'../collections/reward-collection',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	RewardModalTpl,
	RewardModel,
	RewardCollection,
	GlobalEvents
) { 
	var RewardModalView = Backbone.View.extend({

		tagName: 'div',

		id: 'rewardModal',

		template: RewardModalTpl,

		initialize: function() {
			var self = this;
		},

		render: function(viewModel) {
			var self = this;
			this.viewModel = this.model.toJSON();
			this.$el.html(this.template(this.viewModel));
			this.delegateEvents();
			this.cacheElem();
			this.validateForm();

			return self;
		},

		events: {
			'click #cancel-btn': 		'closeModal',
			'click #save-btn': 			'handleSave',
			'click #apply-points-btn': 	'handleApplyAdjustment'
		},

		cacheElem: function() {
			this.$applyBtn 			= this.$el.find('#apply-points-btn');
			this.$pointsTable 		= this.$el.find('#rewards-points-table');
			this.$adjustDescription = this.$el.find('#f-adjustmentDescription');
			this.$adjustAmount 		= this.$el.find('#f-pointsAdjustment');
			this.$adjustType 		= this.$el.find('#f-addSubPoints');
			this.$adjustForm		= this.$el.find('#f-adjustForm');
		},

		validateForm: function() {
			var self = this;
			self.$adjustForm.validate({
				rules: {
					'f-pointsAdjustment': {
						required: true,
						digits: true
					},
					'f-addSubPoints': 'required',
					'f-adjustmentDescription': 'required'
				}
			});
		},

		handleApplyAdjustment: function() {
			// add or subtract points from a consumer account when the Apply button is clicked
			// first checks to see if form is valid, then creates entry into table
			var self = this;
			if (this.$adjustForm.valid()) {
				var
					desc = self.$adjustDescription.val(),
					type = self.$adjustType.val(),
					amt  = self.$adjustAmount.val(),
					d    = new Date(),
					day  = d.getDate(),
					month = d.getMonth(),
					year  = d.getYear(),
					dateStr = day + '/' + month + '/' + year,
					offset,
					tip  = self.$adjustForm.find('.tooltip-change'),
					symbol,
					newTotal,
					total = +(self.$pointsTable.find('.td-total:last').text());
				
				// calc the new total
				if( type == 'Add' ) {
					offset = 1;
					symbol = '+';
				} else {
					offset = -1;
					symbol = '-';
				}
				newTotal = (amt * offset) + total;

				// add new entry into table
				self.$pointsTable.append('<tr><td class="left-align">'+dateStr+'</td><td class="left-align">Points Adjustment</td><td class="left-align">'+symbol+' '+amt+'</td><td class="left-align td-total">'+newTotal+'</td><td class="left-align"></td><td class="left-align"></td><td class="left-align"></td></tr>');
				
				// clear out form fields
				self.$adjustDescription.val('');
				self.$adjustType.val('');
				self.$adjustAmount.val('');

				// show and hide tooltip
				tip.fadeIn(200);
				setTimeout(function(){
					tip.fadeOut(200);
				}, 3000);

			} 
		},

		handleSave: function() {
			var self = this;
			self.model.set({
				// firstName:"",
				// lastName:"",
				// emailAddress:"",
				// optInDate:"",
				// optOutDate:"",
				// accountStatus:"",
				// currentBalance:""
			});
			GlobalEvents.trigger('form:save', self.$tip);
		},

		closeModal: function() {
			this.$el.parent().dialog('close');
		}


	}); // View ends here

	return new RewardModalView;

});