define([
	'underscore',
	'backbone',
	'../templates/general-product-tpl',
	'./active-general-product-view',
	'./all-general-product-view',
	'global-events',
	'custom/searchify',
	'jqueryui'
], function(
	_,
	Backbone,
	GeneralProductTpl,
	ActiveGeneralProductView,
	AllGeneralProductView,
	GlobalEvents
) {
	var GeneralProductView = Backbone.View.extend({
		tagName: 'div',

		id: 'm-general-products',
		className: 'general-product',

		template: GeneralProductTpl,

		// activeTitle
		// activeTableTitle
		// allTitle
		// allSearchPlaceholder
		// activeAttribute
		// nameAttribute
		// async
		// search
		initialize: function(options) {
			var self;

			self = this;
			self.options = options;
			options.hideGrids === undefined && (options.hideGrids = false);
			options.hideLists === undefined && (options.hideLists = false);
			options.statusFilter === undefined && (options.statusFilter = true);
			options.typeFilter === undefined && (options.typeFilter = true);
			options.nosearch === undefined && (options.nosearch = false);
			options.nofilter === undefined && (options.nofilter = true);
			options.images === undefined && (options.images = false);
			options.imgGroup === undefined && (options.imgGroup = false);
			options.selectAll === undefined && (options.selectAll = false);
			options.caticons === undefined && (options.caticons = false);
			options.showCategoryID === undefined && (options.showCategoryID = false);
			// options.textLength === undefined && (options.textLength = 15);
			self.selectAll = options.selectAll || false;
			self.showCategoryID = options.showCategoryID || false;
			// self.textLength = options.textLength || 15;
			self.disabled = options.disabled = options.disabled === true;
			self.collection = options.collection;
			self.maxNumberProducts = options.maxNumberProducts || 999;
			
			self.nameAttribute = options.nameAttribute || 'name';
			self.activeAttribute = options.activeAttribute || 'active';
			self.imgAttribute = options.imgAttribute || 'img';
			self.iconAttribute = options.iconAttribute || 'collection';
			
			self.images = options.images || false;
			self.statusactive = options.statusactive || 'statusactive';
			self.imgGroup = options.imgGroup || false;
			self.caticons = options.caticons || false;
			self.sequence = options.sequence || false;
			self.$el.html(self.template(options));

			// If a model changes to active (added), then add to active list
			self.listenTo(self.collection, 'change:' + options.activeAttribute, function() {
				self.addAllActive();
				GlobalEvents.trigger('form:editing');
			});
		},

		render: function() {
			if(this.async) {
				this.collection.fetchCustom().done(function() {
					this.renderView();
				}.bind(this));
			} else {
				this.renderView();
			}


			return this;
		},

		renderView: function() {
			var self = this;
			this.delegateEvents();
			this.cacheElem();

			if(this.options.hideGrids) {
				this.showListView();
			} else {
				this.showGridView();
			}

			if( !(self.options.nofilter) ) {
				self.uiCheckBoxes();
			}

			this.addAllActive();

			if(!this.disabled) {
				this.addAllListings();
			}

			if(this.options.sequence) {
				setTimeout( function(){
					self.sortGridView();
					self.sortListView();
				}, 500);

			}

		},

		events: {
			'click #list-view':'showListView',
			'click #grid-view':'showGridView',
			'click #filter-view': 'toggleFilterView',
			'click #close-filter-view': 'toggleFilterView',
			'change #product-search-checkboxes input[type="checkbox"]': 'applyFilter',
			'keyup #product-search-input': 'handleSearchInput',
			'click #f-select-all':'toggleSelectAll'
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
			this.$filterCheckBoxes = this.$el.find('#product-search-checkboxes input[type="checkbox"]');
			this.$prodBoxes = this.$el.find('#product-search-checkboxes');
			this.$productAlert = this.$el.find('.alert-panel');
			this.$activeContainer = this.$el.find('#product-container');
			this.$selectAll = this.$el.find('#f-select-all');
			this.$LoaderImg = this.$el.find('#loader-overlay');
			this.$Spinner = this.$el.find('#spinner-gif');
			this.$checkRow = this.$el.find('.catRowInfo');
		},

		

		// toggleSelectAll: function() {
		// 	var self = this;

		// 	this.handleUncheckSelectedProducts(model);

		// 	var _productsArea = self.$searchTable.find('tbody > tr');

		// 	if( self.$selectAll.prop('checked') ){
		// 		// select all products, the box was just clicked
		// 		self.$searchTable.find('tbody > tr').each(function(){
		// 			self.$
		// 			$(this).trigger('click');
		// 		});
		// 	} else {

		// 		self.$activeList.find('.icon-trash').each(function(){
		// 			$(this).trigger('click');
		// 		})					
		// 	}
		// 	// }
		// },






	    handleUncheckSelectedProducts: function(model) {
	    	var self = this;

			var searchProducts = self.$searchTable.find('tbody > tr');

			// Jquery used here because of model object being accessed rather than for loop. 

			self.$searchTable.find('tbody > tr').each(function() {
				var current = $(this),
				currentModel = current.data('model');


				var added = currentModel.active;

				if(added) {
					$(this).click();
				}
			});
		},

		// // (Old Code)
		// toggleSelectAll: function() {
		// 	var self = this;
		// 	if( self.$selectAll.prop('checked') ){
		// 		console.log("select all CHECKED!");
		// 		// self.$activeTable.empty();
		// 		// self.$activeGrid.empty();
		// 		self.handleUncheckSelectedProducts();
		// 		// select all products, the box was just clicked
		// 		self.$searchTable.find('tbody > tr').each(function(){
		// 			$(this).trigger('click');
		// 		});
		// 	} else {
		// 		console.log("select all not checked");
		// 		// look at whether the grid or list is in use, then remove all products from it
		// 		if( self.inlineStyle(self.$activeGrid, 'display') == 'block' ){

		// 			self.$activeGrid.find('.icon-trash').each(function(){
		// 				$(this).trigger('click');
		// 			})
		// 		} else {
		// 			self.$activeTable.find('.icon-trash').each(function(){
		// 				$(this).trigger('click');
		// 			})					
		// 		}
		// 	}
		// },

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
					    

					    	

					        //  if(_productsArea[i].style.display !== "none"){

					        //  	_productsArea[i].click();
					        // }
					        
					     } 

					     self.$Spinner.addClass('hidden');

                   self.$LoaderImg.addClass('hidden');
                
				    
	                },50);

		},

		addListing: function(model) {
			var newListingView = new AllGeneralProductView({
				model: model,
				parent: this
			});

			newListingView.parent = this;
			this.$allList.append(newListingView.render().el);
		},

		addAllListings: function() {
			this.$allList.empty();

			this.collection.each(this.addListing, this);
		},

		uiCheckBoxes: function() {
			this.$prodBoxes.buttonset();
		},

		addActive: function(model) {
			if(!this.options.hideLists) {
				var newActiveListView = new ActiveGeneralProductView({
					model: model,
					type: 'list',
					parent: this,
					disabled: this.disabled
				});

				this.$activeList.append(newActiveListView.render().el);
				newActiveListView.parent = this;
			}

			if(!this.options.hideGrids) {
				var newActiveGridView = new ActiveGeneralProductView({
					model: model,
					type: 'grid',
					parent: this,
					disabled: this.disabled
				});

				this.$activeGrid.append(newActiveGridView.render().el);
				newActiveGridView.parent = this;
			}
		},

		// Add all active products sorted by rank
		addAllActive: function() {
			var
				self = this,
				query = {};
			if(!this.options.hideLists) {
				this.$activeList.empty();
			}
			if(!this.options.hideGrids) {
				this.$activeGrid.empty();
			}
			query[this.activeAttribute] = true;
			// if(this.options.sequence){
			// 	self.collection.getSortedByRank().where(query).forEach(this.addActive, this);
			// } else {
				this.collection.where(query).forEach(this.addActive, this);
			// }
			
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
				current, 
				query;
				
			self.filterArray = [];

			this.$searchTable.find('tbody > tr').each(function() {
				var current = $(this),
					currentModel = current.data('model').name;
					// console.log(currentModel);

				if(currentModel.toLowerCase().indexOf(self.queryText) < 0) {
					current.hide();
				} else {
					current.show();
				}
			});
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
				delay: 100,
				tolerance: "pointer",
				start: function(e, ui) {
					ui.placeholder.height(ui.item.height());
					ui.helper.addClass('active');
				},

				update: function(e, ui) {
					self.$activeList.children().each(function(index) {
						var id = $(this).data('id');
						self.collection.get(id).set('sequence', index + 1);
					});
					//self.addAllActive();
				}
			}).disableSelection();
		},

		sortGridView: function() {
			var self = this;

			self.$activeGrid.sortable({
				helper: self.helperFixRowWidth,
				containment: "parent",
				tolerance: "pointer",
				start: function(e, ui) {
					ui.placeholder.height(ui.item.height());
					ui.helper.addClass('active');
				},

				update: function(e, ui) {
					self.$activeGrid.children().each(function(index) {
						var id = $(this).data('id');
						self.collection.get(id).set('sequence', index + 1);
					});
					//self.addAllActive();
				}
			});
		},

	    // getSortedByRank inserted from featured product view for sort.
	    getSortedByRank: function() {
	      return this.collection.where({
	        active: true
	      }).sort(function(a, b) {
	        return a.get('sequence') - b.get('sequence');
	      });
	    }

	});

	return GeneralProductView;
});