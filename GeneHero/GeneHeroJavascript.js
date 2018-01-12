/*Javascript
Richard Zhou
*/



// GOD BLESS COPY AND PASTE :D
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



var $animation_elements_trait_title = $('.trait-title');
var $animation_elements_subject_score = $('.subject-score');
var $animation_elements_fade_in = $('.trait-paragraph, .gene-box');
var $window = $(window);
var window_height = $window.height();
//probably a better way than making a function for each on but oh well

function check_if_in_view_left() {
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements_trait_title, function() {
    var $element1 = $(this);
    var element1_height = $element1.outerHeight();
    var element1_top_position = $element1.offset().top;
    var element1_bottom_position = (element1_top_position + element1_height);
    
    //check to see if this current container is within viewport
    if ((element1_bottom_position > window_top_position) &&
        (element1_top_position < window_bottom_position)) {
	  $element1.css('opacity','1');
	  $element1.css('-moz-transform', 'translate3d(0px, 0px, 0px)');
      $element1.css('-webkit-transform', 'translate3d(0px, 0px, 0px)');
      $element1.css('-o-transform', 'translate(0px, 0px)');
      $element1.css('-ms-transform', 'translate(0px, 0px)');
      $element1.css('transform', 'translate3d(0px, 0px, 0px)');
    }
    /*else{
	  $element1.css('opacity','0');
      $element1.css('-moz-transition', 'all 500ms linear');
      $element1.css('-webkit-transition', 'all 500ms linear');
      $element1.css('-o-transition', 'all 500ms linear');
      $element1.css('transition', 'all 500ms linear');
      $element1.css('-moz-transform', 'translate3d(-200px, 0px, 0px)');
      $element1.css('-webkit-transform,' 'translate3d(-200px, 0px, 0px)');
      $element1.css('-o-transform', 'translate(-200px, 0px)');
      $element1.css('-ms-transform', 'translate(-200px, 0px)');
      $element1.css('transform', 'translate3d(-200px, 0px, 0px)');
	}*/
  });
}

function check_if_in_view_right() {
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  
  $.each($animation_elements_subject_score, function() {
    var $element2 = $(this);
    var element2_height = $element2.outerHeight();
    var element2_top_position = $element2.offset().top;
    var element2_bottom_position = (element2_top_position + element2_height);
    
    //check to see if this current container is within viewport
    if ((element2_bottom_position > window_top_position) &&
        (element2_top_position < window_bottom_position)) {
	  $element2.css('opacity','1');
	  $element2.css('-moz-transform', 'translate3d(0px, 0px, 0px)');
      $element2.css('-webkit-transform', 'translate3d(0px, 0px, 0px)');
      $element2.css('-o-transform', 'translate(0px, 0px)');
      $element2.css('-ms-transform', 'translate(0px, 0px)');
      $element2.css('transform', 'translate3d(0px, 0px, 0px)');
    }
	/*else{
	  $element1.css('opacity','0');
      $element1.css('-moz-transition', 'all 500ms linear');
      $element1.css('-webkit-transition', 'all 500ms linear');
      $element1.css('-o-transition', 'all 500ms linear');
      $element1.css('transition', 'all 500ms linear');
      $element1.css('-moz-transform', 'translate3d(-200px, 0px, 0px)');
      $element1.css('-webkit-transform,' 'translate3d(-200px, 0px, 0px)');
      $element1.css('-o-transform', 'translate(-200px, 0px)');
      $element1.css('-ms-transform', 'translate(-200px, 0px)');
      $element1.css('transform', 'translate3d(-200px, 0px, 0px)');
	}*/
  });
}
//too slow, need to speed up all scroll funcions by caching(?) them beforehand
function check_if_in_view_fade_in() {
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  
  $.each($animation_elements_fade_in, function() {
    var $element3 = $(this);
    var element3_height = $element3.outerHeight();
    var element3_top_position = $element3.offset().top;
    var element3_bottom_position = (element3_top_position + element3_height);
    
    //check to see if this current container is within viewport
    if ((element3_bottom_position > window_top_position) &&
        (element3_top_position < window_bottom_position)) {
	  $element3.animate({opacity: 1}, 100);
    }
	//else{
		//works but makes website too slow
	  //$element3.animate({opacity: 0}, 100);
	//}
  });
}

$window.on('scroll resize', check_if_in_view_left);
$window.on('scroll resize', check_if_in_view_right);
$window.on('scroll resize', check_if_in_view_fade_in);
$window.trigger('scroll');



//randomize scores for "subject scores", then prints out a result depending on random number
//in real pracitice, the score would be based off of genetic results from helix
var sprintRating=0;
var ironRating=0;
var muscleRating=0;
var boneMassRating=0;
var IQRating=0;

