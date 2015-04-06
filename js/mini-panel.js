var $j = jQuery.noConflict();
$j(document).ready( function(){
	$j("#btn-slide1").click(function(){
		if($j(this).hasClass('panel-active')){
			$j("#panel1").hide('slow');
			$j(this).removeClass("panel-active"); return false;
		}else{
                        $j("#panel1").show('slow');
                        $j(this).addClass("panel-active"); return false;
		}
	});
	$j("#btn-slide1.panel-active").click(function(){
		$j("#panel1").show('slow');
		$j(this).toggleClass("panel-active"); return false;
	});
	$j("#btn-slide2").click(function(){
		$j("#panel2").slideToggle("slow");
		$j(this).toggleClass("panel-active"); return false;
	});
	$j("#btn-slide3").click(function(){
		$j("#panel3").slideToggle("slow");
		$j(this).toggleClass("panel-active"); return false;
	});
	$j("#btn-slide4").click(function(){
		$j("#panel4").slideToggle("slow");
		$j(this).toggleClass("panel-active"); return false;
	});
});
