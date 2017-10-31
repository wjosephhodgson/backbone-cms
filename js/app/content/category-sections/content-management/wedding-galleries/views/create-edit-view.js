define([
  'backbone',
  '../templates/create-edit-view-tpl',
  '../models/gallery-model',
  '../models/section-model',
  '../collections/gallery-collection',
  '../collections/section-collection',
  './section-view',
  './create-edit-section-view',
  'global-events',
  'jqueryui',
  'jqueryval'
], function(
  Backbone,
  CreateEditTpl,
  GalleryModel,
  SectionModel,
  GalleryCollection,
  SectionCollection,
  SectionView,
  CreateEditSectionView,
  GlobalEvents
) {
  var CreateEditView = Backbone.View.extend({
   
    template: CreateEditTpl,

    initialize: function() {
      CreateEditSectionView.parent = this; 
      // SectionView.parent = this;
    },

    render: function() {

  		var self = this;


  		
      GalleryCollection.fetchCustom().done(function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.delegateEvents();
        this.cacheElem(); 
        this.validateForm();

        // display modal
        viewModel = self.model.toJSON();
        self.renderVisible(viewModel);  

        this.stopListening(this.sectionCollection, 'resequenced');

        this.model.stopListening(this.sectionCollection);

        this.sectionCollection = new SectionCollection(
          this.model.get('sections')
        );

        this.model.listenTo(this.sectionCollection, 'add remove change', function() {
          this.model.set('sections', this.sectionCollection.toJSON());
        }.bind(this));

        this.listenTo(this.sectionCollection, 'resequenced', this.addAllSections);

        this.addAllSections();
        
        var fedtype = this.model.get('type');
        if( fedtype !== 'Teleflora' ){
          this.applySortable();  
        }

      
      }.bind(this));

      self.cacheElem(); 

      self.validateForm();


      // jquery stuff
      self.applyToolTips();

      return self;
    },

    renderVisible: function(model) {

      this.visibleModel = model;

      this.$el.html(this.template(this.model.toJSON()));

      this.delegateEvents();

      this.cacheElem();

      this.setModal();
    },

    events: {
      'click #add-photo-btn': 'handlePrintModal',
      'click #save-btn': 'handleSave',
      'click #cancel-btn': 'handleCancel',
      'click #delete-btn': 'handleDelete',
      'click #img-upload': 'handleImgUpload',
      'click .sort-btn': 'handleSort'
      // 'click #section-modal-btn': 'handlePrintModal'
    },

    cacheElem: function() {
      this.$name = this.$el.find('#f-name');
      
      this.$galleryStatus = this.$el.find('#f-galleryStatus');
      
      this.$sectionList = this.$el.find("#section-list");
      
      this.$modal = this.$el.find('#print-modal');
      
      this.$sortButtons = this.$el.find('.sort-btn');
      // changed to this.$el.find -- element was cached prior to initialization.
      this.$tileImage = this.$el.find('#f-tile-image-upload');

      this.$alertPanel = this.$el.find(".alert-panel");

      this.$createEditForm = this.$el.find('#create-edit-form');

      this.$tip = this.$el.find('.tooltip-change');

      // // SEO Elements
      // this.$optional = this.$el.find("#optional");
      // this.$accordion = this.$el.find("#accordion");
      // this.$metaTitle = this.$el.find("#f-meta-title");
      // this.$metaKeywords = this.$el.find("#f-meta-keywords");
      // this.$metaDesc = this.$el.find("#f-meta-desc");
      // this.$metaTags = this.$el.find("#f-meta-tags");
    },


    handleImageUpload: function(e) {
      var self = this;
      // GlobalEvents.trigger('form:image-upload', {
      //   cb: function(url) {
      //     self.$tileImage.prop('src', url);
      //   },

      //   active: self.$tileImage.prop('src'),

      //   name: 'Wedding Galleries'
      // });
    },


    addSection: function(section) {
      var newSectionView = new SectionView({
        model: section,
        collection: this.sectionCollection,
        parent: this
      });

      this.$sectionList.append(newSectionView.render().el);
    },

    addAllSections: function() {
      this.$sectionList.empty();
      this.sectionCollection.each(this.addSection, this);
    },

    handleEdit: function(model) {
     
     CreateEditSectionView.model = model;

      this.$modal.empty();
      this.$modal.append(CreateEditSectionView.render().el);
      this.$modal.dialog('open');

    },

    handleAddSection: function() {
      var newModel = new SectionModel();
      this.handleEdit(newModel);
    },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        GalleryCollection.remove.bind(GalleryCollection, this.model)
      );
      this.parent.showHome();
    },

    handleSave: function() {


      if (this.$createEditForm.valid()) {
          

            this.model.set({
              name: this.$name.val().trim(),
              galleryStatus: this.$galleryStatus.is(':checked')
            });

        // allows appending of new items to homeview
        if (!GalleryCollection.get(this.model)) {
          this.model.set('id', Date.now()); // fake value
          GalleryCollection.add(this.model);
        }

      //   // asynchronously show home after save
       this.parent.showHome();
       
      GlobalEvents.trigger('form:save', this.$tip);
       
         

        
      } else {
        GlobalEvents.trigger('form:invalid', this.$tip);
      }
    },

    handleCancel: function() {
      GlobalEvents.trigger('form:cancel', function() {
        this.parent.showHome();
      }.bind(this));
    },

    handlePrintModal: function() {
      var self = this;

      if(this.sectionCollection.length > 49) {

        this.$alertPanel.removeClass('hidden').show();
        setTimeout(function() {
          self.$alertPanel.fadeOut('500');
        }, 5000);
        


      } else {
        this.showModal(CreateEditSectionView);
      }
    },

    setModal: function() {

      this.$el.find('#print-modal').dialog({
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
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    helperFixRowWidth: function(e, tr) {
      var $originals = tr.children(),
        $helper = tr.clone();
      $helper.children().each(function(index) {
        $(this).width($originals.eq(index).width());
      });

      return $helper;
    },

     handleSort: function(e) {
      var self=this;
      var targetElement = $(e.target);

      if (targetElement.hasClass('icon-sort')) {
        targetElement.switchClass('icon-sort', 'icon-sort-asc');
        self.sectionCollection.changeSort('ascending');
      } else if (targetElement.hasClass('icon-sort-asc')) {
        targetElement.switchClass('icon-sort-asc', 'icon-sort-desc');
        self.sectionCollection.changeSort('descending');
      } else if (targetElement.hasClass('icon-sort-desc')) {
        targetElement.switchClass('icon-sort-desc', 'icon-sort-asc');
        self.sectionCollection.changeSort('ascending');
      }

      self.sectionCollection.sort();
      self.sectionCollection.resequence();
      self.sectionCollection.changeSort('default');
      //   var self = this;
      // var targetElement = $(e.target),
      //   attribute = targetElement.data('attribute');

      // if (targetElement.hasClass('icon-sort-asc')) {
      //   this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
      //   this.$sortButtons.addClass('icon-sort');

      //   targetElement.addClass('icon-sort-desc');
      //   this.collection.changeSort(attribute, 'descending');
      // } else if (targetElement.hasClass('icon-sort-desc')) {
      //   this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
      //   this.$sortButtons.addClass('icon-sort');

      //   targetElement.addClass('icon-sort-asc');
      //   this.collection.changeSort(attribute, 'ascending');
      // } else {
      //   this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
      //   this.$sortButtons.addClass('icon-sort');

      //   targetElement.addClass('icon-sort-asc');
      //   this.collection.changeSort(attribute, 'ascending');
      // }

      // self.sectionCollection.sort();
      // self.sectionCollection.resequence();
      // self.sectionCollection.changeSort('default');
    },
 
    applySortable: function() {
      var self = this;

      self.$el.find('#section-list').sortable({
        helper: self.helperFixRowWidth,
        containment: 'parent',
        delay: 100,
        tolerance: 'pointer',

        start: function(e, ui) {
          ui.helper.addClass('active');
          ui.placeholder.height(ui.item.height());
        },

        update: function(e, ui) {
          self.$sectionList.children().each(function(index) {
            var id = $(this).data('id');

            self.sectionCollection.where({id:id})[0].set('sequence', index + 1);
          });

          self.sectionCollection.changeSort('sequence');
          self.sectionCollection.sort();
          self.sectionCollection.trigger('resequenced');
        }
      });
    },

    validateForm: function() {
      var self = this;

      self.$createEditForm.validate({
        rules: {
          'f-name': 'required'
        }
      });
    }

  });

  return new CreateEditView();
});