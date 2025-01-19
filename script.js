// Глобальні змінні
let currentLab = 1;
let currentSection = null;

// Змінні для зображень
const imageCaseHTML = `
<div class="image-case">
    <img src="images/image3.png" alt="Фото студента">
</div>
`;

const imageCaseHTML1 = `
<div class="image-case">
    <img src="images/image4.png" alt="Фото студента">
</div>
`;

const imageCaseHTML2 = `
<div class="image-case">
    <img src="images/image5.png" alt="Фото студента">
</div>
`;

const imageCaseHTML3 = `
<div class="image-case">
    <img src="images/image6.png" alt="Фото студента">
</div>
`;

const imageCaseHTML4 = `
<div class="image-case">
    <img src="images/image7.png" alt="Фото студента">
</div>
`;

const imageCaseHTML5 = `
<div class="image-case">
    <img src="images/image8.png" alt="Фото студента">
</div>
`;


// Функція для вибору лабораторної роботи
function selectLab(labNumber) {
    currentLab = labNumber;

    // Очищення активних кнопок меню
    document.querySelectorAll('.menu button').forEach(button => {
        button.classList.remove('active');
        button.style.fontSize = '14px';
    });

    // Додавання стилю активної кнопки
    const activeButton = document.getElementById(`lab${labNumber}`);
    activeButton.classList.add('active');
    activeButton.style.fontSize = '18px';

    // Оновлення сайдбару для вибраної лабораторної роботи
    const sidebar = document.querySelector('.sidebar');
    sidebar.innerHTML = ''; // Очищуємо попередній вміст сайдбару

    let sections = []; // Масив назв секцій для лабораторії

    if (labNumber === 1) {
        sections = ['Опис структури', 'Тема Мета Місце', 'Структура документа', 'HTML-код таблиці', 'HTML-код форми', 'HTML-код зображення', 'Висновок'];
    } else if (labNumber === 2) {
        sections = ['Тема Мета Місце ЛР2', 'Способи підключення стилів', 'Селектори', 'Селектор тегу', 'Селектор класу', 'Селектор ідентифікаторів', 'Інші селектори', 'CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки', 'Висновки'];
    }

    // Додавання кнопок до сайдбару
    sections.forEach((title, index) => {
        const button = document.createElement('button');
        button.innerText = title;
        button.id = `section${index + 1}`;
        button.onclick = () => showContent(index + 1, title);
        sidebar.appendChild(button);
    });

    // Відображення вмісту першого розділу для вибраної лабораторної
    showContent(0, sections[0]);
}

