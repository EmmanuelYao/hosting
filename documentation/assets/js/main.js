window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



$( document ).ready(function() {
    $('.active').fadeIn();

    $('.menu-item').click(function() {


    	
    	$(this).parents('.alpha').find('.active-item').removeClass('active-item');
    	$(this).addClass('active-item');

    	$('.content').find('.active').fadeOut(10);
		var hrefLink = $(this).attr('href');
		$(''+ hrefLink +'').parent('.content-block').addClass('active').fadeIn();
			 document.documentElement.scrollTop = 0;
		
	});
});


