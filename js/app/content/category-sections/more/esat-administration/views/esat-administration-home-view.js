define([
	'backbone',
	'../collections/esat-admininistration-Home-collection',
	'../collections/esat-admininistration-CustomHtmlPage-collection',
	'../collections/esat-admininistration-MegaMenu-collection',
    '../models/esat-administration-CreateEditPermissions-model',
	'../models/esat-administration-Home-model',
	'../models/esat-administration-CustomHtmlPage-model',
	'../models/esat-administration-MegaMenu-model',
	'../collections/esat-admininistration-Permissions-collection',
	'../templates/esat-administration-home-tpl',
	'./esat-administration-CustomHTMLRend-view',
	'./esat-administration-MegaMenuRend-view',
	'./esat-administration-Permissions-Rend-view',
	'./esat-administration-createEdit-CustomHTML-page-view',
	'./esat-administration-createEdit-MegaMenu-page-view',
	'./esat-administration-createEdit-Permissions-page-view',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
],function(
	Backbone,
	EsatAdminHomeCollection, 
	EsatAdminCustomHtmlPageCollection, 
	EsatAdminMegaMenuCollection,
	CreateEditPermissionsTableModel,
	EsatAdminHomeModel,
	EsatAdminCustomHtmlPageModel, 
	EsatAdminMegaMenuModel,
    EsatAdminPermissionsCollection,
	EsatAdminHomeTpl, 
	EsatAdminCustomHTMLRendView,
	EsatAdminMegaMenuRendView,
	EsatAdminPermissionsRendView,
	CreateEditCustomHTMLPageView,
	CreateEditMegaMenuPageView,
	CreateEditPermissionsPageView,
	GlobalEvents, 
	tinymce)
{
	var EsatAdminHomeView = Backbone.View.extend({

		tagName: 'form',
		id: 'm-eSat-management',

		template: EsatAdminHomeTpl,
		
		render: function() {

            var self = this;

				self.$el.html(self.template(EsatAdminHomeModel.toJSON()));
			    
				self.delegateEvents();
				self.cacheElem();
				self.applyTabs();
				self.applyTinymce();


				EsatAdminCustomHtmlPageCollection.fetchCustom().done(function() {
				   self.addAllCustomHTMLPages();
				   self.setModalCustomHTMLPage();
			  }); 

				EsatAdminMegaMenuCollection.fetchCustom().done(function() {
				   self.addAllMegaMenuPages();
				   self.setModalMegaMenu();
				});

				EsatAdminPermissionsCollection.fetchCustom().done(function() {

					self.addAllPermissionsGroups();
					self.setModalPermissions();
				});

				return self;
		},
		



		events: {
			'click #save-btn': 'handleSave',
			'click #cancel-btn': 'handleCancel',
			'click #add-new-CustomHTMLPage-btn': 'handleCreateNewCustomHTMLPage'
		},

		cacheElem: function() {
			this.$modalCustomHTML = this.$el.find('#CustomHtmlPage-modal');
			this.$modalMegaMenu = this.$el.find('#MegaMenuPage-modal');
			this.$modalPermissions = this.$el.find('#Permissions-modal');
			this.$HomePageContent = this.$el.find('#f-home-page-content');
			this.$tip = this.$el.find('.tooltip-change');
			this.$CustomHTMLPageList = this.$el.find('#CustomHTMLPages-List');
			this.$CustomHTMLPageActiveStatus = this.$el.find('.customHTMLActive-switch');
			this.$MegaMenuList = this.$el.find('#MegaMenuPages-List');
			this.$PermissionsList = this.$el.find('#Permissions-List');

		},

		handleSave: function() {

			var self = this;

				EsatAdminHomeModel.set({
					HomePageContent: tinymce.activeEditor.getContent()
				});
 
				GlobalEvents.trigger('form:save', self.$tip);
             

		},



		handleCancel: function() {

			 var self = this;

			GlobalEvents.trigger('modal:custom', {

				 template: {
                    title: 'Reset Settings',
                    text: 'Are you sure? This will reset all applicable fields to their default values.'
               	 },

             confirmFn: function(){

               tinymce.activeEditor.setContent(EsatAdminHomeModel.get('HomePageContent'));
             }

             });

		},

		handleCreateNewCustomHTMLPage: function(model) {

	        this.showModalCustomHTMLPage(CreateEditCustomHTMLPageView, new EsatAdminCustomHtmlPageModel);
		},

		setModalCustomHTMLPage: function() {

	      this.$modalCustomHTML.dialog({
	        autoOpen: false,
	        modal: true,
	        draggable: false,
	        show: {
	          effect: 'fade',
	          speed: 200
	        },
	        hide: {
	          effect: 'fade',
	          speed: 100
        	}
      	  });
    	},

		showModalCustomHTMLPage: function(view, model) {
			
	    	view.model = model;

	    	this.$modalCustomHTML.empty();
	    	this.$modalCustomHTML.append(view.render().el);
	        this.$modalCustomHTML.dialog('open');
    	},
     

        handleHTMLEdit: function(model) {
        	this.showModalCustomHTMLPage(CreateEditCustomHTMLPageView, model);
        },

        handleCustomHTMLTableResequence: function(model) {
        	this.addAllCustomHTMLPages();

        },



        

        // Add a particular Custom HTML page
        addCustomHTMLPage: function(homepage) {
            var newView = new EsatAdminCustomHTMLRendView({
                model: homepage,
                parent: this
            });
            this.$CustomHTMLPageList.append(newView.render().el);
        },


        // Sort collection by level (allow top-level pages to be appended first)
        addAllCustomHTMLPages: function() {
            this.$CustomHTMLPageList.empty();

            EsatAdminCustomHtmlPageCollection.each(this.addCustomHTMLPage, this);
        },



          //Mega Menu Create Edit Modal

       handleMegaMenuEdit: function(model) {
        	this.showModalMegaMenu(CreateEditMegaMenuPageView, model);
        },



        setModalMegaMenu: function() {

	      this.$modalMegaMenu.dialog({
	        autoOpen: false,
	        modal: true,
	        draggable: false,
	        show: {
	          effect: 'fade',
	          speed: 200
	        },
	        hide: {
	          effect: 'fade',
	          speed: 100
        	}
      	  });
    	},

		showModalMegaMenu: function(view, model) {
			
	    	view.model = model;

	    	this.$modalMegaMenu.empty();
	    	this.$modalMegaMenu.append(view.render().el);
	        this.$modalMegaMenu.dialog('open');
    	},


        // Add a particular Mega Menu page
        addMegaMenuPage: function(homepage){
        	 var newView = new EsatAdminMegaMenuRendView({
                model: homepage,
                parent: this
            });
            this.$MegaMenuList.append(newView.render().el);

        },

         // Sort collection by level (allow top-level pages to be appended first)
        addAllMegaMenuPages: function() {
            this.$MegaMenuList.empty();

            EsatAdminMegaMenuCollection.each(this.addMegaMenuPage, this);
        },



        // Permissions Tab


        handlePermissionsEdit: function(model) {
        	this.showPermissionsModal(CreateEditPermissionsPageView, model);
        },

        setModalPermissions: function() {

	      this.$modalPermissions.dialog({
	        autoOpen: false,
	        modal: true,
	        draggable: false,
	        show: {
	          effect: 'fade',
	          speed: 200
	        },
	        hide: {
	          effect: 'fade',
	          speed: 100
        	}
      	  });
    	},

		showPermissionsModal: function(view, model) {
			
	    	view.model = model;

	    	this.$modalPermissions.empty();
	    	this.$modalPermissions.append(view.render().el);
	        this.$modalPermissions.dialog('open');
    	},


        // Add a particular Permissions Group
        addPermissionsGroup: function(homepage){
        	 var newView = new EsatAdminPermissionsRendView({
                model: homepage,
                parent: this
            });
            this.$PermissionsList.append(newView.render().el);
        },

         // Sort collection by level (allow top-level pages to be appended first)
        addAllPermissionsGroups: function() {
            this.$PermissionsList.empty();

            EsatAdminPermissionsCollection.each(this.addPermissionsGroup, this);
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

				name: 'Home Page Content'
			});
		},

		applyTabs: function() {
			this.$el.find('#tabs').tabs();
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
					height: 300,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},


		validateTinymce: function() {
			if(!!tinymce.activeEditor.getContent()) {
				return true;
			} else {
				$('#tiny-mce-container')
					.addClass('error')
					.append('<label id="f-page-main-content-error" class="error" for="f-page-main-content">This field is required.</label>');

				return false;
			}
		}
        
	});
    return new EsatAdminHomeView;
});