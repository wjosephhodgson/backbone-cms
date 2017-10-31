define([
    'backbone',
    '../templates/modal-management-home-view-tpl',
    '../models/modal-model',
    '../collections/modal-collection',
    './create-edit-view',
    './modal-view',
    'global-events'
], function(
    Backbone,
    ModalManagementHomeViewTpl,
    ModalModel,
    ModalCollection,
    CreateEditView,
    ModalView,
    GlobalEvents
) {
    var ModalManagementHomeView = Backbone.View.extend({ 
        tagName: 'div',
        id: 'f-modal-management-page',
        template: ModalManagementHomeViewTpl,

        initialize: function() {
            CreateEditView.parent = this;
            ModalView.parent = this;
        },

        render: function() {
            var self = this;
            
            ModalCollection.fetchCustom().done(function() {
                this.$el.html(this.template);
                this.delegateEvents();
                this.cacheElem();

                this.collection = ModalCollection.deepClone();
                   
                this.dataTable && this.dataTable.destroy();
                this.addAllModals();
                this.applyDataTables();
                this.applyToolTips();
            }.bind(this))

            return this;
        },

        events: {
            'click #new-btn': 'handleAdd',
            'click #save-btn': 'handleActiveSave',
            'change #section-list': 'handleChange',
            'click .sort-btn': 'handleSort'
        },

        cacheElem: function() {
            this.$sectionList = this.$el.find('#section-list');
            this.$modalTable = this.$el.find('#modal-table');
            this.$tip = this.$el.find('.tooltip-change');
            this.$sortButtons = this.$el.find('.sort-btn');
        },


        handleSaveEach: function(model) {
                var 
                    self = this,
                    model_id = model.get('id'),
                    modalMgtHomeStatusVal = self.$el.find('input[data-id="'+ model_id + '"]'),
                    elID =  modalMgtHomeStatusVal.attr('data-id');

                model.set({
                    status:  modalMgtHomeStatusVal.is(':checked')
                });
            },

        handleActiveSave: function() {
            var self = this;
            ModalCollection.each(self.handleSaveEach, this);
            GlobalEvents.trigger('form:save', this.$tip);
        },




  
        handleChange: function() {
            GlobalEvents.trigger('form:editing'); 
        },

        // handleSave: function() {

        //     console.log(this.ModalModel);

        //     ModalCollection.set(this.ModalModel.toJSON());
        //     GlobalEvents.trigger('form:save', this.$tip);
        // },



        handleEdit: function(id) {
      		var model = id !== undefined ? ModalCollection.get(id) : new ModalModel();
      		this.parent.showCreateEdit(model);
        },

        handleAdd: function() {
      		this.handleEdit();
        },

        handleSort: function(e) {
            var targetElement = $(e.target),
                attribute = targetElement.data('attribute');

            if (targetElement.hasClass('icon-sort-asc')) {
                this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
                this.$sortButtons.addClass('icon-sort');

                targetElement.addClass('icon-sort-desc');
                ModalCollection.changeSort(attribute, 'descending');
            } else if (targetElement.hasClass('icon-sort-desc')) {
                this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
                this.$sortButtons.addClass('icon-sort');

                targetElement.addClass('icon-sort-asc');
                ModalCollection.changeSort(attribute, 'ascending');
            } else {
                this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
                this.$sortButtons.addClass('icon-sort');

                targetElement.addClass('icon-sort-asc');
                ModalCollection.changeSort(attribute, 'ascending');
            }

            ModalCollection.sort();
        },

        addModal: function(addon) {
            var newView = new ModalView({
                model: addon,
                collection: this.collection,
                parent: this
            });

            this.$sectionList.append(newView.render().el);
        },

        addAllModals: function(collection) {
            this.$sectionList.empty();

            this.collection.each(this.addModal, this);
        },

        applyDataTables: function() {
            this.dataTable = this.$modalTable.DataTable({
                autoWidth: false,
                deferRender: false,
                jQueryUI: false,
                lengthChange: false,
                ordering: true,
                processing: false,
                searching: false,
                serverSide: false,
                stateSave: false,
                bDestroy: true,

                // Disable everything but paging and info
                info: true,
                paging: true,

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

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        },

        showparenthome: function() {
            this.parent.showHome();
        }

    });

    return new ModalManagementHomeView;
});