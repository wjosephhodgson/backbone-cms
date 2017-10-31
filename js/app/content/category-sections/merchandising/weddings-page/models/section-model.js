define([
  'backbone'
], function(Backbone) {
  var SectionModel = Backbone.Model.extend({
    defaults: {
      id: null,
      sectionActive: true,
      customerName: '',
      imgActive: true,
      imgUrl1:'',
      display: true,
      testimonial: ''    
    }
  });

  return SectionModel;
});
