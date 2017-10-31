define([
	'backbone',
	'../templates/floral-app-report-home-view-tpl',
	'../models/floral-model',
  '../collections/floral-collection',
	'global-events',
  'jqueryui',
  'jqueryval'
], function(
	Backbone,
	FloralAppReportHomeViewTpl,
	FloralModel,
  FloralCollection,
	GlobalEvents
) {
  var FloralAppReportHomeView = Backbone.View.extend({ 
    tagName: 'div',
    id: 'f-floral-app-report-home',
    template: FloralAppReportHomeViewTpl,

    render: function() {
      var self = this;

      FloralModel.fetchCustom().done(function() {
        self.$el.html(self.template(FloralModel.toJSON()));
        self.delegateEvents();
        self.cacheElem();
        self.applyTabs();
        self.applyDates();
        self.applyUserDates();
        self.applyToolTips();
        self.valUserForm();
        self.valStatForm();
      }.bind(this));

      return this;
    },

    cacheElem: function() {
      this.$statisticsDateForm = this.$el.find('#f-statistic-dates')
      this.$userDateForm = this.$el.find('#f-user-dates')
      this.$statsStartDate = this.$el.find('#f-statsStartDate');
      this.$statsEndDate = this.$el.find('#f-statsEndDate');
      this.$userStartDate = this.$el.find('#f-userStartDate');
      this.$userEndDate = this.$el.find('#f-userEndDate');
      this.$sortType = this.$el.find('#f-sortType');

      this.$reportAll = this.$el.find('#report-all');
      this.$reportDay = this.$el.find('#report-day');
      this.$reportWeek = this.$el.find('#report-week');
      this.$reportMonth = this.$el.find('#report-month');
      this.$reportYear = this.$el.find('#report-year');      

      this.$userReport = this.$el.find('#user-report');

      this.$Day = this.$el.find('#Day');
      this.$Week = this.$el.find('#Week');
      this.$Month = this.$el.find('#Month');
      this.$Year = this.$el.find('#Year');
      this.$All = this.$el.find('#All');

      this.$tip = this.$el.find('.tooltip-change');
    },

    events: {
      'click #search-stat-btn':'reportStatChange',
      'click #search-user-btn':'reportUserChange',
      'click #save-btn': 'handleSave'
    },

    reportStatChange: function() {
      var self = this;

        self.$reportAll.css({"display":"none"});
        self.$reportDay.css({"display":"none"});
        self.$reportWeek.css({"display":"none"});
        self.$reportMonth.css({"display":"none"});  
        self.$reportYear.css({"display":"none"});      

      if(self.$statisticsDateForm.valid()) {
        if(self.$Day.is('option:selected')) {
        self.$reportDay.css({"display":"block"});
        } else if (self.$Week.is('option:selected')) {
        self.$reportWeek.css({"display":"block"});
        } else if (self.$Month.is('option:selected')){
        self.$reportMonth.css({"display":"block"});
        } else if (self.$Year.is('option:selected')) {
        self.$reportYear.css({"display":"block"});
        } else if (self.$All.is('option:selected')) {
        self.$reportAll.css({"display":"block"});
        } else {}
      }
    },

    reportUserChange: function() {
      var self = this;
      self.$userReport.css({"display":"none"});

      if(self.$userDateForm.valid()) {
        self.$userReport.css({"display":"block"});
      }

    },

    handleSave: function() {
      GlobalEvents.trigger('form:save', this.$tip);
    },

    applyTabs: function() {
      this.$el.find('#tabs').tabs();
    },

    applyDates: function() {
      var self = this;

      self.$statsStartDate.datepicker({
        
        onSelect: function(selected) {
          self.$statsEndDate.datepicker('option', 'minDate', selected);
          self.$statsStartDate.trigger('blur');
        },
          dateFormat: 'mm/dd/y'
      });

      self.$statsEndDate.datepicker({
        onSelect: function(selected) {
          self.$statsStartDate.datepicker('option', 'maxDate', selected);
          self.$statsEndDate.trigger('blur');
        },
          dateFormat: 'mm/dd/y'
      });
    },
       

    applyUserDates: function() {
      var self=this;

        self.$userStartDate.datepicker({
            
          onSelect: function(selected) {
            self.$userEndDate.datepicker('option', 'minDate', selected);
            self.$userStartDate.trigger('blur');
          },
       
          dateFormat: 'mm/dd/y'

        });

        self.$userEndDate.datepicker({
                
          onSelect: function(selected) {
            self.$userStartDate.datepicker('option', 'maxDate', selected);
            self.$userEndDate.trigger('blur');
          },
        
          dateFormat: 'mm/dd/y'

        });

    },

    applyToolTips: function() {
      this.$el.find('.icon-tool-tip').tooltip();
    },

    valStatForm: function() {
      var self = this;

      self.$statisticsDateForm.validate({
        rules: {

          'f-statsStartDate':  {
            required: true
          },

          'f-statsEndDate': {
            required: true
          }

        }
      });
    },

    valUserForm: function() {
      var self = this;

      self.$userDateForm.validate({
        rules: {

          'f-userStartDate':  {
            required: true
          },

          'f-userEndDate': {
            required: true
          }

        }
      });
    }

  });

  return new FloralAppReportHomeView;
});

