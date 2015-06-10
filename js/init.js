/*document ready===================================================================================================*/
$(document).ready(function () {
	/*viewport width====================*/
	function viewport() {
		var e = window, a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}	
	/*end viewport width====================*/
	
	//eric eyer reset fix
	$(".contentWrapper img[vspace]").each(function(index, element)
		{
			var $this = $(element);
			var $vspaceVal=$this.attr("vspace");
			console.log($vspaceVal);
			$this.css({ "margin-top" : $vspaceVal+"px", "margin-bottom" : $vspaceVal+"px" });

		});
		
	$(".contentWrapper img[hspace]").each(function(index, element)
		{
			var $this = $(element);
			var $hspaceVal=$this.attr("hspace");
			console.log($hspaceVal);
			$this.css({ "margin-left" : $hspaceVal+"px", "margin-right" : $hspaceVal+"px" });

		});		
	
	/*place holder fix/fallback in IE8===========================================================*/
	if ( !("placeholder" in document.createElement("input")) ) {
        $("input[placeholder], textarea[placeholder]").each(function() {
            var val = $(this).attr("placeholder");
            if ( this.value == "" ) {
                this.value = val;
            }
            $(this).focus(function() {
                if ( this.value == val ) {
                    this.value = "";
                }
            }).blur(function() {
                if ( $.trim(this.value) == "" ) {
                    this.value = val;
                }
            })
        });
 
        // Clear default placeholder values on form submit
        $('form').submit(function() {
            $(this).find("input[placeholder], textarea[placeholder]").each(function() {
                if ( this.value == $(this).attr("placeholder") ) {
                    this.value = "";
                }
            });
        });
    }
	/*end place holder fix/fallback in IE8=====================================================*/
	
	/*main carousel====================================================================================*/
	function mainCarousel(){
		$(".owl-carousel").owlCarousel({
	
			lazyLoad : true,
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay:4000,
			stopOnHover:true,
			rewindNav:true,
			responsive:true,
			autoHeight : true,
			responsiveRefreshRate:100,
			afterLazyLoad : function afterLazyLoad(evt){
				//caption support
				TweenLite.to($(evt).find('.owl-wrapper-outer .owl-wrapper .owl-item:not(.loading) .item .box'), .4, {opacity:1}); 
				//animate all at once
				//rule out the still loading item, only animate the existing
				//or use css animation
			}
			
			// "singleItem:true" is a shortcut for:
			// items : 1, 
			// itemsDesktop : false,
			// itemsDesktopSmall : false,
			// itemsTablet: false,
			// itemsMobile : false
			
		}); 
	}
	
	if ( $(".owl-carousel").length )mainCarousel();
	/*end main carousel====================================================================================*/

	
	/*window load===================================================================================================*/
	$(window).load(function() {	
	
	
	});
	/*end window load===================================================================================================*/
});
/*end document ready=======================================================================================================*/
