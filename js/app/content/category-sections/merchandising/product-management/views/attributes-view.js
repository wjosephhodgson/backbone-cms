define([
  'backbone',
  'components/general-product/views/general-product-view',
  'content/shared/collections/blank-collection',
  '../templates/attributes-tpl'
], function(Backbone, GeneralProductView, BlankCollection, AttributesTpl) {
  var AttributesView = Backbone.View.extend({
    tagName:'div',

    template: AttributesTpl,

    initialize: function(options) {
      this.$el.html(this.template(this.model.toJSON()));
      this.cacheElem();
      this.parent = options.parent;
      this.collection = new BlankCollection(this.model.get('flowers'));

      this.$flowerContainer.append(new GeneralProductView({
        activeTitle:'Selected Flowers',
        activeTableTitle:'Flower',
        allTitle:'Flower Search',
        allSearchPlaceholder: 'Flower Search Terms',
        activeAttribute:'active',
        nameAttribute:'name',
        async: false,
        selectAll: true,
        collection: this.collection,
        imageSearch: false,
        disabled: this.model.get('type') === 'Teleflora'
      }).render().el);

      this.listenTo(this.model, 'remove', function(model) {
        if(model === this.model) {
          this.remove();
        }
      }.bind(this));
    },

    cacheElem: function() {
      this.$flowerContainer = this.$el.find('#flower-container');
    }
  });

  return AttributesView;
});