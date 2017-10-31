define([
  'backbone',
  '../templates/member-view-tpl',
  '../collections/member-collection',
  'global-events'
], function(Backbone, MemberViewTpl, MemberCollection, GlobalEvents) {
  var MemberView = Backbone.View.extend({
    template: MemberViewTpl,

    initialize: function(options) {
      this.parent = options.parent;
      this.collection = options.collection;
      this.setElement(this.template(this.model.toJSON()));


    },

    render: function() {

      this.setElement(this.template(this.model.toJSON()));
      this.cacheElem();
      // this.delegateEvents();

      return this;
    },

    events: {
      // 'click .icon-trash': 'handleDelete',
      // 'click .icon-edit': 'handleEdit',
      'change input.on-off-switch': 'toggleActive'
    },

    cacheElem: function() {
      this.$status = this.$el.find('status-' + this.model.get('id'));
      this.$onOffSwitch = this.$el.find('.on-off-switch');

    },

    toggleActive: function() {
      this.model.set({
        galleryStatus: this.$onOffSwitch.is(':checked')
      });
      GlobalEvents.trigger('form:editing');
      // this.model.set('galleryStatus', this.$status.is('checked'));
      // GlobalEvents.trigger('form:save', this.$tip);
    }

     });

  return MemberView;

  });