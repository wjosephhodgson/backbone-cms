define([
   'backbone',
   '../models/merchandising-icons-model',
   '../collections/merchandising-Icons-home-collection',
   '../templates/merchandising-icons-home-tpl',
   './merchandising-icons-homeTABLE-view',
   'global-events',
   'datatables',
   'jqueryui',
   'jqueryval'
],
	function(
		Backbone,
		MerchandisingIconsHomeModels, 
		merchandisingIconsHomeCollection, 
		MerchandisingIconsHomeTpl, 
		MerchandisingIconsHomeTableView,
		GlobalEvents){


		var MerchandisingIconsHomeView = Backbone.View.extend({

			template: MerchandisingIconsHomeTpl,



			 initialize: function() {
		      MerchandisingIconsHomeTableView.parent = this;
		    },


			render: function() {
				 var self = this;

					this.$el.html(this.template());
					self.delegateEvents();
					

				   merchandisingIconsHomeCollection.fetchCustom().done(function () {
				   	 self.cacheElem();
				   	 self.addAllMerchandisingIcons();
				   	 self.applyDataTables();
				   });

				return self;
			},



			events: {
				'click #new-icon-btn': 'handleNewIcon',
				'click #save-btn': 'handleActiveSave'
			},



			cacheElem: function() {
				
				this.$MerchandisingIconsTable = this.$el.find('#Merchandising-IconsTable');
				this.$MerchandisingIconsList = this.$el.find('#MerchandisingIcons-List');
				this.$tip               = this.$el.find('.tooltip-change');

			},




			 handleEdit: function(model) {
              this.parent.showCreateEdit(model);
            },


			handleNewIcon: function() {
				this.parent.showCreateEdit(new MerchandisingIconsHomeModels());
			},



			handleSaveEach: function(model) {
				var 
					self = this,
					model_id = model.get('id'),
					MerchandisingStatusVal = self.$el.find('input[data-id="'+ model_id + '"]'),
					elID = MerchandisingStatusVal.attr('data-id');

					console.log(elID);
					console.log(MerchandisingStatusVal);

				model.set({
					merchandisingActiveStatus: MerchandisingStatusVal.is(':checked')
				});
				

			},

			// this function performs the final save

			handleActiveSave: function() {

				var self = this;

				merchandisingIconsHomeCollection.each(self.handleSaveEach, self);

				GlobalEvents.trigger('form:save', self.$tip);

			},



			addMerchandisingIcons: function(icons) {
				var newView = new MerchandisingIconsHomeTableView({
					model: icons,
					parent: this
				});

				this.$MerchandisingIconsList.append(newView.render().el, this);

			},



			addAllMerchandisingIcons: function() {
				this.$MerchandisingIconsList.empty();

				merchandisingIconsHomeCollection.each(this.addMerchandisingIcons, this);
			},


			
			applyDataTables: function() {
			      this.dataTable = this.$MerchandisingIconsTable.DataTable({
			        autoWidth: false,
			        deferRender: false,
			        jQueryUI: false,
			        lengthChange: false,
			        ordering: false,
			        processing: false,
			        // searching: false,
			        serverSide: false,
			        stateSave: false,
			        destroy: true,

			        // Disable everything but paging and info
			        info: true,
			        pading: true,
			        // scrollX: false,
			        // scrollY: false,

			        // What to show in info
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
			 }

		});

		return new MerchandisingIconsHomeView;

	});