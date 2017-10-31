define([
	'backbone',
	'../templates/nav-item-create-edit-tpl',
	'./item-custom-list-view',
	'./item-custom-html-view',
	'./item-price-range-view',
	'./item-collections-view',
	'./item-products-view',
	'./item-categories-view',
	'./item-upcoming-view',
	'tinymce',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(
	Backbone, 
	NavItemCreateEditTpl,
	ItemCustomListView,
	ItemCustomHTMLView,
	ItemPriceRangeView,
	ItemCollectionsView,
	ItemProductsView,
	ItemCategoriesView,
	ItemUpcomingView,
	tinymce, 
	GlobalEvents
) {
	var NavItemCreateEditView = Backbone.View.extend({
		template: NavItemCreateEditTpl,

		initialize: function() {
			ItemCustomListView.parent = this;	
			ItemCustomHTMLView.parent = this;
			ItemPriceRangeView.parent = this;
			ItemCollectionsView.parent = this;
			ItemProductsView.parent = this;
			ItemCategoriesView.parent = this;
			ItemUpcomingView.parent = this;
		},

		render: function() {
			this.setElement(this.template({
				'contentType': ''
			}));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			this.validateForm();
			this.applyTinymce();
			//this.handleContentTypeChange();

			return this;
		},

		events: {
			'click #cancel-btn':      'handleCancelBtnClick',
			'click #save-btn':        'handleSaveBtnClick'
			//'change #f-content-type': 'handleContentTypeChange'
		},

		cacheElem: function() {
			this.$title                = this.$el.find('#title');
			this.$sectionActive        = this.$el.find('#section-active');
			this.$createEditForm       = this.$el.find('#create-edit-form');
			this.$tip                  = this.$el.find('.tooltip-change');

			// staging area for creating/editing nav items
			this.$navType              = this.$el.find('#f-content-type');
			this.$typeArea             = this.$el.find('#f-content-type-area');

			// various nav item content types
			this.$secCategories        = this.$el.find('#f-item-section-categories');
			this.$secProducts          = this.$el.find('#f-item-section-products');
			this.$secList              = this.$el.find('#f-item-section-customlist');
			this.$secCollections       = this.$el.find('#f-item-section-collections');
			this.$secPrices            = this.$el.find('#f-item-section-prices');
			this.$secHTML              = this.$el.find('#f-item-section-html');
			this.$secUpcoming          = this.$el.find('#f-item-section-upcoming');
		},

		handleCancelBtnClick: function() {
			// cancel form editing
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

				if(!SiteNavCollection.get(this.model)) {
					this.model.set('id', -1);
					SiteNavCollection.add(this.model);
				}

				GlobalEvents.trigger('form:save', this.$tip);

				this.parent.showHome();

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		// handleContentTypeChange: function() {
		// 	var
		// 		self = this,
		// 		ctype = this.$navType.find('option:selected').val(),
		// 		typeView;

		// 	this.$typeArea.empty();

		// 	switch (ctype) {
		// 		case 'Categories':
		// 			typeView = ItemCategoriesView;
		// 		break;

		// 		case 'Collections':
		// 			typeView = ItemCollectionsView;
		// 		break;

		// 		case 'Custom HTML':
		// 			typeView = ItemCustomHTMLView;
		// 		break;

		// 		case 'Custom List':
		// 			typeView = ItemCustomListView;
		// 		break;

		// 		case 'Price Ranges':
		// 			typeView = ItemPriceRangeView;
		// 		break;

		// 		case 'Products':
		// 			typeView = ItemProductsView;
		// 		break;

		// 		case 'Upcoming Occasions':
		// 			typeView = ItemUpcomingView;
		// 		break;
		// 	}

		// 	if( typeView == false ){

		// 	} else {
		// 		typeView.parent = this;
		// 		this.$typeArea.append(typeView.render().el);				
		// 	}

		// },

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

	return new NavItemCreateEditView;
});