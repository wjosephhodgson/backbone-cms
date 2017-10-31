define([
    'backbone',
    '../models/first-time-site-setup-model',
    '../templates/edit-view-tpl',
    'dynatables',
    'datatables'
], function(Backbone, FirstTimeSiteSetupModel, EditTpl) {
    var EditView = Backbone.View.extend({
        tagName: 'div',
        template: EditTpl,

        render: function() {
            var self = this;
            this.$el.html(this.template(FirstTimeSiteSetupModel.toJSON()));
            this.delegateEvents();

            setTimeout(function(){
                self.runDataTables();
                self.handleSearch();
            }, 500);


            return this;
        },

        events: {
            'click #cancel-btn':'closeModal',
            'click #save-btn':'handleSaveBtnClick',
            'click #search-btn': 'handleSearch',
            'click .odd': 'handleSave',
            'click .even': 'handleSave'

        },

        runDataTables: function() {
           var self = this;

            // set dataTable as dtable for site JSON
            dtable = $('#site-table').DataTable({
                "ajax": "/lookup/sites.json",
                "features": {
                    paginate: false,
                    sort: false,
                    perPageSelect: false
                },      
                "columns": [
                    { 'data' : 'tfid', sDefaultContent: "" },
                    { 'data' : 'name', sDefaultContent: "" },
                    { 'data' : 'url', sDefaultContent: "" },
                    { 'data' : 'vendorid', sDefaultContent: "" },
                    { 'data' : 'group', sDefaultContent: "" }
                ]
            });

        },
 
        handleSearch: function() {
            var self = this;

            // Apply the search for each field

            // Teleflora ID
            $('#f-tfid').on( 'keyup change', function(){
                dtable.column( 0 ).search( this.value ).draw();
            });

            // Site Name
            $('#f-name').on( 'keyup change', function(){
                dtable.column( 1 ).search( this.value ).draw();
            });

            // URL
            $('#f-url').on( 'keyup change', function(){
                dtable.column( 2 ).search( this.value ).draw();
            });

            // Vendor ID
            $('#f-vendorid').on( 'keyup change', function(){
                dtable.column( 3 ).search( this.value ).draw();
            });

            // Group
            $('#f-group').on( 'keyup change', function(){
                dtable.column( 4 ).search( this.value ).draw();
            });     

        },

        closeModal: function() {
            this.$el.parent().dialog('close');
        },

        handleSave: function(e) {

            var textSave = e.currentTarget.cells[1].innerText

            FirstTimeSiteSetupModel.set({
                SiteParent: textSave.trim()
            })
            this.closeModal();

        }
    });

    return new EditView;
});