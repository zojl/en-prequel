(function($) {
	$.fn.prequel = function(params){
		var defaults = {
			imageUrl: 'http://d1.endata.cx/data/games/60776/приквел.png'
		}
		var finParams = $.extend({}, defaults, params);
		var imageUrl = finParams.imageUrl;
		var imageUrlPrefix = imageUrl.substr(0, imageUrl.lastIndexOf('/')+1);
		var imageExt = imageUrl.substr(imageUrl.lastIndexOf('.'));
		var parent = $('#prequel');
		var image = $('<img>').attr('src', imageUrl).addClass('prequel-image');
		var error = $('<span>').addClass('prequel-error').text('');
		var form = $('<form>');
		var formAnswer = $('<input>').attr('type', 'text').addClass('prequel-answer');
		var formSubmit = $('<input>').attr('type', 'submit').attr('value', 'Отправить').addClass('prequel-submit');
		form.append(formAnswer).append(formSubmit);
		parent.append(image).append($('<br>'));
		parent.append(error).append($('<br>'));
		parent.append(form);
		form.submit(function(){
			var answer = formAnswer.val().toLowerCase().replace(/\s/g, '');;
			var url = imageUrlPrefix + answer + imageExt;
			var oldUrl = image.attr('src');
			image.attr('src', url);
			error.text('');
			image.one('error', function(){
				error.text('Ответ ' + answer + ' неправильный');
				image.attr('src', oldUrl);
			});
			return false;
		});
	}
})(window.jQuery);
