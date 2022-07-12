$('document').ready(function() {

	$('a[class="link-animate"]').click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('body, html').animate( { scrollTop: destination }, 750 );
	});



	$(document).ready(function() {
		function animw() {
			$('#h1-show').fadeIn(1500);
			$('#p-show').slideDown(1000);
		};

		setTimeout(animw, 500);
	});


	
	let docHeight = $(document).height(),
	windowHeight = $(window).height(),
	docWidth = $(window).width(),
	scrollPercent,
	sc;


	$(window).resize(function(){
		windowHeight = $(window).height();
		docHeight = $(document).height();
		docWidth = $(window).width();
	});
 


	$(window).scroll(function() {

		scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;

		sc = scrollPercent;

	});



    var GalleryItemsForOff = ($('#gal-img2'), $('#gal-img3'), $('#gal-img4'), $('#gal-img5'));


    if (docWidth <= 768) {
    	
    $('#gallery-img-div').hover(
    	function(){
    		
    	},

    	function(){

    		$('#gal-img1').animate({'margin-top':'30%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-top':'22.5%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-top':'15%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-top':'7.5%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-top':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(1)'});
    		$(GalleryItemsForOff).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img1').hover(
    	function() {
    		$('#gal-img1').animate({'margin-top':'30%'}, {duration:750, queue:false});
    		$(this).css({'filter':'brightness(1)'});
       	}
	);

    $('#gal-img2').hover(
    	function() {
    		$('#gal-img1').animate({'margin-top':'72.5%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-top':'22.5%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-top':'15%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-top':'7.5%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-top':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img3').hover(
    	function() {
    		$('#gal-img1').animate({'margin-top':'72.5%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-top':'65%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-top':'15%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-top':'7.5%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-top':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img4').hover(
    	function() {
    		$('#gal-img1').animate({'margin-top':'72.5%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-top':'65%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-top':'57.5%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-top':'7.5%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-top':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img5').hover(
    	function() {
    		$('#gal-img1').animate({'margin-top':'72.5%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-top':'65%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-top':'57.5%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-top':'50%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );


    }

    if (docWidth > 768) {

    $('#gallery-img-div').hover(
    	function(){
    		
    	},

    	function(){

    		$('#gal-img1').animate({'margin-left':'16%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-left':'12%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-left':'8%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-left':'4%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-left':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(1)'});
    		$(GalleryItemsForOff).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img1').hover(
    	function() {
    		$('#gal-img1').animate({'margin-left':'16%'}, {duration:750, queue:false});
    		$(this).css({'filter':'brightness(1)'});
       	}
	);

    $('#gal-img2').hover(
    	function() {
    		$('#gal-img1').animate({'margin-left':'96%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-left':'12%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-left':'8%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-left':'4%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-left':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img3').hover(
    	function() {
    		$('#gal-img1').animate({'margin-left':'96%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-left':'92%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-left':'8%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-left':'4%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-left':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img4').hover(
    	function() {
    		$('#gal-img1').animate({'margin-left':'96%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-left':'92%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-left':'88%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-left':'4%'}, {duration:750, queue:false});
    		$('#gal-img5').animate({'margin-left':'0%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );

    $('#gal-img5').hover(
    	function() {
    		$('#gal-img1').animate({'margin-left':'96%'}, {duration:750, queue:false});
    		$('#gal-img2').animate({'margin-left':'92%'}, {duration:750, queue:false});
    		$('#gal-img3').animate({'margin-left':'88%'}, {duration:750, queue:false});
    		$('#gal-img4').animate({'margin-left':'84%'}, {duration:750, queue:false});

    		$('#gal-img1').css({'filter':'brightness(0.35)'});
    		$(this).css({'filter':'brightness(1)'});
    	},

    	function(){
    		$(this).css({'filter':'brightness(0.35)'});
    	}
    );
}


	$(window).scroll(function() {
		if (sc > 0 && sc < 15) {
	
			$('#lsvg-1').css('fill', 'rgb(251, 171, 126)');
	
			$('#lsvg-2').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-3').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-4').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-5').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-6').css('fill', 'rgb(230, 230, 230)');
    	}
	});
	
	$(window).scroll(function() {
		if (sc > 16 && sc < 31) {

			$('#lsvg-2').css('fill', 'rgb(251, 171, 126)');
	
			$('#lsvg-1').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-3').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-4').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-5').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-6').css('fill', 'rgb(230, 230, 230)');
    	}
	});

	$(window).scroll(function() {
		if (sc > 15) {
			$('#anim-info-txt').show('slide', 'swing', 750);
    	}
	});
	
	$(window).scroll(function() {
		if (sc > 32 && sc < 54) {
	
			$('#lsvg-3').css('fill', 'rgb(251, 171, 126)');
	
			$('#lsvg-1').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-2').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-4').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-5').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-6').css('fill', 'rgb(230, 230, 230)');

    	}
	});
	
	$(window).scroll(function() {
		if (sc > 55 && sc < 77) {
	
			$('#lsvg-4').css('fill', 'rgb(251, 171, 126)');
	
			$('#lsvg-1').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-2').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-3').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-5').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-6').css('fill', 'rgb(230, 230, 230)');
    	}
	});

	$(window).scroll(function() {
		if (sc > 78 && sc < 95) {
	
		$('#lsvg-5').css('fill', 'rgb(251, 171, 126)');
	
			$('#lsvg-1').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-2').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-3').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-4').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-6').css('fill', 'rgb(230, 230, 230)');
    	}
	});

	$(window).scroll(function() {
		if (sc > 96 && sc < 100) {
	
			$('#lsvg-6').css('fill', 'rgb(251, 171, 126)');
	
			$('#lsvg-1').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-2').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-3').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-4').css('fill', 'rgb(230, 230, 230)');
			$('#lsvg-5').css('fill', 'rgb(230, 230, 230)');
    	}
	});



});