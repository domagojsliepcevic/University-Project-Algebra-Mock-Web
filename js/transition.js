// Bind all a href clicks to this function
$(document).on("click", "#rightNav", function (event) {
  // Prevent default events
  event.preventDefault();

  // Animate the body (html page) to scroll to the referring element
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});
