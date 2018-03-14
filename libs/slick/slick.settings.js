(function() {
  const $slider = $('#slider');
  const $btn = direction => $(`#slider-btn-${direction}`);
  const $dots = $('#slider-dots');

  $slider.slick({
      slidesToShow: 1,
      arrows: false, // turn off original arrows
      dots: true,
      appendDots: $dots,
      infinit: true,
      speed: 1000,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });

  $btn('left').click(() => $slider.slick('slickPrev'));
  $btn('right').click(() => $slider.slick('slickNext'));

}());
