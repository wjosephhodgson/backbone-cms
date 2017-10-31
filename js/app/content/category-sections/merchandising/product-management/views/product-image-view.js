define([
  'backbone',
  '../templates/product-image-tpl'
], function(Backbone, ProductImageTpl) {
  var ProductImageView = Backbone.View.extend({
    tagName: 'span',

    template: ProductImageTpl,

    initialize: function(options) {
      var self = this;

      self.parent = options.parent;

      self.listenTo(self.model, 'remove', function() {
        self.remove();
      });

      self.listenTo(self.model, 'change', function(model) {
        self.render();

        if(model.get('active')) {
          self.parent.setActive(self.model);
        }
      });

      if(self.model.get('active')) {
        self.parent.setActive(self.model);
      }
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();

      return this;
    },

    events: {
      'click': 'setActive'
    },

    setActive: function() {
      this.model.set('active', true);
    }
  });

  return ProductImageView;
});