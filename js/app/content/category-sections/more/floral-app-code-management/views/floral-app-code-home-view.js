define([
	'backbone',
	'../templates/floral-app-code-home-view-tpl',
	'../models/code-model',
  '../models/bulk-model',
  '../collections/code-collection',
  './code-view',
  './create-edit-view',
  './bulk-view',
	'global-events',
  // 'jqueryui',
  // 'jqueryval',
  'datatables'
], function(
	Backbone,
	FloralAppCodeHomeViewTpl,
	CodeModel,
  BulkModel,
  CodeCollection,
  CodeView,
  CreateEditView,
  BulkView,
	GlobalEvents
) {
  var FloralAppCodeHomeView = Backbone.View.extend({ 
    tagName: 'div',
    id: 'f-floral-app-report-home',
    template: FloralAppCodeHomeViewTpl,

    initialize: function() {
      CreateEditView.parent = this;
      BulkView.parent = this;
    },

    render: function() {
      var self = this;

     self.$el.html(self.template);
      self.delegateEvents();
      self.cacheElem();


      CodeCollection.fetchCustom().done(function() {
        self.addAllCode();
        self.applyDataTables();
        self.setModal();
        self.setBulkModal();
        self.applyToolTips();
      }.bind(this));

      return self;

    },

    cacheElem: function() {
      this.$CodeList = this.$el.find('#code-list');
      this.$CodeTable = this.$el.find('#code-table');
      this.$siteIDSearch = this.$el.find('#f-siteID-search');
      this.$floralCodeSearch = this.$el.find('#f-floralCode-search');

      this.$modal = this.$el.find("#create-edit-modal");
      this.$bulkmodal = this.$el.find("#bulk-modal");
      this.$tip = this.$el.find('.tooltip-change');


    },

    events: {
      'change #f-siteID-search': 'handleSearchCodeSearch',
      'keydown #f-floralCode-search': 'handleFloralCodeSearch',
      'click #new-btn': 'handleCreate',
      'click #bulk-btn': 'handleCreateBulk',
      'click #download-btn': 'handleDownload',
      'click #save-btn': 'handleSave'
    },

    handleSave: function() {

      // this.model.set({});

      GlobalEvents.trigger('form:save', this.$tip);
    },

    addCode: function(code) {
      var newView = new CodeView({
        model: code,
        parent: this
      });

      this.$CodeList.append(newView.render().el);
    },

    addAllCode: function() {
      this.$CodeList.empty();
      // this.trigger('reset');

      CodeCollection.each(this.addCode, this);

    },

    handleDownload: function() {
      window.location.assign('/mock/samplebulk.csv');
    },

    handleCreate: function() {
      this.handleEdit(new CodeModel());
    },

    handleEdit: function(model) {
     CreateEditView.model = model;

      this.$modal.empty();
      this.$modal.append(CreateEditView.render().el);
      this.$modal.dialog('open');
    },

    handleCreateBulk: function() {
      this.handleEditBulk(new CodeModel());
    },

    handleEditBulk: function(model) {
     BulkView.model = model;

      this.$bulkmodal.empty();
      this.$bulkmodal.append(BulkView.render().el);
      this.$bulkmodal.dialog('open');
    },

    handleCancel: function() {
      this.parent.showParentHome();
    },

    applyDataTables: function() {
      this.dataTable = this.$CodeTable.DataTable({
        autoWidth: false,
        deferRender: false,
        jQueryUI: false,
        lengthChange: false,
        ordering: false,
        processing: false,
        // searching: false,
        serverSide: false,
        stateSave: false,
        destroy: true,

        // Disable everything but paging and info
        info: true,
        paging: true,
        // scrollX: false,
        // scrollY: false,

        // What to show in info
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
    },

    handleSave: function() {
      GlobalEvents.trigger('form:save', this.$tip);
    },

    handleSearchCodeSearch: function(e) {
      this.dataTable.columns(0).search(e.target.value).draw();
    },

    handleFloralCodeSearch: function(e) {
      var self = this;

      window.setTimeout(function() {
        self.dataTable.columns(1).search(e.target.value).draw();
      }, 0);
    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    handlePrintModal: function() {
      this.showModal(CreateEditView);
    },

    setModal: function() {

      this.$modal.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        show: {
          effect: 'fade',
          speed: 200
        },
        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    showModal: function(view) {

      view.model = new CodeModel();

      this.$modal.empty();
      this.$modal.append(view.render().el);
      this.$modal.dialog('open');
    },

    closeModal: function() {
      this.$modal.dialog('close');
    },

    handleBulkModal: function() {
      this.showBulkModal(BulkView);
    },

    setBulkModal: function() {

      this.$bulkmodal.dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        show: {
          effect: 'fade',
          speed: 200
        },
        hide: {
          effect: 'fade',
          speed: 100
        }
      });
    },

    showBulkModal: function(view) {

      view.model = new BulkModel();

      this.$bulkmodal.empty();
      this.$bulkmodal.append(view.render().el);
      this.$bulkmodal.dialog('open');
    },

    closeBulkModal: function() {
      console.log("parent function");
      this.$bulkmodal.dialog('close');
    }

  });

  return new FloralAppCodeHomeView;
});

