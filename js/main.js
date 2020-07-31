const dynamicAdaptive = (breakPoint, firstElement, secondElement, thirdElement) => {
  // let parent = $(firstElement).attr("class");
  // parent.substring(0, parent.indexOf(" "));
  if (document.body.clientWidth < breakPoint) {
    $(firstElement).appendTo($(secondElement));
  } else {
    $(firstElement).appendTo($(thirdElement));
  }
}
$(document).ready(() => {


  $("#recall__open-btn").on("click", () => {
    $(".popup, .recall").removeClass("hidden");
    $(".popup__background, .popup__recall").fadeIn();
  });

  $("#recall__close-btn").on("click", () => {
    $(".popup__background, .recall").fadeOut();
    $(".recall, .popup").addClass("hidden");
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

  const sliderSections = [".sets", ".rolls"];

  $.each(sliderSections, (i, element) => {
    $(element).find(".products-carousel__body").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: $(element).find(".carousel-control__btn-prev"),
      nextArrow: $(element).find(".carousel-control__btn-next"),
      appendDots: $(element).find(".carousel-control__dots"),
      dots: true,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 936,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 625,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    });
  });


  dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");
});

$(window).on("resize", () => {
  dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");
});