define([
	'backbone',
	'../templates/create-edit-occasion-tpl',
	'../collections/all-occasions-collection',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(Backbone, CreateEditOccasionTpl, AllOccasionsCollection, GlobalEvents) {
	var CreateEditOccasionView = Backbone.View.extend({
		tagName: 'div',

		template: CreateEditOccasionTpl,

		initialize: function(options) {
			var self = this;
			self.options = options;

		},

		render: function(options) {
			var self = this;
			this.collection = this.parent.occasionCollection;

			self.noText = self.options.noText || false;

			AllOccasionsCollection.fetchCustom().done(function() {
				
				this.$el.html(this.template(_.extend(
					this.model.toJSON(), {
						allOccasions: AllOccasionsCollection.toJSON()
					},
					this.templateData = {
						"noText": self.options.noText
					}
				)) );

				this.delegateEvents();
				this.cacheElem();
				this.applyDates();
				this.applyToolTips();
				this.validateForm();
			}.bind(this));

			return this;
		},

		cacheElem: function() {
			this.$occasion = this.$el.find('#f-occasion');
			this.$label = this.$el.find('#f-occasion-label');
			this.$text = this.$el.find('#f-occasion-text');
			this.$viewAllText = this.$el.find('#f-view-all-text');
			this.$startDate = this.$el.find('#f-start-date');
			this.$endDate = this.$el.find('#f-end-date');
			this.$createEditForm = this.$el.find('#create-edit-form');
		},

		events: {
			'click #cancel-btn': 'handleCancelClick',
			'click #save-btn': 'handleSaveClick',
		},

		handleCancelClick: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		handleSaveClick: function(e) {
			var occasionId;

			if (this.$createEditForm.valid()) {
				occasionId = this.$occasion.find('option:selected').val().trim();

				if(!this.model.get('isDefault')) {
					this.model.set({
						startDate: this.$startDate.val().trim(),
						endDate: this.$endDate.val().trim(),
					});
				}

				this.model.set({
					occasion: AllOccasionsCollection.get(occasionId).get('occasion'),
					occasionId: occasionId,
					label: this.$label.val().trim(),
					text: this.$text.val().trim(),
					viewAllText: this.$viewAllText.val().trim()
				});

				if (!this.collection.get(this.model)) {
					this.model.set('id', (new Date()).getTime()); // fake value
					this.collection.add(this.model);
				}

				GlobalEvents.trigger('form:save');

				// Return to home view
				this.parent.showHome();
			}
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
			    onSelect: function(selected) {
			        self.$endDate.datepicker('option', 'minDate', selected);
			        self.$startDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});

			self.$endDate.datepicker({
			    onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected);
			        self.$endDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		validateForm: function() {
			var self = this;

			self.$createEditForm.validate({
				rules: {
					'f-occasion': {
						required: function() {
							return !self.$occasion.find('option:selected').val().trim();
						}
					},

					'f-start-date': {
						dateCustom: true,
						required: true
					},

					'f-end-date': {
						dateCustom: true,
						required: true
					},

					'f-occasion-label': 'required',

					'f-occasion-text': 'required',

					'f-view-all-text': 'required'

				}
			});
		}
	});

	return new CreateEditOccasionView;
});