$(document).ready(function(){
	var
		content;
	content = $('#help-content-right');
	content.wrap('<div id="help-page-wrap"></div>');
	content.before('<div id="help-leftnav"></div>');
	content.wrap('<div id="help-content-wrap"></div>');
	$('#help-content-wrap').wrapInner('<section class="col-12 col-d-9" id="section"></section>');
	$('#help-leftnav').load('js/app/content/help-1/assets/leftnav.html');
});