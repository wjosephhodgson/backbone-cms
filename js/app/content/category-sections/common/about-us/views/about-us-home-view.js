define([
	'backbone',
	'../templates/about-us-home-tpl',
	'../models/about-us-model',
	'../models/section-model',
	'../collections/section-collection',
	'./section-view',
	'global-events',
	'jqueryui'
], function(
	Backbone,
	AboutUsTpl,
	AboutUsModel,
	SectionModel,
	SectionCollection,
	SectionView,
	GlobalEvents
) {
	var AboutUsView = Backbone.View.extend({
		tagName: 'form',

		id:'p-about-us',

		template: AboutUsTpl,

		initialize: function() {
			this.listenTo(SectionCollection, 'resequenced', this.addAllSections);
		},

		render: function() {
			var self = this;

			AboutUsModel.fetchCustom().done(function() {
				self.$el.html(self.template(AboutUsModel.toJSON()));
				self.delegateEvents();
				self.cacheElem();

				SectionCollection.fetchCustom().done(function() {
					SectionCollection.resequence();
					self.applySortable();
				});

				self.applyToolTips();
				self.handleDisplayedContentChange();
			});


			return this;
		},

		cacheElem: function() {
			this.$contactUsActive = this.$el.find('#f-contact-us-active');
			this.$storeHoursActive = this.$el.find('#f-store-hours-active');
			this.$storeHoursContent = this.$el.find('#f-store-hours-content');
			this.$displayedContent = this.$el.find('#f-displayed-content');
			this.$imgUploadBtn = this.$el.find('#about-img-upload-btn');

			this.$displayedContentImageBtn = this.$el.find('#displayed-content-image-btn');
			this.$sectionList = this.$el.find('#section-list');
			this.$displayedContentContainer = this.$el.find('#displayed-content-container');
			this.$mapMessage = this.$el.find('#map-message');
			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'change #f-displayed-content':'handleDisplayedContentChange',
			'click #about-img-upload-btn': 'handleFileUpload',
			'click #new-btn':'handleNewBtnClick',
			'click #sort-btn': 'handleSortBtnClick',
			'click #save-btn': 'handleSave',
			'change #f-store-hours-active': 'handleStoreHoursActiveChange'
		},

		addSection: function(section) {
			var newView = new SectionView({
				model: section,
				parent: this
			});

			this.$sectionList.append(newView.render().el);
		},

		addAllSections: function() {
			this.$sectionList.empty();

			SectionCollection.each(this.addSection, this);
		},
        
        initMap: function() {
             this.$displayedContentContainer.empty();
            
             var coordinates = new google.maps.LatLng(AboutUsModel.get('latitude'), AboutUsModel.get('longitude')),
                 options = {
                     zoom: 14,
                     center: coordinates         
                 },
                 map = new google.maps.Map(this.$displayedContentContainer[0], options),
                 marker = new google.maps.Marker({
                     position: coordinates,
                     map: map
                 });

        },
            
            
		initImage: function(imgUrl) {
			this.$displayedContentContainer.empty();

			var imgUrl = imgUrl || AboutUsModel.get('imgUrl'),
				imageElement = document.createElement('img');

			imageElement.src = imgUrl;

			this.$displayedContentContainer.append(imageElement);
		},

		handleDisplayedContentChange: function(e) {
			var value = this.$displayedContent.find('option:selected').val();

			if (value === 'Image') {
				this.$displayedContentImageBtn.fadeIn(200);
				this.$displayedContentContainer.fadeIn(200);
				this.$mapMessage.fadeOut(200);
				this.initImage();
			} else if (value === 'Map') {
				this.$displayedContentImageBtn.fadeOut(200);
				this.$displayedContentContainer.fadeIn(200);
				this.$mapMessage.fadeIn(200);
				this.initMap();
			} else {
				this.$displayedContentImageBtn.fadeOut(200);
				this.$displayedContentContainer.fadeOut(200);
				this.$mapMessage.fadeOut(200);
			}
		},

		handleFileUpload: function(e) {
			var self = this;

			GlobalEvents.trigger('form:image-upload', {
				cb: function(url) {
					self.initImage(url);
				},

				active: this.$displayedContentContainer.find('img').prop('src'),

				name: 'About Us'
			});
		},

		handleNewBtnClick: function(e) {
			this.parent.showCreateEdit(new SectionModel);
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		handleSortBtnClick: function(e) {
			var targetElement = $(e.target);

			if (targetElement.hasClass('icon-sort')) {
				targetElement.switchClass('icon-sort', 'icon-sort-asc');
				SectionCollection.changeSort('ascending');
			} else if (targetElement.hasClass('icon-sort-asc')) {
				targetElement.switchClass('icon-sort-asc', 'icon-sort-desc');
				SectionCollection.changeSort('descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				targetElement.switchClass('icon-sort-desc', 'icon-sort-asc');
				SectionCollection.changeSort('ascending');
			}

			SectionCollection.sort();
			SectionCollection.resequence();
		},

		handleStoreHoursActiveChange: function(e) {
			if($(e.target).is(':checked')) {
				this.$storeHoursContent.attr('disabled', false);
			} else {
				this.$storeHoursContent.attr('disabled', true);
			}
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

			self.$el.find('#section-list').sortable({
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

						SectionCollection.where({id:id})[0].set('sequence', index + 1);
					});

					SectionCollection.changeSort('sequence');
					SectionCollection.sort();
					SectionCollection.trigger('resequenced');
				}
			});
		},

		handleSave: function() {
			AboutUsModel.set({
				contactUsActive: this.$contactUsActive.is(':checked'),
				storeHoursActive: this.$storeHoursActive.is(':checked'),
				storeHoursContent: this.$storeHoursContent.val().trim(),
				displayedContent: this.$displayedContent.find('option:selected').val(),
			});

			if(AboutUsModel.get('displayedContent') === 'Image') {
				AboutUsModel.set({
					imgUrl: this.$displayedContentContainer.find('img').prop('src')
				});
			}

			GlobalEvents.trigger('form:save', this.$tip);	
		}
	});

	return new AboutUsView;
});