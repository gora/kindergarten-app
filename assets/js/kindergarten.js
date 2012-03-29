// Gora: Added for orientation: Needs XUI
function onOrientationChange() {
    if( window.orientation == -90 || window.orientation == 90 ) {	    
	// Switch to landscape
	// Change main image
	var src = x$( "#main-img,#footer-img" ).attr( "src" );
	var idx = src.indexOf( "_portrait.jpg" );
	if( idx != -1 ) {  // Check should not be neeed
	    x$( "#main-img" ).attr( "src", src.substring( 0, idx ) + ".jpg" );
	}

	// Change icons
	x$( "a.rotate-img" ).each( function() {
	    src = x$(this).first().attr( "src" );
	    idx = src.indexOf( "_portrait.jpg" );
	    if( idx != -1 ) {  // Check should not be neeed
		x$(this).first().attr( "src", src.substring( 0, idx ) + ".jpg" );
	    }
	});
    } else {
	// Switch to portrait
	// Change main image
	var src = x$( "#main-img" ).attr( "src" );
	var idx = src.indexOf( ".jpg" );
	if( idx != -1 ) {  // Check should not be neeed
	    x$( "#main-img" ).attr( "src", src.substring( 0, idx ) + "_portrait.jpg" );
	}

	// Change icons
	x$( "a.rotate-img" ).each( function() {
	    src = x$(this).first().attr( "src" );
	    idx = src.indexOf( ".jpg" );
	    if( idx != -1 ) {  // Check should not be neeed
		x$(this).first().attr( "src", src.substring( 0, idx ) + "_portrait.jpg" );
	    }
	});
    }
}

x$(window).on('orientationchange', onOrientationChange);
