// JavaScript Document
var $j = jQuery.noConflict();
$j(document).ready(function(){
	$j('.img240').hover(function(){$j(this).children(".inBlckW").stop().animate({opacity:0}, 600)},function(){$j(this).children(".inBlckW").stop().animate({opacity:1}, 750)});
	$j('.top-block').hover(function(){$j(this).children(".iconShow2").stop().animate({opacity:1}, 600)},function(){$j(this).children(".iconShow2").stop().animate({opacity:0}, 750)});
		$j('#topMenu ul li a').hover(function(){$j(this).children(".menuHover").css('display','inline-block').stop().animate({opacity:1}, 600)},function(){$j(this).children(".menuHover").stop().animate({opacity:0}, 750)});
});