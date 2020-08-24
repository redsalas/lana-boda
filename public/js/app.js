$(document).ready(function() {
 
    setTimeout(function(){
        $('main').addClass('fadeIn');
        $('main').css('opacity','1');
        $('#loader-wrapper').addClass('fadeOut');
        $('#loader-wrapper').css('opacity','0');
    }, 3000);

    $(function() {
        $('main').vegas({
            slides: [
                { src: './img/slide-1.jfif' },
                { src: './img/slide-2.jpg' },
                { src: './img/slide-1.jpg' }
            ],
            timer: false,
            transition: [ 'zoomOut', ]
        });
      });

    let swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
});
