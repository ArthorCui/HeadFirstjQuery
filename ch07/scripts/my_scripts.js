$(document).ready(function() {

	var headclix = 0,
		eyesclix = 0,
		noseclix = 0,
		mouthclix = 0;

	goLightning();
	windows.onblur = stopLightning();
	windows.onfocus = goLightning();

	var int1, int2, int3;

	function goLightning() {

		int1 = setInterval(function() {
			lightning_one();
		}, 3000);

		int2 = setInterval(function() {
			lightning_two();
		}, 5000);

		int3 = setInterval(function() {
			lightning_three();
		}, 8000);
	}

	function stopLightning() {

		windows.clearInterval(int1);
		windows.clearInterval(int2);
		windows.clearInterval(int3);
	}


	$("#head").click(function() {
		if (headclix < 9) {
			$(this).animate({
				left: "-=367px"
			}, 500);
			headclix += 1;
		} else {
			$(this).animate({
				left: "0px"
			}, 500);
			headclix = 0;
		}
	});

	$("#eyes").click(function() {
		if (eyesclix < 9) {
			$(this).animate({
				left: "-=367px"
			}, 500);
			eyesclix += 1;
		} else {
			$(this).animate({
				left: "0px"
			}, 500);
			eyesclix = 0;
		}
	});

	$("#nose").click(function() {
		if (noseclix < 9) {
			$(this).animate({
				left: "-=367px"
			}, 500);
			noseclix += 1;
		} else {
			$(this).animate({
				left: "0px"
			}, 500);
			noseclix = 0;
		}
	});

	$("#mouth").click(function() {
		if (mouthclix < 9) {
			$(this).animate({
				left: "-=367px"
			}, 500);
			mouthclix += 1;
		} else {
			$(this).animate({
				left: "0px"
			}, 500);
			mouthclix = 0;
		}
	});
});

function lightning_one() {
	$("#container #lightning1").fadeIn(250).fadeOut(250);
};

function lightning_two() {
	$("#container #lightning2").fadeIn("fast").fadeOut("slow");
};

function lightning_three() {
	$("#container #lightning3").fadeIn("slow").fadeOut("fast");
};