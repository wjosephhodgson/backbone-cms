define([
	'backbone',
	'../templates/item-custom-list-child-tpl',
	'global-events'
], function(
	Backbone, 
	ItemCustomListChildTpl,
	GlobalEvents
) {
	return Backbone.View.extend({

		template: ItemCustomListChildTpl,

		render: function() {
			var self = this;
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();

			return this;
		},

		events: {
			'click #cancel-btn':      'handleCancelBtnClick',
			'click #save-btn':        'handleSaveBtnClick'
		},

		cacheElem: function() {
			this.$tip                  = this.$el.find('.tooltip-change');
			this.$list                 = this.$el.find('#custom-list-list');
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					title: "required"
				}
			});
		}	

	});

});