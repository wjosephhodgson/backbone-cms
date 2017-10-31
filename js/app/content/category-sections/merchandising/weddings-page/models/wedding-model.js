define([
  'backbone'
], function(Backbone) {
  var WeddingPageModel = Backbone.Model.extend({
    url:'/mock/user-wedding.json',

    defaults: {
      active: true,
      socialMedia: true,
      enableConsultation: true,
      consultationEmail:'',
      pageHeaderTitle: '',
      pageHeaderDescription: '',
      backgroundImage: '',
      mainTitle: '',     
      metaTitle: '',
      metaKeywords: '',
      metaDescription: '',
      metaTags: ''
    }
  });

  return new WeddingPageModel;
});