(function () {
	$(document).on('click', '.search-button', function () {
		$(this).parent().parent().toggleClass('active');
	});
})();