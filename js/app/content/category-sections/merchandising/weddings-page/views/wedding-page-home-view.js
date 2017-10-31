define([
  'backbone',
  '../templates/wedding-page-home-tpl',
  '../models/wedding-model',
  '../models/section-model',
  '../collections/section-collection',
  './section-view',
  'global-events',
  'tinymce',
  'jqueryui',
  'jqueryval'
], function(
  Backbone,
  WeddingPageTpl,
  WeddingPageModel,
  SectionModel,
  SectionCollection,
  SectionView,
  GlobalEvents,
  tinymce
) {
  var WeddingPageHomeView = Backbone.View.extend({
    

    template: WeddingPageTpl,

    sectionCollection: null,

    render: function() {


      WeddingPageModel.fetchCustom().done(function() {
        this.$el.html(this.template(WeddingPageModel.toJSON()));
        this.delegateEvents();
        this.cacheElem();
        this.applyAccordion();
        this.applyToolTips();

        this.stopListening(this.sectionCollection, 'resequenced');

        WeddingPageModel.stopListening(this.sectionCollection);

        // get function retrieves the sections object in the json file (user-wedding.json).
        this.sectionCollection = new SectionCollection(
        WeddingPageModel.get('sections')
        );

        WeddingPageModel.listenTo(this.sectionCollection, 'add remove change', function() {
        WeddingPageModel.set('sections', this.sectionCollection.toJSON());
        }.bind(this));

        this.listenTo(this.sectionCollection, 'resequenced', this.addAllSections);
          //Start of get function for nested attribute 'section' in json file
          //because user-wedding.json inserted the 'section' data into a nested format
          //a fetchCustom would not permit. Individual get functions were necessary.

        this.addAllSections();
        this.applySortable();
        this.handleToggleConsultation();


         this.validateForm();
       
     
      }.bind(this));


      return this;
    },

    events: {
        'click #add-section-btn': 'handleAddSection',
        'click #save-btn': 'handleSave',
        'click .image-upload': 'handleTileImageUpload',
        'change #f-enableConsultation': 'handleToggleConsultation'
    },

    cacheElem: function() {
      this.$accordion = this.$el.find('#accordion');
      this.$optional = this.$el.find('#optional');
      this.$sectionList = this.$el.find('#section-list');
      this.$consultationSection = this.$el.find('.consultationSection');
      

    //   form stuff
      this.$createEditForm = this.$el.find('#create-edit-f-wedding-page');
      this.$active = this.$el.find('#f-active');
      this.$socialMedia = this.$el.find('#f-socialMedia');
      this.$sectionActive = this.$el.find('#f-section-active');
      this.$pageHeaderTitle = this.$el.find('#f-pageHeaderTitle');
      this.$pageHeaderDescription = this.$el.find('#f-pageHeaderDescription');
      this.$tileImage = this.$el.find('#f-tile-image-upload')
      this.$backgroundImage = this.$el.find('#f-image-1-preview');
      this.$metaTitle = this.$el.find('#f-meta-title');
      this.$metaKeywords = this.$el.find('#f-meta-keywords');
      this.$metaDescription = this.$el.find('#f-meta-desc');
      this.$metaTags = this.$el.find('#f-meta-tags');
      this.$tip = this.$el.find('.tooltip-change');
      // this.$tileImage = this.$el.find('#tile-image');
      this.$sectionButton = this.$el.find('#section-button');
      this.$consultation = this.$el.find('#f-enableConsultation');
      this.$consultationEmail = this.$el.find('#f-consultationEmail');
    },

    handleSave: function() {
      
      if(this.$createEditForm.valid()) {
         
        WeddingPageModel.set({
          active: this.$active.is(':checked'),
          socialMedia: this.$active.is(':checked'),
          enableConsultation: this.$consultation.is(':checked'),
          consultationEmail: this.$consultationEmail.val().trim(),
          pageHeaderTitle: this.$pageHeaderTitle.val().trim(),
          pageHeaderDescription: this.$pageHeaderDescription.val().trim(),
          metaTitle: this.$metaTitle.val().trim(),
          metaKeywords: this.$metaKeywords.val().trim(),
          metaDescription: this.$metaDescription.val().trim(),
          metaTags: this.$metaTags.val().trim(),
          backgroundimage: this.$backgroundImage.attr('src')
        });


        GlobalEvents.trigger('form:save', this.$tip);
      } else { 
        GlobalEvents.trigger('form:invalid', this.$tip);
      }
    },

    handleTileImageUpload: function(e) {
      var self = this;

      GlobalEvents.trigger('form:image-upload', {
        cb: function(url) {
          self.$backgroundImage.prop('src', url);
        },

        active: self.$backgroundImage.prop('src'),

        name: 'Tile'
      });
    },

    handleToggleConsultation: function() {
      var self = this;
      if( self.$consultation.is(':checked') ) {
        this.$consultationSection.removeClass('hidden').addClass('required')
      } else {
        this.$consultationSection.addClass('hidden').removeClass('required')
      }
    },

// handleToggleConsultation: function(e) {
//       var self = this;



//       // If setting default info to active
//       if(self.$enableConsultation.is(':checked')) {
//         // Prevent animation first
//         // self.$setEndDate.prop('checked', false);

//         // Trigger form reset modal, if confirmed continue with checking and
//         // update all fields to default value
        
//           self.$consultationSection.removeClass('hidden');

//           self.$startDate.prop('disabled', false).val(self.model.get('startDate'));
//           self.$endDate.prop('disabled', false).val(self.model.get('endDate'));

//         });

//       // If setting default to inactive enable editing
//       } else {
//         this.$startDate.prop('disabled', true);
//         this.$endDate.prop('disabled', true);
//       }
//     },


//     : function() {
//       if(this.$enableConsultation.prop('checked',true)) {
//         console.log("toggle on");
//         this.$consultationSection.removeClass('hidden').show();
//       } else {
//          this.$consultationSection.hide();
//       }
//     },



    handleSort: function(e) {
      var targetElement = $(e.target);

      if (targetElement.hasClass('icon-sort')) {
        targetElement.switchClass('icon-sort', 'icon-sort-asc');
        this.sectionCollection.changeSort('ascending');
      } else if (targetElement.hasClass('icon-sort-asc')) {
        targetElement.switchClass('icon-sort-asc', 'icon-sort-desc');
        this.sectionCollection.changeSort('descending');
      } else if (targetElement.hasClass('icon-sort-desc')) {
        targetElement.switchClass('icon-sort-desc', 'icon-sort-asc');
        this.sectionCollection.changeSort('ascending');
      }

      this.sectionCollection.sort();
      this.sectionCollection.resequence();
    },

    handleAddSection: function() {
      this.handleEdit(new SectionModel());
    },

    handleEdit: function(model) {
      this.parent.showCreateEdit(model, this.sectionCollection);
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

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    applyAccordion: function() {
      var self = this;

      this.$optional.click(function() {
        var thisElem = $(this);

        self.$accordion.fadeToggle(200).toggleClass('active');
        if(thisElem.hasClass('icon-opened')) {
          thisElem.switchClass('icon-opened', 'icon-closed');
        } else {
          thisElem.switchClass('icon-closed', 'icon-opened');
        }

        return false;
      }).closest('.row').next().hide();
    },

    helperFixRowWidth: function(e, tr) {
      var $originals = tr.children(),
          $helper = tr.clone();
      $helper.children().each(function(index) {
        $(this).width($originals.eq(index).width());
      });

      return $helper;
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
          GlobalEvents.trigger('form:editing');
        },
      });
    },

    validateForm: function() {
      var self = this;
      self.validator = self.$createEditForm.validate({
        rules: {
          'f-consultationEmail': {
            required: function() {
              return self.$consultation.is(':checked')
            }

          },
          'f-meta-title': 'required',
          'f-meta-keywords': 'required',
          'f-meta-desc': 'required'
        }
      });
    }

  });

  return new WeddingPageHomeView;
});