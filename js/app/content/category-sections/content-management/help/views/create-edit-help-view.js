define([
	'backbone',
	'../templates/create-edit-help-tpl',
	'../collections/company-policy-collection',
	'../collections/orders-returns-policy-collection',
	'../collections/security-privacy-policy-collection',
	'tinymce',
	'global-events',
	'jqueryui',
	'jqueryval'
], function(
	Backbone,
	CreateEditHelpTpl,
	CompanyPolicyCollection,
	OrdersReturnsPolicyCollection,
	SecurityPrivacyPolicyCollection,
	tinymce,
	GlobalEvents
) {
	var CreateEditHelpView = Backbone.View.extend({
		template: CreateEditHelpTpl,

		render: function() {
			this.setElement(this.template(this.model.toJSON()));
			this.applyToolTips();
			this.cacheElem();
			this.delegateEvents();
			this.validateForm();
			// this.valTinymce();
			this.applyTinymce();
			// this.handleTinyMceValidation();

			return this;
		},

		events: {
			'click #cancel-btn': 'handleCancelBtnClick',
			'change #f-question-section': 'handleSectionChange',
			'click #save-btn': 'handleSaveBtnClick'
		},

		cacheElem: function() {
			this.$createEditForm = this.$el.find('#create-edit-form');
			this.$question = this.$el.find('#f-question');
			this.$active = this.$el.find('#f-active');
			this.$questionSection = this.$el.find('#f-question-section');
			this.$tip = this.$el.find('.tooltip-change');
		},

		handleCancelBtnClick: function() {
			GlobalEvents.trigger('form:cancel', this.parent.showHome.bind(this.parent));
		},

		isMCEValid: function() {
			var self = this;
			if( self.$el.find('.tinymce.error').is('*') ){
				return false;
			} else {
				return true;
			}
		},

		handleSaveBtnClick: function() {
			var category = this.$questionSection.find('option:selected').val();
			tinymce.triggerSave();

			if (this.$createEditForm.valid() && this.isMCEValid() ) {
				this.model.set({
					question: this.$question.val().trim(),
					active: this.$active.is(':checked'),
					answer: tinymce.activeEditor.getContent(),
					category: category
				});

				if(!this.model.get('id')) {
					this.model.set('id', (new Date()).getTime());
					this.collection.add(this.model);
				}

				if(category !== this.collection.category) {
					this.collection.remove(this.model);

					this.model.set('sequence', null);

					switch(category) {
						case 'Company Policy Info':
							CompanyPolicyCollection.add(this.model);
							break;
						case 'Ordering and Return Policy Info':
							OrdersReturnsPolicyCollection.add(this.model);
							break;
						case 'Security and Privacy Policy Info':
							SecurityPrivacyPolicyCollection.add(this.model);
							break;
					}
				}

				GlobalEvents.trigger('form:save', this.$tip);
				this.parent.showHome();
			} else {
				GlobalEvents.trigger('form:invalid', this.$tip);
			}
		}, 

		applyTinymce: function() {
			var self = this;
			setTimeout(function() {
				tinymce.remove();

				tinymce.init({
					setup: function(editor) {
						editor.on('change', function(e) {
							GlobalEvents.trigger('form:editing');
							tinymce.triggerSave();
							self.$el.find($("#" + editor.id)).valid();
						});
						editor.on('blur', function(e) {
							GlobalEvents.trigger('form:editing');
							tinymce.triggerSave();
							self.$el.find($("#" + editor.id)).valid();
						});						
					},

					selector: 'textarea#f-answer',
					toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
					plugins: ['code'],
					force_br_newlines : true,
					force_p_newlines : false,
					onchange_callback: function(editor) {

					}
				});
			}, 0);
		},


		validateForm: function() {
		      var self = this;
		      self.$createEditForm.validate({
		        rules: {
		        	'f-question': {
		        		required: true,
		        		maxlength: 500
		        	}
		        },
		        ignore: ''
		     });
        },

     //    handleTinyMceValidation: function() {
			  //   var self = this;

			  //  self.$createEditForm.submit(function() {
					// 	// update underlying textarea before submit validation
					// 	tinymce.triggerSave();
					// }).validate({
					// 	ignore: "",
					// 	rules: {
					// 		title: "required",
					// 		content: "required"
					// 	},
					// 	errorPlacement: function(label, element) {
					// 		// position error label after generated textarea
					// 		if (element.is("textarea")) {
					// 			label.insertAfter(element.next());
					// 		} else {
					// 			label.insertAfter(element)
					// 		}
					// 	}
					// });


					// self.$createEditForm.focusInvalid = function() {
					// 	// put focus on tinymce on submit validation
					// 	if (this.settings.focusInvalid) {
					// 		try {
					// 			var toFocus = $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []);
					// 			if (toFocus.is("textarea")) {
					// 				tinyMCE.get(toFocus.attr("id")).focus();
					// 			} else {
					// 				toFocus.filter(":visible").focus();
					// 			}
					// 		} catch (e) {
					// 			// ignore IE throwing errors when focusing hidden elements
					// 		}
					// 	}
					// }
     //    },



		// handleTinyMceValidation: function() {

		// 	this.handleSaveBtnClick();

		// 	var content = tinymce.activeEditor.getContent();  // get the content

		// 	$('#f-answer').val(content); // put it in the textarea

		// 	var info = $('#f-answer').val(content);

		// 	console.log(info);

		// },

		



		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		// js validation for create / edit section
		validateForm: function() {
			this.$createEditForm.validate({
				rules: {
		        	'f-question': 'required',
					'f-answer': {
		        		'required': true,
		        		'maxlength': 500					
		        	}
				}
			});
			$.validator.setDefaults({
				ignore: ''
			});
		}
	});

	return new CreateEditHelpView;
});