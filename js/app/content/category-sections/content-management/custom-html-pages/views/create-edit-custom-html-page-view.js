define([
	'backbone',
	'../templates/create-edit-custom-html-page-tpl',
	'../collections/custom-html-page-collection',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
], function(Backbone, CreateEditCustomHtmlPagesTpl, CustomHtmlPageCollection, GlobalEvents, tinymce) {
	var CreateEditCustomHtmlPagesView = Backbone.View.extend({
		tagName: 'form',

		id: 'create-edit-custom-html-pages',

		template: CreateEditCustomHtmlPagesTpl,

		render: function() {
			var self = this;
			this.$el.html(this.template(this.model.toJSON()));
			this.cacheElem();
			if(self.$wysiwyg.is(':checked')){
				self.applyTinymce();
			}
			//this.applyTinymce();
			this.validateForm();
			this.applyToolTips();
			this.delegateEvents();
			this.applyDates();

			return this;
		},

		cacheElem: function() {
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$pageName = this.$el.find('#f-page-name');
			this.$pageUrl = this.$el.find('#f-page-url');
			this.$active = this.$el.find('#f-active');
			this.$pageTitle = this.$el.find('#f-page-title');
			this.$metaDesc = this.$el.find('#f-meta-desc');
			this.$metaKeywords = this.$el.find('#f-meta-keywords');
			this.$metaTags = this.$el.find('#f-meta-tags');
			this.$pageMainContent = this.$el.find('#f-page-main-content');
			this.$tip = this.$el.find('.tooltip-change');
			this.$wrapper = this.$el.find('#f-wrapper');
			this.$wysiwyg = this.$el.find('#f-advancededitor');
		},

		events: {
			'click #cancel-btn':'handleCancel',
			'click #save-btn': 'handleSave',
			'click #f-advancededitor': 'toggleWysiwyg'
		},

		handleCancel: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleSave: function() {
			$('#tiny-mce-container').removeClass('error');

			if(this.$el.valid() && this.validateTinymce()){
				this.model.set({
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					pageName: this.$pageName.val().trim(),
					pageUrl: this.$pageUrl.val().trim(),
					active: this.$active.is(':checked'),
					wrapper: this.$wrapper.is(':checked'),
					metaDesc: this.$metaDesc.val().trim(),
					pageTitle: this.$pageTitle.val().trim(),
					metaKeywords: this.$metaKeywords.val().trim(),
					metaTags: this.$metaTags.val().trim(),
					pageMainContent: tinymce.activeEditor.getContent()
				});

				if (!CustomHtmlPageCollection.get(this.model)) {
					this.model.set('id', new Date()); // fake value
					CustomHtmlPageCollection.add(this.model);
				}

				// Return to home view
				this.parent.showHome();

				GlobalEvents.trigger('form:save', this.$tip);
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
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

				name: 'Custom HTML'
			});
		},

		toggleWysiwyg: function() {
			var self = this;
			if(self.$wysiwyg.is(':checked')){
				self.applyTinymce();
			} else {
				tinymce.remove('#f-page-main-content');
			}
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

					selector: '#f-page-main-content',
					height: 700,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},

		validateForm: function() {
			var self = this;

			setTimeout(function() {
				self.$el.validate({
					rules: {
						'f-start-date': 'dateCustom',
						'f-end-date': 'dateCustom',
						'f-page-name': 'required',
						'f-page-url': {
							required: true,
							url3: true
						},
						'f-name': 'required',
						'f-page-title': 'noCarets',
						'f-meta-keywords': 'noCarets',
						'f-meta-desc': 'noCarets'						
					}
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
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
			    onSelect: function(selected) {
			        self.$endDate.datepicker('option', 'minDate', selected);
			        self.$startDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});

			self.$endDate.datepicker({
			    onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected);
			        self.$endDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});
		}
	});

	return new CreateEditCustomHtmlPagesView;
});