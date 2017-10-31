define([
  'backbone',
  '../templates/section-view-tpl',
  'global-events'
], function(Backbone, SectionTpl, GlobalEvents) {
  var SectionView = Backbone.View.extend({
    
    template: SectionTpl,

    initialize: function(options) {
      this.collection = options.collection;
      this.parent = options.parent;

      this.listenTo(this.collection, 'remove', function(model) {
        if(this.model === model) {
          this.remove();
        }
      }.bind(this));

      // this.setElement(this.template(this.model.toJSON()));
    },

    render: function() {
      this.setElement(this.template(this.model.toJSON()));
      this.cacheElem();

      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleEdit',
      'click .icon-search': 'handleEdit',
      'change .on-off-switch' : 'handleActiveSwitch'
    },

    cacheElem: function() {
      this.$onOffSwitch = this.$el.find('.on-off-switch');
    },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        this.collection.remove.bind(this.collection, this.model)
      );
    },

    handleEdit: function() {
      this.parent.handleEdit(this.model);
    },

    handleActiveSwitch: function() {
      this.model.set({
        sectionStatus: this.$onOffSwitch.is(':checked')
      });
    }

  });

  return SectionView;
});