//sets up page for each hero
/*iron man = high iron metabolism
batman = high IQ
the flash = sprint
hulk = muscle mass
superman = 3+ traits
bonemass????
if 2 traits are high, choose one randomly*/
function ironMan(){
    $('body').css('background-color', 'firebrick');
	$('.hero-page h1').text('You\'re Iron Man!');
	$('#hero-quote').text('\"I am Iron Man\"');
	$('#herosum').text('You naturally have a high iron metabolism! This isn\'t to say you aren\'t above average in other subjects.');
	$('body').css('background-image', 'url("https://s-media-cache-ak0.pinimg.com/originals/8c/16/cb/8c16cb9da19085e9ff307c5934ead19d.jpg")');
	$('.hero-summary img').attr('src', 'https://www.sideshowtoy.com/wp-content/uploads/2016/04/captain-america-civil-war-iron-man-xlvi-sixth-scale-marvel-silo-902708.png');
  }
function batMan(){
    $('body').css('background-color', 'black');
	$('.hero-page h1').text('You\'re Batman!');
	$('#hero-quote').text('\"I work alone\"');
	$('#herosum').text('You naturally have a high IQ! This isn\'t to say you aren\'t above average in other subjects.');
    $('body').css('background-image', 'url("https://seeklogo.com/images/B/Batman-logo-F8295E46F2-seeklogo.com.png")');
	$('.hero-summary img').attr('src', 'https://static.comicvine.com/uploads/original/11111/111112793/3031477-nealadamsbatman.jpg');
  }
function theFlash(){
    $('body').css('background-color', 'lightcoral');
	$('.hero-page h1').text('You\'re The Flash!');
	$('#hero-quote').text('\"Life is locomotion... keep moving\"');
	$('#herosum').text('You naturally excell at sprinting! This isn\'t to say you aren\'t above average in other subjects.');
	$('body').css('background-image', 'url("http://vignette3.wikia.nocookie.net/marvel_dc/images/d/df/Flash_Logo_01.png/revision/latest?cb=20140529051349")');
	$('.hero-summary img').attr('src', 'http://vignette4.wikia.nocookie.net/arrow/images/4/4a/The_Flash_season_2_costume_promotional.png/revision/latest?cb=20150720213316');
  }
function superMan(){
    $('body').css('background-color', 'skyblue');
	$('.hero-page h1').text('You\'re Superman!');
	$('#hero-quote').text('\"You\'re going to change the world\"');
	$('#herosum').text('You naturally excell at many different subjects! You may still find yourself to be above or below average in other catagories.');
	$('body').css('background-image', 'url("https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Superman_shield.svg/1280px-Superman_shield.svg.png")');
	$('.hero-summary img').attr('src', 'http://www.dccomics.com/sites/default/files/files/character-pops/superman_459Wx300H_589104907a0b05.70849485.png');
  }
