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

  /*======================= blog slider ========================*/
  var blogSwiper = new Swiper(".blog-slider", {
    spaceBetween: 24,
    grabCursor: false,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 3000,
    allowTouchMove:true,
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

  /*======================= job-location slider ========================*/
  var jobLocSwiper = new Swiper(".job-location-slider", {
    spaceBetween: 24,
    grabCursor: false,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    speed: 3000,
    allowTouchMove:true,
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
      el: ".job-pagination",
      clickable: true,
    },
  });

  /*======================= Counter up ========================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  /*======================= latest job filtering ========================*/
  $('.job-cat-btns button').on('click', function (event) {
    const parentName = $(this).parent().attr("class");

    if(parentName !== 'dropdown'){
      $(this).parent().siblings('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
    
  });

  var gridContainer = document.querySelector('#job-grid-container');
  var allGridContainer = document.querySelector('#all-job-grid-container');
  var latestGridContainer = document.querySelector('#latest-job-grid-container');
  var blogGridContainer = document.querySelector('#blog-grid-container');
  var allCompanies = document.querySelector('#all-companies');

  if(gridContainer){
    var mixer1 = mixitup(gridContainer);
  }

  if(allGridContainer){
    var mixer2 = mixitup(allGridContainer);
  }

  if(latestGridContainer){
    var mixer3 = mixitup(latestGridContainer);
  }

  if(blogGridContainer){
    var mixer4 = mixitup(blogGridContainer);
  }

  if(allCompanies){
    var mixer5 = mixitup(allCompanies);
  }

  /*======================= job slider range ========================*/

  $('.filter-button').on('click', function(){
    $(this).toggleClass('active');
  });

  function numberWithCommas(x) {
    if (x !== null) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 5, 50 ],
    slide: function( event, ui ) {
      $( "#min" ).html(numberWithCommas(ui.values[ 0 ]) );
      $( "#max" ).html(numberWithCommas(ui.values[ 1 ]) );
    }
  });

  //slider range data tooltip set
  var $handler = $("#slider-range .ui-slider-handle");
  $handler.click();

  $handler.eq(0).append("<b class='amount'>$<span id='min'>"+numberWithCommas($( "#slider-range" ).slider( "values", 0 )) +"</span>k</b>");
  $handler.eq(1).append("<b class='amount'>$<span id='max'>"+numberWithCommas($( "#slider-range" ).slider( "values", 1 )) +"</span>k</b>");


});