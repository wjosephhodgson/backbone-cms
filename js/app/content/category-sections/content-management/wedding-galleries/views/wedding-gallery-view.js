define([
  'backbone',
  './wedding-gallery-home-view',
  './create-edit-view'
  // './create-edit-section-view'
], function(
  Backbone,
  WeddingGalleryHomeView,
  CreateEditView
  // CreateEditSectionView
) {
  var WeddingGalleryView = Backbone.View.extend({
    tagName: 'div',


    initialize: function() {
      // WeddingGalleryHomeView.parent = new WeddingGalleryHomeView({parent:this});

		WeddingGalleryHomeView.parent = this;
		CreateEditView.parent = this;
    // CreateEditSectionView.parent = this;
    // this.maxNumberProducts = options.maxNumberProducts || 999;
    

    },

    render: function() {
		this.replaceVisible(WeddingGalleryHomeView.render());
		// this.showHome();

      return this;
    },

    replaceVisible: function(view) {  
		this.$el.empty();
		this.$el.append(view.render().$el.fadeIn(200).focus());

    },

    showHome: function() {
      
        this.replaceVisible(WeddingGalleryHomeView);
    },

    showEdit: function(model) {
		var self = this;
  		CreateEditView.model = model;
  		self.replaceVisible(CreateEditView);
    },

    showSectionEdit: function(model) {
      var self = this;
      CreateEditSectionView.model = model;
      self.replaceVisible(CreateEditSectionView);
    }

  });

  return new WeddingGalleryView;
});