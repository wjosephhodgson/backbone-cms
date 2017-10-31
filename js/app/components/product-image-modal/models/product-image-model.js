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
  var ProductImageModel = Backbone.Model.extend({
    defaults: {
      id: null,
      name:'',
      url:'',
      active: false,
      type:'' // image, misc, folder
    }
  });

  return ProductImageModel;
});