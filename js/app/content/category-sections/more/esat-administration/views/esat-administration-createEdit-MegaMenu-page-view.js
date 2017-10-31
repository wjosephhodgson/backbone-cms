define([
  'backbone',
  '../collections/esat-admininistration-MegaMenu-collection',
  '../templates/esat-administration-createEdit-MegaMenu-tpl',
  '../models/esat-administration-MegaMenu-model',
  'global-events',
  'tinymce',
  'jqueryui',
  'jqueryval'
  ], function(
	Backbone,
	EsatAdminMegaMenuCollection,
	CreateEditMegaMenuPageTpl,
	EsatAdminMegaMenuModel,
	GlobalEvents,
	tinymce
	) { 
 	var CreateEditMegaMenuPageView = Backbone.View.extend({

 	   tagName: 'form',

 	   id: 'MegaMenuPageModal',

	   template: CreateEditMegaMenuPageTpl,

		initialize: function() {

			var self = this;

		},

	   render: function(viewModel) {

			$(document).on('focusin', function(e) {
			    if ($(e.target).closest(".mce-window, .moxman-window").length) {
					e.stopImmediatePropagation();
				}
			});

            this.viewModel = this.model.toJSON();
            
			this.$el.html(this.template(this.viewModel));


			this.delegateEvents();

			this.cacheElem();

			this.applyTinymce();

			var self = this;

            return self;

       },

	   events: {
         'click #cancel-btn': 'closeModal',
         'click #save-btn': 'handleSave'
	   },
 
     cacheElem: function() {
     	this.$MegaMenuActiveStatus = this.$el.find('#f-create-edit-MegaMenu-Active');
     	this.$MegaMenuBlockTitle = this.$el.find('#f-blocktitle-name');
     	this.$createEditMegaMenuForm = this.$el.find('#MegaMenu-modal-val');
     	this.$tip 	= this.$el.find('.tooltip-change');


     },

	 handleImageUpload: function(e) {
			var self = this;
			var newSrc;
			GlobalEvents.trigger('form:image-upload', {

				cb: function(url) {
					newSrc = url,
					newImg = '<img src="'+newSrc+'">',
					editor.selection.setContent(newImg);
				},

				active: newSrc,

				name: 'Mega Menu Content'
			});
		},

	  handleSave: function() {

	  	var self = this;
		
		self.model.set({
		 	MegaMenuBlockContent: tinymce.activeEditor.getContent(),
	    	MegaMenuActive: self.$MegaMenuActiveStatus.is(':checked'),
	    	MegaMenuBlockTitle: self.$MegaMenuBlockTitle.val().trim()
	   	});

		GlobalEvents.trigger('form:save', self.$tip);

		self.closeModal();
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

					selector: 'textarea.tinymce',
					width: '100%',
					height: 300,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},


	   	closeModal: function() {
			this.$el.parent().dialog('close');
		}


 	}); // View ends here

  return new CreateEditMegaMenuPageView;

});