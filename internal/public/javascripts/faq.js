$('.m-faq-toggle').on('click', function(e) {
	e.preventDefault();

	var targetId = $(this).attr('href'),
      parentId = $(this).attr('data-parent'),
      target = $(parentId).find('.m-faq-item-content[data-id="'+targetId+'"]'),
      faqToggle = $('.m-faq-toggle');

	if($(this).hasClass('active')){
		target.slideUp('fast',function (){
      faqToggle.removeClass('active');
		});

		return;
	}

	faqToggle.removeClass('active');
	$(this).addClass('active');

	$('.m-faq-item-content').not(targetId).slideUp('fast');

	target.slideDown('fast', function () {
		return;
	});
});
