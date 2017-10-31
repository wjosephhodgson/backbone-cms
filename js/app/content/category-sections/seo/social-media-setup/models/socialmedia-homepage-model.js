define([
    'backbone'], function(Backbone) {
    var SocialMediaPageModel = Backbone.Model.extend({
        defaults: { // returns Model, used in Collections of SMedia Info 
            id: null,
            name: '',
            imgUrl: '',
            ChannelName: '',
            SocialPageLink: '',
            SocialMedActive: true,
            Edit: true
        } 
    }); // Model Main function ends here

    return SocialMediaPageModel;
}); //Model Ends here