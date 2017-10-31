define([
  'backbone',
  '../templates/promotion-code-list-tpl',
  '../collections/promotion-code-collection',
  'global-events'
], function(
    Backbone,
    PromotionCodeListTpl,
    PromotionCodeCollection,
    GlobalEvents
  ) {
  var PromotionCodeListView = Backbone.View.extend({
    template: PromotionCodeListTpl,

    initialize: function(options) {
      this.parent = options.parent;

      this.setElement(this.template(this.model.toJSON()));
      this.listenTo(PromotionCodeCollection, 'remove', function(model) {
        if(this.model === model) {
          this.parent.dataTable.row(this.$el).remove().draw();
          this.remove();
        }
      });
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleEdit',
      'click .p-icon-view': 'handleEdit',
      'click .p-icon-download': 'handleDownload',
      'change input': 'triggerChange'
    },

    triggerChange: function() {
      GlobalEvents.trigger('form:editing');
    },

    handleDelete: function() {
      GlobalEvents.trigger('form:delete', function() {
        PromotionCodeCollection.remove(this.model);
      }.bind(this));
    },

    handleDownload: function() {
      window.location.assign('/mock/samplebulk.csv');
    },

    handleEdit: function() {
      this.parent.handleEdit(this.model);
    }
  });

  return PromotionCodeListView;
});