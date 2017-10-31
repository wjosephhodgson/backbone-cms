define([
  'backbone',
  '../templates/promotion-codes-home-tpl',
  '../models/promotion-code-model',
  '../collections/promotion-code-collection',
  './promotion-code-list-view',
  'global-events',
  'datatables'
], function(
  Backbone,
  PromotionCodesHomeTpl,
  PromotionCodeModel,
  PromotionCodeCollection,
  PromotionCodeListView,
  GlobalEvents
) {
  var PromotionCodesHomeView = Backbone.View.extend({
    tagName: 'div',

    id:'p-promotion-codes-home',

    template: PromotionCodesHomeTpl,

    render: function() {
      this.$el.html(this.template());
      this.delegateEvents();
      this.cacheElem();

      PromotionCodeCollection.fetchCustom().done(function() {
        this.addAllPromotionCodes(PromotionCodeCollection);
        this.applyDataTables();
        this.applyToolTips();
      }.bind(this));

      this.listenTo(PromotionCodeCollection, 'sort', this.addAllPromotionCodes);

      return this;
    },

    cacheElem: function() {
      this.$promotionCodesTable = this.$el.find('#promotion-codes-table');
      this.$promotionCodesList = this.$el.find('#promotion-codes-list');
      this.$search = this.$el.find('#f-search-promotion-code');
      this.$sortButtons = this.$el.find('.sort-btn');
      this.$tip = this.$el.find('.tooltip-change');
    },

    events: {
      'keydown #f-search-promotion-code': 'handlePromotionCodeSearch',
      'click #add-btn': 'addNewPromoCode',
      'click .sort-btn': 'handleSort',
      'click #quick-btn': 'addQuickCode',
      'click #save-btn': 'handleSave'
    },

    handleSave: function() {
      GlobalEvents.trigger('form:save', this.$tip);
    },

    addNewPromoCode: function() {
      this.parent.showAdd();
    },

    addQuickCode: function() {
      this.parent.showQuick();
    },

    addPromotionCode: function(model) {
      var newView = new PromotionCodeListView({
        model: model,
        parent: this
      });

      this.$promotionCodesList.append(newView.render().el);
    },

    handleEdit: function(model) {
      this.parent.handleEdit(model);
    },

    addAllPromotionCodes: function(collection) {
      this.$promotionCodesList.empty();

      collection.each(this.addPromotionCode, this);
    },

    applyDataTables: function() {
      this.dataTable = this.$promotionCodesTable.DataTable({
        autoWidth: false,
        deferRender: false,
        jQueryUI: false,
        lengthChange: false,
        ordering: false,
        processing: false,
        searching: true,
        serverSide: false,
        stateSave: false,
        destroy: true,
        info: true,
        pading: true,

        infoCallback: function(settings, start, end, max, total, pre) {
          return start + " - " + end + " of " + total;
        },

        pagingType: "simple",
        "language": {
          "paginate": {
            "previous": " ",
            "next": " "
          }
        },

        dom: 'lrt<"data-tables-pagination"ip>'
      });
    },

    handleSort: function(e) {
      var targetElement = $(e.target),
        attribute = targetElement.data('attribute');

      if (targetElement.hasClass('icon-sort-asc')) {
        this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
        this.$sortButtons.addClass('icon-sort');

        targetElement.addClass('icon-sort-desc');
        PromotionCodeCollection.changeSort(attribute, 'descending');
      } else if (targetElement.hasClass('icon-sort-desc')) {
        this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
        this.$sortButtons.addClass('icon-sort');

        targetElement.addClass('icon-sort-asc');
        PromotionCodeCollection.changeSort(attribute, 'ascending');
      } else {
        this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
        this.$sortButtons.addClass('icon-sort');

        targetElement.addClass('icon-sort-asc');
        PromotionCodeCollection.changeSort(attribute, 'ascending');
      }

      PromotionCodeCollection.sort();
    },

    handlePromotionCodeSearch: function() {
      var self = this;

      // timeout to capture the actual search value
      window.setTimeout(function() {
        self.dataTable.columns(0).search(self.$search.val().trim()).draw();
      }, 0);
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    }

  });

  return new PromotionCodesHomeView;
});