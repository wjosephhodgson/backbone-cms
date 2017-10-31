define([
    'backbone',
    '../templates/source-codesReportingTab-tpl',
    'global-events'
], function(Backbone, SourceCodesReportTpl, GlobalEvents) {
     var SourceCodesReportView = Backbone.View.extend({
          template: SourceCodesReportTpl,

          initialize: function(options) {
	          	this.parent = options.parent;
	          	this.setElement(this.template(this.model.toJSON()));
          }

     });
        return SourceCodesReportView;
 });