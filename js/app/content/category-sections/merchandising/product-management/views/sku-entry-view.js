define([
  'backbone',
  '../templates/sku-entry-tpl',
  './product-image-modal-view',
  //'./product-image-collection',  
  'global-events'
], function(
  Backbone, 
  SkuEntryTpl, 
  ProductImageModalView,
  //ProductImageCollection,  
  GlobalEvents
) {
  var SkuEntryView = Backbone.View.extend({
    tagName:'div',
    className: 'row',

    template: SkuEntryTpl,

    initialize: function(options) {
      var self = this;

      self.collection = options.collection;
      self.browseOnly = options.browseOnly;
      ProductImageModalView.parent = this;

      self.listenTo(self.collection, 'add remove', function(model) {
        if(self.model === model) {
          self.remove();
        } else {
          self.render();
        }
      });
    },

    render: function() {
      var viewModel = this.model.toJSON();
      this.visibleModel = this.model;
      this.renderVisible(this.model);

      viewModel.canDelete = this.collection.length > 1;
      this.browseOnly && (viewModel.type2 = 'Browse Only');

      return this;
    },

    renderVisible: function(model) {
      this.visibleModel = model;

      this.$el.html(this.template(model.toJSON()));
      this.delegateEvents();
      this.setModal();
      this.cacheElem();

    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .image-upload': 'handleImage'
    },

    cacheElem: function() {
      this.$previewImage = this.$el.find('.image-upload');
      this.$modal = $('#product-image-modal');
    },

    setModal: function() {
        this.$el.find('#product-image-modal').dialog({
            autoOpen: false,
            modal: true,
            draggable: false,
            show: {
                effect: 'fade',
                speed: 200
            },
            hide: {
                effect: 'fade',
                speed: 100
            }
        });
    },

    showModal: function(view) {
      view.model = this.visibleModel;

      this.$modal.empty();
      this.$modal.append(view.render().el);
      this.$modal.dialog('open');
    },

    handleDelete: function() {
      var self = this;

      GlobalEvents.trigger('form:delete', function() {
        self.collection.remove(self.model);
      });
    },

    handleImage: function(e) {
      var self = this;

      this.showModal(ProductImageModalView);



      /*
      GlobalEvents.trigger('form:product-img-modal', {

        cb: function(url) {
          self.$previewImage.html('<img class="y-space-top-xs image-upload">').prop('src',url);
        },
        productname: self.model.get('name'),
        active: self.$previewImage.prop('src'),

        name: 'Products'
      });
      */
    },    
  });

  return SkuEntryView;
});