# en-prequel
Короткий и тупой скрипт для энкаунтера
Использовать так:
1. Подключить файл
2. На пустом блоке вызвать функцию prequel();

Пример:

    $('#prequel').prequel({
        imgUrl:'http://d1.endata.cx/data/games/60776/%D0%BF%D1%80%D0%B8%D0%BA%D0%B2%D0%B5%D0%BB.png'
    });

Самый простой способ использования для тех, кто не понял ничего выше:

    <div id="prequel"></div>
    <script type="text/javascript">
    $.getScript('https://reqloud.com/work/en-prequel/js/en-prequel.js').done(function(){
        $('#prequel').prequel({
            imageUrl: 'ССЫЛКА_НА_КАРТИНКУ'
    })});
    </script>
Обязательно укажите ссылку на картинку!

#Важно!
* Все имена картинок должны быть в нижнем регистре!
* Все картинки должны быть с одинаковым расширением (например, .png или .jpg), а расширения должны быть в одном регистре (нельзя .jpg и .JPG одновременно)
* В названиях файлов не должно быть точек (кроме расширения)
* Все ответы приводятся к виду "нижнийрегистрбезпробелов", так что если ваше название файла содержит пробелы — пеняйте на себя.
* Все картинки должны быть на одном и том же сервере!
