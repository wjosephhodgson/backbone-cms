define([
  'backbone',
  '../templates/dropship-tpl'
], function(Backbone, DropshipTpl) {
  var DropshipView = Backbone.View.extend({
    template: DropshipTpl,

    initialize: function() {
      this.setElement(this.template(this.model.toJSON()));
      this.cacheElem();
    },

    events: {
      'change .f-status': 'handleActiveToggle',
      'change .f-overrideFee': 'handleInputChange'
    },

    cacheElem: function() {
      this.$status = this.$el.find('.f-status');
      this.$overrideFee = this.$el.find('.f-overrideFee');
    },

    handleActiveToggle: function(e) {
      this.model.set({
        status: this.$status.is(':checked')
      });
    },

    handleInputChange: function() {
      this.model.set({
        overrideFee: this.$overrideFee.val().trim()
      });
    }
  });

  return DropshipView;
});