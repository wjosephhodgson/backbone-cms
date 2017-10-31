define([
  'backbone',
  '../templates/sku-entry-tpl',
  './product-image-modal-view',
  'global-events'
], function(
  Backbone, 
  SkuEntryTpl, 
  ProductImageModalView,
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
      
      var 
        self = this,
        index = self.collection.indexOf(self.model);
      viewModel = this.model.toJSON();
      if( index == 0 ){
        viewModel.showDelete = false;
      } else {
        viewModel.showDelete = true;
      }

      this.visibleModel = this.model;
      this.renderVisible(this.model);

      viewModel.canDelete = this.collection.length > 1;
      this.browseOnly && (viewModel.type2 = 'Browse Only');

      return this;
    },

    renderVisible: function(model) {
      this.visibleModel = model;

      this.$el.html(this.template(viewModel));
      this.delegateEvents();
      this.cacheElem();
      this.setModal();

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

      if (self.collection.length > 1) {

        GlobalEvents.trigger('form:delete', function() {
        self.collection.remove(self.model);
        });

      } else {
        self.parent.handlePriceAlert();
      }
    },

    handleImage: function(e) {

      var self = this;

      this.showModal(ProductImageModalView);

    }

    
  });

  return SkuEntryView;
});