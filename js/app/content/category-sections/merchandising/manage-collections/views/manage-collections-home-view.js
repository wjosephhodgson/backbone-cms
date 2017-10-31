define([
	'backbone',
	'../templates/manage-collections-tpl',
	'../models/manage-collections-model',
	'../models/collection-model',
	'../collections/collection-collection',
	'./collection-view',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	ManageCollectionsTpl,
	ManageCollectionsModel,
	CollectionModel,
	CollectionCollection,
	CollectionView,
	GlobalEvents
) {
	'use strict';

	var ManageCollectionsView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-manage-collections',

		template: ManageCollectionsTpl,

		initialize: function() {
			this.$el.html(this.template(ManageCollectionsModel.toJSON()));
			this.cacheElem();
		},

		cacheElem: function() {
			this.$collectionList = this.$el.find('#collection-list');
			
			this.$accordion = this.$el.find('#accordion');
			this.$optional = this.$el.find('#optional');

			this.$metaTitle = this.$el.find('#f-meta-title');
			this.$metaKeywords = this.$el.find('#f-meta-keywords');
			this.$metaDescription = this.$el.find('#f-meta-description');
			this.$additionalTags = this.$el.find('#f-additional-tags');
			this.$createEditForm = this.$el.find('#f-manage-collections');
			this.$filterList = this.$el.find('#collection-list');
			this.$middleSectionTitle = this.$el.find('#f-middle-section-title');
			this.$middleSectionSubTitle = this.$el.find('#f-middle-section-sub-title');

			this.$tip = this.$el.find('.tooltip-change');
		},

		render: function() {
			var self = this;

			ManageCollectionsModel.fetchCustom().done(function() {
				self.$el.html(self.template(ManageCollectionsModel.toJSON()));
				self.cacheElem();
				self.delegateEvents();
				self.applyToolTips();
				self.validateForm();
				self.applyAccordion();

				CollectionCollection.fetchCustom().done(function() {
					self.collectionCollection = CollectionCollection.deepClone();
					self.addAllCollections();
					self.applySortable(self.$filterList, self.collectionCollection);
				});
			});


			return self;
		},

		events: {
			'click #new-collection-btn': 'handleNewBtn',
			'click .toggle-btn': 'handleToggle',
			'click #reset-btn': 'handleReset',
			'click #save-btn': 'handleSave',
			'keyup #f-meta-description': 'handleCharacterCount'
		},

		handleCharacterCount: function() {

			var textVal = this.$metaDescription.val();

            var numberCount = textVal.length;  // Character Count 

    		var currentCount = (256 - numberCount);

    		$('#character-count').html(currentCount);

		},

		handleNewBtn: function() {
			var newModel = new CollectionModel();

			this.handleEdit(newModel);
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

		handleReset: function() {
			GlobalEvents.trigger('form:reset', this.render.bind(this));
		},

		handleSave: function() {
			if(this.$createEditForm.valid()) {
				ManageCollectionsModel.set({
					middleSectionTitle: this.$middleSectionTitle.val().trim(),
					middleSectionSubTitle: this.$middleSectionSubTitle.val().trim(),
					metaTitle: this.$metaTitle.val().trim(),
					metaKeywords: this.$metaKeywords.val().trim(),
					metaDescription: this.$metaDescription.val().trim(),
					additionalTags: this.$additionalTags.val().trim(),
				});

				GlobalEvents.trigger('form:save', this.$tip);
			}
		},


	    applyAccordion: function() {
	      var self = this;

	      this.$optional.click(function() {
	       
	        var thisElem = $(this);

	        self.$accordion.fadeToggle(200).toggleClass('active');
	       
	        if(thisElem.hasClass('icon-opened')) {

	          thisElem.switchClass('icon-opened', 'icon-closed');
	        }
	         else {
	          thisElem.switchClass('icon-closed', 'icon-opened');
	        }

	        return false;
	      }).closest('.row').next().hide();
	    },

		// Add a particular collection (addAll must initially be called)
		addCollection: function(collection) {
			var newView = new CollectionView({
				model: collection,
				parent: this
			}),
				parent = collection.get('parent');

			if (parent === 0) {
				this.$collectionList.append(newView.render().el);
			} else {
				this.$collectionList.find('[data-id="' + parent + '"]')
					.append(newView.render().el);
			}
		},

		// Sort collection by level (allow top-level pages to be appended first)
		addAllCollections: function() {
			this.$collectionList.empty();

			CollectionCollection.sort();
			CollectionCollection.each(this.addCollection, this);
		},

        helperFixRowWidth: function(e, tr) {
            var $originals = tr.children(),
                $helper = tr.clone();
	            $helper.children().each(function(index) {
	                $(this).width($originals.eq(index).width());
	            });

            return $helper;
        },

        applySortable: function(context, collection) {
            var self = this;

            context.sortable({
                helper: self.helperFixRowWidth,
                containment: 'parent',
                delay: 100,
                tolerance: 'pointer',

                start: function(e, ui) {
                    ui.helper.addClass('active');
                    ui.placeholder.height(ui.item.height());
                },

                update: function(e, ui) {
                    context.children().each(function(index) {
                        var id = $(this).data('pid');
                        
                        collection.get(id).set('order', index + 1);
                    });

                    collection.sort();
                }
            });
        },

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},
		
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					'f-meta-title': 'noCarets',
					'f-meta-keywords': 'noCarets',
					'f-meta-description': 'noCarets'
				}
			});
		}		
	});

	return new ManageCollectionsView;
});