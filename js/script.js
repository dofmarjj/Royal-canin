$(document).ready(function () {
  var block2Offset = $("#block3").offset().top;

  // Скрываем кнопку "Подняться наверх"
  $("#scrollTopBtn").hide();

  // Показать/скрыть кнопку "Подняться наверх" при достижении блока
  $(window).scroll(function () {
    if ($(this).scrollTop() > block2Offset) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Плавная прокрутка к якорю с отступом сверху

  $('a[href*="#"]').click(function (e) {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(this.hash).offset().top - 100,
        },
        1000
      );
    e.preventDefault();
  });
});

$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    $(".overlay").toggleClass("active");
    $("html").toggleClass("no-scroll");
  });

  $(".menu li a").click(function () {
    var targetBlock = $($(this).attr("href"));
    if (targetBlock.length) {
      $("html, body").animate(
        {
          scrollTop: targetBlock.offset().top - 100,
        },
        1000
      );
    }
    $(".burger-menu").removeClass("active");
    $(".menu").removeClass("active");
    $(".overlay").removeClass("active");
    $("html").removeClass("no-scroll");
  });
});
