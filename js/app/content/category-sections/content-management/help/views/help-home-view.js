define([
	'backbone',
	'../templates/help-home-tpl',
	'../models/help-model',
	'../models/question-model',
	'./question-view',
	'../collections/company-policy-collection',
	'../collections/orders-returns-policy-collection',
	'../collections/security-privacy-policy-collection',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	HelpHomeTpl,
	HelpModel,
	QuestionModel,
	QuestionView,
	CompanyPolicyCollection,
	OrdersReturnsPolicyCollection,
	SecurityPrivacyPolicyCollection,
	GlobalEvents
) {
	var HelpView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-help',

		template: HelpHomeTpl,

		initialize: function() {},

		render: function() {
			this.$el.html(this.template(HelpModel.toJSON()));
			this.cacheElem();
			this.initPolicy(this.$companyPolicy, CompanyPolicyCollection);
			this.initPolicy(this.$ordersReturnsPolicy, OrdersReturnsPolicyCollection);
			this.initPolicy(this.$securityPrivacyPolicy, SecurityPrivacyPolicyCollection);
			this.delegateEvents();
			this.applyTooltips();

			return this;
		},

		cacheElem: function() {
			// tbody
			this.$companyPolicy = this.$el.find('#company-policy');
			this.$ordersReturnsPolicy = this.$el.find('#orders-returns-policy');
			this.$securityPrivacyPolicy = this.$el.find('#security-privacy-policy');

			// switches
			this.$companyActive = this.$el.find('#f-company-policy-active');
			this.$ordersReturnsActive = this.$el.find('#f-orders-returns-policy-active');
			this.$securityPrivacyActive = this.$el.find('#f-security-privacy-policy-active');

			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'click #new-btn': 'handleNew',
			'click #f-company-policy-active':'handleSwitch',
			'click #f-orders-returns-policy-active':'handleSwitch',
			'click #f-security-privacy-policy-active':'handleSwitch',
			'click #save-btn':'handleSave'
		},

		initPolicy: function(context, collection) {
			this.addAllQuestions(context, collection);
			this.applySortable(context, collection);
			this.listenTo(collection, 'resequenced sync', this.addAllQuestions.bind(this, context, collection));
		},

		addQuestion: function(context, collection, question) {
			var newView = new QuestionView({
				model: question,
				collection: collection,
				parent: this
			});

			context.append(newView.render().el);
		},

		addAllQuestions: function(context, collection) {
			context.empty();

			collection.sort();

			collection.each(
				this.addQuestion.bind(this, context, collection),
				this
			)
		},

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},

		applySortable: function(context, collection) {
			var self = this;

			context.sortable({
				helper: self.helperFixRowWidth,
				containment: 'parent',
				delay: 100,
				tolerance: 'pointer',

				start: function(e, ui) {
					ui.helper.addClass('active');
					ui.placeholder.height(ui.item.height());
				},
           /* Dev Note: Use this function to handle sort (SM Media), cam use sequence replace var id as key*/
				update: function(e, ui) {     
					context.children().each(function(index) {
						var id = $(this).data('id');

						collection.get(id).set('sequence', index + 1);
					});

					collection.changeSort('sequence');
					collection.sort();
					collection.trigger('resequenced');
					GlobalEvents.trigger('form:editing');
				}
			});
		},

		handleNew: function() {
			this.parent.showCreateEdit(CompanyPolicyCollection, new QuestionModel);
		},

		handleEdit: function(collection, model) {
			this.parent.showCreateEdit(collection, model);
		},

		handleSave: function() {
			GlobalEvents.trigger('form:save', this.$tip);
		},

		applyTooltips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleSwitch: function() {
			GlobalEvents.trigger('form:editing');
			HelpModel.set({
				companyActive: this.$companyActive,
				ordersReturnsActive: this.$ordersReturnsActive,
				securityPrivacyActive: this.$securityPrivacyActive
			});
		}
	});

	return new HelpView;
});