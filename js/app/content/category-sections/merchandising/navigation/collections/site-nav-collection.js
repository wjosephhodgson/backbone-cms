define([
	'backbone',
	'../models/site-nav-model'
], function(
	Backbone, 
	SiteNavModel
) {
    var i; 
    
	var SiteNavCollection = Backbone.Collection.extend({
		url: '/mock/user-navigation.json',

		model: SiteNavModel,

        initialize: function() {
        	var self = this;
        
        	self.listenTo(self, 'add', function(model) {
            	model.set('sequence', self.length);
    		});
    
    		self.listenTo(self,'remove', function(model, collection, options) {
	            for(i = options.index , j = collection.length; i < j; ++i) { 
	                collection.at(i).set('sequence', i + 1);   
	        	}
	        	self.trigger('resequenced');
   		 	});
    
		},


	    resequence: function() {
			this.each(function(section, index) {
				section.set('sequence', index + 1);
			});

			this.trigger('resequenced');
		},

		// Initial comparator
		comparator: function(a, b) {
			return a.get('sequence') - b.get('sequence');
		},

		sortTypes: {
			sequence: function(section) { return section.get('sequence'); },
			ascending: function(section) { return section.get('title'); },
			descending: function(a, b) {
				if (a.get('title') > b.get('title')) {
					return -1;
				} else {
					return 1;
				}
			}
		},

		changeSort: function(type) {
			if (this.sortTypes[type]) {
				this.comparator = this.sortTypes[type];
			}
		}
	
	});

	return new SiteNavCollection;
});