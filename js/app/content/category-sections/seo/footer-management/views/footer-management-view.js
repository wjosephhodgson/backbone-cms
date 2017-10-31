define([
	'underscore',
	'backbone',
	'../models/footer-management-model',
	'../templates/footer-management-tpl',
	'content/category-sections/container/category-section-view',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
], function(_, Backbone, FooterManagementModel, FooterManagementTpl, CategorySectionView, GlobalEvents, tinymce) {
	var FooterManagementView = Backbone.View.extend({

		template: FooterManagementTpl,

		render: function() {
			var self = this;

			FooterManagementModel.fetchCustom().done(function(){
				self.$el.html(self.template(FooterManagementModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.applyToolTips();
				self.applyTinymce();
				self.validateForm();
			});

			return self;
		},

		cacheElem: function() {
			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$overrideSection = this.$el.find('#f-custom-footer-address-wrap');
			this.$CustomoverrideSection = this.$el.find('#customAddressDiv');
			this.$overrideText = this.$el.find('#f-custom-footer-address');
			// this.$customOverrideText = this.$el.find('#f-custom-val');
			this.$footerDisplayAddress = this.$el.find('#f-footer-display-address');
			this.$emailSignupActive = this.$el.find('#f-footer-email');
			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'change #f-footer-display-address': 'handleFooterDisplayAddressChange',
			'click #save-btn': 'handleSave'
		},

		handleFooterDisplayAddressChange: function(e) {
			switch(e.target.value) {
				  case 'Display Address':
				     
				       $('#customAddressDiv').addClass('hidden');

				  	   $('#f-custom-footer-address-wrap').removeClass('hidden');

				  	 
				  	   this.$overrideText.val( (FooterManagementModel.get('address1')) +'\r\n'+ (FooterManagementModel.get('address2')) );
					   this.$overrideText.attr('disabled', true);
					   this.$overrideSection.fadeIn(200);
				  
				break;

				case 'Custom':
				      $('#f-custom-footer-address-wrap').addClass('hidden');

				      $('#customAddressDiv').removeClass('hidden');
					  this.$CustomoverrideSection.fadeIn(200);
				break;

				case 'Don\'t Display Address':

				    $('#f-custom-footer-address-wrap').removeClass('hidden');
				    $('#customAddressDiv').addClass('hidden');
					this.$overrideSection.fadeOut(200);
				break;
			}
		},

		applyTinymce: function() {
			setTimeout(function() {
				tinymce.remove();

				tinymce.init({
					setup: function(editor) {
						
						// Add custom image button
						var pluginImgPath = 'js/vendor/tinymce/';
						editor.addButton('myimagebutton', {
							title: 'Insert image',
							icon: 'image',
							onclick: function(){
								editor.focus();
								var newSrc;
								GlobalEvents.trigger('form:image-upload', {
									cb: function(url) {
										newSrc = url,
										newImg = '<img src="'+newSrc+'">',
										editor.selection.setContent(newImg);
									},
									active: newSrc,
									name: 'Custom HTML'
								});								
							}
						});

						editor.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});
					},

					selector: 'textarea.tinymce',
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		handleSave: function() {

			if(this.$createEditForm.valid()) {
				FooterManagementModel.set({
					customFooterText: tinymce.activeEditor.getContent(),
					addressDisplay:   this.$footerDisplayAddress.find('option:selected').val(),
					emailSignup:      this.$emailSignupActive.is(':checked')
				});

				if(FooterManagementModel.get('addressDisplay') === 'Custom') {
					FooterManagementModel.set({
						customAddress: $('#f-custom-val').val().trim()
					});
				}

				GlobalEvents.trigger('form:save', this.$tip);

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip)
			}
		},


		validateForm: function() {
			 var self = this;
		      self.validator = self.$createEditForm.validate({
		        rules: {   
		          'f-custom-val': 'required'
		        }
		      });
		}
	});

	return new FooterManagementView;
});