define([
  'backbone'
], function(Backbone) {
  var AddonsModel = Backbone.Model.extend({
    defaults: {
      "id":null,
      "name":"",
      "imgUrl":"",
      "active": false
    }
  });

  return AddonsModel;
});