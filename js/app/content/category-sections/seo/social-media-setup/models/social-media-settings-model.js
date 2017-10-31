/********************************************************
* Description: This Model handles the top Social Icons
*              General settings state independent of other 
*              function in the Homepage
**********************************************************/


define([
	'backbone'
	], function(Backbone) {
    var SocialMediaSettingsModel = Backbone.Model.extend({
    	url: '/mock/user-social-settings.json',

    	defaults: {
            showInHeaderActive: true,
            showInFooterActive: true,
            showInContactBxActive: true
    	}
    });
       return new SocialMediaSettingsModel;
	});
