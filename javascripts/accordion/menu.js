$(function() {
	var section_heights = {description: 390, costs: 390, amenities: 718, period: 390};

	var accordion_menu_items = $('#property-accordion-menu .menu_item');

	console.log('accordion_menu_items', accordion_menu_items);		

	var section_removers = $('.accordion_section .remove');

	var accordion_menu = $('#property-accordion-menu.accordion_menu');
	
	function setAccordionMenuHeight() {
		var total = 0;
		for (var name in section_heights) {

			var accordion_section = $('#' + name + '-section');
			console.log('accordion_section:', accordion_section);

			var active_count = 0;
			if (accordion_section.hasClass('active')) {
				console.log('active:', name);
				active_count += 1;
				total += (section_heights[name] + 10);	
			}		
			total += ((active_count-1) * 6)
		}	
		accordion_menu.css('min-height', total);		
	}

	setAccordionMenuHeight();

	section_removers.click(function() {
		var remover = $(this);
		console.log('remover', remover);

		var section = remover.parent().parent().parent();
		console.log('section', section);

		var id = section.attr('id');
		var name = id.replace(/-section/, '');
		console.log('name', name);

		var menu_item = $('#' + name + '-menu-item');
		console.log('menu_item', menu_item);

		section.removeClass('active');
		section.addClass('inactive');	

		menu_item.removeClass('active');
		menu_item.addClass('inactive');	

		var indicator = menu_item.find('.indicator');
		console.log('indicator', indicator);

		// blank circle from menu to indicate inactive
		indicator.removeClass('icon-circle');
		indicator.addClass('icon-circle-blank');
	});

	accordion_menu_items.click(function() {
		var menu_item = $(this);
		console.log('menu_item', menu_item);

		var id = menu_item.attr('id');
		var name = id.replace(/-menu-item/, '');

		menu_item.toggleClass('active');
		var active = menu_item.hasClass('active');
	
		console.log('name', name);
		
		var accordion_section = $('#' + name + '-section');
		console.log('accordion_section', accordion_section);

		var indicator = menu_item.find('.indicator');
		console.log('indicator', indicator);		

		if (active) {
			indicator.addClass('icon-circle');
			indicator.removeClass('icon-circle-blank');

			accordion_section.addClass('active');	
			accordion_section.removeClass('inactive');	
		} else {
			indicator.removeClass('icon-circle');
			indicator.addClass('icon-circle-blank');

			accordion_section.removeClass('active');
			accordion_section.addClass('inactive');	
		}				
	});
});
