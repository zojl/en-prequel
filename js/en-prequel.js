(function($) {
	$.fn.prequel = function(params){
		let defaults = {
			imageUrl: 'http://d1.endata.cx/data/games/60776/приквел.png'
		}
		let finParams = $.extend({}, defaults, params);
		let imageUrl = finParams.imageUrl;
		let imageUrlPrefix = imageUrl.substr(0, imageUrl.lastIndexOf('/')+1);
		let imageExt = imageUrl.substr(imageUrl.lastIndexOf('.'));
		let parent = $('#prequel');
		let image = $('<img>').attr('src', imageUrl).addClass('prequel-image');
		let error = $('<span>').addClass('prequel-error').text('');
		let form = $('<form>');
		let formAnswer = $('<input>').attr('type', 'text').addClass('prequel-answer');
		let formSubmit = $('<input>').attr('type', 'submit').attr('value', 'Отправить').addClass('prequel-submit');
		form.append(formAnswer).append(formSubmit);
		parent.append(image).append($('<br>'));
		parent.append(error).append($('<br>'));
		parent.append(form);
		form.submit(function(){
			let answer = formAnswer.val().toLowerCase().replace(/\s/g, '');;
			let url = imageUrlPrefix + answer + imageExt;
			let oldUrl = image.attr('src');
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