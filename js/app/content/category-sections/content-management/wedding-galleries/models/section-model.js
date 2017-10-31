define([
  'backbone'
], function(Backbone) {
  var SectionModel = Backbone.Model.extend({
      // url: '/mock/user-wedding-gallery.json',

    defaults: {
      "id": null,
      "sectionName":"",
      "sectionStatus": true,
      "sectionImage":"",
      "sectionCaption": "",
      "type":"",
      "imgType":"Custom"
    }

  });

  return SectionModel;
});
