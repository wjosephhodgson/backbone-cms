define([
  'backbone',
  '../collections/esat-admininistration-Home-collection',
  '../collections/esat-admininistration-CustomHtmlPage-collection',
  '../templates/esat-administration-createEdit-customHTMLPage-tpl',
  '../models/esat-administration-CustomHtmlPage-model',
  'global-events',
  'tinymce',
  'jqueryui',
  'jqueryval'
  ], function(
	Backbone,
	EsatAdminHomeCollection,
	EsatAdminCustomHtmlPageCollection,
	CreateEditCustomHTMLPageTpl,
	EsatAdminCustomHtmlPageModel,
	GlobalEvents,
	tinymce
	) { 
 	var CreateEditCustomHTMLPageView = Backbone.View.extend({

 	   tagName: 'form',

 	   id: 'CustomHTMLPageModal',

	   template: CreateEditCustomHTMLPageTpl,

        initialize: function() {
        	var self = this;
        },
        

	   render: function(viewModel) {
			var self = this;

            this.viewModel = this.model.toJSON();

			this.setElement(this.template(this.model.toJSON()));
            
			this.$el.html(this.template(this.viewModel));

			this.delegateEvents();

			this.cacheElem();

			this.applyTinymce();

			this.validateForm();


            return self;

       },

	   events: {
         'click #cancel-btn': 'closeModal',
         'click #delete-btn': 'handleDeleteBtn',
         'click #save-btn': 'handleSave'
	   },

	   cacheElem: function() {
		   this.$CustomHTMLPageActive = this.$el.find('#f-create-edit-page-Active');
		   this.$CustomHTMLPageName = this.$el.find('#f-customHTML-page-name');
		   this.$CustomHTMLPageUrl = this.$el.find('#f-customHTML-page-url');
		   this.$CustomHTMLPageMetaTags = this.$el.find('#f-customHTMLMetaTags');
		   this.$tip 	= this.$el.find('.tooltip-change');
		   this.$createEditForm = this.$el.find('#customhtmlpage-form')
	   },


	   handleDeleteBtn: function() {
            var self = this;

            GlobalEvents.trigger(
                'form:delete',
                EsatAdminCustomHtmlPageCollection.remove.bind(EsatAdminCustomHtmlPageCollection, self.model)
                ); 

            self.$el.parent().dialog('close');

            setTimeout(function() { 
            	self.parent.handleCustomHTMLTableUpdate() 
            }, 1500);
          
        },

       handleSave: function() {
           var self = this;

			if(self.$createEditForm.valid()) {
				console.log("If the two input fields are empty, a console log should not appear");
	            self.model.set({
		            CustomHTMLPageName: self.$CustomHTMLPageName.val().trim(),
					CustomHTMLPageActive: self.$CustomHTMLPageActive.is(':checked'),
					CustomHTMLPageURL: self.$CustomHTMLPageUrl.val().trim(),
					CustomHTMLPageMetaTags: self.$CustomHTMLPageMetaTags.val().trim(),
					CustomHTMLPageContent: tinymce.activeEditor.getContent()
	            });

	            if(!EsatAdminCustomHtmlPageCollection.get(self.model)) {
	                    self.model.set('id', Date.now());
	                    EsatAdminCustomHtmlPageCollection.add(self.model);
	            }
	            
	            GlobalEvents.trigger('form:save', self.$tip);
	            self. closeModal();

			}
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

				name: 'Custom HTML Content'
			});
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
					width : '99%',
					height: 200,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},


	   closeModal: function() {
	   	    this.parent.handleCustomHTMLTableUpdate();   // reference to CustomRend View
			this.$el.parent().dialog('close');

			//on modal close assign Custom HTML Model to the current saved model
		},

		validateForm: function() {
			var self = this;
			self.$createEditForm.validate({
				rules: {
					'f-customHTML-page-name': {
						required: true
					},
					'f-customHTML-page-url': {
						required: true
					}
				}
			});
		}


 	}); // View ends here

  return new CreateEditCustomHTMLPageView;

});