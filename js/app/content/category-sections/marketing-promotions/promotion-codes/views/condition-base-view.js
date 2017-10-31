define([
  'backbone',
  '../templates/condition-base-tpl',
  '../collections/condition-collection',
  './condition-view',
  'global-events'
], function(
  Backbone,
  ConditionBaseTpl,
  ConditionCollection,
  ConditionView,
  GlobalEvents
) {
  var ConditionBaseView = Backbone.View.extend({
    template: ConditionBaseTpl,

    render: function() {
      this.$el.html(this.template(this.templateOptions));
      this.delegateEvents();
      this.cacheElem();

      ConditionCollection.fetchCustom().done(function() {
        // condition list
        this.addAllConditions(
          ConditionCollection.getByCategory(this.category)
        );
      }.bind(this));

      return this;
    },

    cacheElem: function() {
      this.$conditionsList = this.$el.find('#f-promo-condition');
      this.$type3 = this.$el.find('#type-3');
    },

    events: {
      'click #cancel-btn': 'showAdd',
      'change #f-promo-condition': 'changeParentCondition'
    },

    // return to add view
    showAdd: function() {
      this.parent.showAdd();
    },

    showHome: function() {
      this.parent.showHome();
    },

    changeParentCondition: function(e){
      GlobalEvents.trigger('form:finished');
      var condVal = this.$conditionsList.find(':selected').data('id');
      e.cVal = condVal;
      this.trigger('condChange:' + e.cVal, e);
    },

    addCondition: function(condition) {
      var 
        self = this,
        newView = new ConditionView({
        model: condition,
        parent: self,
        childList: self.$type3
      });
      
      this.$conditionsList.append(newView.render().el);
    },

    addAllConditions: function(arr) {
      this.$conditionsList.empty();
      this.$conditionsList.prepend('<option selected="" disabled="" hidden="" value=""></option>');
      arr.forEach(this.addCondition, this);
    }
  });

  return ConditionBaseView;
});