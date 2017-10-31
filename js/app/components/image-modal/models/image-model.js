/*
  Homepage Promotional Image
  Homepage Tile
  Collections
  About Us
  Custom HTML *
  Logo
  Products *
 */

define([
  'backbone'
], function(Backbone) {
  var ImageModel = Backbone.Model.extend({
    defaults: function() {
      return {
        title:'',
        url:'',
        type:'', // image, misc, folder
        description: '',
        altText: '',
        fileName: '',
        global: false,
        uploadDate: (new Date()).toString(),
        dimensions: 'N/A',
        active: false // make sure this doesn't save server-side
      }
    }
  });

  return ImageModel;
});