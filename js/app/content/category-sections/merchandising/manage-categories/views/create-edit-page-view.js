define([
	'backbone',
	'../collections/category-collection',
	'../templates/create-edit-page-tpl',
	'components/featured-product/views/featured-product-view',
	'./featured-sub-view',
	'components/featured-product/collections/featured-product-collection',
	'../collections/featured-sub-collection',
	'./edit-parent-view',
	'global-events',
	'jqueryui',
	'custom/searchify',
	'jqueryval'
], function(
	Backbone,
	CategoryCollection,
	CreateEditPageTpl,
	FeaturedProductView,
	FeaturedSubView,
	FeaturedProductCollection,
	FeaturedSubCollection,
	EditParentView,
	GlobalEvents
) {
	var CreateEditPageView = Backbone.View.extend({
		template: CreateEditPageTpl,

		tagName: 'form',

		id: 'm-create-edit-category',

		render: function() {
			var
				self = this,
				data = self.model.toJSON(),

				// get all valid parents of current editing model
				validParents = CategoryCollection.filter(function(model) {
					// cannot be current editing model or a descendent
					return self.model !== model
						&& !CategoryCollection.isDescendent(self.model, model)
				}),
				parentCategory = CategoryCollection.get(self.model.get('parent'));

			// get parent category name if any
			data.parentName = parentCategory && parentCategory.get('name');

			// get top level category of current editing model and convert to json
			data.topLevelModel = CategoryCollection.getTopLevelModel(self.model).toJSON();

			// get all top level categories for select
			data.topLevelCategories = CategoryCollection.filter(function(model) {
				// must not have a parent and cannot be the current editing model
				return !model.get('parent') && self.model !== model;
			}).map(function(model) { return model.toJSON(); });

			self.setActiveParent(parentCategory);

			// set page
			self.$el.html(self.template(data));
			self.delegateEvents();
			self.cacheElem();

			// add all valid parents
			self.addAllParents(validParents);

			// Get featured products panel
			if (self.model.get('pageType') === 'category') {
				self.featuredProductView = new FeaturedProductView({
					collection: new FeaturedProductCollection(self.model.get('featuredProducts')),
					primarySku: true
				});

				self.$productContainer.append(self.featuredProductView.render().$el);
			// Get featured sub-categories panel
			} else {
				self.subCategories = [];

				self.model.get('children').forEach(function(id) {
					var category = CategoryCollection.get(id);

					if(category.get('pageType') === 'category') {
						var copy = category.deepClone();

						copy.unset('featuredProducts');

						self.subCategories.push(copy);
					}
				});

				self.featuredSubView = new FeaturedSubView({
					collection: new FeaturedSubCollection(self.subCategories),
					selectAll: true
				});

				self.$productContainer.append(self.featuredSubView.render().$el);
			}

			self.applySearch();
			self.applyDate();
			self.validateForm();
			self.applyAccordians();

			if( self.model.get('categoryType') === 'Teleflora' ) {
				self.renderFederation();	
			}
		
			self.applyToolTips();


			return self;
		},

		cacheElem: function() {
			// Form fields
			this.$name = this.$el.find('#f-name');
			this.$active = this.$el.find('#status');
			this.$categoryShortDesc = this.$el.find('#short-desc');
			this.$categoryLongDesc = this.$el.find('#long-desc');
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$allowTeleflora = this.$el.find('#allow-updates');
			this.$allowAddons = this.$el.find('#allow-addons');
			this.$allowUpdates = this.$el.find('#allow-updates');
			this.$seoCategoryName = this.$el.find('#seo-name');
			this.$metaTitle = this.$el.find('#f-meta-title');
			this.$metaKeywords = this.$el.find('#f-meta-keywords');
			this.$metaDesc = this.$el.find('#f-meta-desc');
			this.$metaTags = this.$el.find('#f-meta-tags');
			this.$visibility = this.$el.find('#category-visibility');
			this.$showApp = this.$el.find('#f-showApp');
			this.$groupLevelActive = this.$el.find('#f-groupLevelActive');
			this.$allowTelefloraToolTip = this.$el.find('#allow-updates-tool-tip');

			// Region
			this.$productContainer = this.$el.find('#product-or-subcategory');
			this.$createEditForm = this.$el;

			this.$parentSelect = this.$el.find('#f-parent');
			this.$parentName = this.$el.find('#f-parentName');

			this.$editParentContainer = this.$el.find('#edit-parent-container');
			this.$parentTable = this.$el.find('#parent-table');
			this.$parentList = this.$el.find('#parent-list');
			this.$parentErrorPanel = this.$el.find('.alert-panel');

		    this.$accordion = this.$el.find('#accordion');

		    this.$minProdError = this.$el.find('#min-products-error');

			this.$tip = this.$el.find('.tooltip-change');
			this.$alertTip = this.$el.find('.hidden-field-tip');
		},

		events: {
			'click #cancel-btn': 'handleCancel',
			'click #copy-btn': 'handleCopy',
			'click #delete-btn': 'handleDelete',
			'click #save-btn': 'handleSave',
			'click .toggle-btn': 'handleToggle',
			'click #edit-parent-btn': 'handleParentEdit',
			'change #f-parent': 'handleParentChange',
			'change #f-groupLevelActive': 'handleGroupLevelToggle',
			'click #allow-updates': 'handleUpdateConfirm',
			'focus #f-name': 'handleShowAlertTip',
			'blur #f-name': 'handleHideAlertTip',
			'click #reset-btn': 'handleMerchChange'
		},

		handleGroupLevelToggle: function() {
			if(this.$groupLevelActive.is(':checked')) {
				this.$allowTeleflora.prop('disabled', true);
				this.$allowTelefloraToolTip.fadeIn(200);
			} else {
				this.$allowTeleflora.prop('disabled', false);
				this.$allowTelefloraToolTip.fadeOut(200);
			}
		},

		handleShowAlertTip: function() {
			var self = this;
			self.$alertTip.fadeIn();
		},

		handleHideAlertTip: function() {
			var self = this;
			self.$alertTip.fadeOut();
		},		

		handleUpdateConfirm: function(e) {
			// var self = this,
			// cbox = this.$allowUpdates;
			// event.preventDefault();
			// GlobalEvents.trigger('modal:custom', {
   //      		template: {
	  //       		title: 'Lock Merchandising',
	  //         		text: 'Are you sure you want to change this setting? Turning on the merchandising lock will prevent this category from receiving any automatic updates.'
   //      		},
   //      		confirmFn: function(){
   //      			cbox.prop("checked", !cbox.prop("checked"));
   //      		},
   //      		cancelFn: function(){
   //      			// do nothing, they clicked cancel
   //      		}      			
        		
   //    		});


			var 
				self = this,
				targEl = $(e.target);

			if(targEl.is(":checked")) {
				event.preventDefault();

				GlobalEvents.trigger('modal:custom', {
					template: {
						title: 'Automatic Price Updates',
						text: 'Setting this to ON will allow Teleflora global pricing updates to take effect on your site. Turning this setting OFF will ensure that the products on your site do not get their prices changed by any updates.<br><br>Turning this ON will deactivate "Always Use Teleflora.com Pricing" as they cannot both be enabled at once',
						confirmBtnText: 'OK',
						cancelBtnText: 'Cancel'
					},

					confirmFn: function(){
						targEl.prop("checked",!targEl.prop("checked"));    
					},
					cancelFn: function(){
					// do nothing
					}
				});

			} else {
				!self.$allowUpdates.is('checked');
			}



		},		


		handleMerchChange: function(event) {
            var self = this;
            event.preventDefault();

            GlobalEvents.trigger('modal:custom', {
                template: {
                    title: 'Reset Settings',
                    text: 'Are you sure? This will reset all applicable fields to their default Teleflora/group values.'
                },
                confirmFn: function(){
                    self.$name.val('').trigger('change');
                    self.$categoryShortDesc.val('').trigger('change');
                    self.$categoryLongDesc.val('').trigger('change');
                },
                cancelFn: function(){
                    // do nothing, they clicked cancel
                }               
                
            });
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

		setActiveParent: function(model) {
			if(!model || CategoryCollection.getLevel(model)
				+ CategoryCollection.getMaxLevel(this.model) < 5) {
				this.activeParent = model;
				model && this.setParentName(model.get('name'));
				this.clearActiveParent();
				this.hideParentError();

				return true;
			}

			this.showParentError();
			return false;
		},

		setParentName: function(name) {
			this.$parentName && this.$parentName.val(name);
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

		handleParentEdit: function(e) {
			$(e.currentTarget).fadeOut(200);
			this.$editParentContainer.fadeIn(200);
		},

		handleCopy: function() {
			var copy = this.model.deepClone();

			copy.set({
				id: null,
				name: '',
				children: [],
				featured: false,
				parent: null
			});

			this.parent.showCreateEdit(copy);
		},

		handleCancel: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		showMinError: function() {
			var self = this;
			GlobalEvents.trigger('form:invalid', this.$tip);
			this.$minProdError.fadeIn(200);
			setTimeout(function(){
				self.$minProdError.fadeOut(200);
			}, 10000);

		},

		minSelected: function(min) {
			// this function returns true if the minimum number of selected items in the feature view meets the option
			var
				self = this,
				totalActive = this.featuredProductView.collection.where({featured:true}).length;
			if( totalActive >= min ){
				return true;
			} else {
				return false;
			}
		},

		// On save, create the page
		handleSave: function() {
			var self = this;

			if( self.minSelected(1) ) {
				// do nothing, we are good
			} else {
				self.showMinError();
				return false;
			}

			if (this.$createEditForm.valid()) {
				var parentId = this.activeParent && this.activeParent.get('id');
				var level = parentId && CategoryCollection.get(parentId).get('level');

				// If parent has changed (DO SOMETHING ABOUT FEATURED SUB CATEGORIES)
				if((parentId || null) !== this.model.get('parent')) {
					var oldParent = CategoryCollection.get(this.model.get('parent'));

					var newParent = CategoryCollection.get(parentId);

					var currentId = this.model.get('id');

					// Remove from old parent if not originally top level
					if(oldParent) {
						var oldChildren = oldParent.get('children');

						oldChildren.splice(oldChildren.indexOf(this.model.get('id')), 1);
					}

					// Add to new parent if not now top level
					if(newParent) {
						var newChildren = newParent.get('children');

						newParent.get('children').push(this.model.get('id'));
					}

					// Do not feature it in the new parent by default
					this.model.set({
						featured: false
					});
				}

				this.model.set({
					name: this.$name.val().trim(),
					active: this.$active.is(':checked'),
					showApp: this.$showApp.is(':checked'),
					categoryShortDesc: this.$categoryShortDesc.val().trim(),
					categoryLongDesc: this.$categoryLongDesc.val().trim(),
					startDate: this.$startDate.val().trim(),
					endDate: this.$endDate.val().trim(),
					metaTitle: this.$metaTitle.val().trim(),
					metaKeywords: this.$metaKeywords.val().trim(),
					metaDesc: this.$metaDesc.val().trim(),
					metaTags: this.$metaTags.val().trim(),
					visibility: this.$visibility.find('option:selected').val(),
					parent: parentId || null,
					groupLevelActive: this.$groupLevelActive.is(':checked')
				});

				// Based on page type, determine input valus
				if (this.model.get('pageType') === 'category') {
					this.model.set({
						allowAddons: this.$allowAddons.is(':checked'),
						seoCategoryName: this.$seoCategoryName.val().trim(),
						featuredProducts: this.featuredProductView.collection.toJSON()
					});
				} else {
					this.model.set({
						seoCategoryName: this.$seoCategoryName.val().trim(),
					});

					CategoryCollection.set(this.subCategories, {remove: false});
				}

				// Based on category type, determine input values
				if (this.model.get('categoryType') === 'Teleflora') {
					this.model.set({
						allowUpdates: this.$allowUpdates.is(':checked')
					});
				}

				// If new category/subcategory/landing
				if (!CategoryCollection.get(this.model)) {
					this.model.set('id', Date.now()); // fake value
					CategoryCollection.add(this.model);
				}

				// Return to home view
				this.parent.showHome();

				GlobalEvents.trigger('form:save', this.$tip);
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		},

		handleDelete: function() {
			var self = this;

			GlobalEvents.trigger('form:delete', function() {
				CategoryCollection.remove(self.model);
				self.parent.showHome();
			});
		},

		addParent: function(model) {
			var newView = new EditParentView({
				model: model,
				parent: this,
				level: CategoryCollection.getLevel(model),
				selected: model === CategoryCollection.get(this.model.get('parent')),
				visible: model === CategoryCollection.getTopLevelModel(this.model)
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

			collection.forEach(this.addParent.bind(this));
		},

		applySearch: function() {
			this.$el.find('.search-input').searchify();
		},

		applyDate: function() {
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
		},


		applyAccordians: function() {
			this.$el.find('.accordian').accordion({
				heightStyle: "content"
			});

			this.applyAccordians2();
		},


		applyAccordians2: function() {
			this.$el.find('#category-seo-content').click(function() {
				var self = $(this);

				self.next().fadeToggle(200).toggleClass('active');

				if(self.find('.icon').hasClass('icon-opened')) {
					self.find('.icon').switchClass('icon-opened', 'icon-closed');
				} else {
					self.find('.icon').switchClass('icon-closed', 'icon-opened');
				}

				return false;
			}).next().hide();
		},

		renderFederation: function() {
			var self = this;
			this.runFederation(self.$name, 'Anniversary');
			this.runFederation(self.$categoryShortDesc, 'Need anniversary gift ideas? Michael\'s Flower Shop can help!');
			this.runFederation(self.$categoryLongDesc, 'We\'ve got all types of flowers for an anniversary. Select classic roses, a modern bouquet or even a plant. Nothing says love and romance like surprising your loved one with a stunning bouquet on your special day! Michael\'s Flower Shop delivers to Los Angeles, CA and nationwide, for a real surprise they won\'t soon forget\!');
		},

		runFederation: function(el, fedVal) {
			
			var 
				fedPar = el.closest('.form-section'),
				fedLabel;

			if( fedPar.find('div.label').is('*') ) {
				fedLabel = fedPar.find('div.label');
			} else {
				fedLabel = fedPar.find('label:first');
			}

			fedPar.addClass('f-federation');

			fedLabel.after('<i title="Because this field was left blank, it reverted to the default Teleflora/group value." class="icon icon-tool-tip icon-tool-tip-federated"></i>');

			if( el.val() == '' || el.val() == null) {
				fedPar.addClass('f-federated');
				if( el.is('select') ){
					el.find('option[value="'+fedPar+'"]').prop('selected',true);
				} else {
					el.val(fedVal);
				}				
			} else {
				fedPar.addClass('f-custom');
			}

			el.on('change',function(){
				if( (el.val() == '' || el.val() == null) ) {
					fedPar.addClass('f-federated').removeClass('f-custom');
					if( el.is('select') ){
						el.find('option[value="'+fedPar+'"]').prop('selected',true);
					} else {
						el.val(fedVal);
					}
				} else {
					fedPar.addClass('f-custom').removeClass('f-federated');
				}
			});
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validateForm: function() {
			var self = this;
			this.$createEditForm.validate({
				rules: {
					'f-start-date': {
						dateCustom: true
					},
					'f-end-date': {
						dateCustom: true
					},
					'long-desc': {
						maxlength: 1500
					},
					'short-desc': {
						maxlength: 500
					},
					'f-meta-title': 'noCarets',
					'f-meta-keywords': 'noCarets',
					'f-meta-desc': 'noCarets'				
				}
			});
			if( self.model.get('categoryType') === 'Custom' ){
				self.$name.rules('add', {
					required: true
				});
			}			
		}
	});

	return new CreateEditPageView;
});