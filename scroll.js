document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider");
  var scrollWrapper = document.getElementById("scrollWrapper");

  slider.addEventListener("input", function () {
    var value =
      (slider.value * (scrollWrapper.scrollWidth - scrollWrapper.clientWidth)) /
      100;
    scrollWrapper.scrollLeft = value;
  });
});
