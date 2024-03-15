// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("nav a");

//   links.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       event.preventDefault();
//       const targetId = this.getAttribute("href").substring(1);
//       const targetBlock = document.getElementById(targetId);
//       if (targetBlock) {
//         const offsetTop = targetBlock.offsetTop;
//         window.scrollTo({
//           top: offsetTop,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });

// $(document).ready(function () {
//   // Показать/скрыть кнопку "Подняться наверх"
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1000) {
//       $("#scrollTopBtn").fadeIn();
//     } else {
//       $("#scrollTopBtn").fadeOut();
//     }
//   });

//   // Плавная прокрутка к якорю
//   $("nav a").on("click", function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       const hash = this.hash;
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           window.location.hash = hash;
//         }
//       );
//     }
//   });

//   // Кнопка "Подняться наверх"
//   $("#scrollTopBtn").on("click", function (event) {
//     // $("html, body").animate({ scrollTop: 0 }, "slow");
//     if (this.hash !== "") {
//       event.preventDefault();
//       const hash = this.hash;
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });

$(document).ready(function () {
  var block2Offset = $("#block3").offset().top;

  // Скрываем кнопку "Подняться наверх"
  $("#scrollTopBtn").hide();

  // Показать/скрыть кнопку "Подняться наверх" при достижении второго блока
  $(window).scroll(function () {
    if ($(this).scrollTop() > block2Offset) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Плавная прокрутка к якорю с отступом сверху
  $("nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      var targetOffset = $(hash).offset().top - 20; // Уменьшаем отступ сверху
      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        800,
        function () {
          window.location.hash = hash;
          // Останавливаем прокрутку
          $("html, body").stop();
        }
      );
    }
  });

  // Кнопка "Подняться наверх"
  $("#scrollTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Управление прокруткой стрелочками клавиатуры
  $(document).keydown(function (e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
      // Стрелка влево или вправо
      e.preventDefault();
      var delta = e.keyCode == 37 ? -120 : 120; // Определяем направление прокрутки
      $(window).scrollLeft($(window).scrollLeft() + delta); // Прокручиваем страницу на определенное количество пикселей
    }
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
          scrollTop: targetBlock.offset().top,
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
