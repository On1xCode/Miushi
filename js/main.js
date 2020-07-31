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


  dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");

  $(".carousel__body").slick({
    infinite: true,
    prevArrow: $(".carousel__btn-prev"),
    nextArrow: $(".carousel__btn-next"),
    dots: true,
    appendDots: $(".carousel__dots"),
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          arrows: false
        }
      }
    ]
    // fade: true

  });

});

$(window).on("resize", () => {
  dynamicAdaptive(920, ".user", ".top-header", ".bottom-header");


});