define([
  'backbone',
  '../templates/create-modal-tpl',
  'global-events',
  'jqueryui'
], function(Backbone, CreateModalTpl, GlobalEvents) {
  var CreateModalView = Backbone.View.extend({
    template: CreateModalTpl,

    initialize: function() {
      var self = this;

      self.initModal($('#modal-container-form'));

      self.listenTo(GlobalEvents, 'form:create', function(options) {
        self.render(options);
      });
    },

    render: function(options) {
      var template = options.template || {};

      this.cb = options.cb;

      this.$el.empty();
      this.$el.html(this.template({
        title: template.title,
        text: template.text,
        label: template.label,
        confirmBtnText: template.confirmBtnText || 'Create',
        cancelBtnText: template.cancelBtnText || 'Cancel'
      }));

      this.delegateEvents();

      this.$el.dialog('open');

      return this;
    },

    events: {
      'click #confirm': 'confirm',
      'click #cancel': 'cancel'
    },

    initModal: function(el) {
      this.$el = el.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,

        show: {
          effect: 'fade',
          sped: 100
        },

        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    confirm: function() {
      this.cb(this.$el.find('#text-input').val().trim());
      this.closeModal();
    },

    cancel: function() {
      this.closeModal();
    },

    closeModal: function() {
      this.$el.dialog('close');
    }
  });

  return new CreateModalView;
});