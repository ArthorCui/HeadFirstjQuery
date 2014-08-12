$(document).ready(function() {

	var click_status = status;

	$("button#vegOn").click(function() {

		if (click_status == false) {

			$f = $(".fish").parent().parent().detach();
			$(".hamburger").replaceWith("<li class='portobello'><em>portobello Mushroom</em></li>");
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
			$m = $(".meat").detach();
			$(".portobello").parent().parent().addClass("veg_leaf");
			$(".tofu").parent().parent().addClass("veg_leaf");

			click_status = true;
		}
	});

	$("button#restoreMe").click(function() {
		if (click_status == true) {

			$(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");
			$(".menu_entrees li").first().before($f);
			$(".tofu").each(function(i) {
				$(this).after($m[i]);

			});
			$(".hamburger").parent().parent().removeClass("veg_leaf");
			$(".tofu").parent().parent().removeClass("veg_leaf");
			$(".tofu").remove();

			click_status = false;
		}
	});
});