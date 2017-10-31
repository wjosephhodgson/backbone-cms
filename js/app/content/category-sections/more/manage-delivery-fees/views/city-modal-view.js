define([
	'backbone',
	'../templates/city-modal-tpl',
	'../collections/city-search-collection',
	'./city-search-view',
	'content/shared/states',
	'datatables',
	'jqueryval'	
], function(Backbone, CityModalTpl, CitySearchCollection, CitySearchView, States) {
	var CityModalView = Backbone.View.extend({
		tagName: 'form',
		id: 'city-modal',
		template: CityModalTpl,

		initialize: function() {
			var self = this;

		},

		render: function() {
			var viewModel = this.model.toJSON();
			
			viewModel.stateList = States;
			this.$el.html(this.template(viewModel));

			this.delegateEvents();
			this.cacheElem();
			this.validateForm();

			// can't get the fetchCustom to finish at all. what the heck
			CitySearchCollection.fetchCustom().done(function() {
				this.addAllSearchResults();
				this.applyDataTables();
				// find a better way to do this
				this.dataTable.columns(0).search('asdasdasd').draw();
			}.bind(this));

			var self = this;
			return this;
		},

		events: {
			'click #cancel-btn': 'closeModal',
			'click #continue-btn': 'handleContinue',
			'click #search-results li': 'selectCity',
			'click #search-btn': 'handleSearch',
			'change #f-country': 'handleCountryChange',
			'blur #f-city': 'checkForm'
		},

		cacheElem: function() {
			this.$country = this.$el.find('#f-country');
			this.$state = this.$el.find('#f-state');
			this.$searchResults = this.$el.find('#search-results');
			this.$city = this.$el.find('#f-city');

			this.$cityModalForm = this.$el.find('#f-location-fee-city');
			this.$searchTable = this.$el.find('#city-search-table');

			this.$searchList = this.$el.find('#search-results');
			this.$stateProvinceLabel = this.$el.find('#stateProvinceLabel');
		},

		closeModal: function(e) {
			this.$el.parent().dialog('close');
			this.parent.setSelectValue();

		},

		addSearchResult: function(model) {
			var newView = new CitySearchView({
				model: model
			});

			this.$searchResults.append(newView.render().el);
		},

		addAllSearchResults:function() {
			this.$searchResults.empty();

			CitySearchCollection.each(this.addSearchResult, this);
		},

		handleSearch: function() {
			var self = this;
			if(this.checkForm()) {
				            // take care of bottom white space issue when table is populated
                setTimeout(function () {
                    self.$el.closest('.ui-dialog').css('top', 0);
                }, 0);
				this.dataTable.columns(0).search(this.$city.val().trim()).draw();
			}
		},

		handleCountryChange: function () {
		    var country = this.$country.find('option:selected').val();
		    if (country === "United States") {

		        this.$stateProvinceLabel.text('State');

		        this._provinceOptions = this.$state.find('option.province').prop('hidden', true).detach();
		        this.$state.find('option:selected').prop('selected', false);
		        
		        if (this._stateOptions) {
			            this.$state.append(this._stateOptions);
			            this._stateOptions = null;
			        }
		       
                 this.$state.find('option.state').prop('hidden', false);

		    } else {

		        this.$stateProvinceLabel.text('Province');

		        this._stateOptions = this.$state.find('option.state').prop('hidden', true).detach();
		        this.$state.find('option:selected').prop('selected', false);
		        if (this._provinceOptions) {
		            this.$state.append(this._provinceOptions);
		            this._provinceOptions = null;
		        }

		        this.$state.find('option.province').prop('hidden', false);

    }
},



		handleContinue: function() {

			var clone; 

			if (this.checkForm()) {

				
				clone = this.model.clone(),

					cityValue = this.$city.val(),
					stateValue = this.$state.find('option:selected').val(),
					conditionValue = cityValue && stateValue 
						? [cityValue, ', ', stateValue].join('')
						: '';

				clone.set({
					country: this.$country.find('option:selected').val(),
					state: stateValue,
					city: cityValue,

					conditionValue: conditionValue
				});

				this.parent.renderVisible(clone);

				this.closeModal();
			}
		},

		selectCity: function(e) {
			this.$searchResults.find('li').removeClass('active');
			$(e.currentTarget).addClass('active');
		},

		checkForm: function() {
			return this.$el.valid();
		},

		validateForm: function() {
			var self = this;
			this.$el.validate({
				rules: {
					'f-country': {
						 required: function () {
                            return !self.$country.find('option:selected').val().trim();
                        }
					},

					'f-state': {
						required: function () {
                            return !self.$state.find('option:selected').val();
                        }
					},

					'f-city': {
						required: true
					}
				}
			});
		},

	    applyDataTables: function() {
			this.dataTable = this.$searchTable.DataTable({
				autoWidth: false,
				deferRender: false,
				jQueryUI: false,
				lengthChange: false,
				ordering: true,
				processing: false,
				searching: true,
				serverSide: false,
				stateSave: false,
				bDestroy: true,

				// Disable everything but paging and info
				info: true,
				pading: true,

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

	return new CityModalView;
});