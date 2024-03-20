$(document).ready(function () {
  var $slider = $("#slider");
  var $scrollWrapper = $("#scrollWrapper");

  // Функция обновления ползунка в соответствии с текущим положением прокрутки
  function updateSliderPosition() {
    var scrollPercentage =
      ($scrollWrapper.scrollLeft() /
        ($scrollWrapper[0].scrollWidth - $scrollWrapper[0].clientWidth)) *
      100;
    $slider.val(scrollPercentage);
    var gradientValue = (scrollPercentage * 100) / $slider.attr("max");
    $slider.css(
      "background",
      "linear-gradient(to right, #e2001a 0%, #e2001a " +
        gradientValue +
        "%, #d3d3d3 " +
        gradientValue +
        "%, #d3d3d3 100%)"
    );
  }

  // Обработчик события прокрутки контейнера
  $scrollWrapper.on("scroll", function () {
    updateSliderPosition();
  });

  // Обновляем ползунок при изменении его значения
  $slider.on("input", function () {
    var value =
      ($slider.val() *
        ($scrollWrapper[0].scrollWidth - $scrollWrapper[0].clientWidth)) /
      100;
    $scrollWrapper.scrollLeft(value);
    updateSliderPosition();
  });
});
