$( "img" ).addClass( "rounded float-right" );


/* function i$("body").addClass("modal-open");d(){
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     
    $("body").addClass("modal-open");
	$(".modal-body").css({"height": "100%","overflow-y":"hidden"});
	$(".modal-content").css({"height": "100%", "overflow-y":"scroll"});
}
else
	 $("body").removeClass("modal-open");
	   $(".modal-dialog").css({"height": "250px", "overflow-y":"scroll"});
$(".modal-body").css({"height": "250px"},"overflow-y":"scroll"}); */
	
	 
/* }
	 setInterval(id, 5); */
	 

	 
	 
	 function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();
     if(width<670){
		  $(".modal-dialog").removeAttr("style");
		 $("body").addClass("modal-open");
		 $(".modal-body").css({"height": "100%"}); 
		 		
	 }
	if(width>670){
		  $("body").removeClass("modal-open");
            $(".modal-dialog").css({"height": "90%", "overflow-y":"scroll"}); 
        $(".modal-body").css({"height": "100%","overflow-y":"hidden"});
	 }
};

	 
	 
	 $(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);   
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 