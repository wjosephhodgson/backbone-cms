define([
  'backbone',
  '../templates/sympathy-page-home-tpl',
  '../models/sympathy-page-model',
  './section-view',
  '../models/section-model',
  '../collections/section-collection',
  'components/general-product/views/general-product-view',
  'content/shared/collections/blank-collection',
  'global-events',
  'tinymce',
  'jqueryui',
  'jqueryval'
], function(
  Backbone,
  SympathyPageTpl,
  SympathyPageModel,
  SectionView,
  SectionModel,
  SectionCollection,
  GeneralProductView,
  BlankCollection,
  GlobalEvents,
  tinymce
) {
  var SympathyPageHomeView = Backbone.View.extend({
    tagName: 'form',

    id: 'f-sympathy-page',

    template: SympathyPageTpl,

    serviceColorsCollection: null,
    serviceTypeCollection: null,
    homeColorsCollection: null,
    homeTypeCollection: null,
    sectionCollection: null,

    render: function() {
      SympathyPageModel.fetchCustom().done(function() {
        this.$el.html(this.template(SympathyPageModel.toJSON()));
        this.delegateEvents();
        this.cacheElem();
        this.applyTabs();
        this.applyAccordion();
        this.applyToolTips();
        this.applyPreviews();

        this.serviceTypeCollection = new BlankCollection(
          SympathyPageModel.get('serviceCategories')
        );

        this.serviceColorsCollection = new BlankCollection(
          SympathyPageModel.get('serviceColors')
        );

        this.homeTypeCollection = new BlankCollection(
          SympathyPageModel.get('homeCategories')
        );

        this.homeColorsCollection = new BlankCollection(
          SympathyPageModel.get('homeColors')
        );

        this.stopListening(this.sectionCollection, 'resequenced');

        SympathyPageModel.stopListening(this.sectionCollection);

        this.sectionCollection = new SectionCollection(
          SympathyPageModel.get('sections')
        );

        SympathyPageModel.listenTo(this.sectionCollection, 'add remove change', function() {
          SympathyPageModel.set('sections', this.sectionCollection.toJSON());
        }.bind(this));

        this.listenTo(this.sectionCollection, 'resequenced', this.addAllSections);
        
        this.serviceSelect = new GeneralProductView({
          activeTitle:'Selected Categories (Types)',
          activeTableTitle:'Category',
          allTitle:'All Categories',
          allSearchPlaceholder: 'Category Search Terms',
          activeAttribute:'active',
          nameAttribute:'name',
          nofilter: false,
          images: true,
          imgGroup: 'Sympathy Types',
          imgAttribute:'img',
          nosearch: false,
          statusFilter: true,
          statusactive: false,
          typeFilter: true,
          async: false,
          collection: this.serviceTypeCollection,
          imageSearch: true,
          hideGrids: true,
          sequence: true,
          selectAll: true
        });

        this.$serviceTypeContainer.append(this.serviceSelect.render().el);

        this.homeSelect = new GeneralProductView({
          activeTitle:'Selected Categories (Types)',
          activeTableTitle:'Category',
          allTitle:'All Categories',
          allSearchPlaceholder: 'Category Search Terms',
          activeAttribute:'active',
          nameAttribute:'name',
          nofilter: false,
          images: true,
          imgGroup: 'Sympathy Types',
          imgAttribute:'img',
          nosearch: false,
          statusFilter: true,
          statusactive: false,
          typeFilter: true,
          async: false,
          collection: this.homeTypeCollection,
          imageSearch: false,
          hideGrids: true,
          sequence: true,
          selectAll: true
        });

        this.$homeTypeContainer.append(this.homeSelect.render().el);


        this.addAllSections();
        this.applySortable();
        this.validateForm();

      }.bind(this));

      return this;
    },

    events: {
      'click #add-section-btn': 'handleAddSection',
      'click #save-btn': 'handleSave',
      'click #sort-btn': 'handleSort',
      // 'click #f-image-url-1': 'handleFileUpload',
      // 'click #f-image-url-2': 'handleFileUpload'
      'click .image-upload': 'handleImageUpload'
    },

    cacheElem: function() {
      this.$accordion = this.$el.find('#accordion');
      this.$optional = this.$el.find('#optional');
      this.$serviceColorContainer = this.$el.find('#service-colors-container');
      this.$serviceTypeContainer = this.$el.find('#service-type-container');
      this.$homeColorContainer = this.$el.find('#home-colors-container');
      this.$homeTypeContainer = this.$el.find('#home-type-container');
      this.$sectionList = this.$el.find('#section-list');

      // image management
      this.$imageUrl1 = this.$el.find('#f-image-url-1');
      this.$imageUrl2 = this.$el.find('#f-image-url-2');    
      this.$image1Preview = this.$el.find('#f-image-1-preview');
      this.$image2Preview = this.$el.find('#f-image-2-preview');        
      this.$imageButtons = this.$el.find('.image-upload')

      // form stuff
      this.$createEditForm  = this.$el.find('#f-sympathy-page');
      this.$active = this.$el.find('#f-active');
      this.$pageHeaderTitle = this.$el.find('#f-pageHeaderTitle');
      this.$pageHeaderDescription = this.$el.find('#f-pageHeaderDescription');
      this.$backgroundImageUrl = this.$el.find('#f-backgroundImageUrl');
      this.$serviceDisplayActive = this.$el.find('#f-serviceDisplayActive');
      this.$serviceNameOverride = this.$el.find('#f-serviceNameOverride');
      this.$homeDisplayActive = this.$el.find('#f-homeDisplayActive');
      this.$homeNameOverride = this.$el.find('#f-homeNameOverride');
      this.$mainTitle = this.$el.find('#f-mainTitle');
      this.$metaTitle = this.$el.find('#f-meta-title');
      this.$metaKeywords = this.$el.find('#f-meta-keywords');
      this.$metaDescription = this.$el.find('#f-meta-desc');
      this.$metaTags = this.$el.find('#f-meta-tags');
      this.$tip = this.$el.find('.tooltip-change');
      this.$minError = this.$el.find('#min-error');
    },

    showMinError: function() {
      var self = this;
      GlobalEvents.trigger('form:invalid', this.$tip);
      this.$minError.fadeIn(200);
      setTimeout(function(){
        self.$minError.fadeOut(200);
      }, 15000);

    },

    minSelected: function(min, view) {
      // this function returns true if the minimum number of selected items in the feature view meets the option
      var
        self = this,
        totalActive,
        query = {};

      query[view.activeAttribute] = true;
      totalActive = view.collection.where(query).length;

      if( totalActive >= min ){
        return true;
      } else {
        return false;
      }
    },  

    handleSave: function() {
      var
        self = this;

      if( self.$serviceDisplayActive.prop('checked') ){
        if( self.minSelected(1, self.homeSelect) ) {
          // do nothing, we are good
        } else {
          self.showMinError();
          return false;
        }     
      }
      if( self.$homeDisplayActive.prop('checked') ){
        if( self.minSelected(1, self.serviceSelect) ) {
          // do nothing, we are good
        } else {
          self.showMinError();
          return false;
        }     
      }

      // if(this.$createEditForm.valid()) {
          SympathyPageModel.set({
            active: this.$active.is(':checked'),
            pageHeaderTitle: this.$pageHeaderTitle.val().trim(),
            pageHeaderDescription: this.$pageHeaderDescription.val().trim(),
            // backgroundImageUrl: this.$backgroundImageUrl.val().trim(),
            serviceDisplayActive: this.$serviceDisplayActive.is(':checked'),
            serviceNameOverride: this.$serviceNameOverride.val().trim(),
            serviceCategories: this.serviceTypeCollection.toJSON(),
            serviceColors: this.serviceColorsCollection.toJSON(),
            homeDisplayActive: this.$homeDisplayActive.is(':checked'),
            homeNameOverride: this.$homeNameOverride.val().trim(),
            homeCategories: this.homeTypeCollection.toJSON(),
            homeColors: this.homeColorsCollection.toJSON(),
            mainTitle: this.$mainTitle.val().trim(),
            metaTitle: this.$metaTitle.val().trim(),
            metaKeywords: this.$metaKeywords.val().trim(),
            metaDescription: this.$metaDescription.val().trim(),
            metaTags: this.$metaTags.val().trim(),
            imgUrl1: this.$image1Preview.attr('src'),
            imgUrl2: this.$image2Preview.attr('src')
          });

        GlobalEvents.trigger('form:save', this.$tip);
      // } else { 
      //   GlobalEvents.trigger('form:invalid', this.$tip);
      // }
    },

    applyPreviews: function() {
      this.$imageButtons.each(function(){
        
        var preview = $(this).next('img');
       
        $(this).on('mouseover',function(){
          $(preview).addClass('shown').removeClass('hidden');

        }).on('mouseleave',function(){
          $(preview).removeClass('shown').addClass('hidden');
        });

      });
      
    },

    handleImageUpload: function(e) {
     var
        self = this,
        id   = e.currentTarget.id,
        image, name;

      if(id === self.$imageUrl1[0].id) {

        image = self.$image1Preview;    

      } else if(id === self.$imageUrl2[0].id) {

        image = self.$image2Preview;

      } else {
        //do nothing
      }

      name = 'Sympathy';
      GlobalEvents.trigger('form:image-upload', {
        cb: function(url) {
          image.prop('src', url);
        },

        active: image.prop('src'),

        name: name
      });
    }, 

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

    applyTabs: function() {
      this.$el.find('#tabs').tabs();
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
        }
      });
    },

    validateForm: function() {
      var self = this;
      self.editForm = self.$el.validate({
        rules: {
          'f-meta-title': 'noCarets',
          'f-meta-keywords': 'noCarets',
          'f-meta-desc': 'noCarets'
        }
      });
    }

  });

  return new SympathyPageHomeView;
});