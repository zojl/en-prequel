# en-prequel

# Как с этим работать вообще?
1. В администраторской создайте страницу для приквела.
2. В любую игру загрузите картинки, в которых будет текст заданий приквела. Картинки должны иметь название, написанное нижним регистром и без пробелов. Например "старт.jpg", "ответ123.png" и т.п. Расширения файлов должны быть одинаковыми. И вообще, см. раздел "Важно" ниже.
3. Откройте редактирование страницы, выберите вид "HTML код" и вставьте туда

    <div id="prequel"></div>
    <script type="text/javascript">
    $.getScript('https://reqloud.com/work/en-prequel/js/en-prequel.min.js').done(function(){
        $('#prequel').prequel({
            imageUrl: 'ССЫЛКА_НА_КАРТИНКУ'
    })});
    </script>
    
Не забудьте заменить "ССЫЛКА_НА_КАРТИНКУ" на ссылку первой картинки с заданием приквела.
4. Укажите автора (http://kzn.en.cx/UserDetails.aspx?uid=1539247 или reqloud.com) в спонсорах или где-нибудь ещё, а то я обижусь :с

# Для тех, кто шарит:

1. Подключить любой нужный файл
2. На пустом блоке вызвать функцию prequel();

Пример:

    $('#prequel').prequel({
        imgUrl:'http://d1.endata.cx/data/games/60776/%D0%BF%D1%80%D0%B8%D0%BA%D0%B2%D0%B5%D0%BB.png'
    });
Обязательно укажите ссылку на картинку в формате http://d1.endata.cx/data/.../image.png!

#Важно!
* Все имена картинок должны быть в нижнем регистре!
* Все картинки должны быть с одинаковым расширением (например, .png или .jpg), а расширения должны быть в одном регистре (нельзя .jpg и .JPG одновременно)
* В названиях файлов не должно быть точек (кроме расширения)
* Все ответы приводятся к виду "нижнийрегистрбезпробелов", так что если ваше название файла содержит пробелы — пеняйте на себя.
* Все картинки должны быть на одном и том же сервере!
* Все картинки должны быть загружены в одну и ту же игру.
