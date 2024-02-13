$(document).on("shown.bs.modal", function () {
  var screenWidth = $(window).width();

  // Calculate scale
  var scale;
  if ((screenWidth == 430)) {
    scale = 0.389362;
  } else if (screenWidth == 414) {
    scale = 0.37234;
  } else if (screenWidth == 412) {
    scale = 0.370213;
  } else if (screenWidth == 390) {
    scale = 0.346809;
  } else if (screenWidth == 375) {
    scale = 0.330851;
  } else if (screenWidth == 360) {
    scale = 0.314894;
  } else {
    scale = 1;
  }

  // Build transform string
  //   var transform = "scale(" + scale + ") transform-origin: 0px 0px;";
  var transform = "scale(" + scale + ")";

  // Set transform on #resumeContainer

  // When modal is shown
  $("#resumeContainer").css("transform", transform);
  $("#resumeContainer").css("transform-origin", "0px 0px");

  console.log(`Screen width: ${screenWidth}`);
  console.log(`transform: scale(${transform})`);
});
