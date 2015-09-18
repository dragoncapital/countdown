;jQdcc = jQuery.noConflict();
jQdcc(document).ready(function($){
	$('#clock').countdown('2015/09/18 18:00:00').on('update.countdown', function(event) {
		var $this = $(this).html(event.strftime(''
			+ '<span>%-d</span>'
			+ '<span>%H</span>'
			+ '<span>%M</span>'
			+ '<span>%S</span>'));
	});
})