define([
   'backbone'
], function(Backbone) {
     var BonusBloomHomePageModel = Backbone.Model.extend({

     	defaults: {
     		settingsContentActive : true,
     		programName: '',
     		winningDigits: null,
     		emailAddressBonusBloom: '',
     		faQSectionContent: '',
     		RulesContent: '',
               MainPageTitle: '',
     		MainPageHeader: '',
     		MainpageImgUrl: '',
     		MainPageMessage: '',
     		WinnerPageHeader: '',
     		WinnerPageMessage: '',
     		winnnerImgUrl: '',
     		NoWinnerPageMessage: '',
     		NoWinnerPageHeader: '',
     		NoWinnnerImgUrl: '',
     		thankYouPageHeader: '',
     		thankYouPageMessage: '',
     		thankYouImgUrl: ''
     	}


     });
	 return new BonusBloomHomePageModel;
});