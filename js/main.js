$(function () {
    $('.slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        speed: 800,
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__items').toggleClass('active');
    })
})


// toTop
const mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}