define([
  'backbone',
  '../templates/condition-tpl',
  '../models/promotion-code-model'
], function(Backbone, ConditionTpl, PromotionCodeModel) {
  var ConditionView = Backbone.View.extend({
    template: ConditionTpl,

    initialize: function(options) {
      var self = this;
      this.parent = options.parent;
      this.childList = options.childList;
      this.setElement(this.template(this.model.toJSON()));
      options.parent.on('condChange:' + this.model.get('id'), self.handleCreate, this);
    },

    handleCreate: function() {
      var self = this;
      var newPromoCode = new PromotionCodeModel({
        number: self.model.get('number')
      });
      self.parent.handleEdit(newPromoCode, self.childList);
    }

  });

  return ConditionView;
});