function theHulk(){
    $('body').css('background-color', 'green');
	$('.hero-page h1').text('You\'re The Hulk!');
	$('#hero-quote').text('\"You wouldn\'t like me when I\'m Angry\"');
	$('#herosum').text('You naturally have above average muscle mass! This isn\'t to say you aren\'t above average in other subjects.');
	$('body').css('background-image', 'url("https://s-media-cache-ak0.pinimg.com/originals/ce/c7/36/cec7362d6a6968e53d77727c25ed0f35.jpg")');
	$('.hero-summary img').attr('src', 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png');
  }
function boneMass(){
	//can't find hero for boneMass...
  $('body').removeAttr('style');
  $('.hero-summary img').attr('src', 'https://image.flaticon.com/icons/png/512/30/30473.png');
  $('.hero-page h1').text('High bone mass');
  $('#hero-quote').text('No hero for you, but still impresive! You could be a new hero!');
  $('#herosum').text('You naturally have above average bone mass! This isn\'t to say you aren\'t above average in other subjects.');
}

function getNav(navBarID, num){
//num based on rating, 0=below avg, 1=avg, 2=above avg  
  switch (navBarID){
	case '#sprint':
	  sprintRating=num;
	  break;
	case '#iron':
	  ironRating=num;
	  break;
	case '#muscle':
	  muscleRating=num;
	  break;
	case '#bone-mass':
	  boneMassRating=num;
	  break;
	case '#IQ':
	  IQRating=num;
	  break;
	default:
	  sprintRating=100;
  }
}

//to know which page layout to use

function getScore(navBarID,rating){
  if (rating==='Above Average'){
    getNav(navBarID, 2);
  }
  
  if (rating==='Below Average'){
	getNav(navBarID, 0);
  }
  
  if (rating==='Average'){
	getNav(navBarID, 1);
  }
}

function rating(){
  var randomNum = Math.floor(Math.random()*3);

  if (randomNum===3){
    randomNum=2;
  }
  
  switch(randomNum){
    case 0:
	  return 'Below Average';
	case 1:
	  return 'Average';
	case 2:
	  return'Above Average';
  }
}

function changeScoreCSS(divClass,rating,paragraph){
  $(divClass).text("Your Score: " + rating);
  var navBarID = '';
  
  switch(divClass){
	  case '.trait-one .subject-score':
	    navBarID='#sprint';
		break;
	  case '.trait-two .subject-score':
	    navBarID='#iron'
		break;
	  case '.trait-three .subject-score':
	    navBarID='#muscle';
		break;
	  case '.trait-four .subject-score':
	    navBarID='#bone-mass';
		break;
	  case '.trait-five .subject-score':
	    navBarID='#IQ'
		break;
  }
  getScore(navBarID,rating);
  switch(rating){
    case 'Below Average':
	  $(divClass).css('background-color','rgba(256,0,0,1)');
	  $(navBarID).css('background-color','rgba(256,0,0,.5)');
	  $(paragraph).text('You scored below average');
	  break;
	case 'Average':
	  $(divClass).css('background-color','rgba(256,256,0,1)');
	  $(navBarID).css('background-color','rgba(256,256,0,.5)');
	  $(paragraph).text('You scored average');
	  break;    
	case 'Above Average':
	  $(divClass).css('background-color','rgba(0,256,0,1)');
	  $(navBarID).css('background-color','rgba(0,256,0,.5)');
	  $(paragraph).text('You scored above average! Congrats!');
	  break;
}
}

function chooseRandOfTwo(){
  
var randomNum = Math.random();
  if (randomNum<0.5){
    return 1;
  }
  else{
    return 2;
  }
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
		if (arr[i]===max){
		  var rand=chooseRandOfTwo();
		  if (rand===1){
			maxIndex=i
		  }
		}
    }

    return maxIndex;
}

function changePageLayout(){
  var sum=sprintRating+ironRating+muscleRating+boneMassRating+IQRating;
  if (sum>=6){
	superMan();
	return;
	//multiple high scores
  }
  
  var ratings=[sprintRating, ironRating, muscleRating, boneMassRating, IQRating];
  var maxIndex=indexOfMax(ratings);
  var highest='none';

  switch (maxIndex){
    case 0:
	  theFlash();
	  highest='sprinting';
	  break;
	case 1:
	  ironMan();
	  highest='iron metabolism';
	  break;  
    case 2:
	  theHulk();
	  highest='muscle mass';
	  break;
	case 3:
	  boneMass();
	  highest='bone mass';
	  break;
	case 4:
	  batMan();
	  highest='IQ';
	  break;
  }
  
  if (ratings[maxIndex]<2){
	  //in case they are not above average in any
	if (sum>=3){
	  superMan();
	  $('#herosum').text('You are naturally well rounded. Work hard, and you can become one of the best at anything!');
	  return;
	}
	else{
	  $('#herosum').text('One of you\'re highest ratings was in you\'re '+highest+'. Work hard, and you can become one of the best at anything!');
	}
  }
  if (ratings[maxIndex]<1){
	//in case they are not above average or average in any
	superMan();
	$('#herosum').text('You are naturally well rounded. Work hard, and you can become one of the best at anything!');
  }
}

changeScoreCSS('.trait-one .subject-score', rating(), '.trait-one #score');
changeScoreCSS('.trait-two .subject-score', rating(), '.trait-two #score');
changeScoreCSS('.trait-three .subject-score', rating(), '.trait-three #score');
changeScoreCSS('.trait-four .subject-score', rating(), '.trait-four #score');
changeScoreCSS('.trait-five .subject-score', rating(), '.trait-five #score');
changePageLayout();



//remove hover on phones
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}



var heroSumText='This contains a brief summary about the persons hero/quotes from the hero/what it means'
//make it so there is different colors styles change images etc.
$(document).ready(function (){
  $('#sample').click(function(){
	//resets everything to default values
    $('body').removeAttr('style');
	$('.hero-page h1').text('SAMPLE PAGE');
	$('#hero-quote').text('hero quote');
	$('.hero-summary img').attr('src', 'https://image.flaticon.com/icons/png/512/30/30473.png');
  });

  $('#iron-man').click(ironMan)
  
  $('#batman').click(batMan);
  
  $('#the-flash').click(theFlash);
  
  $('#superman').click(superMan);
  
  $('#the-hulk').click(theHulk);
  
  $('#bonemass').click(boneMass);
});