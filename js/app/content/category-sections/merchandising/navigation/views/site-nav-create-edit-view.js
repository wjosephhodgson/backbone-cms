define([
	'backbone',
	'../templates/site-nav-create-edit-tpl',
	'components/featured-occasions/collections/all-occasions-collection',
	'components/featured-product/collections/featured-product-collection',
	'./nav-item-create-edit-view',
	'./nav-item-view',
	'./nav-item-add-view',
	'content/shared/collections/blank-collection',
	'tinymce',
	'global-events',
	'jquery',
	'jqueryui',
	'jqueryval'
], function(
	Backbone, 
	SiteNavCreateEditTpl, 
	OccasionsCollection,
	ProductCollection,
	NavItemCreateEditView,
	NavItemView,
	NavItemAddView,
	BlankCollection,
	tinymce, 
	GlobalEvents
) {
	var SiteNavCreateEditView = Backbone.View.extend({
		template: SiteNavCreateEditTpl,
		tagName: 'div',
		id: 'f-new-create-edit-id',

		initialize: function() {
			NavItemCreateEditView.parent = this;
		},

		render: function() {
			var self = this;
			//this.setElement(this.template(this.model.toJSON()));
			self.$el.html(self.template(self.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			this.validateForm();
			this.collection = new BlankCollection(this.model.get('entries'));
			this.addAllItems();
			this.sortNavItems();
			this.toggleDropdown();

			return this;
		},

		events: {
			'click #cancel-btn':            'handleCancelBtnClick',
			'click #save-btn':              'handleSaveBtnClick',
			'change #f-content-type':       'handleContentTypeChange',
			'change #f-dropdown':           'toggleDropdown',
			'click .f-add-nav-item button': 'handleAdd',
			'click #reset-btn':             'handleReset',
			'change input':                 'triggerChange',
			'change select':                'triggerChange'
		},

		triggerChange: function() {
			GlobalEvents.trigger('form:editing');
		},

		cacheElem: function() {

			this.$list                 = this.$el.find('#f-item-list');	
			this.$title                = this.$el.find('#title');
			this.$sectionActive        = this.$el.find('#section-active');
			this.$createEditForm       = this.$el.find('#create-edit-form');
			this.$tip                  = this.$el.find('.tooltip-change');
			this.$tabs                 = this.$el.find('#tabs');

			// staging area for creating/editing nav items
			this.$editArea             = this.$el.find('#f-item-edit-area');

			// toggle for static link / dropdown
			this.$dropdown             = this.$el.find('#f-dropdown');
			this.$menuLink             = this.$el.find('#f-menuLink');
			this.$menuLinkWrap         = this.$el.find('#f-menu-link-wrap');

		},

		handleCancelBtnClick: function() {
			// cancel form editing
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		addItem: function(section) {
			var newView = new NavItemView({
				model: section,
				parent: this
			});

			this.$list.append(newView.render().el);
		},

		addAllItems: function() {
			
			var 
				self = this,
				collLength = this.collection.length,
				c = 0;

			this.$list.empty();

			this.collection.each(function(model){
				self.addItem(model);
				c = c + model.get('columns');
			});

			if( c < 4 ){
				var diff = 4 - c;
				for (var i = 0; i < diff; i++ ) {
					self.addBlankItem();
				}
			}

		},

		toggleDropdown: function() {
			var self = this;
			if( this.$dropdown.is(':checked') ){
				this.$tabs.removeClass('hidden');
				this.$editArea.removeClass('hidden');
				this.$menuLinkWrap.addClass('hidden');
			} else {
				this.$tabs.addClass('hidden');
				this.$editArea.addClass('hidden');				
				this.$menuLinkWrap.removeClass('hidden');
			}
		},

		addBlankItem: function() {
			this.$list.append('<div class="f-nav-item f-nav-col-1 f-add-nav-item"><button type="button" class="btn btn-other"><div class="icon icon-add"></div>Add</button></div>');
            this.handleDividerInsert();
		},

		handleDividerInsert: function() {

			setTimeout(function() {
				var MenuDivHeight = $('#Menu-items').height(); 
			// console.log(MenuDivHeight);
				},
				 50);
		},

		sortNavItems: function() {
			this.$list.sortable();
		},

		// helperFixRowWidth: function(e, tr) {
		// 	var $originals = tr.children(),
		// 		$helper = tr.clone();
		// 	$helper.children().each(function(index) {
		// 		$(this).width($originals.eq(index).width());
		// 	});

		// 	return $helper;
		// },

		sortNavItems: function() {
			var self = this;

			self.$list.sortable({
				//helper: self.helperFixRowWidth,
				// containment: "parent",
				// tolerance: "pointer",
				// start: function(e, ui) {
				// 	ui.placeholder.height(ui.item.height());
				// 	ui.helper.addClass('active');
				// }
			});
		},

		handleSaveBtnClick: function() {
			if (this.$createEditForm.valid()) {
				this.model.set({
					title: this.$title.val().trim(),
					type: "Custom",
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

		handleReset: function() {

			 var self = this;

			GlobalEvents.trigger('modal:custom', {

				 template: {
                    title: 'Reset Settings',
                    text: 'Are you sure? This will reset all applicable fields to their default values.'
               	 },

             confirmFn: function(){

               // You can reset Model to Previous State here by getting the info
             }

             });

		},


		handleAdd: function() {
			var self = this;
			if(self.$editArea.is(':empty')) {
				self.$editArea.append(NavItemAddView.render().el);
			}
		},

		handleEdit: function(model) {
			var self = this;
			self.$editArea.empty();
			if(model){
				NavItemCreateEditView.model = model;
				NavItemCreateEditView.parent = self;
				self.$editArea.append(NavItemCreateEditView.render().el);
			} else {
				NavItemCreateEditView.model = newNav({
					'columns':'1',
					'showMore':false
				});
				NavItemCreateEditView.parent = self;		
				self.$editArea.append(NavItemCreateEditView.render().el);
			}
			

		},

		hideCreateEdit: function() {
			this.$editArea.empty();
		},

		newNav: function(data) {
			return this.collection.add(data);
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
		}
	});

	return new SiteNavCreateEditView;
});