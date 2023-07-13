$(document).ready(function () {
  var video = $("#opening")[0];
  video.volume = 0.05;

  $("#Carousel-1").owlCarousel({
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
  $(".prev-1").click(function () {
    $("#Carousel-2").trigger("prev.owl.carousel");
  });

  $(".next-1").click(function () {
    $("#Carousel-2").trigger("next.owl.carousel");
  });

  $("#menu-open").on("click", function () {
    $("#menu").addClass("active");
  });

  $("#close-menu").on("click", function () {
    $("#menu").removeClass("active");
  });
});
