$('.goby-teams').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    centerMode: false,
    centerPadding: "15px",
    dots: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
        
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});