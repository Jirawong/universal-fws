$(document).ready(function () {
  var video = $("#home-video")[0];
  video.play();
  $(".menu-open").on("click", function () {
    $(".menu").addClass("active");
    $(".menu-sm").addClass("active");
    $(".navbar").addClass("hidden");
    $(".menu-open").addClass("hidden");
  });

  $(".close-menu").on("click", function () {
    $(".menu").removeClass("active");
    $(".menu-sm").removeClass("active");
    $(".navbar").removeClass("hidden");
    $(".menu-open").removeClass("hidden");
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
