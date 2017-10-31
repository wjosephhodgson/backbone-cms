define([
	'backbone',
	'../models/socialmedia-homepage-model'
], function(Backbone, SocialMediaPageModel) {
	var HomepageCollection = Backbone.Collection.extend({
		url: '/mock/user-social-mediaMgt.json',

		model: SocialMediaPageModel,
	

	initialize: function() {
		     var self = this;

		     self.listenTo(self, 'add', function(model) {   //listen and add Social homepage Model
		     	   model.set('sequence', self.length);  // sets the id to the Length of the Model
		     	   //console.log(self.length); // checking it out only
		     });

		     self.listenTo(self, 'remove', function(model, collection, options) {
                   for(var i = options.index, j = collection.length; i < j; ++i) {
                   	    collection.at(i).set('sequence', i + 1);
                   }

                   self.trigger('resequenced');  // executes resequenced event
		     });  

	}, // initialize ends here

    resequence: function() {
        this.each(function(socialMedia, index) {
        	socialMedia.set('sequence', index + 1);
        });

        this.trigger('resequenced');
 
    },

    comparator: function(a, b) {
    	return a.get('sequence') - b.get('sequence'); 
    },

    sortTypes: {
    	sequence: function(socialMedia) { return socialMedia.get('sequence'); } 
    	// ensures sorting according to id after drag sort completion
    },
    
    changeSort: function(type) {
    	if(this.sortTypes[type]) {
    		this.comparator = this.sortTypes[type];
    	}
    }

});
	return new HomepageCollection;
});