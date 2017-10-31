define([
  'backbone',
  '../templates/tier-tpl'
], function(Backbone, TierTpl) {
  var TierView = Backbone.View.extend({
    template: TierTpl,

    initialize: function(options) {
      this.collection = options.collection;

      this.listenTo(this.collection, 'remove', function(model) {
        if(this.model === model) {
          this.remove();
        }
      }.bind(this));

      this.setElement(this.template(this.model.toJSON()));
    },

    events: {
      'click .icon-trash': 'handleDelete'
    },

    handleDelete: function() {
      this.collection.remove(this.model);
    }
  });

  return TierView;
});