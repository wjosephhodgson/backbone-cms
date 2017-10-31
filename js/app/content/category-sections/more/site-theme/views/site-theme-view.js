define([
	'backbone',
	'../models/site-theme-model',
	'../templates/site-theme-tpl',
	'../collections/layout-theme-collection',
	'./layout-theme-view',
	'content/shared/collections/blank-collection',
	'components/linked-images/views/linked-images-view',
	'tinymce',
	'global-events'
], function(
	Backbone, 
	SiteThemeModel, 
	SiteThemeTpl, 
	LayoutThemeCollection, 
	LayoutThemeView, 
	BlankCollection,
	LinkedImagesView,
	tinymce, 
	GlobalEvents
) {
	var SiteThemeView = Backbone.View.extend({
		tagName: 'form',

		id: 'p-site-theme',

		template: SiteThemeTpl,

		render: function() {
			var self = this;

			SiteThemeModel.fetchCustom().done(function() {
				self.$el.html(self.template(SiteThemeModel.toJSON()));
				self.cacheElem();
				self.delegateEvents();
				self.applyToolTips();
				self.handleHeaderLayout();
				self.applyTinyMCE();
				self.handleContentType();

				LayoutThemeCollection.fetchCustom().done(function() {
					self.addAllLayoutThemes();
					self.markActiveColorScheme();
				});

				self.state = {
					themeId: SiteThemeModel.get('selectedThemeId'),
					themeSchemeId: SiteThemeModel.get('selectedThemeSchemeId')
				}

				self.imageCollection1 = new BlankCollection(
					SiteThemeModel.get('secondaryNav')
				);
				self.linkedImagesView1 = new LinkedImagesView({
					collection: self.imageCollection1,
					btnTitle: 'Add New Nav Link',
					sizeOption: false,
					imgOption: false,
					dimOption: false,
					titleOption: false,
					countOption: false
				});
			    self.$navArea.append(self.linkedImagesView1.render().el);				

			});

			return self;
		},

		cacheElem: function() {
			this.$layoutThemeContainer = this.$el.find('#layout-theme-container');
			this.$displayImage         = this.$el.find('#display-image');
			this.$backButton           = this.$el.find('#back-btn');
			this.$seasonalToggle       = this.$el.find('#seasonal-toggle');
			this.$logoImg              = this.$el.find('#logo-img');
			this.$seasonalToggleActive = this.$el.find('#f-automatic-seasonal-rotation-active');
			this.$tip 					= this.$el.find('.tooltip-change');
			this.$DisplaySocialIcon    = this.$el.find('#f-header-icons');
			this.$headerLayout 			= this.$el.find('#f-header-layout');
			this.$preview				= this.$el.find('#header-layout-preview');

			this.$img1					= this.$el.find('#f-img-1');
			this.$headerImg				= this.$el.find('#header-image-content');
			this.$headerText			= this.$el.find('#header-text-content');
			this.$headerContent			= this.$el.find('#header-content-area');
			this.$headerNav				= this.$el.find('#header-secondary-nav');
			this.$contentType 			= this.$el.find('#f-header-content-type');
			this.$navArea				= this.$el.find('#header-nav-linked-table');

			this.$DisplayQuickShop     = this.$el.find('#f-header-quick-shop');

			this.$displaySocialQuickAlert = this.$el.find('#display-social-quick-alert');
			this.$subThemeAlert 		= this.$el.find('#subtheme-alert');

		},

		events: {
			'click #back-btn': 				'hideColorSchemes',
			'click #img-btn-1': 			'handleImageUpload1',
			'click #f-logo-img-file': 		'handleFileUpload',
			'change #f-header-content-type':'handleContentType',
			'change #f-automatic-seasonal-rotation-active': 'handleSeasonalToggle',
			'click #f-header-icons': 		'checkDisplayButtons',
			'click #f-header-quick-shop': 	'checkDisplayButtons', 
			'change #f-header-layout': 		'handleHeaderPreview',
			'change #f-header-layout': 		'handleHeaderLayout',
			'click #save-btn': 				'handleSave'
		},

		state: {
			themeId: '',
			themeSchemeId: ''
		},

		handleHeaderPreview: function(layout){
			var self = this,
				previewImg;
			previewImg = 'images/previews/header-'+layout+'.jpg';
			self.$preview.attr('src',previewImg);
		},

		handleHeaderLayout: function(){
			var self = this,
				currentLayout = this.$headerLayout.find('option:selected').val();
			self.handleHeaderPreview(currentLayout);
			if( currentLayout == 2 ){ // Image/Text Area
				self.$headerContent.show();
				self.$headerNav.hide();
			} else if( currentLayout == 7 ){// Secondary Nav
				self.$headerContent.hide();
				self.$headerNav.show();
			} else {
				self.$headerContent.hide();
				self.$headerNav.hide();				
			}
		},

		updateState: function(state) {
			this.state = state;
		},

		handleContentType: function(){
			var self = this,
				cVal = self.$contentType.find('option:selected').val();
			if( cVal == 'image' ){
				self.$headerImg.show();
				self.$headerText.hide();
			} else if( cVal == 'text' ){
				self.$headerImg.hide();
				self.$headerText.show();
			} else {
				self.$headerImg.hide();
				self.$headerText.hide();				
			}
		},

		handleImageUpload1: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img1.prop('src', url);
				},

				active: self.$img1.prop('src'),

				name: 'Custom HTML'
			});

		},

		addLayoutTheme: function(layoutTheme) {
			var newView = new LayoutThemeView({
				model: layoutTheme,
				parent: this
			});

			this.$layoutThemeContainer.append(newView.render().el);
		},

		addAllLayoutThemes: function() {
			this.$layoutThemeContainer.empty();

			LayoutThemeCollection.each(this.addLayoutTheme, this);
		},

		showColorSchemes: function() {
			this.$layoutThemeContainer.find('.site-theme-layout-theme').hide();
			this.$backButton.fadeIn(200);
		},

		hideColorSchemes: function() {
			this.$backButton.fadeOut(200);
			this.$layoutThemeContainer.find('.site-theme-color-schemes').hide();
			this.$layoutThemeContainer.find('.site-theme-layout-theme').fadeIn(200);
		},

		markActiveColorScheme: function(id) {
			id = id || '#l' + SiteThemeModel.get('selectedThemeId') + 's' + SiteThemeModel.get('selectedThemeSchemeId');

			var element = this.$layoutThemeContainer.find(id);
			var themeName = LayoutThemeCollection;
			console.log(themeName);
			
			this.$layoutThemeContainer.find('.active').removeClass('active');
			element.addClass('active');
			element.parent().siblings('.site-theme-layout-theme').addClass('active');
			this.$displayImage.attr('src', element.children('img').attr('src'));

			if(!this.$layoutThemeContainer.find('.seasonal-layout').hasClass('active')) {
				this.$seasonalToggle.fadeOut(200);
			} else {
				// Uncheck seasonal toggle if a specific seasonal is selected
				this.$seasonalToggle.find('.on-off-switch').prop('checked', false);
			}
		},

		showSeasonalToggle: function() {
			this.$seasonalToggle.fadeIn(200);
			this.handleSeasonalToggle();
		},

		hideSeasonalToggle: function() {
			this.$seasonalToggle.fadeOut(200);
		},

		handleSeasonalToggle: function() {
			if (this.$seasonalToggleActive.is(':checked')) {
				this.$layoutThemeContainer.find('.active').removeClass('active');
				this.$layoutThemeContainer.find('.seasonal-layout').addClass('active');
			}
		},

		applyTinyMCE: function() {
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

					selector: 'textarea.wysiwyg',
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},

		handleFileUpload: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
				self.$logoImg.prop('src', url);
				},

				active: self.$logoImg.prop('src'),

				name: 'Logo'
			});
		},

		handleSave: function() {
			var
				self = this,
				rotCheck;
			if( self.$seasonalToggle.is(':visible') && self.$seasonalToggleActive.is(':checked') ){
				rotCheck = true;
			} else {
				rotCheck = false;
			}
			if( self.state == 'noSubtheme' &&  rotCheck == false )  {
				self.showSubthemeAlert();
			} else {
				SiteThemeModel.set({
					layoutImgUrl: this.$displayImage.prop('src'),
					logoImgUrl: this.$logoImg.prop('src'),
					automaticSeasonalRotationActive: this.$seasonalToggleActive.is(':checked'),
					selectedThemeName: this.state.name,
					selectedThemeId: this.state.themeId,
					selectedThemeSchemeId: this.state.themeSchemeId
				});

				GlobalEvents.trigger('form:save', this.$tip);				
			}

		},

		showSubthemeAlert: function() {
			var self = this;
			self.$subThemeAlert.fadeIn(200);
			setTimeout(function(){
				self.$subThemeAlert.fadeOut(200);
			}, 5000);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},
		
		showError: function() {
			this.$displaySocialQuickAlert.fadeIn(200);
		},

		hideError: function() {
			this.$displaySocialQuickAlert.fadeOut(200);
		},

		checkDisplayButtons: function(e) {
			var self = this,
				targEl = $(e.target);

			// if both display buttons are checked, then show error message
			if($('#f-header-icons').is(':checked') && $('#f-header-quick-shop').is(':checked') ) {
				// don't allow the checkbox to change. 
				e.preventDefault();
				// targEl.prop('checked',false);

				this.showError();
				setTimeout(function(){
					self.hideError();
				}, 5000);
			}
			else {
				this.hideError();
			}


		}


	});

	return new SiteThemeView;
});