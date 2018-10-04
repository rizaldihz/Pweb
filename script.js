$(document).ready(function(){
	
	if (typeof(Storage) !== "undefined") {
	var logged = false;
	
	$(".regbox").hide();
	$(".user").hide();
	$(".logout").hide();

	$(".login, .logout").click(function(){
		if(!logged) logged = true;
		else logged = false;
		$(".login").toggle(function(){
			$('span','.user').text('User454');
			localStorage.setItem('user',$('span','.user').html());
		});
		$(".regist").toggle();
		$(".user").toggle();
		$(".logout").toggle();
		$(".regbox").fadeOut();
	});

	$(".regist").click(function(){
		$(".regbox").fadeIn();
	});

	$(".close").click(function(){
		$(".regbox").fadeOut();
	});

	$(".chat").click(function(){
		if(!logged){
			alert("Login First");
		}
		else{
			$(".chat").attr("href","chat.html");
		}
	});

	$('.sub').click(function(){
		logged = true;
		var name = $('.in').val();
		$(".regist").toggle();
		$(".logout").toggle();
		$(".regbox").fadeOut();
		$(".login").hide(function(){
			$('.user').toggle(function(){
				$('span','.user').text(name);
				localStorage.setItem('user',$('span','.user').html());
			});
		});
	});
	}
});