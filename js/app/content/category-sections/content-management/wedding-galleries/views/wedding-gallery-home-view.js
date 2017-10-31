define([
	'backbone',
	'../templates/wedding-gallery-home-tpl',
  '../models/gallery-model',
  '../collections/gallery-collection',
  './gallery-view',
	'global-events'
], function(
	Backbone,
	GalleryHomeTpl,
  GalleryModel,
  GalleryCollection,
  GalleryView,
	GlobalEvents
) {
  var WeddingGalleryHomeView = Backbone.View.extend({ 
    tagName: 'div',
    id: 'f-wedding-gallery-page',
    template: GalleryHomeTpl,

    initialize: function() {

    },

    render: function() {
      var self = this;

      GalleryCollection.fetchCustom().done(function() {
        self.$el.html(self.template(GalleryCollection.toJSON()));
        this.delegateEvents();
        this.cacheElem();

        this.dataTable && this.dataTable.destroy();
        self.collection = GalleryCollection.deepClone();
        this.addAllGalleries(this.collection);
        this.applyDataTables();
        this.applyAccordion();
        this.applyToolTips();

        this.listenTo(GalleryCollection, 'sort', this.addAllGalleries);

      }.bind(this));
        
      return this;
    },

    events: {
      'click #save-btn':'handleSave',
      'click #add-section-btn': 'handleAdd',
      'click .sort-btn': 'handleSort',
      'change input': 'triggerChange'
    },

    triggerChange: function() {
      GlobalEvents.trigger('form:editing');
    },

    cacheElem: function() {
      this.$galleryList = this.$el.find('#section-list');
      this.$galleryTable = this.$el.find('#section-table');
      this.$sortButtons = this.$el.find('.sort-btn');
      
      this.$enableGallery = this.$el.find('#f-enableGallery');
      this.$status = this.$el.find('#status');
       // SEO Elements
      this.$optional = this.$el.find("#optional");
      this.$accordion = this.$el.find("#accordion");

      this.$metaTitle = this.$el.find("#f-meta-title");
      this.$metaKeywords = this.$el.find("#f-meta-keywords");
      this.$metaDesc = this.$el.find("#f-meta-desc");
      this.$metaTags = this.$el.find("#f-meta-tags");

      this.$tip = this.$el.find('.tooltip-change');
    },

    handleEdit: function(id) {
      var model = id !== undefined ? GalleryCollection.get(id) : new GalleryModel();
      this.parent.showEdit(model);
    },

    handleAdd: function(e) {
      this.handleEdit();
    },

    handleSave: function() {
      // if(this.$createEditForm.valid()) {

     // GalleryModel.set({
        // metaTitle: this.$metaTitle.val().trim(),
        // metaKeywords: this.$metaKeywords.val().trim(),
        // metaDescription:  this.$metaDesc.val().trim(),
        // metaTags: this.$metaTags.val().trim(),
        // enableGallery: this.$enableGallery.is('checked')
      // });


      GlobalEvents.trigger('form:save', this.$tip);
      // } else { 
      //   GlobalEvents.trigger('form:invalid', this.$tip);
      // }
    },

    addGallery: function(addon) {
      var newView = new GalleryView({
        model: addon,
        parent: this
      });

      this.$galleryList.append(newView.render().el);
    },

    addAllGalleries: function(collection) {
      this.$galleryList.empty();

     collection.each(this.addGallery, this);
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

    handleSort: function(e) {
      var targetElement = $(e.target),
        attribute = targetElement.data('attribute');

      if (targetElement.hasClass('icon-sort-asc')) {
        this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
        this.$sortButtons.addClass('icon-sort');

        targetElement.addClass('icon-sort-desc');
        GalleryCollection.changeSort(attribute, 'descending');
      } else if (targetElement.hasClass('icon-sort-desc')) {
        this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
        this.$sortButtons.addClass('icon-sort');

        targetElement.addClass('icon-sort-asc');
        GalleryCollection.changeSort(attribute, 'ascending');
      } else {
        this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
        this.$sortButtons.addClass('icon-sort');

        targetElement.addClass('icon-sort-asc');
        GalleryCollection.changeSort(attribute, 'ascending');
      }

      GalleryCollection.sort();
    },

    applyDataTables: function() {
      this.dataTable = this.$galleryTable.DataTable({
        autoWidth: false,
        deferRender: false,
        jQueryUI: false,
        lengthChange: false,
        ordering: false,
        processing: false,
        searching: false,
        serverSide: false,
        stateSave: false,
        bDestroy: true,

        // Disable everything but paging and info
        info: true,
        paging: true,

        infoCallback: function(settings, start, end, max, total, pre) {
          return start + " - " + end + " of " + total;
        },

        pagingType: "simple",
        "language": {
          "paginate": {
            "previous": " ",
            "next": " "
          }
        },

        // What order everything should be in
        dom: 'lrt<"data-tables-pagination"ip>'
      });

    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    }

  });

  return new WeddingGalleryHomeView();
});