$(document).ready(function() {

	var headclix = 0,
		eyesclix = 0,
		noseclix = 0,
		mouseclix = 0;

	lightning_one(3000);
	lightning_two(4000);
	lightning_three(6000);

	$("#head").click(function() {
		if (headclix <= 9) {
			headclix += 1;
		} else {
			headclix = 0;
		}
	});

	$("#eyes").click(function() {
		if (eyesclix <= 9) {
			eyesclix += 1;
		} else {
			eyesclix = 0;
		}
	});

	$("#nose").click(function() {
		if (noseclix <= 9) {
			headclix += 1;
		} else {
			noseclix = 0;
		}
	});

	$("#mouse").click(function() {
		if (mouseclix <= 9) {
			mouseclix += 1;
		} else {
			mouseclix = 0;
		}
	});

	function lightning_one(t) {
		$("#lightning1").fadeIn(250).fadeOut(250);
		setTimeout("lightning_one()", t);
	}

	function lightning_two(t) {
		$("#lightning2").fadeIn(250).fadeOut(250);
		setTimeout("lightning_two()", t);
	}

	function lightning_three(t) {
		$("#lightning3").fadeIn(250).fadeOut(250);
		setTimeout("lightning_three()", t);
	}
});