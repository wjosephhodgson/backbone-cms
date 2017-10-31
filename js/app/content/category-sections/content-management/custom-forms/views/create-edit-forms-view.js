define([
	'backbone',
	'../templates/create-edit-form-tpl',
	'../collections/forms-collection',
	'../views/edit-modal',
	// 'sightglass',
	// 'rivets',
	// 'formbuilder',
	'global-events',
	'tinymce',
	'jqueryui',
	'jqueryval'
], function(
	Backbone, 
	CreateEditFormTpl, 
	FormsCollection, 
	EditModalView,
	// sightglass,
	// rivets,	
	// formbuilder,
	GlobalEvents, 
	tinymce
) {
	var CreateEditFormsView = Backbone.View.extend({

		template: CreateEditFormTpl,

		render: function() {
			var self = this;
			this.$el.html(this.template(this.model.toJSON()));
			this.cacheElem();
			this.applyTinymce();

			this.validateForm();
			
			this.applyToolTips();
			this.delegateEvents();
			this.applyDates();
			this.initModal();

			return this;
		},

		cacheElem: function() {
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$formName = this.$el.find('#f-form-name');
			this.$formUrl = this.$el.find('#f-form-url');
			this.$active = this.$el.find('#f-active');
			this.$pageTitle = this.$el.find('#f-page-title');
			this.$metaDesc = this.$el.find('#f-meta-desc');
			this.$metaKeywords = this.$el.find('#f-meta-keywords');
			this.$metaTags = this.$el.find('#f-meta-tags');
			this.$pageMainContent = this.$el.find('#f-page-main-content');
			this.$tip = this.$el.find('.tooltip-change');
			this.$wrapper = this.$el.find('#f-wrapper');
			this.$formModal = this.$el.find('#form-builder-modal');
			this.$createEditForm = this.$el.find('#create-edit-form-page');
		},

		events: {
			'click #cancel-btn':'handleCancel',
			'click #save-btn': 'handleSave',
			'click #edit-btn': 'showModal'
		},

		initModal: function() {
			// some stuff
			var self = this;
			self.formModal = self.$formModal.dialog({
				autoOpen: false,
				modal: true,
				draggable: false,
				show: {
					effect: 'fade',
					speed: 200
				},
				hide: {
					effect: 'fade',
					speed: 200
				}
			});	
		},

		showModal: function(){
      		var self = this;
      		this.$formModal.empty();

      		EditModalView.model = self.model;
      		EditModalView.parent = self;
      		self.$formModal.append(EditModalView.render().el);
			this.formModal.dialog('open');
		},

		closeModal: function(){
			this.$formModal.dialog('close');
		},

		handleCancel: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleSave: function() {

			if(this.$createEditForm.valid()){
				this.model.set({
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					formName: this.$formName.val().trim(),
					formUrl: this.$formUrl.val().trim(),
					active: this.$active.is(':checked'),
					wrapper: this.$wrapper.is(':checked'),
					metaDesc: this.$metaDesc.val().trim(),
					pageTitle: this.$pageTitle.val().trim(),
					metaKeywords: this.$metaKeywords.val().trim(),
					metaTags: this.$metaTags.val().trim(),
					pageMainContent: tinymce.activeEditor.getContent()
				});

				if (!FormsCollection.get(this.model)) {
					this.model.set('id', new Date()); // fake value
					FormsCollection.add(this.model);
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
					height: 150,
					toolbar: 'undo redo | styleselect | bold underline italic | fontselect fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | myimagebutton | code',

					plugins: ['code textcolor'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},

		validateForm: function() {
			var self = this;

			self.$createEditForm.validate({
				rules: {
					'f-form-name': 'required',
					'f-form-url': {
						required: true,
						url3: true
					},
					'f-form-email': {
				      required: true,
				      email: true
				    }
				}
			});
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

	return new CreateEditFormsView;
});