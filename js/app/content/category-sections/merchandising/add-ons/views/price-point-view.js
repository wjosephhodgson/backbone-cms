define([
  'backbone',
  '../templates/price-point-tpl',
  'global-events'
], function(Backbone, PricePointTpl, GlobalEvents) {
  var PricePointView = Backbone.View.extend({
    template: PricePointTpl,

    initialize: function(options) {
      this.collection = options.collection;
      var viewModel = this.model.toJSON();
      viewModel.type = options.type;
      viewModel.index = this.collection.indexOf(this.model) + 1;
      this.setElement(this.template(viewModel));

      this.listenTo(this.collection, 'remove', function(model) {
        if(model === this.model) this.remove();
      }.bind(this));
    },

    render: function() {
      this.cacheElem();
      this.delegateEvents();
      
      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'blur .f-label': 'handleBlurLabel',
      'blur .f-price': 'handleBlurPrice'
    },

    handleBlurLabel: function() {
      this.model.set('label', this.$label.val().trim());
    },

    handleBlurPrice: function() {
      this.model.set('price', this.$price.val().trim());
    },

    cacheElem: function() {
      this.$label = this.$el.find('.f-label');
      this.$price = this.$el.find('.f-price');
    },

    handleDelete: function() {
      GlobalEvents.trigger('form:delete', function() {
        this.collection.remove(this.model);
        GlobalEvents.trigger('form:editing');
      }.bind(this));
    },

    toggleActive: function() {
      GlobalEvents.trigger('form:editing');
      this.model.set('active', this.$active.is('checked'));
    }
  });

  return PricePointView;
});