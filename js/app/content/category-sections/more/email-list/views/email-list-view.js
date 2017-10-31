define([
	'backbone',
	'../templates/email-list-tpl',
	'../models/email-model',
	'global-events',
	'jqueryui'
], 
  function(
  	Backbone, 
	EmailListTpl, 
	EmailModel,
	GlobalEvents
) {
	var EmailListView = Backbone.View.extend({
		tagName: 'div',

		id:"p-email-list-management",

		template: EmailListTpl,

		initialize: function() {
			// EmailListModalView.parent = this;
		},

		render: function() {
			var self = this;

			EmailModel.fetchCustom().done(function() {
		        this.$el.html(this.template(EmailModel.toJSON()));

				self.cacheElem();
				self.delegateEvents();
			}.bind(this));

			return self;
		},

		events: {
			// 'click #save-btn': 'handleSave',
			'click #cancel-btn': 'handleCancel',
			'click #update-btn': 'showHidePanel',
			'change #uploadimage': 'handleSave',
			'click #sample-btn': 'handleDownload'
		},

		cacheElem: function() {
			this.$modalAlert   = this.$el.find('#modal-alert');
			this.$save         = this.$el.find('#save-btn');
			this.$fileBtn      = this.$el.find('#file-btn');
			this.$updatelistBtn = this.$el.find('#update-btn');
			this.$fVal = this.$el.find('#f-fVal');
			this.$pathName = this.$el.find('.pathName');
			this.$hideButton = this.$el.find('.hidebutton');
			this.$hideLabel = this.$el.find('.hidelabel');

			this.$counter=0;
		},

		handleDownload: function() {
		    window.location.assign('/mock/Email-Uploads-Sample.xls');
		},

		showHidePanel: function() {
			var self = this;

			if(this.$counter % 2 === 0) { 
				this.$counter++;
				this.$showHidePanel.removeClass('hidden').fadeIn('slow');
				this.$updatelistBtn.html('<div class="icon icon-lg icon-down-chevron"></div> HIDE LIST');
			} else {
				this.$counter++;
				this.$showHidePanel.addClass('hidden').fadeOut('slow');
				this.$updatelistBtn.html('<div class="icon icon-lg icon-add"></div>UPDATE LIST');
			}

		},

		handleSave: function() {
				
			var 
				self = this,
				fVal = this.$fileBtn.val();
			if( fVal.indexOf('.csv') > -1 ){

				EmailModel.set({
					pathName:this.$fileBtn.val(),
				})
				this.$hideButton.hide();
				this.$hideLabel.text('Selected File');
				this.$pathName.removeClass('hidden').show().prop('disabled', true);
				fVal = fVal.replace(/^.*[\\\/]/, '');
				this.$pathName.val(fVal);

			} else {
				this.$modalAlert.removeClass('hidden');
				setTimeout( function(){
					self.$modalAlert.addClass('hidden');
				}, 5000);
			}


		}

	});

	return new EmailListView;
});