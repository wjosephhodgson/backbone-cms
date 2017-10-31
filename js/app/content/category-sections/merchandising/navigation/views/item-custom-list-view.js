define([
	'backbone',
	'../templates/item-custom-list-tpl',
	'./item-custom-list-child-view',
	'content/shared/collections/blank-collection',
	'global-events'
], function(
	Backbone, 
	ItemCustomListTpl,
	ItemCustomListChildView,
	BlankCollection,
	GlobalEvents
) {
	var ItemCustomListView = Backbone.View.extend({
		template: ItemCustomListTpl,
		render: function() {
			var self = this;
			//this.setElement(this.template(this.model.toJSON()));
			self.$el.html(self.template(self.model.toJSON()));
			this.cacheElem();
			this.delegateEvents();
			this.applyToolTips();
			//this.validateForm();
			this.collection = new BlankCollection(this.model.get('content'));

			this.handleShowMoreToggle();
			
			this.setCustomListCollection();
			this.addAllListItems();
			self.applySortable();

			return this;
		},

		events: {
			'click #cancel-btn':      'handleCancelBtnClick',
			'click #save-btn':        'handleSaveBtnClick',
			'click #add-new-customLink-btn': 'handleAddCustomLink',
			'change #f-showMore': 'handleShowMoreToggle'
		},

		handleShowMoreToggle: function() {
			var self = this;
			if( this.$toggle.is(':checked') ){
				self.$toggleRow.fadeIn(200)
			} else {
				self.$toggleRow.fadeOut(200)
			}
		},

		cacheElem: function() {
			this.$tip                  = this.$el.find('.tooltip-change');
			this.$list                 = this.$el.find('#custom-list-list');
			this.$toggle               = this.$el.find('#f-showMore');
			this.$toggleRow            = this.$el.find('.row-show-more');
		},

		setCustomListCollection: function() {
	        this.collection && this.stopListening(this.collection);
	        this.collection = new BlankCollection(this.model.get('content'));
		    this.listenTo(this.collection, 'add', this.addListItem);
	    },

	    handleAddCustomLink: function() {

			// Initializetion of the model values 
			this.collection.add({id: null, sequence: null, label: '', url: '', newWindow: true});


		},


		addListItem: function(model) {
			var newChildView = new ItemCustomListChildView({
				model: model,
				collection: this.collection,
				parent: this
			});

			this.$list.append(newChildView.render().el);
		},



		addAllListItems: function() {
			this.$list.empty();
			this.collection.each(this.addListItem, this);
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		helperFixRowWidth: function(e, tr) {
			var $originals = tr.children(),
				$helper = tr.clone();
			$helper.children().each(function(index) {
				$(this).width($originals.eq(index).width());
			});

			return $helper;
		},



		applySortable: function() {
			var self = this;

			self.$el.find('#custom-list-list').sortable({
				helper: self.helperFixRowWidth,
				containment: 'parent',
				delay: 100,
				tolerance: 'pointer',

				start: function(e, ui) {
					ui.helper.addClass('active');
					ui.placeholder.height(ui.item.height());
				},

				update: function(e, ui) {
					self.$sectionList.children().each(function(index) {
						var id = $(this).data('id');

						SiteNavCollection.where({id:id})[0].set('sequence', index + 1);
					});

					SiteNavCollection.changeSort('sequence');
					SiteNavCollection.sort();
					SiteNavCollection.trigger('resequenced');
					GlobalEvents.trigger('form:editing');
				}
			});
		},		

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
					title: "required"
				}
			});
		}	
	});

	return new ItemCustomListView;
});