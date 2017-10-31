define([
	'backbone',
	'../templates/item-custom-html-tpl',
	'global-events'
], function(
	Backbone, 
	ItemCustomHTMLTpl,
	GlobalEvents
) {
	var ItemCustomHTMLView = Backbone.View.extend({
		template: ItemCustomHTMLTpl,
		render: function() {
			var self = this;
			//this.setElement(this.template(this.model.toJSON()));
			self.$el.html(self.template(self.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			this.applyTinymce();
			//this.validateForm();

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

		applyTinymce: function() {
			var self = this;
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

					selector: 'textarea#f-custom-html-content',
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
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

	return new ItemCustomHTMLView;
});