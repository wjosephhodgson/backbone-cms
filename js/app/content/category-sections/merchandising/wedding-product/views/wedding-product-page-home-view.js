define([
	'backbone',
	'../templates/wedding-product-page-home-tpl',
	'../models/wedding-product-page-model',
	'../collections/section-collection',
	'components/general-product/views/general-product-view',
	'content/shared/collections/blank-collection',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	WeddingProductPageHomeTpl,
	WeddingProductPageHomeModel,
	WeddingProductCollection,
	GeneralProductView,
	BlankCollection,
	GlobalEvents
) {
  var WeddingProductPageHomeView = Backbone.View.extend({
  
    tagName: 'form',

    id: 'f-wedding-product-page',

    template: WeddingProductPageHomeTpl,

    serviceTypeCollection: null,

    render: function() {
      WeddingProductPageHomeModel.fetchCustom().done(function() {
        this.$el.html(this.template(WeddingProductPageHomeModel.toJSON()));
        this.delegateEvents();
        this.cacheElem();
        this.applyAccordion();
        this.applyToolTips();
        // this.validateForm();

        this.serviceTypeCollection = new BlankCollection(
          WeddingProductPageHomeModel.get('sections')
        );

        this.serviceTypeCollection.getSortedByRank =  function() {
          return this.where({
            active: true
          }).sort(function(a, b) {
            return a.get('sequence') - b.get('sequence');
          });
        };

        // this.stopListening(this.WeddingProductCollection, 'resequenced');

        // WeddingProductPageHomeModel.stopListening(this.WeddingProductCollection);

        // this.WeddingProductCollection = new WeddingProductCollection(
        //   WeddingProductPageHomeModel.get('sections')
        // );

        // WeddingProductPageHomeModel.listenTo(this.WeddingProductCollection, 'add remove change', function() {
        //   WeddingProductPageHomeModel.set('sections', this.WeddingProductCollection.toJSON());
        // }.bind(this));

        // this.listenTo(this.WeddingProductCollection, 'resequenced', this.handleSave);

        this.$serviceTypeContainer.append(new GeneralProductView({
    			activeTitle:'Selected Categories (Types)',
    			activeTableTitle:'Name',
    			allTitle:'All Categories',
    			allSearchPlaceholder: 'Category Search Terms',
    			activeAttribute:'active',
    			nameAttribute:'name',
    			nofilter: true,
    			images: true,
    			imgGroup: 'Wedding Product',
    			imgAttribute:'img',
    			nosearch: false,
    			statusFilter: false,
    			typeFilter: false,
    			async: false,
          sequence: true,
    			collection: this.serviceTypeCollection,
    			imageSearch: false,
    			hideGrids: true,
          statusactive: false,
          statusTitle: 'Status',
          // selectAll: true
          maxNumberProducts: 3
        }).render().el);

      }.bind(this));

      return this;
    },

    events: {
      'click #save-btn': 'handleSave'
    },

    cacheElem: function() {
      this.$accordion = this.$el.find('#accordion');
      this.$optional = this.$el.find('#optional');
      this.$serviceTypeContainer = this.$el.find('#service-type-container');

      this.$statusWedding = this.$el.find('#f-statusWedding');

    //   form stuff
      this.$createEditForm = this.$el.find('#f-wedding-product-page');
      this.$active = this.$el.find('#f-active');
      this.$sectionActive = this.$el.find('#f-section-active');
      this.$pageHeaderTitle = this.$el.find('#f-pageHeaderTitle');
      this.$pageHeaderDescription = this.$el.find('#f-pageHeaderDescription');
      this.$tileImage = this.$el.find('#f-tile-image');
      this.$metaTitle = this.$el.find('#f-meta-title');
      this.$metaKeywords = this.$el.find('#f-meta-keywords');
      this.$metaDescription = this.$el.find('#f-meta-desc');
      this.$metaTags = this.$el.find('#f-meta-tags');
      this.$tip = this.$el.find('.tooltip-change');
      this.$tileImage = this.$el.find('#tile-image');
      this.$sectionButton = this.$el.find('#section-button');
    },

    handleSave: function() {
		// if(this.$createEditForm.valid()) {
          WeddingProductPageHomeModel.set({
            pageHeaderTitle: this.$pageHeaderTitle.val().trim(),
            pageHeaderDescription: this.$pageHeaderDescription.val().trim(),
            metaTitle: this.$metaTitle.val().trim(),
            metaKeywords: this.$metaKeywords.val().trim(),
            metaDescription: this.$metaDescription.val().trim(),
            metaTags: this.$metaTags.val().trim(),
            // featuredProducts: this.featuredProductView.collection.toJSON() 
          });

          var self = this;

        GlobalEvents.trigger('form:save', this.$tip);
      // } else { 
      //   GlobalEvents.trigger('form:invalid');
      // }
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
    }


    // validateForm: function() {
    //   var self = this;
    //   self.editForm = self.$el.validate({
    //     rules: {
    //       'f-pageHeaderTitle': 'required',
    //       'f-pageHeaderDescription': 'required'
    //     }
    //   });
    // }

  });

  return new WeddingProductPageHomeView;
});