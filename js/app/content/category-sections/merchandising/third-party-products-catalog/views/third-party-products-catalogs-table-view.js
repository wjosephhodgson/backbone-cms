define([
	'backbone',
	'../models/third-party-product-catalog-model',
	'../collections/third-party-catalogs-collections',
	'../templates/third-party-catalogs-table-tpl',
	'global-events'
	], 
	function(
		Backbone, 
		ThirdPartyProductCatalogsModel,
		ThirdPartyCatalogsCollection,
		ThirdPartyCatalogsTableTpl, 
		GlobalEvents) {
		
		var ThirdPartyCatalogsTableView = Backbone.View.extend({

			template: ThirdPartyCatalogsTableTpl,

			render: function() {

				var self = this;

				self.setElement(self.template(self.model.toJSON()));
				self.delegateEvents();
				self.cacheElem();
				return self;
			},


			cacheElem: function() {
				this.$SubscribeStatus = this.$el.find('.subscribeActive-switch');
			}
		});

		return ThirdPartyCatalogsTableView;
	});