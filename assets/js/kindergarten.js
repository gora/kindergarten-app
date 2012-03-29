// Gora: Added for orientation: Needs XUI
document.addEventListener("orientationChanged", updateOrientation); 

function onOrientationChange() {
    if( window.orientation == -90 || window.orientation == 90 ) {	    
	// Switch to landscape
	alert( "Landscape" );
	x$( "#welcome" ).css( "width", "480px" );
	// Change main, and footer images
	x$( "#main-img, #footer-img" ).each( function() {
	    var src = attr( "src" );
	    var idx = src.indexOf( "_portrait.jpg" );
	    if( idx != -1 ) {  // Check should not be neeed
		x$(this).attr( "src", src.substring( 0, idx ) + ".jpg" );
	    }
	});
	x$( "#main-img" ).css( { "width": 480px, "height": 480px } );
	x$( "#footer-img" ).css( { "width": 480px, "height": 36px } );

	// Change icons
	x$( "a.rotate-img" ).each( function() {
	    src = x$(this).first().attr( "src" );
	    idx = src.indexOf( "_portrait.jpg" );
	    if( idx != -1 ) {  // Check should not be neeed
		x$(this).first().attr( "src", src.substring( 0, idx ) + ".jpg" );
		x$(this).first().css( { "width": 92px, "height": 96px } );
	    }
	});
    } else {
	// Switch to portrait
	alert( "Portrait" );
	x$( "#welcome" ).css( "width", "300px" );
	// Change main, and footer images
	x$( "#main-img, #footer-img" ).each( function() {
	    var src = attr( "src" );
	    var idx = src.indexOf( ".jpg" );
	    if( idx != -1 ) {  // Check should not be neeed
		x$(this).attr( "src", src.substring( 0, idx ) + "_portrait.jpg" );
	    }
	});
	x$( "#main-img" ).css( { "width": 300px, "height": 297px } );
	x$( "#footer-img" ).css( { "width": 300px, "height": 24px } );

	// Change icons
	x$( "a.rotate-img" ).each( function() {
	    src = x$(this).first().attr( "src" );
	    idx = src.indexOf( ".jpg" );
	    if( idx != -1 ) {  // Check should not be neeed
		x$(this).first().attr( "src", src.substring( 0, idx ) + "_portrait.jpg" );
		x$(this).first().css( { "width": 58px, "height": 65px } );
	    }
	});
    }
}

x$(window).on('orientationchange', onOrientationChange);
