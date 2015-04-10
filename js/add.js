// JavaScript Document
var $j = jQuery.noConflict();
$j(document).ready(function () {
    $j('.img240').hover(function () {
        $j(this).children(".inBlckW").stop().animate({opacity: 0}, 600)
    }, function () {
        $j(this).children(".inBlckW").stop().animate({opacity: 1}, 750)
    });
    $j('.top-block').hover(function () {
        $j(this).children(".iconShow2").stop().animate({opacity: 1}, 600)
    }, function () {
        $j(this).children(".iconShow2").stop().animate({opacity: 0}, 750)
    });
    $j('#topMenu ul li a').hover(function () {
        $j(this).children(".menuHover").css('display', 'inline-block').stop().animate({opacity: 1}, 600)
    }, function () {
        $j(this).children(".menuHover").stop().animate({opacity: 0}, 750)
    });

});

$j('tr.border-bottom').on('mouseover', function(){
    $j(this).addClass('active');
});

$j('tr.border-bottom').on('mouseout', function(){
    $j(this).removeClass('active');
});

var cp = function(selector, value, size, p){
    selector.circleProgress({
        value: value,
        size: size,
        fill: {gradient: ['#4B86DB', '#4B86DB']}
    }).on('circle-animation-progress', function (event, progress) {
        $j(this).find('strong').html(parseInt(p * progress) + '<i>%</i>');
    });
}