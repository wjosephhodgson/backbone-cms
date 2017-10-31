define([
  'backbone',
  '../templates/add-ons-home-tpl',
  '../models/add-on-model',
  '../collections/add-on-collection',
  './add-on-view',
  'global-events'
], function(
  Backbone,
  AddOnsHomeTpl,
  AddOnModel,
  AddOnCollection,
  AddOnView,
  GlobalEvents
) {
  var AddOnsHomeView = Backbone.View.extend({
    tagName:'div',

    id: 'm-add-ons',

    template: AddOnsHomeTpl,

    initialize: function() {

    },

    render: function() {
      var self = this;
      AddOnCollection.fetchCustom().done(function() {
        this.$el.html(this.template());
        this.delegateEvents();
        this.cacheElem();

        this.dataTable && this.dataTable.destroy();
        this.collection = AddOnCollection.deepClone();
        this.addAllAddOns(this.collection);
        this.applyDataTables();
        self.applySortable(self.$addOnList, self.collection);
      }.bind(this));

      return this;
    },

    events: {
      'click #save-btn': 'handleSave',
      'click #add-btn': 'handleAdd'
    },

    cacheElem: function() {
      this.$addOnList = this.$el.find('#add-on-list');
      this.$addOnTable = this.$el.find('#add-on-table');
      this.$tip = this.$el.find('.tooltip-change');
    },

    handleEdit: function(id) {
      var model = id !== undefined ? AddOnCollection.get(id) : new AddOnModel();
      this.parent.showEdit(model);
    },

    applySortable: function(context, collection) {
        var self = this;

        context.sortable({
            helper: self.helperFixRowWidth,
            containment: 'parent',
            delay: 100,
            tolerance: 'pointer',

            start: function(e, ui) {
                ui.helper.addClass('active');
                ui.placeholder.height(ui.item.height());
            },

            update: function(e, ui) {
                context.children().each(function(index) {
                    var id = $(this).data('id');

                    collection.get(id).set('order', index + 1);
                });

                collection.sort();
            }
        });
    },

    handleAdd: function(e) {
      this.handleEdit();
    },

    handleSave: function(e) {
      AddOnCollection.set(this.collection.toJSON());
      GlobalEvents.trigger('form:save', this.$tip);
    },

    addAddOn: function(addon) {
      var newView = new AddOnView({
        model: addon,
        parent: this
      });

      this.$addOnList.append(newView.render().el);
    },

    addAllAddOns: function(collection) {
      this.$addOnList.empty();

      collection.each(this.addAddOn, this);
    },

    applyDataTables: function() {
      this.dataTable = this.$addOnTable.DataTable({
        autoWidth: false,
        deferRender: false,
        jQueryUI: false,
        lengthChange: false,
        ordering: false,
        processing: false,
        searching: false,
        serverSide: false,
        stateSave: false,
        bDestroy: true,
        // Disable everything but paging and info
        info: true,
        paging: false,

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

        // What order everything should be in
        dom: 'lrt<"data-tables-pagination"ip>'
      });
    }
  });

  return new AddOnsHomeView();
});