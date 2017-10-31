define([
  'backbone'
], function(Backbone) {
  var SectionModel = Backbone.Model.extend({
    defaults: {
      id: null,
      title: '',
      display: true,
      description:''
    }
  });

  return SectionModel;
});