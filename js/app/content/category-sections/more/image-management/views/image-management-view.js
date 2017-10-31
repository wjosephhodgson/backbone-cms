define([
  'backbone',
  './image-management-home-view',
  '../templates/image-management-tpl',
  './image-side-menu-view',
  './edit-images-view',
  'components/image-modal/collections/image-folder-collection',
  'app-view',
  'global-events'
], function(
  Backbone,
  ImageManagementHomeView,
  ImageManagementTpl,
  ImageSideMenuView,
  EditImagesView,
  ImageFolderCollection,
  AppView,
  GlobalEvents
) {
  var ImageManagementView = Backbone.View.extend({
    tagName: 'div',

    template: ImageManagementTpl,

    id: 'image-management',

    initialize: function() {
      var self = this;

      self.$el.html(self.template());

      this.listenTo(ImageFolderCollection, 'add remove', this.render);

      GlobalEvents.on('route:image-management', function(folderPath) {
        AppView.changeContent(self);

        folderPath ? self.showCreateEdit(folderPath) : self.showHome();
      });
    },

    render: function() {
      var self = this;

      self.cacheElem();
      self.showMenu();

      return self;
    },

    cacheElem: function() {
      this.$section = this.$el.find('#section');
      this.$menu    = this.$el.find('#side-menu');
    },

    // Generic method to replace body with argument view
    replaceVisible: function(view) {
     this.$section.empty();
     this.$section.append(view.render().$el.fadeIn(200).focus());

      $(window).scrollTop(0);
    },

    unmarkAll: function() {
      this.$menu.find('.selected').removeClass('selected');
    },

    markActive: function() {
      this.unmarkAll();
      this.$menu.find('a[href*="'+Backbone.history.fragment+'"]').addClass('selected');
    },

    showHome: function() {
      this.replaceVisible(ImageManagementHomeView);
      this.unmarkAll();
    },

    showMenu: function() {
      this.$menu.append(ImageSideMenuView.render().$el.fadeIn(200));
    },

    showCreateEdit: function(folderPath) {
      var self, model;

      self = this;

      ImageFolderCollection.fetchCustom().done(function() {
        model = ImageFolderCollection.findWhere({hash:folderPath});

        if(model) {
          self.markActive();
          EditImagesView.model = model;
          self.replaceVisible(EditImagesView);
        }
      });
    }
  });

  return new ImageManagementView;
});