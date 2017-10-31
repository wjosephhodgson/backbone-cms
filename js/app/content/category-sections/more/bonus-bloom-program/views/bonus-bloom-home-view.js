define([
	'backbone',
	'../templates/bonus-bloom-homepage-tpl',
	'../models/bonus-bloom-homepage-model',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
	],function(Backbone, BonusBloomHomeTpl, BonusBloomHomePageModel, GlobalEvents, tinymce) {
		var BonusBloomHomePageView = Backbone.View.extend({

			template: BonusBloomHomeTpl,

			render: function() {

				var self = this;

				self.$el.html(self.template(BonusBloomHomePageModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				self.handleHomeValidation();
				self.applyTabs();
				self.applyToolTips();
				self.applyTinymceFAQ();
				self.applyTinymceRulesContent();
				

				return self;
			},

			events: {
				'click #save-btn': 'handleSave',
				'click #cancel-btn': 'handleCancel',
				'click #btn-main-section-logo': 'handleFileUploadMainPageImage',
				'click #winnerPage-btn-logo': 'handleFileUploadWinnerImage',
				'click #no-winnerPage-btn-logo': 'handleFileUploadNOWinnerImage',
				'click #thankYouPage-btn-logo': 'handleFileUploadThankYouImage',
				'keyup #f-main-page-section-header': 'handleCharacterCountMainPageHeader',
				'keyup #f-main-page-section-message': 'handleCharacterCountMainPageMessage',
				'keyup #f-winner-page-section-header': 'handleCharacterCountWinnerPageHeader',
				'keyup #f-winner-page-section-message': 'handleCharacterCountWinnerPageMessage',
				'keyup #f-no-winner-page-section-header': 'handleCharacterCountNOWinnerPageHeader',
				'keyup #f-no-winner-page-section-message': 'handleCharacterCountNOWinnerPageMessage',
				'keyup #f-thank-you-section-header': 'handleCharacterCountThankYouPageHeader',
				'keyup #f-thank-you-section-message': 'handleCharacterCountThankYouPageMessage'
			},

			cacheElem: function() {

				this.$BonusBloomHomeForm = this.$el.find('#bonus-bloom-homepage-form');
				this.$SettingsBloomActive = this.$el.find('#bloom-settings-active');

				this.$SettingsProgramName = this.$el.find('#f-setting-program-name');
				this.$SettingsWinningsDigits = this.$el.find('#f-setting-winning-digits');

				this.$SettingsEmailAddress = this.$el.find('#f-email-address-name');
				this.$FAQSectionContentMce = this.$el.find('#f-bloom-faq-section');

				this.$RulesSectionContentMce = this.$el.find('#f-bloom-rules-section'); 
				this.$MainPageSectionHeader = this.$el.find('#f-main-page-section-header');
				this.$MainPageSectionMessage = this.$el.find('#f-main-page-section-message');

				this.$WinnerSectionHeader = this.$el.find('#f-winner-page-section-header');
				this.$WinnerpageSectionMessage = this.$el.find('#f-winner-page-section-message');

				this.$NoWinnerSectionHeader = this.$el.find('#f-no-winner-page-section-header');

				this.$NoWinnerSectionMessage = this.$el.find('#f-no-winner-page-section-message');

				this.$ThankYouSectionHeader = this.$el.find('#f-thank-you-section-header');

				this.$ThankYouSectionMessage = this.$el.find('#f-thank-you-section-message');

				this.$tip                   = this.$el.find('.tooltip-change');


				//Images

				this.$MainPageImg = this.$el.find('#preview-main-section-Img');
				
				this.$WinnerPageImg = this.$el.find('#winner-edit-Img');

				this.$NoWinnerPageImg = this.$el.find('#No-winner-Img');

				this.$ThankYouPageImg = this.$el.find('#thankyou-edit-Img');



			},

			handleSave: function() {

				BonusBloomHomePageModel.set({
					settingsContentActive : this.$SettingsBloomActive.is(':checked'),
		     		faQSectionContent: tinymce.get('f-bloom-faq-section').getContent(),
		     	    RulesContent: tinymce.get('f-bloom-rules-section').getContent(),
		     		MainPageHeader: this.$MainPageSectionHeader.val().trim(),
		     		MainPageMessage: this.$MainPageSectionMessage.val().trim(),
		     		WinnerPageHeader: this.$WinnerSectionHeader.val().trim(),
		     		WinnerPageMessage: this.$WinnerpageSectionMessage.val().trim(),
		     		NoWinnerPageMessage: this.$NoWinnerSectionHeader.val().trim(),
	     		    NoWinnerPageHeader: this.$NoWinnerSectionMessage.val().trim(),
		     		thankYouPageHeader: this.$ThankYouSectionHeader.val().trim(),
		     		thankYouPageMessage: this.$ThankYouSectionMessage.val().trim(),	     		
					MainpageImgUrl: this.$MainPageImg.prop('src'),
					winnnerImgUrl: this.$WinnerPageImg.prop('src'),
					NoWinnnerImgUrl: this.$NoWinnerPageImg.prop('src'),
					thankYouImgUrl: this.$ThankYouPageImg.prop('src')

				});



				if(this.$BonusBloomHomeForm.valid) {
					BonusBloomHomePageModel.set({
						programName: this.$SettingsProgramName.val().trim(),
						emailAddressBonusBloom: this.$SettingsEmailAddress.val().trim(),
						winningDigits: this.$SettingsWinningsDigits.val().trim()
					});
					GlobalEvents.trigger('form:save', this.$tip);
				} else {
					GlobalEvents.trigger('form:invalid', this.$tip);
				}

			},


			handleCancel: function() {

			  GlobalEvents.trigger('form:reset', this.render.bind(this));

			},


			applyTabs: function() {
				this.$el.find('#tabs').tabs();
			},


		    applyToolTips: function() {
				this.$el.find('.icon-tool-tip').tooltip();
			},


			handleHomeValidation: function() {
				var self = this;

				this.$BonusBloomHomeForm.validate({
				  rules: {    
                    'f-setting-program-name': 'required',
                    'f-email-address-name': 'required',
					'f-setting-winning-digits': {
						required: true,
						digits: true,
						maxlength: 3
					}
                 } 


				});

			},

			handleFileUploadMainPageImage: function(e) {
	            var self = this;

	            GlobalEvents.trigger('form:image-upload', {

	                cb: function(url) {
	                    self.$MainPageImg.prop('src', url);
	                },

	                active: self.$MainPageImg.prop('src'),

	                name: 'Bonus Bloom Program'
	            });
          

	        },

        	handleFileUploadWinnerImage: function(e) {
	            var self = this;

	            GlobalEvents.trigger('form:image-upload', {

	                cb: function(url) {
	                    self.$WinnerPageImg.prop('src', url);
	                },

	                active: self.$WinnerPageImg.prop('src'),

	                name: 'Bonus Bloom Program'
	            });
          

	        },
       

	         // No winner Image upload
	        handleFileUploadNOWinnerImage: function(e) {
	            var self = this;

	            GlobalEvents.trigger('form:image-upload', {

	                cb: function(url) {
	                    self.$NoWinnerPageImg.prop('src', url);
	                },

	                active: self.$NoWinnerPageImg.prop('src'),

	                name: 'Bonus Bloom Program'
	            });
	          

	        },


	    	handleFileUploadThankYouImage: function(e) {
	            var self = this;

	            GlobalEvents.trigger('form:image-upload', {

	                cb: function(url) {
	                    self.$ThankYouPageImg.prop('src', url);
	                },

	                active: self.$ThankYouPageImg.prop('src'),

	                name: 'Bonus Bloom Program'
		        });
	          

	        },


			applyTinymceFAQ: function() {
				var self = this;

				setTimeout(function() {
					tinymce.remove();

					tinymce.init({
						setup: function(editorFAQ) {
							
							// Add custom image button
							var pluginImgPath = 'js/vendor/tinymce/';
							editorFAQ.addButton('myimagebutton', {
								title: 'Insert image',
								icon: 'image',
								onclick: function(){
									editorFAQ.focus();
									var newSrc;
									GlobalEvents.trigger('form:image-upload', {
										cb: function(url) {
											newSrc = url,
											newImg = '<img src="'+newSrc+'">',
											editorFAQ.selection.setContent(newImg);
										},
										active: newSrc,
										name: 'FAQ'
									});								
								}
							});

							editorFAQ.on('change', function(e) {
								GlobalEvents.trigger('form:editing');
							});

							editorFAQ.on('keyup', function(e)  {

								var textVal2 = tinymce.get('f-bloom-faq-section').getContent();

								var strippedContent2 =  $(textVal2).text();

					            var numberCount2 = strippedContent2.length;  // Character Count 

					    		var currentCount2 = (3000 - numberCount2);

					    		$('#character-countFAQSection').html(currentCount2);

							});


						},

						selector: 'textarea.f-bloom-faq-section',
						height: 300,
						maxLength : 3000,
						mode : "textareas",
						toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

						plugins: ['code textcolor'],
						force_br_newlines : true,
						force_p_newlines : false
					});
				}, 0);
			},

	    	applyTinymceRulesContent: function() {
				var self = this;
				setTimeout(function() {

					tinymce.init({
						setup: function(editorRules) {
							
							// Add custom image button
							var pluginImgPath = 'js/vendor/tinymce/';
							editorRules.addButton('myimagebutton', {
								title: 'Insert image',
								icon: 'image',
								onclick: function(){
									editorRules.focus();
									var newSrc;
									GlobalEvents.trigger('form:image-upload', {
										cb: function(url) {
											newSrc = url,
											newImg = '<img src="'+newSrc+'">',
											editorRules.selection.setContent(newImg);
										},
										active: newSrc,
										name: 'Rules Content'
									});								
								}
							});

							editorRules.on('change', function(e) {
								GlobalEvents.trigger('form:editing');
							});

							editorRules.on('keyup', function() {

								var textVal = tinymce.get('f-bloom-rules-section').getContent();

								var strippedContent =  $(textVal).text();

					            var numberCount = strippedContent.length;  // Character Count 

					    		var currentCount = (3000 - numberCount);  

					    		$('#character-countRulesSection').html(currentCount);

							});

						},

						selector: 'textarea.f-bloom-rules-section',
						height: 300,
						maxLength : 3000,
						mode : "textareas",
						toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

						plugins: ['code textcolor'],
						force_br_newlines : true,
						force_p_newlines : false
					});
				}, 1000);
			},

			// All Character Count Functionality




			// All Character Count Functionality

			handleCharacterCountMainPageHeader: function() {

				var textVal = this.$MainPageSectionHeader.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countMainHeader').html(currentCount);

			},

			handleCharacterCountMainPageMessage: function() {

				var textVal = this.$MainPageSectionMessage.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countMainMessage').html(currentCount);

			},

			handleCharacterCountWinnerPageHeader: function() {

				var textVal = this.$WinnerSectionHeader.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countWinnerHeader').html(currentCount);

			},


			handleCharacterCountWinnerPageMessage: function() {

				var textVal = this.$WinnerpageSectionMessage.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countWinnerMessage').html(currentCount);

			},

			//NO Winner Character count
			handleCharacterCountNOWinnerPageHeader: function() {

				var textVal = this.$NoWinnerSectionHeader.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countNoWinnerPageHeader').html(currentCount);

			},


			handleCharacterCountNOWinnerPageMessage: function() {

				var textVal = this.$NoWinnerSectionMessage.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countNoWinnerPageMessage').html(currentCount);

			},


			handleCharacterCountThankYouPageHeader: function() {

				var textVal = this.$ThankYouSectionHeader.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countThankYouHeader').html(currentCount);

			},


			handleCharacterCountThankYouPageMessage: function() {

				var textVal = this.$ThankYouSectionMessage.val();

	            var numberCount = textVal.length;  // Character Count 

	    		var currentCount = (500 - numberCount);

	    		$('#character-countThankYouMessage').html(currentCount);

			}

		  });

		return new BonusBloomHomePageView;

	});