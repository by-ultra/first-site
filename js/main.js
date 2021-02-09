//Header Burger
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//Blog Learn More
$(document).ready(function() {
  $('.accordeon .acc-head').on('click', f_acc);
  });
  
  function f_acc(){
    $('.accordeon .acc-body').not($(this).prev()).slideDown(1000);
      $(this).prev().slideToggle(500);
  }

// Slider  
$('.owl-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow:3
            }
        }
   ]
  });