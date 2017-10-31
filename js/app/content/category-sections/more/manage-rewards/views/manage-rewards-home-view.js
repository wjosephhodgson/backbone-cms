define([
  'backbone',
  '../templates/manage-rewards-home-view-tpl',
  '../models/manage-rewards-model',
  '../models/manage-rewards-settings-model',
  '../collections/reward-collection',
  '../collections/setting-collection',
  'components/featured-occasions/collections/all-occasions-collection',
  './reward-view',
  './settings-view',
  './reward-modal-view',
  'settings',
  'global-events',
  'datatables',
  'jqueryui',
  'jqueryval'
], function(
  Backbone,
  ManageRewardTpl,
  RewardModel,
  SettingModel,
  RewardCollection,
  SettingCollection,
  AllOccasionsCollection,
  RewardView,
  SettingView,
  RewardModalView,
  Settings,
  GlobalEvents
) {
  var ManageRewardsHomeView = Backbone.View.extend({
    
    tagName: 'div',

    id: 'f-manage-rewards-page',

    template: ManageRewardTpl,

    initialize: function() {
      var self = this;

      SettingView.parent = this;

      $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
        if(settings.nTable.id !== 'reward-table') {
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


      AllOccasionsCollection.fetchCustom().done(function() {
        self.$el.html(self.template({
          baseUrl: Settings.manageRewardsBaseUrl,
          allOccasions: AllOccasionsCollection.toJSON()
        }));

        self.cacheElem();
        self.delegateEvents();
        self.applyTooltips();
        self.addSettingsContent();
        //self.validateForm();
      });

      // add all products when product collection and occasions have loaded
      $.when(RewardCollection.fetchCustom(), AllOccasionsCollection.fetchCustom()).done(function(){
        self.dataTable && self.dataTable.destroy();
        self.collection = RewardCollection.deepClone();
        self.addAllRewards(self.collection);
        self.applyDataTables(self.$rewardTable);
        self.applyTabs();

    
        self.setModal();
        // self.validate();
        // self.uiCheckBoxes();
       
      });

      return self;
    },

    events: {
      'click #save-btn': 'handleSave',
      'click #cancel-btn': 'handleCancel',
      'click #search-btn': 'handleSearch',
      'click #lastNameSearch': 'handleSearch',
      'click #emailSearch': 'handleSearch'
    },

    cacheElem: function() {
      this.$rewardList = this.$el.find('#reward-list');
      this.$rewardTable = this.$el.find('#reward-table');

      this.$SettingsContent = this.$el.find('#settings-content');

      this.$firstNameSearch = this.$el.find('#firstNameSearch');
      this.$lastNameSearch = this.$el.find('#lastNameSearch');
      this.$emailSearch = this.$el.find('#emailSearch');

      // Modal
      this.$modal = this.$el.find('#reward-modal');

      this.$tip = this.$el.find('.tooltip-change');

      // hide search
      this.$searchResults = this.$el.find('.search-results');
      this.$searchAlert = this.$el.find('#search-alert');

      this.$activeCheck = this.$el.find('#f-activateProgram');
      this.$bonusJoin = this.$el.find('#f-bonusJoin');
      this.$bonusReminders = this.$el.find('#f-bonusReminders');
      this.$bonusPromoEmail = this.$el.find('#f-bonusPromoEmail');
      this.$bonusAddOn = this.$el.find('#f-bonusAddOn');
    },

    showError: function() {
      this.$searchAlert.fadeIn(1000);
    },

    hideError: function() {
      this.$searchAlert.fadeOut(1000);
    },

    // handleSave saves attributes from settingsView.
    handleSave: function() {
       SettingView.handleSave();
    },

    cbSave: function() {
      GlobalEvents.trigger('form:save', this.$tip);
    },

    cbError: function() {
      GlobalEvents.trigger('form:invalid', this.$tip);
    },

    handleCancel: function() {

        GlobalEvents.trigger('form:reset', this.render.bind(this));

    },

    addReward: function(reward) {
      var newView = new RewardView({
        model: reward,
        parent: this
      });

      this.$rewardList.append(newView.render().el);
    },

    addAllRewards: function(collection) {
      this.$rewardList.empty();
      this.$searchResults.addClass('hidden');

      collection.each(this.addReward, this);
    },

    // Render Settings View to Settings Tab
    addSettingsContent: function(settings) {
      // var self = this;
      //   settingView = new SettingView({
      //       model: new SettingModel(),
      //       parent: this
      //   });
        SettingView.model = new SettingModel();
        SettingView.parent = this;
        this.$SettingsContent.append(SettingView.render().el);
    },

    applyDataTables: function(table) {
      this.dataTable = this.$rewardTable.DataTable({
        autoWidth: false,
        deferRender: false,
        jQueryUI: false,
        lengthChange: false,
        ordering: true,
        processing: false,
        // searching: true,
        serverSide: false,
        stateSave: false,
        bDestroy: true,
        columns: [
          {'orderable':true},
          {'orderable':true},
          {'orderable':true},
          {'orderable':true},
          {'orderable':true},
          {'orderable':true},
          {'orderable':true},
          {'orderable':false}
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
      var lastName = this.$firstNameSearch.val();
      var emailSearch = this.$emailSearch.val();

      if(firstName.length > 0 || lastName.length > 0 || emailSearch.length > 0) {

        this.$searchResults.removeClass('hidden');

        // this.dataTable.columns(0).search(this.$firstNameSearch.val())
        //   .columns(1).search(this.$lastNameSearch.val())
        //   .columns(2).search(this.$emailSearch.val())
        //   .draw();
      } else {
        self.showError();
        setTimeout(
        function() {
          self.hideError();
        }, 7000);
      }

    },

    setModal: function() {

        this.$modal.dialog({
          autoOpen: false,
          modal: true,
          draggable: false,
          show: {
            effect: 'fade',
            speed: 200,
          },
          hide: {
            effect: 'fade',
            speed: 100
          }
        });
    },

    showModalRewardPage: function(view, model) {
      
        view.model = model;

        this.$modal.empty();
        this.$modal.append(view.render().el);
        this.$modal.dialog('open');
    },
     
    handleRewardEdit: function(model) {
        this.showModalRewardPage(RewardModalView, model);
    },

    applyTooltips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    }




  });

  return new ManageRewardsHomeView;
});