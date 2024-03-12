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
  var block3Offset = $("#block3").offset().top;

  // Показать/скрыть кнопку "Подняться наверх"
  $(window).scroll(function () {
    if ($(this).scrollTop() > block3Offset) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  // Плавная прокрутка к якорю
  $("nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      var targetOffset = $(hash).offset().top; // Уменьшаем отступ сверху
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

  $("div a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Кнопка "Подняться наверх"
  $("#scrollTopBtn").on("click", function () {
    $("html, body").animate({ scrollTop: block3Offset }, "slow");
  });
});
