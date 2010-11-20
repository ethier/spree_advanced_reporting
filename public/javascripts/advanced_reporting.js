$(function() {
	$('table.show_data td').click(function() {
		$('table.show_data td').not(this).removeClass('selected');
		$(this).addClass('selected');
		var id = 'div#' + $(this).attr('id') + '_data';
		$('div.advanced_reporting_data').not($(id)).hide();
		$(id).show();
	});
	$('table.tablesorter').tablesorter();
	$('table.tablesorter').bind("sortEnd", function() {
		var section = $(this).parent().attr('id');
		var even = true;
		$.each($('div#' + section + ' table tr'), function(i, j) {
			$(j).removeClass('even').removeClass('odd');
			$(j).addClass(even ? 'even' : 'odd');
			even = !even;
		});
	});
})