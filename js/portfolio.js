$(document).ready(function () {
  $('.topic.container a[type="button"]').click(function (event) {
    event.preventDefault();

    $(".topic.container a.active").removeClass("active");

    $(this).addClass("active");
  });
});
