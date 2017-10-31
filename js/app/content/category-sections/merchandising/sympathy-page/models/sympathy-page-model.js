define([
  'backbone'
], function(Backbone) {
  var SympathyPageModel = Backbone.Model.extend({
    url:'/mock/user-sympathy.json',

    defaults: {
      active: true,
      pageHeaderTitle: '',
      pageHeaderDescription: '',
      // backgroundImageUrl: '',
      serviceDisplayActive: true,
      serviceNameOverride: '',
      serviceCategories: [],
      serviceColors: [],
     // homeDisplayActive: true,
      homeNameOverride: '',
      homeCategories: [],
      mainTitle: '',
      sections: [],
      imgUrl1: '', // left for subcollection, bgImage for collection
      imgUrl2: '',      
      metaTitle: '',
      metaKeywords: '',
      metaDescription: '',
      metaTags: ''
    }
  });

  return new SympathyPageModel;
});