document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider");
  var scrollWrapper = document.getElementById("scrollWrapper");

  slider.addEventListener("input", function () {
    var value =
      (slider.value * (scrollWrapper.scrollWidth - scrollWrapper.clientWidth)) /
      100;
    scrollWrapper.scrollLeft = value;

    var gradientValue = (slider.value * 100) / slider.max;
    slider.style.background = `linear-gradient(to right, #e2001a 0%, #e2001a ${gradientValue}%, #d3d3d3 ${gradientValue}%, #d3d3d3 100%)`;
  });
});
