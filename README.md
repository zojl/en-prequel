# en-prequel
Короткий и тупой скрипт для энкаунтера
Использовать так:
* Подключить файл
* На пустом блоке вызвать функцию prequel();

Пример:

    $('#prequel').prequel({
        imgUrl:'http://d1.endata.cx/data/games/60776/%D0%BF%D1%80%D0%B8%D0%BA%D0%B2%D0%B5%D0%BB.png'
    });

Самый простой способ использования:

    <div id="prequel"></div>
    <script type="text/javascript">
    $.getScript('https://reqloud.com/work/en-prequel/js/en-prequel.js').done(function(){
        $('#prequel').prequel({
            imageUrl: 'ССЫЛКА_НА_КАРТИНКУ'});
        });
    </script>
Обязательно укажите ссылку на картинку!
