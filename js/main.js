const dynamicAdaptive = (breakPoint, element, newParent, initialParent) => {
  if (document.body.clientWidth < breakPoint) {
    $(element).appendTo($(newParent));
  } else {
    $(element).appendTo($(initialParent));
  }
}


$(window).on("load", () => {

  $(".carousel__body").slick({
    infinite: true,
    prevArrow: $(".carousel__btn-prev"),
    nextArrow: $(".carousel__btn-next"),
    appendDots: $(".carousel__dots"),
    dots: true,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          arrows: false
        }
      }
    ]
  });

  const sliderSections = [".sets", ".rolls", ".pizza", ".wok", ".promotion"];

  $.each(sliderSections, (i, el) => {
    $(el).find(".products-carousel__body").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: $(el).find(".carousel-control__btn-prev"),
      nextArrow: $(el).find(".carousel-control__btn-next"),
      appendDots: $(el).find(".carousel-control__dots"),
      dots: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 460,
          settings: {
            dots: true
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            dots: true
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 3,
            dots: true
          }
        },
        {
          breakpoint: 1130,
          settings: {
            slidesToShow: 4,
            dots: true
          }
        }
      ]
    });
  });



});




$(document).ready(() => {


  $("#recall__open-btn, #menu-recall__open-btn").on("click", (event) => {
    event.preventDefault();
    $(".popup, .recall").removeClass("hidden");
    if ($(".popup__menu").hasClass("active")) {
      // console.log($(".popup__menu"));
      $(".popup__menu").removeClass("active");
    }
    setTimeout(() => {
      $(".popup__background, .popup__recall").fadeIn();
    }, 150);
  });

  $("#recall__close-btn").on("click", () => {
    $(".popup__background, .recall").fadeOut();
    setTimeout(() => {
      $(".recall, .popup").addClass("hidden");
    }, 200)
  });

  $("#recall-btn").on("click", () => {
    let name = $("#recall-name").val().trim(),
      phone = $("#recall-phone").val().trim(),
      errorMessage = $(".popup__form-error");

    if (name.length == 0) {
      errorMessage.text("*Введите ваше имя!");
    } else if (phone.length == 0) {
      errorMessage.text("*Ведите ваш номер телефона");
    } else {
      errorMessage.text("Сообщение отправлено");
      errorMessage.css("color", "green");
    }
  });

  $("#popup__open-btn").on("click", () => {
    $(".popup, .popup__background").removeClass("hidden");
    $(".popup__background").fadeIn();
    $(".popup__basket").addClass("active");
  });

  $("#basket__close-btn").on("click", () => {
    $(".popup__basket").removeClass("active");
    $(".popup__background").fadeOut();
    $(".popup__background").addClass("hidden");
    setTimeout(() => {
      $(".popup").addClass("hidden")
    }, 200);
  });

  $(".burger").on("click", () => {
    $(".popup, .popup__background").removeClass("hidden");
    $(".popup__background").fadeIn();
    $(".popup__menu").addClass("active");
  });

  $("#menu__close-btn").on("click", () => {
    $(".popup__menu").removeClass("active");
    $(".popup__background").fadeOut();
    setTimeout(() => {
      $(".popup, .popup__background").addClass("hidden");
    }, 200);
  });


  // counter 
  let counter = $(".counter");
  $.each(counter, (i, element) => {
    let counterElements = $(element).children();
    let counterButtons = [counterElements[0], counterElements[2]];
    let counterNumber = counterElements[1];
    let counterValue = parseInt($(counterElements[1]).text());

    $.each(counterButtons, (i, button) => {
      $(button).on("click", () => {
        if ($(button).hasClass("counter__btn-minus") && counterValue > 0) {
          $(counterNumber).text(--counterValue)
        } else if ($(button).hasClass("counter__btn-plus")) {
          $(counterNumber).text(++counterValue)
        }
      });
    });
  });


});



$(window).on("load resize", () => {
  dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");

});