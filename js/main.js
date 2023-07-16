$(document).ready(function () {
  $(".menu-open").on("click", function () {
    $(".menu").addClass("active");
  });

  $(".close-menu").on("click", function () {
    $(".menu").removeClass("active");
  });

  $("#Carousel-1").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
  });
  $("#Carousel-1-1").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
  });
  $("#Carousel-2").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
  });
  $("#Carousel-3").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
  });
  $("#Carousel-blog").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
  });
  $(".prev-1").click(function () {
    $("#Carousel-1-1").trigger("prev.owl.carousel");
  });

  $(".next-1").click(function () {
    $("#Carousel-1-1").trigger("next.owl.carousel");
  });
  $(".prev-2").click(function () {
    $("#Carousel-2").trigger("prev.owl.carousel");
  });

  $(".next-2").click(function () {
    $("#Carousel-2").trigger("next.owl.carousel");
  });
  $(".prev-blog").click(function () {
    $("#Carousel-blog").trigger("prev.owl.carousel");
  });

  $(".next-blog").click(function () {
    $("#Carousel-blog").trigger("next.owl.carousel");
  });
});
