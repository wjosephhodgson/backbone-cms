define([
  'backbone',
  '../collections/image-collection'
], function(Backbone, ImageCollection) {
  var ImageFolderModel = Backbone.Model.extend({
    defaults: function() {
      return {
        id: null,
        name:'',
        url:'',
        hash:'',
        global: false,
        collection: new ImageCollection,
        primary: false, // custom vs primary folder
        nested: false // nested vs main folder
      };
    },

    initialize: function() {
      this.get('collection').setPath(this.get('url'));
    }
  });

  return ImageFolderModel;
});