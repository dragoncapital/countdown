;jQdcc = jQuery.noConflict();
jQdcc(document).ready(function($){
	var countdown = 1442574000 - ((new Date().getTime())/1000); // from: 09/18/2015 06:00 pm +0700
	countdown = Math.max(1, countdown)

    var clock = $('.clock').FlipClock(countdown, {
        countdown: true
    });
})