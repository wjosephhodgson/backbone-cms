define([
  'backbone',
  '../models/promotion-code-model',
  '../templates/add-promo-base-tpl',
  'global-events',
  'jqueryui'
], function(
  Backbone,
  PromoCodeModel,
  AddPromoBaseTpl,
  GlobalEvents
) {
  // parent view used by all add-promo forms except the add-promo-code-view with
  // quick and bulk.  all methods listed here can be override of course, but if
  // they want to be augmented, provide an augment object (so far only render and
  // events object is supported).
  //
  // children view should provide an options object (used by template) that
  // accepts title, subtitle, description, promotionConditions and
  // promotionOffer

  var AddPromoCodeBaseView = Backbone.View.extend({
    initialize: function() {
      this.augment
        && this.augment['events']
        && (this.events = _.extend(
          this.events,
          this.augment['events']
        ));

      // set defaults
      !this.options.title && (this.options.title = '');
      !this.options.subtitle && (this.options.subtitle = '');
      !this.options.description && (this.options.description = '');
      !this.options.promotionConditions && (this.options.promotionConditions = '');
      !this.options.promotionOffer && (this.options.promotionOffer = '');
    },

    render: function() {
      this.$el.html(AddPromoBaseTpl(_.extend(
        this.options,
        this.model.toJSON()
      )));
      this.delegateEvents();
      this.applyDates();
      this.cacheElem();
      this.applyToolTips();

      // general idea is so overriden methods in child views can still call
      // its parent method first (so if showHome or applyDates or whatever
      // else needed to be added we can add a method to augment and call it
      // there or something)
      this.augment
        && this.augment['render']
        && this.augment['render'].call(this);

      return this;
    },

    events: {
      'click #cancel-btn': 'showHome',
      'click #save-btn': 'handleSave',
    },

    showHome: function() {
      this.parent.showHome();
    },

    handleSave: function() {
      this.showHome();
    },

    cacheElem: function() {
      this.$tip = this.$el.find('.tooltip-change');
      this.$stackingActive = this.$el.find('#f-stackingActive');
    },

    applyDates: function() {
      var self = this;

      self.$startDate = self.$el.find('#f-startDate');
      self.$endDate = self.$el.find('#f-endDate');

      self.$startDate.datepicker({
        onSelect: function(selected) {
          self.$endDate.datepicker('option', 'minDate', selected);
          self.$startDate.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });

      self.$endDate.datepicker({
        onSelect: function(selected) {
          self.$startDate.datepicker('option', 'maxDate', selected);
          self.$endDate.trigger('blur');
        },

        dateFormat: 'mm/dd/y'
      });
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    }
  });

  return AddPromoCodeBaseView;
});