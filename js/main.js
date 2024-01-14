(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  //navbarmobile
  // get the element you want to remove the class from
  // get the element you want to remove the class from
  const myElement = $(".mobile-dnone");

  // listen for the scroll event on the window
  $(window).scroll(function () {
    // remove the class from the element
    myElement.css({ display: "flex", opacity: 0 });
    myElement.animate({ opacity: 1 }, 100);
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  $(".owl-carousel1").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      680: {
        items: 2,
        nav: false,
        loop: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  var mobileDNone = $(".mobile-dnone"); // Define mobileDNone correctamente

  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    var elementOffset = mobileDNone.offset().top;

    if (scrollPos > elementOffset) {
      mobileDNone.removeClass("mobile-dnone");
    }
  });
  // Obtener el elemento de la barra de navegación
  var navbar = document.querySelector(".navbar-collapse");

  // Guardar el estado actual del desplazamiento
  var isScrollDisabled = false;

  // Agregar un evento de desplazamiento al documento
  document.addEventListener("scroll", function () {
    // Verificar si el usuario está sobre la barra de navegación
    if (window.scrollY > navbar.offsetHeight && !isScrollDisabled) {
      // Si está encima de la barra de navegación y el desplazamiento no está deshabilitado, deshabilitar el desplazamiento
      document.body.style.overflow = "hidden";
      isScrollDisabled = true;
    } else if (window.scrollY <= navbar.offsetHeight && isScrollDisabled) {
      // Si no está encima de la barra de navegación y el desplazamiento está deshabilitado, habilitar el desplazamiento
      document.body.style.overflow = "";
      isScrollDisabled = false;
    }
  });
});
