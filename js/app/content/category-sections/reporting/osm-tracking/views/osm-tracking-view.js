define([
	'backbone',
	'../templates/osm-tracking-tpl',
	'global-events',
	'jqueryval'
],
 function(
	Backbone, 
	OSMTrackingTpl,
	GlobalEvents 	
){
 	
	var OSMTrackingView = Backbone.View.extend({

		template: OSMTrackingTpl,

		render: function() {

			var self = this;
			self.$el.html(self.template);
			self.delegateEvents();
			self.cacheElem();
			//self.runTrackingReport();
			return self;

		},

		events: {
			'click #go-btn': 'handleGo',
			'click #print-ordersAndTraffic-btn': 'handlePrint'
		},

		cacheElem: function() {
			this.$callTrack = this.$el.find('#balihoocalltracking');
			this.$chart1 = this.$el.find('#balihoochart');
			this.$chart2 = this.$el.find('#balihoochartnew');
		},

		runTrackingReport: function() {
			// $("#balihoocalltracking").removeClass('hidden');

			// // PART ONE
			// // The following code configures and embeds the JavaScript plugin 
			// var _ppcTokens = _ppcTokens || new Object;
			// _ppcTokens._brandKey = 'teleflora'; // This is the id for your brand
			// _ppcTokens._authKey = '6467cd4dec96ae9'; // This is authorizes the api call
			// _ppcTokens._locationId = '%%Florist ID%%'; // This is the unique florist id - remove %% tags
			// _ppcTokens._host = 'teleflora.balihoo.com'; // Change to teleflora.balihoo.com for production data

			// _ppcTokens._baseURL = ('https:' == document.location.protocol ? 'https://' : 'https://') + _ppcTokens._host + '/analytics/ppc';
			// document.write(unescape("%3Cscript src='" + _ppcTokens._baseURL + "?BrandKey=" + _ppcTokens._brandKey + "&LocationId=" + _ppcTokens._locationId + "&AuthKey=" + _ppcTokens._authKey + "' type='text/javascript'%3E%3C/script%3E"));
			// var btimeout = setTimeout(function() {
			//     var p = $("#balihoochartnew").html("<p><a href='mailto:onlinemarketing@teleflora.com?subject=Online Search Marketing Inquiry'><img src='https://secure2.eflorist.com/images/vendors/00002917/esat/osm-img.jpg' border='0'></a></p>");
			// }, 6000);

			// _ppcChart.init();

			// $('#balihoochart').attr('id','balihoochartnew');			-
			// // END PART ONE
			
			
			// // PART TWO
			// var _ppcTokens2 = _ppcTokens2 || new Object;
			// _ppcTokens2._brandKey = 'teleflora'; // This is the id for your brand
			// _ppcTokens2._authKey = '6467cd4dec96ae9'; // This authorizes the api call
			// _ppcTokens2._locationId = '%%Florist ID%%'; // This is the unique florist id - remove %% tags
			// _ppcTokens2._host = 'teleflora.balihoo.com'; // Change to teleflora.balihoo.com for production data

			// _ppcTokens2._baseURL = ('https:' == document.location.protocol ? 'https://' : 'https://') + _ppcTokens2._host + '/analytics/calltrackingreport';
			// document.write(unescape("%3Cscript src='" + _ppcTokens2._baseURL + "?BrandKey=" + _ppcTokens2._brandKey + "&LocationId=" + _ppcTokens2._locationId + "&AuthKey=" + _ppcTokens2._authKey + "' type='text/javascript'%3E%3C/script%3E"));
			// var qtimeout = setTimeout(function() {
			//     var q = $("#balihoocalltracking").html("<p>This report is currently unavailable, please try again later.</p>");
			// }, 6000);
			// // END PART TWO
			

			// // PART THREE
			// __balihooCallTracking.init();
			// clearTimeout(qtimeout);
			// if( typeof(rtimeout)!= 'undefined' ){
			// 	clearTimeout(rtimeout);	
			// }						
			// // END PART THREE
			
		}

	}); 

	return new OSMTrackingView;

 });