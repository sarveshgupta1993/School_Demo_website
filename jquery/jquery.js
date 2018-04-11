$(document).ready(function(){

//set options

var speed=500;             // fade speed
var autoswitch=true;      //auto slider options
var autoswitchspeed=4000; //auto slider speed

 
//Add initial active class

$('.slide').first().addClass('active');

//hide all slides
$('.slide').hide();

//show first slide

$('.active').show();

//next handler

$('#next').on('click',nextSlide);


$('#Prev').on('click',previousSlide);


if(autoswitch==true)
{
setInterval(nextSlide,autoswitchspeed);

}



//switch function to next slide

function nextSlide()
{


$('.active').removeClass('active').addClass('oldActive');

if($('.oldActive').is(':last-child'))
{

$('.slide').first().addClass('active');
}
else
{
$('.oldActive').next().addClass('active');
}
$('.oldActive').removeClass('oldActive');
$('.slide').fadeOut(speed);
$('.active').fadeIn(speed);
}


//switch function to previous slide

function previousSlide()
{
$('.active').removeClass('active').addClass('oldActive');

if($('.oldActive').is(':first-child'))
{

$('.slide').last().addClass('active');
}
else
{
$('.oldActive').prev().addClass('active');
}
$('.oldActive').removeClass('oldActive');
$('.slide').fadeOut(speed);
$('.active').fadeIn(speed);

}

});
