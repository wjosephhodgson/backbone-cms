define([
  'backbone',
  '../models/section-model'
], function(Backbone, SectionModel) {
  var SectionCollection = Backbone.Collection.extend({
    url: '/mock/user-manage-search-terms.json',

    model: SectionModel
  });

  return SectionCollection;
});
