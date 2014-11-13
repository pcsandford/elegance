
  $(document).ready(function(){
   console.log('ready');

  //fade in of main text
  $('.headerText').fadeIn( 3000 );

  //automatic opening of cover
 var openingTimer = setTimeout(autoOpen, 5000);

 

  //open curtain on click event
  $('html').on('click',function(){
    $('.leftCover').css("left","-50vw");
    $('.rightCover').css("right","-50vw");
    $('.logoAreaMain').fadeIn().css("opacity","1");
    $('.headerText').fadeOut().css("opacity","0");
  });

  //automatic closing of cover and reset of cycle

 // var closingTimer = setTimeout(autoClose, 10000);

  function autoClose(){
    openingTimer = setTimeout(autoOpen, 5000);
    $('.leftCover').css("left","0vw");
    $('.rightCover').css("right","0vw");
    $('.logoAreaMain').fadeOut().css("opacity","0");
    $('.headerText').fadeIn( 3000 );
    clearTimeout(closingTimer);

  };

 function autoOpen(){
    $('.leftCover').css("left","-50vw");
    $('.rightCover').css("right","-50vw");
    $('.logoAreaMain').fadeIn().css("opacity","1");
    $('.headerText').fadeOut().css("opacity","0");
    clearTimeout(openingTimer);
    numberofSlides = 0;
    automaticSliderTimer = setInterval(slideSwitch, 10000 );
  };



 //slider functionality

$('.sp').first().addClass('active');
$('.sp').hide();    
$('.active').show();

//=======
//manual trigger functions
//=======

    $('.nextTrigger').click(function(){
      clearTimeout(automaticSliderTimer);
      $('.active').removeClass('active').addClass('oldActive');    
        if ( $('.oldActive').is(':last-child')) {
          $('.sp').first().addClass('active');
        }
        else{
          $('.oldActive').next().addClass('active');
        }
      $('.oldActive').removeClass('oldActive');
      $('.sp').fadeOut();
      $('.active').fadeIn();  
    });//close next trigger function
    
      $('.previousTrigger').click(function(){
         clearTimeout(automaticSliderTimer);
        $('.active').removeClass('active').addClass('oldActive');    
          if ( $('.oldActive').is(':first-child')) {
        $('.sp').last().addClass('active');
        }
          else{
            $('.oldActive').prev().addClass('active');
          }
      $('.oldActive').removeClass('oldActive');
      $('.sp').fadeOut();
      $('.active').fadeIn();
    });//close previous trigger function




//=======
//automatic timer for slide changes
//=======

// var automaticSliderTimer = setInterval(slideSwitch, 10000 );
var numberofSlides = 0

 function slideSwitch(){
      if (numberofSlides < 4) {
        $('.active').removeClass('active').addClass('oldActive'); 
        numberofSlides++;   
        if ( $('.oldActive').is(':last-child')) {
          $('.sp').first().addClass('active');
           

        }
          else{
            $('.oldActive').next().addClass('active');
            

        }
      $('.oldActive').removeClass('oldActive');
      $('.sp').fadeOut();
      $('.active').fadeIn();
      }else{
        clearTimeout(automaticSliderTimer);
        autoClose();

      };
    };
 });//close main function



        
