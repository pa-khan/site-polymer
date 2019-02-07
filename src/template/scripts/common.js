$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var typesNav = $('.types__nav-list'),
			typesList = $('.types__list'),
			typesDots = $('.types__dots'),
			typesLength = $('.types__item').length,
			typesCurrent = $('.types__counts .counts__current'),
			typesTotal = $('.types__counts .counts__total');

	typesTotal.text(typesLength < 10 ? "0" + typesLength : typesLength);
	typesNav.slick({
		slidesToShow: 5,
		arrows: false,
		asNavFor: typesList,
		focusOnSelect: true,
		variableWidth: true
	});

	typesList.slick({
		dots: true,
		appendDots: typesDots,
		asNavFor: typesNav,
		fade: true
	});

	typesList.on('afterChange', function(event, slick, direction){
		direction++;
		direction = direction < 10 ? "0" + direction : direction;
		// direction = typesLength < 10 ? "0" + typesLength : typesLength
	  typesCurrent.text(direction);
	});

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('radio');
	
	$('select').styler();

	$('.news').tabs();
});
