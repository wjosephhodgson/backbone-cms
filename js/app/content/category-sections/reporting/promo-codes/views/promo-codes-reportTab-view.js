define([
    'backbone',
    '../templates/promo-codesReportingTab-tpl'
    ], function(Backbone, PromoCodesReportTpl) {

     var PromoCodesReportView = Backbone.View.extend({
          template: PromoCodesReportTpl,

          initialize: function(options) {
	          	this.parent = options.parent;
	          	this.setElement(this.template(this.model.toJSON()));
          }

     });
        return PromoCodesReportView;
 });