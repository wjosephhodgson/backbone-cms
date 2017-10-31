define([
	'underscore',
	'backbone',
	'../templates/featured-product-tpl',
	'./active-featured-product-view',
	'./all-featured-product-view',
	'components/featured-occasions/collections/all-occasions-collection',
	'global-events',
	'custom/searchify',
	'jqueryui'
], function(
	_,
	Backbone,
	FeaturedProductTpl,
	ActiveFeaturedProductView,
	AllFeaturedProductView,
	AllOccasionsCollection,
	GlobalEvents
) {
	var FeaturedProductView = Backbone.View.extend({
		tagName: 'div',

		template: FeaturedProductTpl,

		initialize: function(options) {
			var self = this;
			this.collection = options.collection;

			this.disabled = options.disabled === true;
	

			this.maxNumberProducts = options.maxNumberProducts || 999;
			this.selectAll = options.selectAll || false;
			this.primarySku = options.primarySku || false;
			

			obj = ({
				bodyOnly: options.bodyOnly === true, // show only the body of this component
				title: options.title || 'Category Products',
				disabled: this.disabled,
				selectAll: this.selectAll,
				primarySku: this.primarySku,
				allOccasions: []
			});

			// If a model changes to active (added), then add to active list
			this.listenTo(this.collection, 'change:featured change:rank', function() {
				this.addAllActive();
				GlobalEvents.trigger('form:editing');
			});			

			if( typeof options.id === 'undefined' ){
				self.id = 'm-featured-products'
			} else {
				self.id = options.id
			}

		},

		id: self.id,

		// id: function(options) {
		// 	if( typeof options.id === 'undefined' ){
		// 		return 'm-featured-products'
		// 	} else {
		// 		return options.id
		// 	}
		// },

		render: function() {
			var self = this;

			AllOccasionsCollection.fetchCustom().done(function() {
				obj.allOccasions = AllOccasionsCollection.toJSON();
				self.$el.html(self.template(obj));
			});

			this.collection.fetchCustom().done(function() {
				this.delegateEvents();
				this.cacheElem();
				this.showGridView();
				this.addAllActive();
				this.uiCheckBoxes();

				if(!this.disabled) {
					this.addAllListings();
					this.sortListView();
					this.sortGridView();
				}

				this.applyFilter();				

			//trigger applyFilter immediately to filter for primarySku option.
			//this.listento(self.collection,'add',self.applyFilter());
				
			}.bind(this));

			return this;
		},

		events: {
			'click #list-view':'showListView',
			'click #grid-view':'showGridView',
			'click #filter-view': 'toggleFilterView',
			'click #close-filter-view': 'toggleFilterView',
			'change #product-search-checkboxes input[type="checkbox"]': 'applyFilter',
			'keyup #product-search-input': 'handleSearchInput',
			'change #selectCategory':'applyFilter',
			'click #f-product-select-all':'toggleSelectAll'
		},

		cacheElem: function() {
			this.$allList = this.$el.find('#product-search-list');
			this.$activeTable = this.$el.find('#product-table');
			this.$activeList = this.$el.find('#product-list');
			this.$activeGrid = this.$el.find('#product-grid');
			this.$listBtn = this.$el.find('#list-view');
			this.$gridBtn = this.$el.find('#grid-view');
			this.$filterPanel = this.$el.find('.search-filters');
			this.$filterBtn = this.$el.find('#filter-view');
			this.$searchTable = this.$el.find('#product-search-table');
			this.$prodBoxes = this.$el.find('#product-search-checkboxes');
			this.$filterCheckBoxes = this.$el.find('#product-search-checkboxes input[type="checkbox"]');
			this.$productAlert = this.$el.find('.alert-panel');
			this.$activeContainer = this.$el.find('#product-container');
			this.$catSearch = this.$el.find('#selectCategory');
			this.$selectAll = this.$el.find('#f-product-select-all');
			this.$icon = this.$el.find('.icon');
			this.$LoaderImg = this.$el.find('#loader-overlay');
			this.$Spinner = this.$el.find('#spinner-gif');
		},

		uiCheckBoxes: function() {
			this.$prodBoxes.buttonset();
		},

		inlineStyle: function (el, prop) {
			// plugin that returns the inline style of the el passed
	         var styles = el.attr("style"),
	             value;
	         styles && styles.split(";").forEach(function (e) {
	             var style = e.split(":");
	             if ($.trim(style[0]) === prop) {
	                 value = style[1];           
	             }                    
	         });   
	         return value;
	    },

	    handleUncheckSelectedProducts: function(model) {

	    	var self = this;             

               var searchProducts = self.$searchTable.find('tbody > tr');

                // Jquery used here because of model object being accessed rather than for loop. 
             
              self.$searchTable.find('tbody > tr').each(function() {
				var current = $(this),
					currentModel = current.data('model');
			
				var added = currentModel.get('featured');

					if(added) {

						$(this).click();

					}
				});

    

		},

		toggleSelectAll: function() {
			var self = this;

                       //Jquery Implementation using .each is terribly slow

                    // Javascript Implementation
		

                   self.$Spinner.removeClass('hidden');

                   self.$LoaderImg.removeClass('hidden');


                   var _productsArea = self.$searchTable.find('tbody > tr');



	               setTimeout( function() {

	                	self.handleUncheckSelectedProducts();

					    for (var i = 0; i < _productsArea.length; i++) {
					    	

					         if(_productsArea[i].style.display !== "none"){

					         	_productsArea[i].click();
					        }
					        
					     } 

					     self.$Spinner.addClass('hidden');

                   self.$LoaderImg.addClass('hidden');
                
				    
	                },50);

		},

		addListing: function(model) {
			var newListingView = new AllFeaturedProductView({
				model: model,
				parent: this,
				disabled: this.disabled
			});
			newListingView.parent = this;
			this.$allList.append(newListingView.render().el);
		},

		addAllListings: function() {
			this.$allList.empty();

			this.collection.each(this.addListing, this);
		},

		addActive: function(model) {

			var newActiveListView = new ActiveFeaturedProductView({
				model: model,
				type: 'list',
				disabled: this.disabled
			});

			var newActiveGridView = new ActiveFeaturedProductView({
				model: model,
				type: 'grid',
				disabled: this.disabled
			});

			this.$activeList.append(newActiveListView.render().el);
			this.$activeGrid.append(newActiveGridView.render().el);

			newActiveGridView.parent = this;
			newActiveListView.parent = this;
		},

		// Add all active products sorted by rank
		addAllActive: function() {
			this.$activeList.empty();
			this.$activeGrid.empty();

			this.collection.getSortedByRank()
				.forEach(this.addActive, this);
		},

		showListView: function(e) {
			this.$gridBtn.removeClass('active');
			this.$listBtn.addClass('active');

			this.$activeGrid.hide();
			this.$activeTable.fadeIn(200);
		},

		showGridView: function(e) {
			this.$gridBtn.addClass('active');
			this.$listBtn.removeClass('active');

			this.$activeTable.hide();
			this.$activeGrid.fadeIn(200);
		},

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},

		sortListView: function() {
			var self = this;

			self.$activeList.sortable({
				helper: self.helperFixRowWidth,
				containment: "parent",
				tolerance: "pointer",
				start: function(e, ui) {
					ui.placeholder.height(ui.item.height());
					ui.helper.addClass('active');
				},

				update: function(e, ui) {
					self.$activeList.children().each(function(index) {
						var id = $(this).data('id');

						self.collection.get(id).set('rank', index + 1);
						self.addAllActive();
					});
				}
			});
		},

		sortGridView: function() {
			var self = this;

			self.$activeGrid.sortable({
				helper: self.helperFixRowWidth,
				containment: 'parent',
				tolerance: 'pointer',

				start: function(e, ui) {
					ui.placeholder.height(ui.item.height());
				},

				update: function(e, ui) {
					self.$activeGrid.children().each(function(index) {
						var id = $(this).data('id');

						self.collection.get(id).set('rank', index + 1);
						self.addAllActive();

						GlobalEvents.trigger('form:editing');
					});
				}
			});
		},

		toggleFilterView: function(e) {
			this.$filterPanel.fadeToggle(200);
			this.$filterBtn.toggleClass('active');
		},

		debounce: null,
		queryText: '',

		handleSearchInput: function(e) {
			var self = this;

			if (self.debounce) {
				clearTimeout(self.debounce);
			}

			self.debounce = setTimeout(function() {
				self.queryText = e.target.value.toLowerCase();
				self.applyFilter();
			}, 100);
		},

		applyFilter: function() {
			var self = this,
				current, query;

			this.filterArray = [];

			if( self.primarySku == false ){
				self.filterArray = self.filterArray.concat(self.collection.where({'isBaseSku': false}));
			} 

			// Original Filter
			this.$filterCheckBoxes.each(function() {
				current = $(this);
				if (!current.is(':checked')) {
					query = {};
					query[current.data('key')] = current.data('value');

					self.filterArray = self.filterArray.concat(self.collection.where(query));
				}
			});
			

			// this.$filterCheckBoxes.each(function() {
			// 	current = $(this);

			// 	if (!current.is(':checked') && self.primarySku === true) {
			// 		query = {};
			// 		query[current.data('key')] = current.data('value');
			// 		keyValue = current.data('value');
			// 		console.log(keyValue);
			// 		base = {isBaseSku: false};

			// 		self.filterArray = self.filterArray.concat(self.collection.where({type:keyValue,isBaseSku: false}));
					 
			// 	} else if (!current.is(':checked')) {
			// 		query = {};
			// 		console.log('goose');
			// 		query[current.data('key')] = current.data('value');

			// 		self.filterArray = self.filterArray.concat(self.collection.where(query));
			// 	} else {
			// 		// do nothing
			// 	}

			// });

			if( this.$catSearch.val() && this.$catSearch.val !== '' ){
				query = {};
				query['categories'] = this.$catSearch.val();
				catVal = this.$catSearch.val();
				newQuery = self.collection.filter(function(model){
					return ( _.indexOf(model.get('categories'), catVal) >= 0 );
				});
				self.filterArray = self.filterArray.concat(newQuery);
			}

			this.$searchTable.find('tbody > tr').each(function() {
				var current = $(this),
					currentModel = current.data('model');

				if(self.filterArray.indexOf(currentModel) > -1
					|| (currentModel.get('name').toLowerCase().indexOf(self.queryText) < 0
						&& currentModel.get('number').toLowerCase().indexOf(self.queryText) < 0)) {
					current.hide();
				} else {
					current.show();
				}
			});
		}

	});

	return FeaturedProductView;
});