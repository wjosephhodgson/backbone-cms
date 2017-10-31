define([
    'backbone',
    '../templates/paid-membership-home-view-tpl',
    '../models/setting-model',
    '../models/member-model',
    '../collections/member-collection',
    './member-view',
    'global-events',
    'datatables',
    'tinymce',
    'jqueryui',
    'jqueryval'
], function(
    Backbone,
    PaidMembershipTpl,
    SettingsModel,
    MemberModel,
    MemberCollection,
    MemberView,
    GlobalEvents,
    tinymce
) {
    var PaidMembershipHomeView = Backbone.View.extend({
    
        tagName: 'form',

        id: 'f-paid-memberships-page',

        template: PaidMembershipTpl,

        initialize: function() {
            var self = this;

            // SettingView.parent = this;

            $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
                if(settings.nTable.id !== 'member-table') {
                    return true;
                } else {
                    if(!self.collection) return true;
                    var data = self.collection.toJSON()[dataIndex];
                    return data
                }
            });

        },

        render: function() {
            var self = this;


            SettingsModel.fetchCustom().done(function(){
                self.$el.html(self.template(SettingsModel.toJSON()));
                self.delegateEvents();
                self.cacheElem();               
                self.applyTabs();
                self.dataTable && self.dataTable.destroy();

                MemberCollection.fetchCustom().done(function() {
                    self.mcollection = MemberCollection.deepClone();
                    self.addAllMembers(self.mcollection);
                    self.applyDataTables();
                })
                self.validate();
                self.applyToolTips();
            }.bind(this));

            return self;
        },

        events: {
            'click #save-btn': 'handleSave',
            'click #cancel-btn': 'handleCancel',
            'click #search-btn': 'handleSearch'
        },

        cacheElem: function() {
            this.$memberList = this.$el.find('#member-list');
            this.$memberTable = this.$el.find('#member-table');

            this.$firstNameSearch = this.$el.find('#firstNameSearch');
            this.$lastNameSearch = this.$el.find('#lastNameSearch');
            this.$emailSearch = this.$el.find('#emailSearch');

            this.$SettingsContent = this.$el.find('#settings-content');

            this.$tip = this.$el.find('.tooltip-change');

            // hide search
            this.$searchResults = this.$el.find('.search-results');
            this.$searchAlert = this.$el.find('#search-alert');

        },

        showError: function() {
            this.$searchAlert.fadeIn(1000);
        },

        hideError: function() {
            this.$searchAlert.fadeOut(1000);
        },

        // handleSave saves attributes from settingsView.
        handleSave: function() {
            if(this.$el.valid()){
                GlobalEvents.trigger('form:save', this.$tip);
            } else {
                GlobalEvents.trigger('form:invalid', this.$tip);
            }
        },

        handleCancel: function() {
            GlobalEvents.trigger('form:reset', this.render.bind(this));
        },

        addMember: function(member) {
            var newView = new MemberView({
                model: member,
                parent: this
            });

            this.$memberList.append(newView.render().el);
        },

        addAllMembers: function(collection) {
            var self = this;
            this.$memberList.empty();
            this.$searchResults.addClass('hidden');

            self.mcollection.each(this.addMember, this);
        },

        // Render Settings View to Settings Tab
        addSettingsContent: function(settings) {
            var self = this,
            settingView = new SettingView({
                model: new SettingModel(),
                collection: settings,
                parent: this,
                template: SettingsTpl
            });

            this.$SettingsContent.append(settingView.render().el);
        },

        applyDataTables: function() {
            this.dataTable = this.$memberTable.DataTable({
                autoWidth: false,
                deferRender: false,
                jQueryUI: false,
                lengthChange: false,
                ordering: true,
                processing: false,
                searching: true,
                serverSide: false,
                stateSave: false,
                bDestroy: true,
                columns: [
                    {'orderable':true},
                    {'orderable':true},
                    {'orderable':true},
                    {'orderable':true}
                ],

                order: [],

                "columnDefs": [
                    { "orderable": false, "targets": 0 }
                ],

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

        applyTabs: function() {
            this.$el.find('#tabs').tabs();
        },


        handleSearch: function() {

            var self = this; 

            this.$searchResults.addClass('hidden');

            var firstName = this.$firstNameSearch.val();
            var lastName = this.$lastNameSearch.val();
            var emailSearch = this.$emailSearch.val();

            if(firstName.length > 0 || lastName.length > 0 || emailSearch.length > 0) {

                this.$searchResults.removeClass('hidden');

            } else {
                self.showError();
                setTimeout(
                function() {
                    self.hideError();
                }, 7000);
            }

        },

        applyToolTips: function() {
          this.$el.find('.icon-tool-tip').tooltip();
        },

        validate: function() {
            this.$el.validate({
                rules: {
                    'f-programName': {
                        required: true
                    },

                    'section-descriptionThree': {                        
                        required: true
                    },

                    'section-descriptionFour': {                        
                        required: true
                    }
                }
            });
        }

  });

  return new PaidMembershipHomeView;
});