jQuery(function($){

	/*header top_button меню*/
    $(".toggle-mnu").click(function(){
        $(this).toggleClass("on");
        $(".main_menu").slideToggle();
        return false;
    });

    /*форма обратной связи*/
	/*E-mail Ajax Send*/
	/*Documentation & Example: https://github.com/agragregra/uniMail*/
	$("form").submit(function() { /*Change*/
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", /*Change*/
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				 /*Done Functions*/
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});