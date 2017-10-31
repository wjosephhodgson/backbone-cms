define([
	'backbone',
	'../templates/homepage-customization-home-tpl',
	'../models/homepage-customization-model',
	'components/featured-occasions/views/featured-occasion-view',
	'components/linked-images/views/linked-images-view',
	'./shop-value-icons-view',
	'content/shared/collections/blank-collection',
	'tinymce',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	HomepageCustomizationTpl,
	HomepageCustomizationModel,
	FeaturedOccasionView,
	LinkedImagesView,
	ShopValueIconsView,
	BlankCollection,
	tinymce,
	GlobalEvents
) {
	var HomepageCustomizationHomeView = Backbone.View.extend({
		tagName: 'form',

		id:'p-homepage-customization',

		template: HomepageCustomizationTpl,

		render: function() {
			var self = this;
			self.editors = false;
			HomepageCustomizationModel.fetchCustom().done(function() {
				self.$el.html(self.template(HomepageCustomizationModel.toJSON()));
				self.delegateEvents();

				self.cacheElem();

				self.$featuredOccasionContainer.append(FeaturedOccasionView.render().el);
				self.$shopValueIconContainer.append(ShopValueIconsView.render().el);
				self.addOccasionReset();
				self.applySwitchInput();
				self.listenYoutubeTyping();
				self.applyToolTips();
				self.validateForm();
				self.handleHTMLOption();
				self.checkTileImg();
				self.applyTinyMCE();
				// if( self.editors == false ){
				// 	self.applyTinyMCE();
				// 	self.editors = true;
				// }
					

				// Slideshow
				self.imageCollection1 = new BlankCollection(
					HomepageCustomizationModel.get('linkedImages1')
				);
				self.linkedImagesView1 = new LinkedImagesView({
					collection: self.imageCollection1,
					btnTitle: 'Add New Slideshow Image',
					sizeOption: true,
					dimOption: '960px x 400px',
					titleOption: false,
					idOption: 1,
					btnTextOption: true,
					subTextOption: true,
					imgOption: true,
					countOption: false
				});
				self.$linkedImages1.append(self.linkedImagesView1.render().el);
				
				// Occasion Tiles
				self.imageCollection2 = new BlankCollection(
					HomepageCustomizationModel.get('linkedImages2')
				);
				self.linkedImagesView2 = new LinkedImagesView({
					collection: self.imageCollection2,
					btnTitle: 'Add New Occasion Tile',
					btnTextOption: true,
					titleOption: true,
					dimOption: '450px x 100-200px',
					idOption: 2,					
					subTextOption: false,					
					countOption: true,
					imgOption: true,
					sizeOption: false
				});
				self.$linkedImages2.append(self.linkedImagesView2.render().el);

				// Masonry
				self.imageCollection3 = new BlankCollection(
					HomepageCustomizationModel.get('linkedImages3')
				);
				self.linkedImagesView3 = new LinkedImagesView({
					collection: self.imageCollection3,
					btnTitle: 'Add New Image',
					countOption: false,
					titleOption: false,
					btnText: false,
					dimOption: '305px x 200-400px',
					idOption: 3,					
					btnTextOption: false,
					subTextOption: false,					
					imgOption: true,
					sizeOption: false
				});
				self.$linkedImages3.append(self.linkedImagesView3.render().el);

				// Quick Links
				self.imageCollection4 = new BlankCollection(
					HomepageCustomizationModel.get('linkedImages4')
				);
				self.linkedImagesView4 = new LinkedImagesView({
					collection: self.imageCollection4,
					btnTitle: 'Add New Link',
					countOption: false,
					titleOption: true,
					dimOption: '',
					idOption: 4,					
					btnTextOption: false,
					subTextOption: false,					
					imgOption: false,
					sizeOption: false
				});
				self.$linkedImages4.append(self.linkedImagesView4.render().el);

				// Quick Links Sidebar - Links
				self.imageCollection5 = new BlankCollection(
					HomepageCustomizationModel.get('linkedImages5')
				);
				self.linkedImagesView5 = new LinkedImagesView({
					collection: self.imageCollection5,
					btnTitle: 'Add New Link',
					countOption: false,
					imgOption: false,
					titleOption: false,
					idOption: 5,					
					btnTextOption: false,
					subTextOption: false,					
					sizeOption: false
				});
				self.$linkedImages5.append(self.linkedImagesView5.render().el);

				// Quick Links Sidebar - Images
				self.imageCollection6 = new BlankCollection(
					HomepageCustomizationModel.get('linkedImages6')
				);
				self.linkedImagesView6 = new LinkedImagesView({
					collection: self.imageCollection6,
					btnTitle: 'Add New Image',
					countOption: false,
					dimOption: '780px x 330px',
					btnTextOption: true,
					titleOption: false,
					idOption: 6,					
					subTextOption: true,					
					imgOption: true,
					sizeOption: false
				});
				self.$linkedImages6.append(self.linkedImagesView6.render().el);			

				self.$el.find('.toggle-switch').each(function(){
					self.runToggle( $(this) );
				})

			});

			return self;
		},

		cacheElem: function() {
			this.$featuredOccasionContainer = this.$el.find('#featured-occasion-container');
			this.$shopValueIconContainer    = this.$el.find('#shop-value-icon-container');

			this.$shopInfo                  = this.$el.find('#f-shop-info');
			this.$promoText                 = this.$el.find('#f-promo-text');
			this.$promoElement              = this.$el.find('#f-promo-element');
			this.$promoImageUrl             = this.$el.find('#f-promo-image-upload');
			this.$youtubeUrlInput           = this.$el.find('#f-youtube-url');
			this.$youtubeUrl                = this.$el.find('#youtube-url');
			this.$buttonText                = this.$el.find('#f-button-text');
			this.$buttonTextActive          = this.$el.find('#f-button-text-active');
			this.$buttonLink                = this.$el.find('#f-button-link');
			this.$tileLink                  = this.$el.find('#f-tile-link');
			this.$tileTitle                 = this.$el.find('#f-tile-title');
			this.$tileImage                 = this.$el.find('#tile-image');
			this.$shopNowText               = this.$el.find('#f-shop-now-text');

			this.$promoImage                = this.$el.find('#promo-image');
			this.$promoYoutube              = this.$el.find('#ytplayer');
			this.$promoImageInput           = this.$el.find('#promo-image-input');
			this.$promoYoutubeInput         = this.$el.find('#promo-youtube-input');
			this.$yturl1					= this.$el.find('#f-videos-url-1');
			this.$ytpreview1				= this.$el.find('#video-display-1');
			this.$yturl2					= this.$el.find('#f-videos-url-2');
			this.$ytpreview2				= this.$el.find('#video-display-2');
			this.$yturl3					= this.$el.find('#promo-youtube-input');
			this.$ytpreview3				= this.$el.find('#ytplayer');			
			
			this.$bgvideo					= this.$el.find('#f-videobg');
			this.$bgpreview					= this.$el.find('#bg-video-preview');
			this.$bgsauce					= this.$el.find('#bg-video-source');
			this.$alertPanel 				= this.$el.find('#video-alert-panel');

			this.$linkedImages1				= this.$el.find('#linked-images-1');
			this.$linkedImages2				= this.$el.find('#linked-images-2');
			this.$linkedImages3				= this.$el.find('#linked-images-3');
			this.$linkedImages4				= this.$el.find('#linked-images-4');
			this.$linkedImages5				= this.$el.find('#linked-images-5');
			this.$linkedImages6				= this.$el.find('#linked-images-6');

			this.$htmlOption 				= this.$el.find('#f-html-option');
			this.$html1						= this.$el.find('#html-1');
			this.$html1b					= this.$el.find('#html-1b');
			this.$html2						= this.$el.find('#html-2');
			this.$html3						= this.$el.find('#html-3');
			this.$htmlTitle					= this.$el.find('#f-html-title');

			this.$img1						= this.$el.find('#f-img-1');
			this.$img2						= this.$el.find('#f-img-2');
			this.$img3						= this.$el.find('#f-img-3');
			this.$img4						= this.$el.find('#f-img-4');
			this.$img5						= this.$el.find('#f-img-5');
			this.$img6						= this.$el.find('#f-img-6');
			this.$img7						= this.$el.find('#f-img-7');

			this.$tip 						= this.$el.find('.tooltip-change');

		},

		events: {
			'change #f-button-text-active': 'handleButtonSwitch',
			'change #f-promo-element': 'handlePromoElementChange',
			'click #f-promo-image-upload': 'handlePromoImageUpload',
			'click #f-tile-image-upload': 'handleTileImageUpload',
			'click .video-upload': 'uploadVideo',
			'blur #f-youtube-url': 'handleYoutubeUrlChange',
			'blur #f-videos-url-1': 'youtubeUrl1',
			'blur #f-videos-url-2': 'youtubeUrl2',
			'blur #f-youtube-url': 'youtubeUrl3',
			'keyup #f-youtube-url': 'listenYoutubeTyping',
			//'change #f-html-option': 'handleHTMLOption',
			'click #img-btn-1': 'handleImageUpload1',
			'click #img-btn-2': 'handleImageUpload2',
			'click #img-btn-3': 'handleImageUpload3',
			'click #img-btn-4': 'handleImageUpload4',
			'click #img-btn-5': 'handleImageUpload5',
			'click #img-btn-6': 'handleImageUpload6',
			'click #img-btn-7': 'handleImageUpload7',
			'click .btn-reset': 'handleReset',
			'change #f-videobg':  'handleVideoChange',
			'click .toggle-switch': 'handleToggle',
			'click #save-btn': 'handleSave'
		},

		handleToggle: function(e) {
			var self = this,
				toggle = e.currentTarget;
			self.runToggle( $(toggle) );
		},

		runToggle: function(el){
			var self = this,
				toggle = el,
				identifier = $(toggle).attr('id'),
				disablee,
				hidee;
			disablee = self.$el.find('input[data-disabled="'+identifier+'"]');
			hidee	 = self.$el.find('div[data-hide="'+identifier+'"]');
			if( $(toggle).is(':checked') ){
				disablee.removeAttr('disabled');
				hidee.show();				
			} else {
				disablee.attr('disabled','disabled');
				hidee.hide();
			}			
		},

		uploadVideo: function() {
			var self = this;
			self.$bgvideo.trigger('click');
		},

		handleVideoChange: function() {
			var self = this;
			self.handleVideoUpload(self.$bgvideo);
		},

		addOccasionReset: function() {
			var self = this;
			self.$featuredOccasionContainer.find('.panel-title').parent().html('<div class="panel-title clearfix"><div class="y-space-top-m pull-left">Featured Occasion</div><button type="button" class="btn btn-submit btn-reset pull-right">RESET</button></div></div>');
		},

		handleReset: function(event) {
            var self = this;
            event.preventDefault();

            GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Reset Settings',
                    text: 'Are you sure? This will reset all applicable fields to their default Teleflora/group values.'
                },
                confirmFn: function(){
                    GlobalEvents.trigger('form:editing');
                },
                cancelFn: function(){
                    // do nothing, they clicked cancel
                }               
                
            });
        },

		handleVideoUpload: function(el) {
			var self = this,
			file = el[0].files[0],
			fileName = file.name,
			type = file.type,
			reader = new FileReader();

			reader.onload = function(el) {
				var url = el.target.result;
				self.$bgsauce.attr('src',url);
				self.$bgpreview.load();
				self.$bgpreview.show();
				// some check to determine if file is video or not
				if(self.isValidImageExtension(fileName)) {
				  var img = new Image;

				  // figure out image dimensions
				  img.onload = function() {
					self.collection.add({
					  id: Date.now(), // fake
					  url: url,
					  type: type,
					  fileName: fileName,
					  dimensions: img.width + 'x' + img.height // change as needed
					});
				  };

				  img.src = url;
				  
				} else {
				  self.collection.add({
					id: Date.now(), // fake
					url: url,
					type: type,
					fileName: fileName
				  });
				}

		 	}

			if(this.isValidImageExtension(fileName)) {
				this.hideAlertPanel();
				reader.readAsDataURL(file);
			} else {
				this.showAlertPanel();
			}
		
		},

		showAlertPanel: function() {
			var self = this;
			this.$alertPanel.fadeIn();
			setTimeout(function(){
				self.hideAlertPanel();
			}, 5000);
		},

		hideAlertPanel: function() {
			this.$alertPanel.fadeOut();
		},

	    isValidImageExtension: function(fileName) {
	      // '.gif', '.jpg', '.jpeg', '.bmp', '.png'
	      return (new RegExp('(\\.mp4)$', 'i')).test(fileName);
	    },

		handleSave: function() {
			if(this.editForm.valid()) {
				HomepageCustomizationModel.set({
					shopInfo: this.$shopInfo.val().trim() ,
					promoText: this.$promoText.val().trim() ,
					promoElement: this.$promoElement.find('option:selected').val(),
					youtubeUrl: this.$youtubeUrlInput.val().trim() ,
					promoImageUrl: this.$promoImage.prop('src'),
					buttonText: this.$buttonText.val().trim() ,
					buttonTextActive: this.$buttonTextActive.is(':checked'),
					buttonLink: this.$buttonLink.val().trim() ,
					tileLink: this.$tileLink.val().trim() ,
					tileTitle: this.$tileTitle.val().trim() ,
					shopNowText: this.$shopNowText.val().trim(),
					tileImageUrl: this.$tileImage.prop('src')
				});

				GlobalEvents.trigger('form:save',this.$tip);
				ShopValueIconsView.save();
			}
		},

		handleHTMLOption: function() {
			var self = this,
				currentOption = this.$htmlOption.find('option:selected').val();
			if( currentOption == 3 ){
				self.$htmlTitle.show();
				self.$html1b.hide();
				self.$html1.show();
				self.$html2.show();
				self.$html3.show();
			} else {
				self.$html1b.show();
				self.$htmlTitle.show();
				self.$html1.hide();
				self.$html2.hide();
				self.$html3.hide();				
			}
		},

		handleImageUpload1: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img1.prop('src', url);
				},

				active: self.$img1.prop('src'),

				name: 'Homepage'
			});

		},

		handleImageUpload2: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img2.prop('src', url);
				},

				active: self.$img2.prop('src'),

				name: 'Homepage'
			});

		},

		handleImageUpload3: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img3.prop('src', url);
				},

				active: self.$img3.prop('src'),

				name: 'Homepage'
			});

		},

		handleImageUpload4: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img4.prop('src', url);
				},

				active: self.$img4.prop('src'),

				name: 'Homepage'
			});

		},

		handleImageUpload5: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img5.prop('src', url);
				},

				active: self.$img5.prop('src'),

				name: 'Homepage'
			});

		},

		handleImageUpload6: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img6.prop('src', url);
				},

				active: self.$img6.prop('src'),

				name: 'Homepage'
			});

		},										

		handleImageUpload7: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$img7.prop('src', url);
				},

				active: self.$img7.prop('src'),

				name: 'Homepage'
			});

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
									name: 'Homepage'
								});								
							}
						});

						editor.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});

						editor.on('LoadContent', function(e) {
							var textAreaContent = editor.getContent();
							var ourBox = editor.id;
							var goodContent = self.$el.find('#'+ourBox).html();
							editor.setContent('');
							editor.execCommand('mceInsertRawHTML', false, goodContent);
							
							//editor.insertContent(goodContent);
						});
					},

					selector: 'textarea.wysiwyg',
					//selectorID: $(selector).attr('id'),
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',
					forced_root_block : '',
					//preformatted: true,
					//valid_elements: "*[*]",
					//cleanup: false,
					//verify_html: false,
					//entity_encoding: 'raw',
					entity_encoding: 'named',
					entities: '&nbsp;',
					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},

		handlePromoElementChange: function(e) {
			var self = this;

			if(this.$promoElement.find('option:selected').val() !== 'YouTube Video') {
				self.$promoYoutubeInput.hide(0, function() {
					self.$promoImageInput.fadeIn(200);
				});

				self.$promoYoutube.hide(0, function() {
					self.$promoImage.fadeIn(200);
				});
			} else {
				self.$promoImageInput.hide(0, function() {
					self.$promoYoutubeInput.fadeIn(200);
				});

				self.$promoImage.hide(0, function() {
					self.$promoYoutube.fadeIn(200);
				});
			}
		},

		urlExists: function(url, callback){
			$.ajax({
				type: 'HEAD',
				url: url,
				success: function() {
				  callback(true);
				},

				error: function() {
				  callback(false);
				}
			});
		},

		handleYoutubeUrlChange: function(e) {
			// var self    = this,
			// 	yt_val    = this.$youtubeUrlInput.val(),
			// 	yt_regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
			// 	match     = yt_val.match(yt_regExp),
			// 	yd_id;

			// // Check to see if the YouTube URL is a valid format
			// if (match && match[7].length==11){
			// 	yt_id = match[7];
			// 	console.log(yt_id);
			// 	// Check to see if YouTube URL exists
			// 	self.urlExists('http://gdata.youtube.com/feeds/api/videos/'+ yt_id, function(success) {
			// 		if (success) {
			// 			// Display video preview
			// 			self.$promoYoutube.prop('src', "http://www.youtube.com/embed/" + yt_id);
			// 			self.$youtubeUrlInput.val("http://www.youtube.com/embed/" + yt_id);
			// 		}
			// 	});
			// }
		},


		debounce: null,

		youtubeUrl1: function(){
			var self    = this,
				yt_val    = self.$yturl1.val(),
				yt_regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
				match     = yt_val.match(yt_regExp),
				yt_id;


			if (match && match[7].length==11){
			//	if( self.$yturl1.valid() == true ){
					yt_id = match[7];
					self.$ytpreview1.find('iframe').prop('src', "http://www.youtube.com/embed/" + yt_id);
			//	}
			} 
		},

		youtubeUrl2: function(){
			var self    = this,
				yt_val    = self.$yturl2.val(),
				yt_regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
				match     = yt_val.match(yt_regExp),
				yt_id;

			if (match && match[7].length==11){
			//	if( self.$yturl2.valid() == true ){
					console.log(yt_id);
					yt_id = match[7];
					self.$ytpreview2.find('iframe').prop('src', "http://www.youtube.com/embed/" + yt_id);			
			//	}
	
			} 
		},

		youtubeUrl3: function(){
			var self    = this,
				yt_val    = self.$yturl3.val(),
				yt_regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
				match     = yt_val.match(yt_regExp),
				yt_id;

			if (match && match[7].length==11){
			//	if( self.$yturl3.valid() == true ){
					yt_id = match[7];
					self.$ytpreview3.prop('src', "http://www.youtube.com/embed/" + yt_id);			
			//	}
	
			} 
		},		

		listenYoutubeTyping: function(e) {
			var self = this;

			if (self.debounce) {
				clearTimeout(self.debounce);
			}

			self.debounce = setTimeout(function() {
				self.handleYoutubeUrlChange(e);
			}, 1000);
		},

		handleButtonSwitch: function(e) {
			var targetElement = $(e.target);

			if(targetElement.is(':checked')) {
				this.$buttonLink.prop('disabled', false);
			} else {
				this.$buttonLink.prop('disabled', true);
			}
		},

		handlePromoImageUpload: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$promoImage.prop('src', url);
					self.$promoImage.show();
				},

				active: self.$promoImage.prop('src'),

				name: 'Promotional'
			});
		},

		handleTileImageUpload: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$tileImage.prop('src', url);
				},

				active: self.$tileImage.prop('src'),

				name: 'Tile'
			});
		},

		applySwitchInput: function() {
			this.$el.find('.switch-input-switch > .on-off-switch').on('change', function(e) {
				var targetElement = $(e.target);

				if(targetElement.is(':checked')) {
					targetElement.parent().siblings('.switch-input-input').prop('disabled', false);
				} else {
					targetElement.parent().siblings('.switch-input-input').prop('disabled', true);
				}
			});
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		checkTileImg: function() {
			var tileSrc = this.$tileImage.prop('src'),
				self = this;
			if( tileSrc.length > 0 ){
				self.$tileImage.show();
			}
		},

		validateForm: function() {
			this.editForm = this.$el.validate({
				rules: {
					// 'f-youtube-url': {
					// 	youtube: true
					// },

					'f-button-link': {
						url3: true
					},

					'f-tile-link': {
						url3: true
					}
				}
			});
			jQuery.validator.addClassRules({
				'youtube': {
					youtube_url: true
				}
			});
		}
	});

	return new HomepageCustomizationHomeView;
})