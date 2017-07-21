$(function() {
  
  //image lightbox
  $('.lightbox').on('click', function(i) {
		
		i.preventDefault;
		
		var img = $(this).find('.image-wrapper img');
		var imgSrc = $(img).attr('src');
		
		$('body').addClass('popup');
		$('body').append('<img class="popup-img" src="' + imgSrc + '" alt="" />');
		$('body').append('<i class="fa fa-close"></i>');
		
		$('.fa-close').on('click', function() {
			$('body').removeClass('popup');
			$('.popup-img').remove();
			$(this).remove();
		})
		
  });
  
  
  /* mobile menu */
  	//mobile menu
	$('.fa-bars').on('click', function() {
		$('nav').css('display', 'block');
		$('.cloe-menu').css('display', 'block');
	});
	//close mobile menu
	$('.close-menu').on('click', function() {
		$('nav').css('display', 'none');
		$(this).css('display', 'none');
	});


  $('.slideshow').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
});