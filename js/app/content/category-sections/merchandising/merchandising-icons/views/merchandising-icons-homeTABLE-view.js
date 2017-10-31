define([
	'backbone',
	'../collections/merchandising-Icons-home-collection',
	'../templates/merchandising-icons-HomeTable-tpl',
	'global-events'
], function(
	Backbone, 
	merchandisingIconsHomeCollection, 
	MerchandisingIconsHomeTableTpl, 
	GlobalEvents
) {
	var MerchandisingIconsHomeTableView = Backbone.View.extend({
	 	template: MerchandisingIconsHomeTableTpl,

        initialize: function(options) {
            var self = this;
            self.parent = options.parent;          
        },

	 	render: function() {
	 		var self = this;
	 		self.setElement(self.template(self.model.toJSON()));

	 		self.listenTo(merchandisingIconsHomeCollection, 'remove', function(model) {
                if (self.model === model) {
                    self.$el.fadeOut(200, function() {
                        self.remove();
                    });
                }
            });

	 		self.delegateEvents();

	 		return self;
	 	},

	 	events: {
	 		'click .icon-edit': 'handleEdit',
	 		'click .icon-trash': 'handleDelete'
	 	},

	 	handleEdit: function() {
	 		var self = this;
	 		GlobalEvents.trigger('form:cancel', function(){
	 			self.parent.handleEdit(self.model);	
	 		});
	 	},

	 	handleDelete: function() {
			GlobalEvents.trigger(
				'form:delete', 
				merchandisingIconsHomeCollection.remove.bind(merchandisingIconsHomeCollection, this.model)
			);
		}

	});

    return MerchandisingIconsHomeTableView;

});