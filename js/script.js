$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    if ($(this).hasClass("collapsed")) {
      $(".main-content").css("padding-top", "0px");
    } else {
      $(".main-content").css("padding-top", "250px");
    }
  });
  if ($(window).width() < 992) {
    // If screen size is less than 992px (mobile view)
    $("footer div div ul").removeClass("show");
  } else {
    // If screen size is greater than or equal to 992px (larger screens)
    $(".collapse").addClass("show"); // Add the "show" class to all collapse elements
  }
});
