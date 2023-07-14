$(function () {   
    
    
  $('.menu__btn').on('click', function(){ 
   $('.menu__list').toggleClass('menu__list--active')
  }) 
     
  
  $('.menu__link').on('click', function(){ 
   $('.menu__list').removeClass('menu__list--active')
  }) 
 
  $('.reservation__btn').on('click', function(e){ 
    e.preventDefault();
  }) 

 $('.slide__slider').slick({ 
    arrows: false,  
    dots: true,  
    fade: true, 
     
    responsive: [
     
    
      {
        breakpoint: 750,
        settings: {
          dots: false,
          autoplay: true,
        }
      },
    
    
    ]

 });
   
   
});