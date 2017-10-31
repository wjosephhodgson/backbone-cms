define([
  'backbone',
  '../templates/modal-view-tpl',
  'global-events'
], function(Backbone, ModalViewTpl, GlobalEvents) {
  var ModalView = Backbone.View.extend({
    
    template: ModalViewTpl,


    initialize: function(options) {
      this.collection = options.collection;
      this.parent = options.parent;

     
    },

    render: function() {

      var self = this;
      
      this.setElement(this.template(this.model.toJSON()));

       self.listenTo(self.collection, 'remove', function(model) {
          if(model === self.model) {
            self.$el.fadeOut(200, function() {
              self.remove();
            });
          }

        });

      // this.setElement(this.template(this.model.toJSON()));
      // this.cacheElem();

      return this;
    },

    events: {
      'click .icon-trash': 'handleDelete',
      'click .icon-edit': 'handleEdit',
      'click .icon-search': 'handleEdit'
      // ,'change .on-off-switch' : 'handleActiveSwitch'
    },

    // cacheElem: function() {
    //   this.$onOffSwitch = this.$el.find('.on-off-switch');
    // },

    handleDelete: function() {
      GlobalEvents.trigger(
        'form:delete',
        this.collection.remove.bind(this.collection, this.model)
      );
    },

    handleEdit: function() {

       GlobalEvents.trigger('form:cancel', function() {
        this.parent.handleEdit(this.model.get('id'));
      }.bind(this));
      // this.parent.handleEdit(this.model);
    },

    // handleActiveSwitch: function() {
    //   this.model.set({
    //     sectionStatus: this.$onOffSwitch.is(':checked')
    //   });
    // }

  });

  return ModalView;
});