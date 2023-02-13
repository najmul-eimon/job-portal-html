$(function(){
  "use strick";

  /*======================= Filter select dropdown ========================*/
  // var $navOffset = $('#menubar').offset().top;
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > 200) {
            $('#menubar').addClass('navFixed');
        } else {
            $('#menubar').removeClass('navFixed');
        }
    });
  /*======================= Filter select dropdown ========================*/
  
  $('.filter-select').select2();

  $('#industry-select').one('select2:open', function(e) {
    $('input.select2-search__field').prop('placeholder','Search');
    $('.select2-dropdown').prepend('<p class="select2-search_heading">Industry</p>');
    $('.select2-search').append('<i class="ph-magnifying-glass"></i>');
  });

  $('#location-select').one('select2:open', function(e) {
    $('input.select2-search__field').prop('placeholder','Search');
    $('.select2-dropdown').prepend('<p class="select2-search_heading">Location</p>');
    $('.select2-search').append('<i class="ph-magnifying-glass"></i>');
  });

  /*======================= company slider ========================*/
  var swiper = new Swiper(".company-slider", {
    freeMode: false,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    speed: 4000,
    allowTouchMove:false,
    freeModeMomentum: false,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 8,
      },
      992: {
        slidesPerView: 12,
      }
    }
  });

  /*======================= Counter up ========================*/
  var counterUp = document.querySelector('#counter');
  var counterAbout = document.querySelector('#about-counter');
  var counted = 0;
  var aboutCounted = 0;

  $(window).scroll(function() {
    if(counterUp){
    var oTop = $('#counter').offset().top - window.innerHeight;

    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });
        });
        counted = 1;
      }
    }

    if(counterAbout){
      var oTop1 = $('#about-counter').offset().top - window.innerHeight;

      if (aboutCounted == 0 && $(window).scrollTop() > oTop1) {
        $('.about-counter').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });
        });
        aboutCounted = 1;
      }
    }
  });

});