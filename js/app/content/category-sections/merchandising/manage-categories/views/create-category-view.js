define([
	'backbone',
	'../models/category-model',
	'text!../templates/create-category-tpl.html',
	'jqueryval'
], function(Backbone, CategoryModel, CreateCategoryTpl) {
	var CreateCategoryView = Backbone.View.extend({
		template: CreateCategoryTpl,
		
		initialize: function() {
			this.setElement(CreateCategoryTpl);
		},

		cacheElem: function() {
			this.$layout = this.$el.find('#f-layout-select');
			this.$createForm = this.$el.find('#create-form');
		},

		render: function() {
			this.delegateEvents();
			this.cacheElem();
			this.validateForm();

			return this;
		},

		events: {
			'click #cancel-btn': 'handleCancelClick',
			'click #continue-btn': 'handleContinueClick'
		},

		handleCancelClick: function() {
			this.parent.showHome();
		},

		handleContinueClick: function() {
			if(this.$createForm.valid()) {
				this.parent.showCreateEdit(new CategoryModel({
					pageType: this.$layout.val()
				}));
			}
		},

		validateForm: function() {
			this.$createForm.validate({
				rules: {
					'f-layout-select': {
						required: function(e) {
							return $(e).find('option:selected').val() === '';
						}
					}
				}
			});
		}
	});

	return new CreateCategoryView;
});