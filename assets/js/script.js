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
  var comSwiper = new Swiper(".company-slider", {
    freeMode: false,
    spaceBetween: 10,
    grabCursor: false,
    slidesPerView: 3,
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
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 7,
      },
      992: {
        slidesPerView: 9,
      },
      1200:{
        slidesPerView: 12,
      }
    }
  });

  /*======================= job location slider ========================*/
  var locSwiper = new Swiper(".blog-slider", {
    spaceBetween: 24,
    grabCursor: false,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 3000,
    allowTouchMove:false,
    freeModeMomentum: false,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: ".blog-pagination",
      clickable: true,
    },
  });

  /*======================= Counter up ========================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /*======================= latest job filtering ========================*/
  $('.latest-job-category button').on('click', function (event) {
    const parentName = $(this).parent().attr("class");

    if(parentName !== 'dropdown'){
      $(this).parent().siblings('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
    
  });

  var gridContainer = document.querySelector('#job-grid-container');
  if(gridContainer){
    var mixer1 = mixitup(gridContainer);
  }

});