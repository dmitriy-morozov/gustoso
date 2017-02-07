 $(document).ready(function()  {
           $('.slider-wrapper').slick({
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             autoplay: true,
             autoplaySpeed:5000,
             fade: true,
             speed: 0,
             asNavFor: '.slider-wrapper-thumbs',
             responsive: [
             {
              breakpoint: 768,
              settings: {
                arrows: false
             }
          }
          ]
         });
         
           $('.slider-wrapper-thumbs').slick({
             slidesToShow: 3,
             slidesToScroll: 1,
             asNavFor: '.slider-wrapper',
             dots: false,
             centerMode: true,
             focusOnSelect: true,
             prevArrow: '.slider-button-prev',
             nextArrow: '.slider-button-next',
             responsive: [
             {
              breakpoint: 768,
              settings: {
                arrows: false
             }
          }
          ]
         });
         
           $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
           $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
         
           $('.slider-wrapper').on('afterChange', function(event, slick, currentSlide){
             $('.content').hide();
             $('.content[data-id=' + (currentSlide + 1) + ']').show();
          });
         });
         
         $( ".pancakes-button" ).click(function() {
         $('.pancakes-menu').slideToggle('500');
         $(".line").toggleClass("active");
         $(".pancakes-button").toggleClass("active");
         });