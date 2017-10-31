define([
  'backbone',
  'components/general-product/views/general-product-view',
  'components/featured-occasions/collections/all-occasions-collection',
  '../templates/categories-tpl'
], function(
  Backbone,
  GeneralProductView,
  AllOccasionsCollection,
  CategoriesTpl
) {
  var CategoriesView = Backbone.View.extend({
    tagName:'div',
    template: CategoriesTpl,

    initialize: function(options) {
      this.parent = options.parent;

      this.listenTo(this.model, 'remove', function() {
        this.remove();
      });
    },

    render: function() {
      var self = this;

      self.$el.html(self.template(self.model.toJSON()));
      self.cacheElem();

      AllOccasionsCollection.fetchCustom().done(function() {
        this.collection = AllOccasionsCollection.deepClone();

        this.collection.set(
          self.model.get('categories').map(function(id) {
            return {
              id: id,
              active: true
            }
          }),
          { merge: true, remove: false }
        );

        self.$categoriesContainer.html(
          new GeneralProductView({
            activeTitle:'Selected Categories',
            activeTableTitle:'Category',
            allTitle:'Category Search',
            allSearchPlaceholder: 'Category Search Terms',
            activeAttribute:'active',
            nameAttribute:'occasion',
            async: false,
            nosearch: false,
            caticons: true,
            nofilter: false,
            hoverTitle: true,
            collection: this.collection,
            hideGrids: true,
            showCategoryID: true
          }).render().el);
      }.bind(self));

      return self;
    },

    cacheElem: function() {
      this.$categoriesContainer = this.$el.find('#categories-container');
    },

    getCollection: function() {
      return this.collection;
    }
  });

  return CategoriesView;
});

