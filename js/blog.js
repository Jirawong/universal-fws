$(document).ready(function () {
  $("#Carousel-3").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    autoWidth: true,
  });
  $(".prev-3").click(function () {
    $("#Carousel-3").trigger("prev.owl.carousel");
  });

  $(".next-3").click(function () {
    $("#Carousel-3").trigger("next.owl.carousel");
  });

  $("#Carousel-blog-sm").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
  });
  $(".prev-blog-sm").click(function () {
    $("#Carousel-blog-sm").trigger("prev.owl.carousel");
  });

  $(".next-blog-sm").click(function () {
    $("#Carousel-blog-sm").trigger("next.owl.carousel");
  });
});
