define([
    'backbone',
    '../templates/ordersandtraffic-Reporting-tpl',
    'global-events'
], function(Backbone, OrdersAndTrafficReportTpl, GlobalEvents) {

     var OrdersAndTrafficReportView = Backbone.View.extend({
          template: OrdersAndTrafficReportTpl,

          initialize: function(options) {
	          	this.parent = options.parent;
	          	this.setElement(this.template(this.model.toJSON()));
          }

     });
        return OrdersAndTrafficReportView;
 });