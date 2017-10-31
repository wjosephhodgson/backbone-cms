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
			this.setElement(this.template(this.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			//this.validateForm();
			this.applyTinymce();
			this.handleContentTypeChange();

			return this;
		},

		events: {
			'click #cancel-btn':      'handleCancelBtnClick',
			'click #save-btn':        'handleSaveBtnClick',
			'click #delete-btn':      'handleDeleteBtnClick',			
			'change #f-content-type': 'handleContentTypeChange'
		},

		cacheElem: function() {
			this.$title                = this.$el.find('#title');
			this.$sectionActive        = this.$el.find('#section-active');
			this.$createEditForm       = this.$el.find('#create-edit-form');
			this.$tip                  = this.$el.find('.tooltip-change');
			this.$navBtns              = this.$el.find('#f-nav-item-btn-panel');

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

			this.$minProdError         = this.$el.find('#min-products-error');
			this.$minCatError          = this.$el.find('#min-cats-error');
		},

		handleCancelBtnClick: function() {
			// cancel form editing
			var self = this;
			GlobalEvents.trigger('form:cancel', this.parent.hideCreateEdit());
		},

		handleDeleteBtnClick: function() {
			GlobalEvents.trigger(
				'form:delete',
				this.collection.remove.bind(this.collection, this.model)
			);			
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(self.parent));
		},

		handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete',
				this.collection.remove.bind(this.collection, this.model)
			);
		},

		showMinProdError: function() {
			var self = this;
			this.$minProdError.fadeIn(200);
			setTimeout(function(){
				self.$minProdError.fadeOut(200);
			}, 10000);
		},

		showMinCatError: function() {
			var self = this;
			this.$minCatError.fadeIn(200);
			setTimeout(function(){
				self.$minCatError.fadeOut(200);
			}, 10000);
		},		

		handleSaveBtnClick: function() {
			var 
				self = this,
				navType = self.$navType.find('option:selected').val();

			if( navType == 'Products' ){
				if( ItemProductsView.minSelected(1) ) {
					// do nothing, we are good
				} else {
					self.showMinProdError();
					return false;
				}				
			}

			if( navType == 'Categories' ){
				if( ItemCategoriesView.minSelected(1) ) {
					// do nothing, we are good
				} else {
					self.showMinCatError();
					return false;
				}				
			}			

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

				this.parent.hideCreateEdit();

			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		handleContentTypeChange: function() {
			var
				self = this,
				ctype = this.$navType.find('option:selected').val(),
				typeView;

			this.$typeArea.empty();

			switch (ctype) {
				case 'Categories':
					typeView = ItemCategoriesView;
				break;

				case 'Collections':
					typeView = ItemCollectionsView;
				break;

				case 'Custom HTML':
					typeView = ItemCustomHTMLView;
				break;

				case 'Custom List':
					typeView = ItemCustomListView;
				break;

				case 'Price Ranges':
					typeView = ItemPriceRangeView;
				break;

				case 'Products':
					typeView = ItemProductsView;
				break;

				case 'Upcoming Occasions':
					typeView = ItemUpcomingView;
				break;
			}

			if( typeView == false ){

			} else {
				typeView.model = self.model;
				typeView.parent = this;
				this.$typeArea.append(typeView.render().el);			
				this.validateForm();	
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
			var self = this;
			this.$createEditForm.validate({
				rules: {
					title: "required",
					'f-showMoreLabel': 'required',
					'f-showMoreLink': 'required'
				}
			});
			jQuery.validator.addClassRules({
				'f-showMoreLabel': {
					required: true
				},
				'f-showMoreLink': {
					required: true
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