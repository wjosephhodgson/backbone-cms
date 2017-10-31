$(document).ready(function(){
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if(isIE11){
		$('#ie11-modal').show();
		$('#ie11-modal #btn-cancel').click(function(){
			$('#ie11-modal').dialog('close');
		});
		$('#ie11-trigger').click(function(){
			$('.login-browser-warning').slideUp();
			$('#ie11-steps').slideDown(1200);
		})
		$('#ie11-modal').dialog({
			autoOpen:true,
			modal:true,
			draggable:false
		});
	}
	$('#btn-login').click(function(e){
		e.preventDefault();
		$('#loading-overlay').removeClass('hidden');
	});
});