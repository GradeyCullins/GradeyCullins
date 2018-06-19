(function() {
	// close functionality for flash message
	$('.close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

	$('#accordion').accordion({
		collapsible: true
	});

	/* left column content */
	$('#about').load('../html/about.html');
	$('#extra').load('../html/extra.html');
	$('#portfolio').load('../html/portfolio.html');
	$('#contact').load('../html/contact.html');
	$('#fun').load('../html/fun.html');

	/* right column content */
	$('#right_column').load('../html/sidebar.html');

})();
