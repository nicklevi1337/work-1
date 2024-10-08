$(document).ready(function () {
    wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: false,
    });
    wow.init();
  
    $('a[href^="#"]').click(function () {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top - 300 }, 600);
      return false;
    });
  
    $("a.popup-img").fancybox({
      transitionIn: "elastic",
      transitionOut: "elastic",
      speedIn: 600,
      speedOut: 200,
      overlayShow: false,
    });
  
    $(".slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="prev-arr"></button>',
      nextArrow: '<button class="next-arr"></button>',
      centerMode: true,
      responsive: [
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
  
    let header = $(".desktop-nav"),
        scrollPrev = 0;
  
    $(window).scroll(function () {
      var scrolled = $(window).scrollTop();
  
      if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass("out");
      } else {
        header.removeClass("out");
      }
      scrollPrev = scrolled;
    });
  
    $(".comment-bottom").each(function () {
      let more = $(this).find(".btn-more");
      let hide = $(this).find(".hide-content");
      hide.hide();
      more.click(function () {
        hide.slideToggle();
        more.css("display", "none");
      });
    });
  
    $(".glow-button").on("click", function () {
      $(".item").addClass("item-show");
      $(".glow-button").css("display", "none");
    });
  
    document.addEventListener("click", (event) => {
      let target = event.target;
      const menu = document.querySelector(".mobile-menu");
      const navMobile = document.querySelector(".mobile-nav");
      const burgerMenu = document.querySelector(".burger-menu");
      const imgLogo = document.querySelector(".img-logo-mobile");
  
      if (target.matches(".burger-menu") || target.closest(".mobile-link")) {
        menu.classList.toggle("active");
        navMobile.classList.toggle("active");
        burgerMenu.classList.toggle("active");
        imgLogo.classList.toggle("active");
      }
    });
  });
  
  $('#showForm').click(function () {
    $('.spin-result-wrapper').css('display', 'block');
  })
  $(".close-popup").click(function (e) {
    e.preventDefault();
    $(".spin-result-wrapper").fadeOut();
  });