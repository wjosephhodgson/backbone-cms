$(document).ready(function(){
	var
		content;
	content = $('#help-content-bottom');
	content.wrap('<div id="help-page-wrap"></div>');
	content.before('<div id="help-topnav"></div>');
	content.wrap('<div id="help-content-wrap"></div>');
	$('#help-content-wrap').wrapInner('<section class="col-12" id="section"></section>');
	$('#help-topnav').load('js/app/content/help-2/assets/topnav.html');
});