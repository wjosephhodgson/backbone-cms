define([
  'backbone',
  '../models/site-nav-upcomingOccasions-Model',
], function(Backbone, UpcomingOccasionsModel) {
     
     var siteNavUpcomingOccasionsCollections = Backbone.Collection.extend({
	     	url: '/mock/user-site-nav-UpcomingOccasions.json',

	     	model: UpcomingOccasionsModel

     });

     return new siteNavUpcomingOccasionsCollections;
});