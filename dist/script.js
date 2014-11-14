$(document).ready(function(){
   console.log('ready');

var rightCover = $('.rightCover'),
    leftCover = $('.leftCover'),
    headerText = $('.headerText'),
    logoAreaMain = $('.logoAreaMain')
    tl = new TimelineMax();


//setting up the opening timeline for the animation

var openTimeline = new TimelineMax();
function getOpenAnimation(){
      openTimeline.to(headerText,3,{opacity:'1'});
      openTimeline.to(headerText,0,{opacity:'0'});
      openTimeline.to(rightCover,0, {right:'-50vw'});
      openTimeline.to(leftCover,0, {left:'-50vw'});
      openTimeline.to(logoAreaMain,0,{opacity:'1'})
      openTimeline.addLabel('openCompleted');

    return openTimeline;
  }

//add the items to the opening timeline
    
  tl.add('headerText')
    .add('leftCover')
    .add('rightCover')
    .add('logoAreaMain')

//the function that plays the opening animation
function playOpenAnimation(){
    console.log("open");
    tl.play(getOpenAnimation());
    numberofSlides = 0;
    automaticSliderTimer = setInterval(slideSwitch, 10000 );
   };
playOpenAnimation();

//auto open on touch
$('html').on('click',function(){
    console.log('jump to open and pause');
    $('html').unbind('click');
    openTimeline.pause(3);
  });

//setting up the closing timeline animaition
 
var tl2 = new TimelineMax();

var closeTimeline = new TimelineMax();
function getCloseAnimation(){
      closeTimeline.to(rightCover,0, {right:'0vw'});
      closeTimeline.to(leftCover,0, {left:'0vw'});
      closeTimeline.to(logoAreaMain,0,{opacity:'0'})
      closeTimeline.addLabel('openCompleted');

    return closeTimeline;
  }


//add the items to the opening timeline
    
  tl2.add('leftCover')
     .add('rightCover')
     .add('logoAreaMain')


     //the function that plays the opening animation
     function playCloseAnimation(){
         console.log("open");
         tl2.play(getCloseAnimation());
        };
     playCloseAnimation();

  var closingTimer = setTimeout(playCloseAnimation, 40000)   
  //open curtain on click event
  // $('html').on('click',function(){
  //   $('.leftCover').css("left","-50vw");
  //   $('.rightCover').css("right","-50vw");
  //   $('.logoAreaMain').fadeIn().css("opacity","1");
  //   $('.headerText').fadeOut().css("opacity","0");
  // });

  //automatic closing of cover and reset of cycle

 // var closingTimer = setTimeout(autoClose, 10000);

 //  function autoClose(){
 //    $('.leftCover').css("left","0vw");
 //    $('.rightCover').css("right","0vw");
 //    $('.logoAreaMain').fadeOut().css("opacity","0");
 //    $('.headerText').fadeIn( 3000 );
 //  };

 // function autoOpen(){
 //    $('.leftCover').css("left","-50vw");
 //    $('.rightCover').css("right","-50vw");
 //    $('.logoAreaMain').fadeIn().css("opacity","1");
 //    $('.headerText').fadeOut().css("opacity","0");
    
 //  };



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

      };
    };
 });//close main function
