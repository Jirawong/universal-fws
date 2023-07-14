$(document).ready(function () {
  $("#Carousel-3").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
  });
  $(".prev-3").click(function () {
    $("#Carousel-3").trigger("prev.owl.carousel");
  });

  $(".next-3").click(function () {
    $("#Carousel-3").trigger("next.owl.carousel");
  });
});
