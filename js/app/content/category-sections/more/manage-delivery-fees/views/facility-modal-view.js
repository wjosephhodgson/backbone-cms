define([
    'backbone',
    '../templates/facility-modal-tpl',
    '../collections/facility-search-collection',
    './facility-search-view',
    'content/shared/states',
    'datatables',
    'jqueryval'], function (Backbone, FacilityModalTpl, FacilitySearchCollection, FacilitySearchView, States) {
    var FacilityModalView = Backbone.View.extend({
        tagName: 'form',
        id: 'facility-modal',
        template: FacilityModalTpl,
        initialize: function () {
            var self = this;
            // $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
            // if(settings.nTable.id !== 'facility-search-table') {
            // return true;
            // } else {
            // var data = self.collection.toJSON()[dataIndex];
            // var facility = self.$facility.val().trim();
            // return true;
            // }
            // });
        },
        render: function () {
            var viewModel = this.model.toJSON();
            viewModel.stateList = States;
            this.$el.html(this.template(viewModel));
            this.delegateEvents();
            this.cacheElem();
            this.validateForms();
            FacilitySearchCollection.fetchCustom().done(function () {
                this.addAllSearchResults();
                this.applyDataTables();
                // find a better way to do this
                this.dataTable.columns(1).search('asdasdasd').draw();
            }.bind(this));
            var self = this;
            return this;
        },
        cacheElem: function () {
            this.$country = this.$el.find('#f-country');
            this.$state = this.$el.find('#f-state');
            this.$city = this.$el.find('#f-city');
            this.$zip = this.$el.find('#f-zip');
            this.$facility = this.$el.find('#f-facility');
            this.$searchTable = this.$el.find('#facility-search-table');
            this.$searchList = this.$el.find('#search-results');
            this.$stateProvinceLabel = this.$el.find('#stateProvinceLabel');
            this.$zipPostalLabel = this.$el.find('#zipPostalLabel');
        },
        events: {
            'click #cancel-btn': 'closeModal',
                'click #continue-btn': 'handleContinue',
                'click #search-results tr': 'selectFacilityName',
                'click #search-btn': 'handleSearch',
                'blur #f-zip': 'checkForm',
                'blur #f-city': 'checkForm',
                'blur #f-facility': 'checkForm',
                'change #f-country': 'handleCountryChange'
        },
        handleCountryChange: function () {
            var country = this.$country.find('option:selected').val();
            if (country === "United States") {
                this.$stateProvinceLabel.text('State');
                this.$zipPostalLabel.text('Zip Code');
                this._provinceOptions = this.$state.find('option.province').prop('hidden', true).detach();
                this.$state.find('option:selected').prop('selected', false);
                
                if (this._stateOptions) {
                    this.$state.append(this._stateOptions);
                    this._stateOptions = null;
                }
                this.$state.find('option.state').prop('hidden', false);
                this.$zip.addClass('zipUS');
                this.$zip.removeClass('zipCA');
                this.$zip.val('').blur();
            } else {
                this.$stateProvinceLabel.text('Province');
                this.$zipPostalLabel.text('Postal Code');
                this._stateOptions = this.$state.find('option.state').prop('hidden', true).detach();
                this.$state.find('option:selected').prop('selected', false);
                if (this._provinceOptions) {
                    this.$state.append(this._provinceOptions);
                    this._provinceOptions = null;
                }
                this.$state.find('option.province').prop('hidden', false);
                this.$zip.addClass('zipCA');
                this.$zip.removeClass('zipUS');
                this.$zip.val('').blur();
            }
        },
        handleSearch: function () {
            var self = this;
            if (this.checkForm()) {
                // take care of bottom white space issue when table is populated
                setTimeout(function () {
                    self.$el.closest('.ui-dialog').css('top', 0);
                }, 0);
                this.dataTable.columns(1).search(this.$facility.val().trim()).draw();
            }
        },
        closeModal: function () {
            this.$el.parent().dialog('close');
            this.parent.setSelectValue();
        },
        checkForm: function () {
            return this.$el.valid();
        },
        addSearchResult: function (model) {
            var newView = new FacilitySearchView({
                model: model
            });
            this.$searchList.append(newView.render().el);
        },
        addAllSearchResults: function () {
            this.$searchList.empty();
            FacilitySearchCollection.each(this.addSearchResult, this);
        },
        handleContinue: function () {
            var clone;
            if (this.checkForm()) {
                clone = this.model.clone();
                clone.set({
                    country: this.$country.find('option:selected').val(),
                    state: this.$state.find('option:selected').val(),
                    city: this.$city.val().trim(),
                    zip: this.$zip.val().trim(),
                    conditionType: 'Facility Name',
                    conditionValue: this.$facility.val().trim()
                });
                this.parent.renderVisible(clone);
                this.closeModal();
            }
        },
        selectFacilityName: function (e) {
            this.$facility.val($(e.currentTarget).children().eq(1).text());
            this.handleContinue();
        },
        validateForms: function () {
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
                        required: function () {
                            return !self.$zip.val().trim() && !self.$facility.val().trim();
                        }
                    },
                        'f-zip': {
                        required: function () {
                            return !self.$city.val().trim() && !self.$facility.val().trim();
                        },
                            'zipUSCA': true
                    },
                        'f-facility': {
                        required: function () {
                            return !self.$zip.val().trim() && !self.$city.val().trim();
                        }
                    }
                }
            });
        },
        applyDataTables: function () {
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
                infoCallback: function (settings, start, end, max, total, pre) {
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
    return new FacilityModalView;
});