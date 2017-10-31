define([
    'backbone',
    '../templates/product-attributes-home-view-tpl',
    '../models/attribute-model',
    'components/featured-product/views/featured-product-view',
    'components/featured-product/collections/featured-product-collection',
    'global-events',
    'jqueryui'
], function(
    Backbone,
    ProductAttributesHomeViewTpl,
    AttributeModel,
    FeaturedProductView,
    FeaturedProductCollection,
    GlobalEvents
) {
    var ProductAttributesHomeView = Backbone.View.extend({

        tagName: 'div',

        id: 'f-product-attributes',

        template: ProductAttributesHomeViewTpl,

        render: function() {
            var self = this;

            AttributeModel.fetchCustom().done(function() {
                self.$el.html(self.template(AttributeModel.toJSON()));
                
                self.cacheElem();
                self.delegateEvents();
                self.editing = false;
                self.showTables();
                self.clearMenu();
                self.applyToolTips();
                self.listenTo(GlobalEvents, 'form:editing', function() {
                    self.triggerEditing();
                });
                //self.listenTo(self.showBrowseOnlyView, 'change', self.triggerEditing);
                 
            }.bind(this));

            return this;  
        },

        events: {
            'focus #f-selectedAttribute': 'setPrev',
            'change #f-selectedAttribute': 'handleAttr',
            //'change #f-selectedAttribute': 'handleSelectAttribute',
            'click #save-btn': 'handleSave'
        },

        cacheElem: function() {
            this.$selectedAttribute = this.$el.find("#f-selectedAttribute")

            // Featured Value Views
            this.$browseOnlyTable = this.$el.find("#browse-only-table");
            this.$inStorePickupOnlyTable = this.$el.find("#instore-pickup-only-table");
            this.$localDeliverOnlyTable = this.$el.find("#local-delivery-only-table");
            this.$noSameDayDeliveryTable = this.$el.find("#nosamedaydeliver-table");
            this.$taxFreeTable = this.$el.find("#tax-free-table");

            this.$tableContainerOne = this.$el.find('#table-container-one');
            this.$tableContainerTwo = this.$el.find('#table-container-two');
            this.$tableContainerThree = this.$el.find('#table-container-three');
            this.$tableContainerFour = this.$el.find('#table-container-four');
            this.$tableContainerFive = this.$el.find('#table-container-five');

            this.$tip = this.$el.find('.tooltip-change');

        },

        triggerEditing: function() {
            var self = this;
            self.editing = true;
        },

        showTables: function() {
            var self = this;

            // Show Browse Only
            this.showBrowseOnlyView && this.showBrowseOnlyView.remove();
            this.showBrowseOnlyView = new FeaturedProductView({
                collection: new FeaturedProductCollection(AttributeModel.get('browseOnly')),
                bodyOnly: true,
                title: 'Browse Only Products',
                id: 'm-featured-products-browseonly',
                selectAll: true,
                primarySku: false
            });
            this.$browseOnlyTable.append(self.showBrowseOnlyView.render().el);

            // Show Instore Only
            this.instoreOnlyView && this.instoreOnlyView.remove();
            this.instoreOnlyView = new FeaturedProductView({
                collection: new FeaturedProductCollection(AttributeModel.get('inStorePickupOnly')),
                bodyOnly: true,
                title: 'In Store Pickup Products',
                id: 'm-featured-products-instore',
                selectAll: true,
                primarySku: false
            });
            this.$inStorePickupOnlyTable.append(self.instoreOnlyView.render().el);

            // Show Local Delivery Only 
            this.localDeliveryOnlyView && this.localDeliveryOnlyView.remove();
            this.localDeliveryOnlyView = new FeaturedProductView({
                collection: new FeaturedProductCollection(AttributeModel.get('localDeliveryOnly')),
                bodyOnly: true,
                title: 'Local Delivery Only Products',
                id: 'm-featured-products-localdelivery',
                selectAll: true,
                primarySku: false
            });
            this.$localDeliverOnlyTable.append(this.localDeliveryOnlyView.render().el);

            // Show No Same Day Delivery
            this.noSameDayDeliveryOnlyView && this.noSameDayDeliveryOnlyView.remove();
            this.noSameDayDeliveryOnlyView = new FeaturedProductView({
                collection: new FeaturedProductCollection(AttributeModel.get('noSameDayDelivery')),
                bodyOnly: true,
                title: 'No Same Day Delivery Products',
                id: 'm-featured-products-nosameday',
                selectAll: true,
                primarySku: false
            });
            this.$noSameDayDeliveryTable.append(this.noSameDayDeliveryOnlyView.render().el); 

            // Show Tax Free
            self.taxFreeView = new FeaturedProductView({
                collection: new FeaturedProductCollection(AttributeModel.get('taxFree')),
                bodyOnly: true,
                title: 'Tax Free Products',
                id: 'm-featured-products-taxfree',
                selectAll: true,
                primarySku: false
            });

            self.$taxFreeTable.append(self.taxFreeView.render().el);

        },

        // to clear the value in the drop down menu
        clearMenu: function() {
            this.$selectedAttribute.val("");
        },

        handleSave: function() {
            var self = this;

            AttributeModel.set({
                browseOnly: self.showBrowseOnlyView.collection.toJSON(),
                inStorePickupOnly: self.instoreOnlyView.collection.toJSON(),
                localDeliveryOnly: self.localDeliveryOnlyView.collection.toJSON(),
                noSameDayDelivery: self.noSameDayDeliveryOnlyView.collection.toJSON(),
                taxFree: self.taxFreeView.collection.toJSON()
            })

            GlobalEvents.trigger('form:save', this.$tip);

        },

        cancelSelect: function(par) {
            var self = par;
            self.$selectedAttribute.val(self.prevVal);
        },

        setPrev: function() {
            var self = this;
            self.prevVal = self.$selectedAttribute.val();
        },

        handleAttr: function(e) {
            var self = this;

            if( self.editing == true ) {
                newAttr = self.$selectedAttribute.val();
                self.$selectedAttribute.val(self.prevVal);
                self.handleSelectAttribute();
                GlobalEvents.trigger('modal:custom', {
                    template: {
                        title: 'Please Confirm',
                        text: 'Are you sure you wish to cancel? If you change Attributes without clicking the SAVE CHANGES button, you will lose all changes.',
                        confirmBtnText: 'Stay on this attribute',
                        cancelBtnText: 'Cancel changes'
                    },
                    confirmFn: function(){
                        // do nothing, stay on current attribute
                    },
                    cancelFn: function(){
                        self.editing = false;
                        self.$selectedAttribute.val(newAttr);
                        self.handleSelectAttribute();
                    }
                });                
            } else {
                self.handleSelectAttribute();
            }  

        },

        handleSelectAttribute: function() {

            var self = this;
            self.$selectedAttribute.blur();

            self.$tableContainerOne.css({"display":"none"});
            self.$tableContainerTwo.css({"display":"none"});
            self.$tableContainerThree.css({"display":"none"});
            self.$tableContainerFour.css({"display":"none"});
            self.$tableContainerFive.css({"display":"none"});

            selectedItem = this.$selectedAttribute.find('option:selected').val();

            if(selectedItem === "1") {
                self.$tableContainerOne.css({"display":"block"});
            } else if ( selectedItem === "2") {
                self.$tableContainerTwo.css({"display":"block"});
            } else if (selectedItem === "3") {
                self.$tableContainerThree.css({"display":"block"});
            } else if (selectedItem === "4") {
                self.$tableContainerFour.css({"display":"block"});
            } else if (selectedItem === "5") {
                self.$tableContainerFive.css({"display":"block"});
            } else {
                //do nothing
            }

        },

        applyToolTips: function() {
            this.$el.find('.icon-tool-tip').tooltip();
        }

    });

    return new ProductAttributesHomeView;
});