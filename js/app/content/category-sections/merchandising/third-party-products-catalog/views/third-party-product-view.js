define([
	'backbone',
	'../collections/third-party-catalogs-collections',
	'../models/third-party-product-catalog-model',
	'../templates/third-party-product-catalogs-tpl',
	'./third-party-products-catalogs-table-view',
	'global-events',
	'jquery',
	'jqueryui'
	], 
	function(
		Backbone,
		ThirdPartyCatalogsCollection,
		ThirdPartyProductCatalogsModel,
		ThirdPartyProductCatalogsTpl, 
		ThirdPartyCatalogsTableView,
		GlobalEvents) 
	{
		var ThirdPartyProductCatalogsView = Backbone.View.extend({

		  initialize: function(options){
		  	ThirdPartyCatalogsTableView.parent = this;
		  	this.listenTo(ThirdPartyCatalogsCollection, 'sort', this.addAllThirdPartyProductCatalogs);
		  },

		template: ThirdPartyProductCatalogsTpl,

		render: function() {

			var self = this;

				self.setElement(self.template());
				self.delegateEvents();
				self.cacheElem();
				self.applyToolTips();

			 ThirdPartyCatalogsCollection.fetchCustom().done(function() {
				self.addAllThirdPartyProductCatalogs();
		    });

			return self;
		},

		events: {
			'click #save-btn': 'handleActiveSave',
			'click .sort-btn': 'handleSort'
		},

			
			
		cacheElem: function() {
			this.$ThirdPartyProductCatalogList   = this.$el.find('#ThirdPartyProductCatalog-List');
			this.$tip 			                 = this.$el.find('.tooltip-change');
			this.$sortButtons = this.$el.find('.sort-btn');

		},

		handleSaveEach: function(model) {
			var 
				self = this,
				model_id = model.get('id'),
				SubscribeStatusVal = self.$el.find('input[data-id="'+ model_id + '"]'),
				elID = SubscribeStatusVal.attr('data-id');

			model.set({
				SubscribeStatusActive: SubscribeStatusVal.is(':checked')
			});
			

		},

		handleActiveSave: function() {

			var self = this;

			ThirdPartyCatalogsCollection.each(self.handleSaveEach, this);

			GlobalEvents.trigger('form:save', this.$tip);

		},

	    addThirdPartyProductCatalogs: function(catalogs) {

	    	var newView = new ThirdPartyCatalogsTableView({
	    		model: catalogs,
	    		parent: this
	    	});

	    	this.$ThirdPartyProductCatalogList.append(newView.render().el, this);

	    },


	    addAllThirdPartyProductCatalogs: function() {

	    	this.$ThirdPartyProductCatalogList.empty();

	    	ThirdPartyCatalogsCollection.each(this.addThirdPartyProductCatalogs, this);

	    },

	    handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				ThirdPartyCatalogsCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				ThirdPartyCatalogsCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				ThirdPartyCatalogsCollection.changeSort(attribute, 'ascending');
			}

			ThirdPartyCatalogsCollection.sort();
		},

	      applyToolTips: function() {
				this.$el.find('.icon-tool-tip').tooltip();
			}

		});
		return new ThirdPartyProductCatalogsView;
	});