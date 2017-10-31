define([
	'backbone',
	'../templates/wedding-flower-home-view-tpl',
  '../templates/edit-view-tpl',
  '../models/flower-model',
  '../models/section-model',
  '../collections/flower-collection',
  '../collections/section-collection',
  '../views/section-view',
  '../views/edit-view',
	'global-events'
], function(
	Backbone,
	FlowerHomeTpl,
  EditViewTpl,
  FlowerModel,
  SectionModel,
  FlowerCollection,
  SectionCollection,
  SectionView,
  EditView,
	GlobalEvents
) {
  var WeddingFlowerHomeView = Backbone.View.extend({ 
    tagName: 'div',
    id: 'f-wedding-flower-page',
    template: FlowerHomeTpl,

    initialize: function() {
      EditView.parent = this;
    },

    render: function() {
      var self = this;

      FlowerModel.fetchCustom().done(function() {
        this.$el.html(this.template(FlowerModel.toJSON()));
        this.delegateEvents();
        this.cacheElem();

        // Flower Section Start 
        this.stopListening(this.sectionCollection, 'resequenced');
        FlowerModel.stopListening(this.sectionCollection);
        this.sectionCollection = new SectionCollection(
         FlowerModel.get('sectionsflowers')
        );
        FlowerModel.listenTo(this.sectionCollection, 'add remove change', function() {
        FlowerModel.set('sectionsflowers', this.sectionCollection.toJSON());
        }.bind(this));
        this.listenTo(this.sectionCollection, 'resequenced', this.addAllSections);
        // Flower Section End

         // Color Section Start 
        this.stopListening(this.sectionCollectionColor, 'resequenced');
        FlowerModel.stopListening(this.sectionCollectionColor);
        this.sectionCollectionColor = new SectionCollection(
         FlowerModel.get('sectionscolors')
        );
        FlowerModel.listenTo(this.sectionCollectionColor, 'add remove change', function() {
        FlowerModel.set('sectionscolors', this.sectionCollectionColor.toJSON());
        }.bind(this));
        this.listenTo(this.sectionCollectionColor, 'resequenced', this.addAllSections);
        // Color Section End

        // Apply Functions
        this.applyTabs();
        this.applyAccordion();
        this.addAllSections();
        this.applySortableFlower();
        this.applySortableColor();
        // To display modal
        this.setModal();
        self.applyToolTips();
      }.bind(this));

      return this;
    },

    events: {
      'click #save-btn': 'handleSave',
      'click #new-btn': 'handleAddSection',
      'click #new-color-btn': 'handleAddColor',
      'click #reset-btn': 'handleReset'
    },

    cacheElem: function() {
      // Modal Functionality
      this.$modal = this.$el.find('#wedding-edit-modal');
      // Sections
      this.$sectionFlowerList = this.$el.find('#section-flower-list');
      this.$sectionColorList = this.$el.find('#section-color-list');
      // SEO Elements
      this.$optionalflowers = this.$el.find("#optional-flowers");
      this.$optionalcolors = this.$el.find("#optional-colors");
      this.$accordionflowers = this.$el.find("#accordion-flowers");
      this.$accordioncolors = this.$el.find("#accordion-colors");
      this.$metaTitleflowers = this.$el.find("#f-meta-title-flowers");
      this.$metaKeywordsflowers = this.$el.find("#f-meta-keywords-flowers");
      this.$metaDescflowers = this.$el.find("#f-meta-desc-flowers");
      this.$metaTagsflowers = this.$el.find("#f-meta-tags-flowers");
      this.$metaTitlecolors = this.$el.find("#f-meta-title-colors");
      this.$metaKeywordscolors = this.$el.find("#f-meta-keywords-colors");
      this.$metaDesccolors = this.$el.find("#f-meta-desc-colors");
      this.$metaTagscolors = this.$el.find("#f-meta-tags-colors");

      this.$tip = this.$el.find('.tooltip-change');
    },

    handleSave: function() {
    
      FlowerModel.set({
        metaTitleflowers: this.$metaTitleflowers.val().trim(), 
        metaKeywordsflowers: this.$metaKeywordsflowers.val().trim(),
        metaDescriptionflowers: this.$metaDescflowers.val().trim(),
        metaTagsflowers: this.$metaTagsflowers.val().trim(), 
        metaTitlecolors: this.$metaTitlecolors.val().trim(), 
        metaKeywordscolors: this.$metaKeywordscolors.val().trim(), 
        metaDescriptioncolors: this.$metaDesccolors.val().trim(),
        metaTagscolors: this.$metaTagscolors.val().trim()
      });

      GlobalEvents.trigger('form:save', this.$tip);
    },

    handleReset: function() {

    },


    applyToolTips: function() {
      this.$tip.tooltip();
    },

    handleEdit: function(model) {

      EditView.model = model;

      this.$modal.empty();
      this.$modal.append(EditView.render().el);
      this.$modal.dialog('open');

    },

    handleAddSection: function() {
      var newModel = new SectionModel();
      this.handleEdit(newModel);
    },

    handleAddColor: function() {
      var newModel = new SectionModel();
      this.handleEdit(newModel);
    },

    addSectionFlower: function(section) {
      var newSectionView = new SectionView({
        model: section,
        collection: this.sectionCollection,
        parent: this
      });

      this.$sectionFlowerList.append(newSectionView.render().el);
    },

    addSectionColor: function(section) {
      var newSectionView = new SectionView({
        model: section,
        collection: this.sectionCollectionColor,
        parent: this
      });

      this.$sectionColorList.append(newSectionView.render().el);
    },

    addAllSections: function() {
      this.$sectionFlowerList.empty();
      this.$sectionColorList.empty();
      this.sectionCollection.each(this.addSectionFlower, this);
      this.sectionCollectionColor.each(this.addSectionColor, this);
    },

    applyTabs: function() {
      this.$el.find('#tabs').tabs();
    },

    applyAccordion: function(e) {
      var self = this;
    
      if(self.$optionalflowers) {
        this.$optionalflowers.click(function() {
          var thisElem = $(this);

          self.$accordionflowers.fadeToggle(200).toggleClass('active');
          if(thisElem.hasClass('icon-opened')) {
            thisElem.switchClass('icon-opened', 'icon-closed');
          } else {
            thisElem.switchClass('icon-closed', 'icon-opened');
          }

          return false;
        }).closest('.row').next().hide();
      }

      if(self.$optionalcolors) {
        this.$optionalcolors.click(function() {
          var thisElem = $(this);

          self.$accordioncolors.fadeToggle(200).toggleClass('active');
          if(thisElem.hasClass('icon-opened')) {
            thisElem.switchClass('icon-opened', 'icon-closed');
          } else {
            thisElem.switchClass('icon-closed', 'icon-opened');
          }
          return false;
        }).closest('.row').next().hide();
      }
    },

    helperFixRowWidth: function(e, tr) {
      var $originals = tr.children(),
        $helper = tr.clone();
      $helper.children().each(function(index) {
        $(this).width($originals.eq(index).width());
      });

      return $helper;
    },

    applySortableColor: function() {

      var self = this;

      self.$el.find('#section-color-list').sortable({
        helper: self.helperFixRowWidth,
        containment: 'parent',
        delay: 100,
        tolerance: 'pointer',

        start: function(e, ui) {
          ui.helper.addClass('active');
          ui.placeholder.height(ui.item.height());
        },

        update: function(e, ui) {
          self.$sectionColorList.children().each(function(index) {
            var id = $(this).data('id');

            self.sectionCollectionColor.where({id:id})[0].set('sequence', index + 1);
          });

          self.sectionCollectionColor.changeSort('sequence');
          self.sectionCollectionColor.sort();
          self.sectionCollectionColor.trigger('resequenced');
          GlobalEvents.trigger('form:editing');
        }
      });
    },

    applySortableFlower: function() {

      var self = this;

      self.$el.find('#section-flower-list').sortable({
        helper: self.helperFixRowWidth,
        containment: 'parent',
        delay: 100,
        tolerance: 'pointer',

        start: function(e, ui) {
          ui.helper.addClass('active');
          ui.placeholder.height(ui.item.height());
        },

        update: function(e, ui) {
          self.$sectionFlowerList.children().each(function(index) {
            var id = $(this).data('id');

            self.sectionCollection.where({id:id})[0].set('sequence', index + 1);
          });

          self.sectionCollection.changeSort('sequence');
          self.sectionCollection.sort();
          self.sectionCollection.trigger('resequenced');
          GlobalEvents.trigger('form:editing');
        }
      });
    },

    handlePrintModal: function() {

      this.showModal(EditView);

    },

    setModal: function() {

      this.$modal.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        show: {
          effect: 'fade',
          speed: 200
        },
        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    showModal: function(view) {

      view.model = new SectionModel();

      this.$modal.empty();
      this.$modal.append(view.render().el);
      this.$modal.dialog('open');
    },

    closeModal: function() {
      this.$modal.dialog('close');
    }

  });

  return new WeddingFlowerHomeView;
});