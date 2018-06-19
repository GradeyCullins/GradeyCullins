
$('#hidden-message').hide();
var counter = 0;

$('#message').on('click', function() {
	if(counter % 2 == 0) {
		$('#hidden-message').fadeIn();
	} else {
		$('#hidden-message').fadeOut();
	}
	counter++;
});

$('img').hide();
var bounter = 0;
$('#kitty').on('click', function() {
	if(bounter % 2 == 0) {
		$('img').fadeIn();
	} else {
		$('img').fadeOut();
	}
	bounter++;
});

// custom animation method using the .animate() method from the jquery library
$(function() {
	$('h2').on('click', function() {
		$(this).animate({
			opacity: 0.0,
			paddingLeft: '+=80'
		}, 1000, function() {
			$(this).remove();
		});
	});
});


// anon function that handles the to-do list
$(function() {
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textinput = $('input:text');
	
	$newItemButton.show();
	$newItemForm.hide();
	
	$('#showForm').on('click', function() {
		$newItemButton.hide();
		$newItemForm.show();
		$textinput.val('');
	});
	
	$newItemForm.on('submit', function(e) {
		e.preventDefault();
		var newText = $('input:text').val();
		$('li:last').after('<li>' + newText + '</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$textInput.val('');
	});
});

/*
$(function() {
	$('#kitty-holder').on('click', function() {
		$('#kitty-holder').width('200px');	
	});
});
*/

// this is ajax
$('#content').on('click', function() {
	$('#hidden-message').load('../sample.html #content');
});

$(function() {
    $( "#tabs" ).tabs({
  collapsible: true
});
    
  });

