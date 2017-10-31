define([
    'backbone',
    '../templates/top-products-ReportingTab-tpl',
    'global-events'
], function(Backbone, TopProductsReportTpl, GlobalEvents) {

     var TopProductsReportView = Backbone.View.extend({
          template: TopProductsReportTpl,

          initialize: function(options) {
	          	this.parent = options.parent;
	          	this.setElement(this.template(this.model.toJSON()));
          }

     });
        return TopProductsReportView;
 });