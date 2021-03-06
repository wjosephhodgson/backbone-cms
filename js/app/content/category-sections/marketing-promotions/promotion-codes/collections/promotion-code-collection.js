define([
  'backbone',
  '../models/promotion-code-model'
], function(Backbone, PromotionCodeModel) {
  var PromotionCodeCollection = Backbone.Collection.extend({
    url: '/mock/user-promotion-codes.json',

    model: PromotionCodeModel,

    // check if code exists
    hasCode: function(code) {
      return !!this.findWhere({code:code});
    },

    getSortFunction: function(attr, type) {
      if (type === 'ascending') {
        return function(a, b) {
          if (a.get('isDefault')) return -1;
          if (b.get('isDefault')) return 1;

          if (a.get(attr) < b.get(attr)) {
            return -1;
          } else {
            return 1;
          }
        }
      } else if (type === 'descending') {
        return function(a, b) {
          if (a.get('isDefault')) return -1;
          if (b.get('isDefault')) return 1;

          if (a.get(attr) > b.get(attr)) {
            return -1;
          } else {
            return 1;
          }
        }
      }
    },

    changeSort: function(attr, type) {
      this.comparator = this.getSortFunction(attr, type);
    }
        
  });

  return new PromotionCodeCollection;
});