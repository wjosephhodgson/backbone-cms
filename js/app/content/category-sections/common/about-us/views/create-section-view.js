define([
	'backbone',
	'../templates/create-section-tpl',
	'../collections/section-collection',
	'tinymce',
	'global-events',
	'jquery',
	'jqueryui',
	'jqueryval'
], function(Backbone, CreateSectionTpl, SectionCollection, tinymce, GlobalEvents) {
	var CreateSectionView = Backbone.View.extend({
		template: CreateSectionTpl,

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			this.validateForm();
			this.applyTinymce();

			return this;
		},

		events: {
			'click #cancel-btn': 'handleCancelBtnClick',
			'click #save-btn': 'handleSaveBtnClick',
			'click #promotional-img-file': 'handleFileUpload',
			'change #image-active': 'togglePreviewImg'
		},

		cacheElem: function() {
			this.$title = this.$el.find('#title');
			this.$sectionActive = this.$el.find('#section-active');
			this.$imgActive = this.$el.find('#image-active');
			this.$promotionalImg = this.$el.find('#promotional-img');
			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$previewImg = this.$el.find('#preview-img');
			this.$previewImgBtn = this.$el.find('#preview-img-btn');
			this.$tip = this.$el.find('.tooltip-change');
		},

		handleCancelBtnClick: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleSaveBtnClick: function() {
			if (this.$createEditForm.valid()) {
				this.model.set({
					title: this.$title.val().trim(),
					sectionActive: this.$sectionActive.is(':checked'),
					imgActive: this.$imgActive.is(':checked'),
					imgUrl: this.$promotionalImg.prop('src'),
					sectionDescription: tinymce.activeEditor.getContent()
				});

				if(!SectionCollection.get(this.model)) {
					this.model.set('id', -1);
					SectionCollection.add(this.model);
				}

				GlobalEvents.trigger('form:save', this.$tip);

				this.parent.showHome();

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		handleFileUpload: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.$promotionalImg.prop('src', url);
					self.$previewImg.is(':hidden') && self.$previewImg.fadeIn(200);
				},

				active: self.$promotionalImg.prop('src'),

				name: 'Promotional'
			});
		},

		applyTinymce: function() {
			tinymce.remove();

			setTimeout(function() {
				tinymce.init({
					setup: function(editor) {
						editor.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
						});
					},

					selector: 'textarea#section-description',
					toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
					plugins: ['code'],
					force_br_newlines : true,
					force_p_newlines : false
				});
			}, 0);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					title: "required"
				}
			});
		},

		togglePreviewImg: function(e) {
			if(this.$imgActive.is(':checked')) {
				this.$previewImg.fadeIn(200);
				this.$previewImgBtn.fadeIn(200);
			} else {
				this.$previewImg.fadeOut(200);
				this.$previewImgBtn.fadeOut(200);
			}
		}
	});

	return new CreateSectionView;
});