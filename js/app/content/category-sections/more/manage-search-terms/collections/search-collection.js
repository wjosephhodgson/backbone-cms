define([
  'backbone',
  '../models/search-model'
], function(Backbone, SearchModel) {
  var SearchCollection = Backbone.Collection.extend({
    url: '/mock/user-manage-search-terms.json',

    model: SearchModel
  });

  return SearchCollection;
});