$(document).ready(function() {
	$(".guess_box").click(checkForCode);

	function checkForCode() {
		var discount = Math.floor((Math.random() * 5) + 5);
		var discount_msg = "<p>Your discount is " + discount + "%</p>";
		$(this).append(discount_msg);

		$(".guess_box").each(function() {
			$(this).unbind('click');
		});
	}
});