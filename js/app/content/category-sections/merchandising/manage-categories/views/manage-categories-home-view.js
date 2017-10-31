define([
	'jquery',
	'underscore',
	'backbone',
	'text!../templates/manage-categories-tpl.html',
	'../collections/category-collection',
	'./category-view',
	'global-events',
	'jqueryui'
], function(
	$,
	_,
	Backbone,
	ManageCategoriesTpl,
	CategoryCollection,
	CategoryView,
	GlobalEvents
) {
	'use strict';

	var ManageCategoriesView = Backbone.View.extend({
		template: ManageCategoriesTpl,

		initialize: function() {
			this.setElement(this.template);
		},

		cacheElem: function() {
			this.$catList = this.$el.find('#category-list');
			this.$tip = this.$el.find('.tooltip-change');
			this.$search = this.$el.find('#catSearch');
		},

		render: function() {
			this.cacheElem();
			this.delegateEvents();
			CategoryCollection.fetchCustom().done(this.addAllCategories.bind(this));

			this.searchState = false;

			return this;
		},

		events: {
			'click #new-category-btn': 'handleNewBtn',
			'click .toggle-btn': 'handleToggle',
			'click #save-btn': 'handleSave',
			'keydown #catSearch': 'handleSearch'
		},

		handleSearch: function() {
			var 
				self = this,				
				cats = self.$catList.find('.clearfix');

			if(self.debounce) {
				clearTimeout(self.debounce);
			}

			self.debounce = setTimeout(function() {

				for (var i = 0; i < cats.length; i++) {
					var 
						theCat = cats[i],
						catText = $(theCat).find('.td-category'),
						text = self.$search.val().toLowerCase();

					// if( text == '' ){
					// 	self.searchState = false;
					// 	//self.collapseAll();
					// 	return false;
					// } else {
						
						if( $(catText).text().toLowerCase().indexOf(text) > -1 ){
							$(theCat).removeClass('hidden');
						} else {
							$(theCat).addClass('hidden');
						}						
						if( self.searchState == false ){
							self.expandAll();
							self.searchState = true;	
						}
						
					//}
				}
			}, 100);

		},

		expandAll: function() {
			var self = this;
			self.$el.find('.icon-closed').addClass('icon-opened');
			self.$el.find('.icon-closed').removeClass('icon-closed');
			self.$el.find('.nested-rows').css('display','block');
		},

		collapseAll: function() {
			var self = this;
			self.$el.find('.icon-open').addClass('icon-closed').removeClass('icon-open');
			self.$el.find('.nested-rows').css('display','none');
		},

		handleSave: function() {
			GlobalEvents.trigger('form:save', this.$tip);
		},

		handleNewBtn: function() {
			this.parent.showCreate();
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		handleToggle: function(e) {
			var buttonElement = $(e.target);

			buttonElement.closest('.row').children('.nested-rows').stop().slideToggle(200);

			if (buttonElement.hasClass('icon-opened')) {
				buttonElement.switchClass('icon-opened', 'icon-closed');
			} else {
				buttonElement.switchClass('icon-closed', 'icon-opened');
			}
		},

		// Add a particular category (addAll must initially be called)
		addCategory: function(category) {
			var newView = new CategoryView({
				model: category,
				parent: this,
				level: CategoryCollection.getLevel(category)
			});

			if(!category.get('parent')) {
				this.$catList.append(newView.render().el);
			} else {
				this.$catList.find('[data-id="'+ category.get('parent') +'"] > .nested-rows')
					.append(newView.render().el);
			}
		},

		// Sort collection by level (allow top-level pages to be appended first)
		addAllCategories: function() {
			this.$catList.empty();

			CategoryCollection.sort();
			CategoryCollection.each(this.addCategory, this);
		},
		
		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},
	});

	return new ManageCategoriesView();
});