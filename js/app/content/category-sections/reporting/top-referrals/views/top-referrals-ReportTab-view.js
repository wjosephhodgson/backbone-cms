define([
    'backbone',
    '../templates/top-referrals-ReportingTab-tpl',
    'global-events'
], function(Backbone, TopReferralsReportTpl, GlobalEvents) {

     var TopReferralsReportView = Backbone.View.extend({
          template: TopReferralsReportTpl,

          initialize: function(options) {
	          	this.parent = options.parent;
	          	this.setElement(this.template(this.model.toJSON()));
          }

     });
        return TopReferralsReportView;
 });