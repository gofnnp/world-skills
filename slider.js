$(function () {
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        responsive: [
          {
            breakpoint: 1011,
            settings: {
              dots: false,
              arrows: false,
            }
          },
        ]
      })

})