// Run the script once the document is completely loaded.
$(function () {
  var role = 0;
  var roles = ["Front End Developer", "Programming Enthusiast"];
  setInterval(() => {
    $(".home-content h3 span").fadeOut(500, function () {
      $(this).text(roles[role++ % roles.length] + "...");
      $(this).fadeIn(500);
    });
  }, 2500);
});
$(function () {
	$("nav")
		.css("display", "none")
		.removeClass("hidden");
	$(window).scroll(function () {
		// find the trigger point.
		var point = $("#home h1").offset().top - 30;
		if ($(window).scrollTop() > point) {
			$("nav").slideDown();
		} else {
			$("nav").slideUp();
		}
	});
});