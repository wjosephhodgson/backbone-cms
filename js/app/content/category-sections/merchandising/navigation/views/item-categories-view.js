define([
	'backbone',
	'../templates/item-categories-tpl',
	'content/category-sections/merchandising/manage-categories/collections/category-collection',
	'./item-categories-child-view',
	'components/featured-occasions/collections/all-occasions-collection',
	'components/general-product/views/general-product-view',
	'global-events',
	'jqueryval'
], function(
	Backbone, 
	ItemCategoriesTpl,
	CategoryCollection,
	ItemCategoriesChildView,
	AllOccasionsCollection,
	GeneralProductView,
	GlobalEvents
) {
	var ItemCategoriesView = Backbone.View.extend({
		
		template: ItemCategoriesTpl,
		
		initialize: function() {
			/*
			obj = ({
				bodyOnly: options.bodyOnly === true, // show only the body of this component
				title: options.title || 'Category Products',
				disabled: this.disabled,
				allOccasions: []
			});
			*/
		},

		render: function() {

			var
				self = this,
				data = self.model.toJSON();
			CategoryCollection.fetchCustom().done(function() {
				// get all valid parents of current editing model
				validParents = CategoryCollection,
				parentCategory = CategoryCollection.get(self.model.get('parent'));

				// get parent category name if any
				data.parentName = parentCategory && parentCategory.get('name');

				// get top level category of current editing model and convert to json
				// data.topLevelModel = CategoryCollection.toJSON();

				// // get all top level categories for select
				// data.topLevelCategories = CategoryCollection.filter(function(model) {
				// 	// must not have a parent and cannot be the current editing model
				// 	return !model.get('parent') && self.model !== model;
				// }).map(function(model) { return model.toJSON(); });

				self.setActiveParent(parentCategory);

				// set page
				self.$el.html(self.template(data));

				//var self = this;
				//this.setElement(this.template(this.model.toJSON()));
				//self.$el.html(self.template(self.model.toJSON()));

				self.cacheElem();
				self.delegateEvents();
				// self.validateForm();

				// add all valid parents
				self.addAllParents(validParents);
				
				self.collapseList();

				//CategoryCollection.fetchCustom().done(function() {
				//	obj.allOccasions = CategoryCollection.toJSON();
				//	self.$el.html(self.template(obj));
				//});
				AllOccasionsCollection.fetchCustom().done(function() {
			        
			        catsCollection    = AllOccasionsCollection.deepClone();
			        self.categoryNavView = new GeneralProductView({
						activeTitle:'Show These Categories in the Nav Group',
						activeTableTitle:'Selected Categories',
						allTitle:'All Categories',
						allSearchPlaceholder: 'Category Search Terms',
						activeAttribute:'active',
						nameAttribute:'occasion',
						async: false,
						hoverTitle: true,
						maxNumberProducts: 20,
						sequence: true,
						collection: catsCollection,
						hideGrids: true
					});
					self.$featuredCategories.html( self.categoryNavView.render().el );

					// self.$featuredCategories.html(
					// 	new GeneralProductView({
					// 	activeTitle:'Show These Categories in the Nav Group',
					// 	activeTableTitle:'Selected Categories',
					// 	allTitle:'All Categories',
					// 	allSearchPlaceholder: 'Category Search Terms',
					// 	activeAttribute:'active',
					// 	nameAttribute:'occasion',
					// 	async: false,
					// 	hoverTitle: true,
					// 	maxNumberProducts: 20,
					// 	sequence: true,
					// 	collection: catsCollection,
					// 	hideGrids: true
					// }).render().el);	
			    }.bind(self));
				
			});
			return this;
		},

		events: {
			'click #edit-parent-btn': 'handleParentEdit',
			'change #f-parent': 'handleParentChange',		
			'click #parent-list.collapsed': 'expandList',
			'click #parent-list.collapsed div': 'expandList',
			'change #f-showMore': 'handleShowMoreToggle'
		},

		cacheElem: function() {
			this.$featuredOccasion  = this.$el.find('#featured-occasion');
			this.$parentSelect = this.$el.find('#f-parent');
			this.$parentName = this.$el.find('#f-parentName');

			this.$editParentContainer = this.$el.find('#edit-parent-container');
			this.$parentTable = this.$el.find('#parent-table');
			this.$parentList = this.$el.find('#parent-list');
			this.$parentErrorPanel = this.$el.find('.alert-panel');
			this.$featuredCategories = this.$el.find('#featured-child-categories');
			this.$enableShowMoreActive = this.$el.find('#f-showMore');

			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$toggle               = this.$el.find('#f-showMore');
			this.$toggleRow            = this.$el.find('.show-more-section');
		},

		handleShowMoreToggle: function() {
			var self = this;
			if( this.$toggle.is(':checked') ){
				self.$toggleRow.fadeIn(200)
			} else {
				self.$toggleRow.fadeOut(200)
			}
		},

		showParentError: function() {
			this.$parentErrorPanel && this.$parentErrorPanel.fadeIn(100);
		},

		hideParentError: function() {
			this.$parentErrorPanel && this.$parentErrorPanel.fadeOut(100);
		},

		clearActiveParent: function() {
			this.$parentList && this.$parentList.find('.active').removeClass('active');
		},

		expandList: function() {
			this.$parentList.find('.parent-name.clickable').slideDown();
			this.$parentList.removeClass('collapsed');
		},

		collapseList: function() {
			this.$parentList.find('.parent-name.clickable').slideUp();
			this.$parentList.addClass('collapsed');
		},

		setActiveParent: function(model) {
			if(!model) {
				this.activeParent = model;
				model && this.setParentName(model.get('name'));
				this.clearActiveParent();
				this.hideParentError();

				return true;
			}

			this.showParentError();
			return false;
		},

		handleParentChange: function() {
			var self = this;

			self.$parentList.find('.top-level-category').fadeOut(0, function() {
				setTimeout(function() {
					self.$parentList.find('[data-id="' + self.$parentSelect.find('option:selected').val() + '"]').fadeIn(200);
				}, 0);
			});

			if(!self.$parentSelect.find('option:selected').val()) {
				this.setActiveParent(null);
				this.setParentName(self.$parentSelect.find('option:selected').text());
				this.$parentTable.addClass('no-border');
			} else {
				this.$parentTable.removeClass('no-border');
			}
		},

		setInactive: function() {
			var self = this;
			this.$parentList.find('.parent-name').removeClass('active').addClass('clickable');
			setTimeout(function(){
				self.collapseList();
			}, 200);
		},

		handleParentEdit: function(e) {
			$(e.currentTarget).fadeOut(200);
			this.$editParentContainer.fadeIn(200);
		},

		minSelected: function(min) {
			// this function returns true if the minimum number of selected items in the feature view meets the option
			var
				self = this,
				totalActive,
				query = {};

			query[self.categoryNavView.activeAttribute] = true;
			totalActive = self.categoryNavView.collection.where(query).length;
			
			if( totalActive >= min ){
				return true;
			} else {
				return false;
			}
		},			

		addParent: function(model) {
			var 
				self = this,
				ok,
				modID = self.model.get('parent'),
				catID = CategoryCollection.get(model.id);

			catID = catID.get('id');
			if( modID == catID ){
				ok = true;
			} else {
				ok = false;
			}

			var newView = new ItemCategoriesChildView({
				model: model,
				parent: this,
				level: CategoryCollection.getLevel(model),
				//selected: self.model.get('parent'),
				selected: ok,
				visible: true
			});
			if(!model.get('parent')) {
				this.$parentList.append(newView.render().el);
			} else {
				this.$parentList.find('[data-id="'+ model.get('parent') +'"] > .nested-rows')
					.append(newView.render().el);
			}
		},

		addAllParents: function(collection) {
			this.$parentList.empty();
			CategoryCollection.sort();
			collection.each(this.addParent, this);
		}

		// // js validation for create / edit section
		// validateForm: function() {
		// 	this.$el.validate({
		// 		rules: {
		// 			title: "required",
		// 			'f-showMoreLabel': {
		// 				required: function() {
		// 		          return !self.$enableShowMoreActive.is(':checked')
		// 	          	}
		// 			}
		// 		}
		// 	});
		// }	
	});

	return new ItemCategoriesView;
});