// Функція для відображення вмісту кожного розділу
function showContent(sectionNumber, sectionTitle) {
    currentSection = sectionNumber;

    document.querySelectorAll('.sidebar button').forEach(button => {
        button.classList.remove('active');
        button.style.fontSize = button.classList.contains('small') ? '12px' : '16px';
    });

    const activeButton = document.getElementById(`section${sectionNumber}`);
    activeButton.classList.add('active');
    activeButton.style.fontSize = '18px';

    const content = document.getElementById('mainContent');

    // Вміст для конкретних розділів лабораторної роботи 1
    if (currentLab === 1) {
        if (sectionNumber === 1) {
            content.innerHTML = `
                <h3>Опис структури</h3>
                Опис структури веб-застосунку для купівлі комп'ютерних ігор:

1. Банер: Верхня частина сторінки містить банер з фоновим зображенням і назвою "GameHub", що створює враження та привертає увагу до сайту.
2. Основний контент: Цей розділ включає:
   - Таблиця ігор з назвами, описами та цінами.
   - Списки: нумерований список особливостей кожної гри та маркований список загальних функцій.
3. Форма: Форма для збору відгуків дозволяє користувачам залишати коментарі про ігри.
4. Посилання на опис предметного середовища: Користувачі можуть перейти на сторінку з детальним описом предметної галузі.
5. Навігація: Меню дозволяє легко переходити між сторінками, включаючи сторінки з описом предметного середовища та звітами.
6. Футер: Футер містить інформацію про авторські права, завершуючи структуру сайту.

Веб-застосунок для купівлі комп'ютерних ігор дозволяє користувачам переглядати різні ігри, ознайомлюватися з їх описом, ціною та технічними вимогами. 
Користувачі можуть додавати обрані ігри до кошика та здійснювати покупку через інтегровану платіжну систему. 
Після завершення оплати користувач отримує доступ до цифрового ключа або можливість завантажити гру.
Користувач із правами адміністратора може редагувати наявні ігри в каталозі, змінювати їхні характеристики, додавати нові ігри та видаляти застарілі або непотрібні позиції.
<!-- Посилання на сайт -->
<p>Для перегляду опис предметного середовища перейдіть за посиланням: <a href="subject.html" target="_blank">Опис предметного середовища</a>.</p>
<p>Посилання на сайт. <a href="index.html" class="home-link">(сайт)</a>.</p>
            `;
        } else if (sectionNumber === 2) {
            content.innerHTML = `
                <h3>Тема Мета Місце</h3>
                 <p>Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.</p>
                 <p>Мета: придбати практичні навички роботи  з HTML-документом, таблицями,  зображеннями, посиланнями, списками, формами.Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
в коді.</p>
                 <p>Місце: веб-застосунок для купівлі комп'ютерних ігор доступний на платформі GitHub Pages за адресою https://jupiter1323.github.io/IC-34_Web_Lab1_Motliuk/, або на локальному сервері для тестування.</p>

            `;
        } else if (sectionNumber === 3) {
            content.innerHTML = `
                <h3>СТРУКТУРА ДОКУМЕНТА</h3>
                <p>Опис структури документа HTML:
                1. Тип документа : Вказує на тип документа та версію HTML (HTML5).
                2. Тег <code>&lt;html&gt;</code>: Визначає початок документа та вказує на мову документа — українську.
                3. Тег <code>&lt;head&gt;</code>: 
                - Включає мета-теги для встановлення кодування сторінки та для адаптації сторінки під різні пристрої.
                - Назва сторінки задається через тег <code>&lt;title&gt;</code>.
                - Підключення зовнішнього стилю через тег <code>&lt;link&gt;</code>.
                4. Тег <code>&lt;body&gt;</code>: Основний вміст сторінки.
                - Контейнер: Обгортка для всього вмісту.  
                5. Хедер: 
                - Заголовок сторінки з назвою звітів, описом дисципліни та іменем студента.
                - Фото студента розташоване поряд із текстом.
                6. Меню навігації: 
                - Кнопки для вибору лабораторних робіт, що при натисканні відображають відповідний вміст.
                7. Розділ контенту:
                - Бічна панель: Кнопки для переходу до різних частин звіту (наприклад, "Опис структури", "Тема Мета Місце" тощо).
                - Основний контент: Містить вміст, що відповідає вибраному розділу.
                - Контейнер для скріншотів: Може бути прихований або показаний в залежності від вибору.
                8. Підключення скрипта: Для роботи інтерактивних елементів підключається зовнішній скрипт.</p>
            `;

        } else if (sectionNumber === 4) {
            content.innerHTML = `
                <h3>HTML-код ТАБЛИЦІ:</h3>
                <pre class="code-block">
&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;№&lt;/th&gt;
        &lt;th&gt;Назва гри&lt;/th&gt;
        &lt;th&gt;Опис гри&lt;/th&gt;
        &lt;th&gt;Ціна&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R.: Shadow of Chernobyl&lt;/td&gt;
        &lt;td&gt;Перша гра серії, що занурює в атмосферу Зони відчуження після Чорнобильської катастрофи.&lt;/td&gt;
        &lt;td&gt;250 грн&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R.: Clear Sky&lt;/td&gt;
        &lt;td&gt;Пріквел до "Shadow of Chernobyl", в якому розповідається про події перед основною грою.&lt;/td&gt;
        &lt;td&gt;300 грн&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R.: Call of Pripyat&lt;/td&gt;
        &lt;td&gt;Третя частина серії, де гравець грає за агента СБУ, що відправлений в зону для розслідування та пошуку причин аномалій у районі Прип'яті.&lt;/td&gt;
        &lt;td&gt;350 грн&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;4&lt;/td&gt;
        &lt;td&gt;S.T.A.L.K.E.R. 2: Heart of Chernobyl&lt;/td&gt;
        &lt;td&gt;Оголошена нова частина серії, яка переносить гравців у нову Зону, з новими аномаліями, мутантами та можливістю впливати на розвиток подій.&lt;/td&gt;
        &lt;td&gt;700 грн&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt
                </pre>
                ${imageCaseHTML}
            `;
        } else if (sectionNumber === 5) {
            content.innerHTML = `
                <h3>HTML-код ФОРМИ:</h3>
                <pre class="code-block">
&lt;form action="#"&gt;
    &lt;label for="feedback"&gt;Ваш відгук:&lt;/label&gt;
    &lt;textarea id="feedback" name="feedback" rows="4" placeholder="Напишіть ваш відгук..."&gt;&lt;/textarea&gt;
    &lt;button type="submit"&gt;Відправити відгук&lt;/button&gt;
&lt;/form&gt;
                </pre>
                ${imageCaseHTML1}
            `;
        } else if (sectionNumber === 6) {
            content.innerHTML = `
                <h3>HTML-код ЗОБРАЖЕННЯ:</h3>
                <pre class="code-block">
&lt;div class="banner"&gt;
    &lt;h1&gt;GameHub&lt;/h1&gt;
&lt;/div&gt;

&lt;!-- Зображення в стилях --&gt;
.photo-student img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}
                </pre>
                ${imageCaseHTML2}
            `;
        } else if (sectionNumber === 7) {
            content.innerHTML = `
                <h3>Висновок:</h3>
<p>Під час роботи було створено HTML-документ зі структурою, що включає таблиці, списки, зображення, посилання та форми. 
Реалізовано шаблон для звітів лабораторних робіт із підтримкою навігації між розділами. 
Отримані практичні навички роботи з HTML-елементами для створення базового веб-документа.</p>

            `;
        }
    } else if (currentLab === 2) {
        if (sectionNumber === 1) {
            content.innerHTML = `
                <h3>Тема Мета Місце</h3>
Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ. 

Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону, 
зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів             

Місце: веб-застосунок для купівлі комп'ютерних ігор доступний на платформі GitHub Pages за адресою https://jupiter1323.github.io/IC-34_Web_Lab1_Motliuk/, 
// або на локальному сервері для тестування.
                <p>Посилання на сайт. <a href="lab2.html" class="home-link">(сайт)</a>.</p>
            `;
        } else if (sectionNumber === 2) {
            content.innerHTML = `
                <h3>Способи підключення стилів</h3>
                <p>Описані способи підключення стилів із прикладами коду:</p>
                Вбудовані стилі:
                Задаються у вигляді атрибута <code>style</code> для конкретного HTML-тега:
                <pre>
        <code>&lt;p style="color: red; font-size: 16px;"&gt;Цей текст має червоний колір та шрифт розміром 16px.&lt;/p&gt;</code>
                </pre>
        
                Внутрішні стилі:
                Визначаються у секції <code>&lt;head&gt;</code> у спеціальному блоці <code>&lt;style&gt;</code>:
                <pre>
        <code>&lt;head&gt;
            &lt;style&gt;
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                }
                h1 {
                    color: #2c3e50;
                    text-align: center;
                }
            &lt;/style&gt;
        &lt;/head&gt;</code>
                </pre>
        
                Зовнішні стилі:
                Підключаються через окремий CSS-файл за допомогою тега <code>&lt;link&gt;</code>:
                <pre>
        <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>
                </pre>
                <p>Файл <code>styles.css</code>:</p>
                <pre>
        <code>body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
        }</code>
                </pre>
        
                Динамічні стилі з JavaScript:
                Зміна стилів елементів за допомогою скрипта:
                <pre>
        <code>&lt;script&gt;
            document.getElementById('admin').style.backgroundColor = '#dff9fb';
        &lt;/script&gt;</code>
                </pre>
            `;
        }
         else if (sectionNumber === 3) {
            content.innerHTML = `
                <h3>Селектори</h3>
                Селектор тегу
Селектори тегу дозволяють застосовувати стилі до всіх елементів із вказаним тегом.
HTML-код:

html
<p>Це приклад абзацу.</p>
<p>Цей текст теж використовує селектор тегу.</p>
CSS-код:

css
p {
    color: blue;
    font-size: 18px;
}
Результат:
Всі абзаци <p> матимуть синій текст і розмір шрифту 18px.
            `;
        } else if (sectionNumber === 4) {
            content.innerHTML = `
                <h3>Селектор тегу</h3>
               
Селектор тегу
Селектори тегу дозволяють застосовувати стилі до всіх елементів із вказаним тегом.
HTML-код:

html
<p>Це приклад абзацу.</p>
<p>Цей текст теж використовує селектор тегу.</p>
CSS-код:

css
p {
    color: blue;
    font-size: 18px;
}
Результат:
Всі абзаци <p> матимуть синій текст і розмір шрифту 18px.
              ${imageCaseHTML3}
            `;
        } else if (sectionNumber === 5) {
            content.innerHTML = `
                <h3>Селектор класу</h3>
                Селектор класу
Селектори класу дозволяють стилізувати певні елементи, до яких застосований клас.
HTML-код:

html
<div class="highlight">Цей текст має спеціальне оформлення.</div>
<div>Цей текст використовує стандартні стилі.</div>
CSS-код:

css.highlight {
    background-color: yellow;
    font-weight: bold;
}
Результат:
Текст із класом highlight матиме жовтий фон і жирний шрифт.
             ${imageCaseHTML4}
            `;
        } else if (sectionNumber === 6) {
            content.innerHTML = `
     <h3>Селектор ідентифікаторів</h3>
                Селектор ідентифікаторів
Селектори ідентифікаторів стилізують конкретний елемент із заданим ідентифікатором.
HTML-код:

html

<h1 id="main-title">Це головний заголовок</h1>
CSS-код:

css

#main-title {
    color: green;
    text-align: center;
}
Результат:
Заголовок із ідентифікатором main-title матиме зелений колір і буде вирівняний по центру.
              ${imageCaseHTML5}
            `;
        } else if (sectionNumber === 7) {
            content.innerHTML = `
                <h3>Інші селектори</h3>
                Інші селектори
Сюди входять сусідні, дочірні селектори, селектори атрибутів та універсальні селектори.

HTML-код:

html
<ul>
    <li>Елемент списку 1</li>
    <li>Елемент списку 2</li>
</ul>
<p title="підказка">Текст із атрибутом</p>
CSS-код:

css
li + li {
    font-style: italic;
}
p[title] {
    border: 1px dashed red;
}
* {
    margin: 0;
    padding: 0;
}
Результат:

Другий <li> матиме курсив.
<p> із атрибутом title матиме червону пунктирну рамку.
                
            `;
        } else if (sectionNumber === 8) {
            content.innerHTML = `
                <h3>CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки</h3>
                CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки
                <p>Шрифт Arial використовується для всіх текстових елементів. Заголовки <code>&lt;h1&gt;</code> і <code>&lt;h2&gt;</code> вирівняні по центру, а для абзаців <code>&lt;p&gt;</code> задано міжрядковий інтервал 1.6. Клас <code>.advanced</code> додає ефект тіні та курсив.</p>
                <p>Таблиці мають мінімалістичне оформлення: клітинки з обрамленням, а заголовки таблиць виділені синім фоном та білим текстом.</p>
                <p>Фон для тіла сторінки — світлий, а для секцій застосовано білий фон з легкими тінями, що додає естетичності.</p>
                <p>Елементи з класами <code>.container</code> мають обрамлення і округлені кути для більш м'якого вигляду.</p>
                <p>Списки оформлені з маркерами та відступами для зручного перегляду.</p>
            `;
        }else if (sectionNumber === 9) {
            content.innerHTML = `
                <h3>Висновки</h3>
                Висновок:  
У ході роботи було опрацьовано використання каскадних таблиць стилів (CSS) для оформлення веб-сторінок. Реалізовано селектори тегів, класів, ідентифікаторів, а також інші селектори.  
Застосовано CSS-властивості для оформлення тексту, шрифтів, таблиць, списків, фону та відступів. Створено звітний HTML-документ із демонстрацією результатів.  
Отримано практичні навички, необхідні для створення структурованих і стильних веб-сторінок.
            `;
        }
    } else {
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}. ${sectionTitle}`;
    }
}

// Вибір початкової лабораторної роботи
selectLab(1);