// Глобальні змінні
let currentLab = 1;

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

const imageCaseHTML6 = `
<div class="image-case">
    <img src="images/image91.png" alt="Фото студента">
</div>
`;
const imageCaseHTML7 = `
<div class="image-case">
    <img src="images/image92.png" alt="Фото студента">
</div>
`;
const imageCaseHTML8 = `
<div class="image-case">
    <img src="images/image10.png" alt="Фото студента">
</div>
`;
const imageCaseHTML9 = `
<div class="image-case">
    <img src="images/image11.png" alt="Фото студента">
</div>
`;
const imageCaseHTML10 = `
<div class="image-case">
    <img src="images/image12.png" alt="Фото студента">
</div>
`;
const imageCaseHTML11 = `
<div class="image-case">
    <img src="images/image13.png" alt="Фото студента">
</div>
`;
const imageCaseHTML12 = `
<div class="image-case">
    <img src="images/image14.png" alt="Фото студента">
</div>
`;
const imageCaseHTML13 = `
<div class="image-case">
    <img src="images/image15.png" alt="Фото студента">
</div>
`;
const imageCaseHTML14 = `
<div class="image-case">
    <img src="images/image16.png" alt="Фото студента">
</div>
`;
const imageCaseHTML15 = `
<div class="image-case">
    <img src="images/1.png" alt="Фото студента">
    <img src="images/2.png" alt="Фото студента">
    <img src="images/3.png" alt="Фото студента">
</div>
`;
const imageCaseHTML16 = `
<div class="image-case">
    <img src="images/4.png" alt="Фото студента">
    <img src="images/5.png" alt="Фото студента">
    <img src="images/6.png" alt="Фото студента">
    <img src="images/7.png" alt="Фото студента">
</div>
`;
const imageCaseHTML17 = `
<div class="image-case">
    <img src="images/8.png" alt="Фото студента">
    <img src="images/9.png" alt="Фото студента">
    <img src="images/10.png" alt="Фото студента">
    <img src="images/11.png" alt="Фото студента">
    <img src="images/12.png" alt="Фото студента">
    <img src="images/13.png" alt="Фото студента">
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
    } else if (labNumber === 3) {
        sections = ['Тема Мета Місце ЛР3', 'ЗАВДАННЯ №1', 'Фіксована таблична верстка', 'Гумова таблична верстка', 'Фіксована блокова верстка', 'Гумова блокова верстка', 'ЗАВДАННЯ №3 FLEXBOX', 'Висновки'];
    }else if (labNumber === 4) {
        sections = ['Тема Мета Місце ЛР4', 'Десктопна версія', 'Планшетна версія', 'Мобільна версія','Висновки'];
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
            `;
        } else if (sectionNumber === 2) {
            content.innerHTML = `
                <h3>Тема Мета Місце</h3>
Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.
Мета: придбати практичні навички роботи  з HTML-документом, таблицями,  зображеннями, посиланнями, списками, формами.Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
Місце: 
Посилання на репозиторій веб-застосунку:
https://github.com/Jupiter1323/IC-34_WebLab1_Motliuk
              
Посилання на живу сторінку веб-застосунку:
https://jupiter1323.github.io/IC-34_WebLab1_Motliuk/
              
Посилання на репозиторій звітного html-документа:
https://github.com/Jupiter1323/IC-34_Report_Motliuk
                            
Посилання на живу сторінку звітного html-документа:
https://jupiter1323.github.io/IC-34_Report_Motliuk/

            `;
        } else if (sectionNumber === 3) {
            content.innerHTML = `
                <h3>СТРУКТУРА ДОКУМЕНТА</h3>
                head
                body
                header
                main
                li
                li
                li
                li
                footer
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

Місце: 
Посилання на репозиторій веб-застосунку:
https://github.com/Jupiter1323/IC-34_WebLab2_Motliuk
              
Посилання на живу сторінку веб-застосунку:
https://jupiter1323.github.io/IC-34_WebLab2_Motliuk/
              
Посилання на репозиторій звітного html-документа:
https://github.com/Jupiter1323/IC-34_Report_Motliuk
                            
Посилання на живу сторінку звітного html-документа:
https://jupiter1323.github.io/IC-34_Report_Motliuk/
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
Програмний HTML-код:
<h1>Веб-застосунок для купівлі комп'ютерних ігор</h1>
<h2>Основні функціональні можливості</h2>
<table>
    <thead>
        <tr>
            <th>Принцип</th>
            <th>Опис</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Інтуїтивно зрозумілий інтерфейс</td>
            <td>Простий і доступний дизайн для всіх користувачів.</td>
        </tr>
    </tbody>
</table>
<button>Купити зараз</button>
Програмний CSS-код:
h1 {
    text-align: center; 
    font-size: 2.5rem; 
    margin: 20px 0; 
    color: #333; 
}

h2 {
    text-align: center;
    color: #333; 
    font-size: 1.8rem;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

table th, table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 1rem;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

            `;
        } else if (sectionNumber === 4) {
            content.innerHTML = `
                <h3>Селектор тегу</h3>
               
Програмний HTML-код:
<h1>Веб-застосунок для купівлі комп'ютерних ігор</h1>
<h2>Основні функціональні можливості</h2>
<table>
    <thead>
        <tr>
            <th>Принцип</th>
            <th>Опис</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Інтуїтивно зрозумілий інтерфейс</td>
            <td>Простий і доступний дизайн для всіх користувачів.</td>
        </tr>
    </tbody>
</table>
<button>Купити зараз</button>
Програмний CSS-код:
h1 {
    text-align: center; 
    font-size: 2.5rem; 
    margin: 20px 0; 
    color: #333; 
}

h2 {
    text-align: center;
    color: #333; 
    font-size: 1.8rem;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

table th, table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 1rem;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

              ${imageCaseHTML3}
            `;
        } else if (sectionNumber === 5) {
            content.innerHTML = `
                <h3>Селектор класу</h3>
                Селектор класу
Програмний HTML-код:
<div class="banner">
    <h1>GameHub</h1>
</div>

<div class="container">
    <p class="highlight">Наш застосунок дозволяє користувачам переглядати та купувати комп'ютерні ігри.</p>
    <ul>
        <li>Перегляд доступних ігор із детальними описами.</li>
        <li>Додавання ігор до кошика.</li>
    </ul>
</div>
Програмний CSS-код:
.banner {
    width: 80%; 
    height: 400px;
    background-image: url('images/image2.jpg'); 
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0 auto; 
    border: 3px solid #4CAF50; 
    border-radius: 10px; 
}

.container {
    border: 2px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    background-color: #fafafa;
    margin-bottom: 20px;
}

.highlight {
    background-color: #e8ffe6;
    border-left: 5px solid #45a049;
    padding: 15px;
    font-size: 1.1rem;
    color: #333;
}
             ${imageCaseHTML4}
            `;
        } else if (sectionNumber === 6) {
            content.innerHTML = `
     <h3>Селектор ідентифікаторів</h3>
                Селектор ідентифікаторів
Програмний HTML-код:
<div id="admin">
    <p>Адміністратор має можливість:</p>
    <ul>
        <li>Редагувати інформацію про ігри.</li>
        <li>Додавати нові ігри до каталогу.</li>
    </ul>
</div>
Програмний CSS-код:
#admin {
    background-color: #45a049#dff9fb;
    padding: 20px;
    border: 2px solid #45a049;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
              ${imageCaseHTML5}
            `;
        } else if (sectionNumber === 7) {
            content.innerHTML = `
                <h3>Інші селектори</h3>
                Інші селектори
<p>Селектор псевдокласу</p>
Програмний CSS-код:
button:hover {
    background-color: #45a049;
}

table tr:nth-child(even) {
    background-color: #f9f9f9;
}

table tr:hover {
    background-color: #f1f1f1;
}

<p>Селектор псевдоелемента</p>
Програмний CSS-код:
              .banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
  
            `;
        } else if (sectionNumber === 8) {
            content.innerHTML = `
                <h3>CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки</h3>
                CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки
                <p>Шрифт</p>
    body {
    font-family: 'Arial', sans-serif;
    }
                <p>Контури</p>
.banner {
    border: 3px solid #4CAF50;
    border-radius: 10px;
}
.container {
    border: 2px solid #ddd;
    border-radius: 8px;
}
#admin {
    border: 2px solid #45a049;
    border-radius: 8px;
}
table th, table td {
    border: 1px solid #ddd;
}
                <p>Фон</p>
body {
    background-color: #f5f5f5;
}
.banner {
    background-image: url('images/image2.jpg');
    background-size: cover;
    background-position: center;
}
section {
    background: #ffffff;
}
.highlight {
    background-color: #e8ffe6;
}
                <p>Колір тексту</p>
body {
    color: #333;
}
                <p>CSS-властивості для таблиць</p>
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
table th, table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 1rem;
}
table th {
    background-color: #45a049;
    color: white;
}
table tr:nth-child(even) {
    background-color: #f9f9f9;
}
table tr:hover {
    background-color: #f1f1f1;
}
                <p>Багаторівневі списки</p>
ul {
    list-style-type: disc;
    margin: 10px 0 20px 20px;
}
#admin ul {
    list-style-type: square;
}
                <p>CSS Просунутий</p>
.banner h1 {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}
.advanced {
    text-shadow: 1px 1px 3px #999;
}
.banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

            `;
        }else if (sectionNumber === 9) {
            content.innerHTML = `
                <h3>Висновки</h3> 
У ході роботи було опрацьовано використання каскадних таблиць стилів (CSS) для оформлення веб-сторінок. Реалізовано селектори тегів, класів, ідентифікаторів, а також інші селектори.  
Застосовано CSS-властивості для оформлення тексту, шрифтів, таблиць, списків, фону та відступів. Створено звітний HTML-документ із демонстрацією результатів.  
Отримано практичні навички, необхідні для створення структурованих і стильних веб-сторінок.
            `;
        }
    } else if (currentLab === 3) {
        if (sectionNumber === 1) {
            content.innerHTML = `
                <h3>Тема Мета Місце</h3>
Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.

Мета:
 ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок.
 ⎯  придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX .  

Місце: 
Посилання на репозиторій веб-застосунку:
https://github.com/Jupiter1323/IC-34_WebLab3_Motliuk
              
Посилання на живу сторінку веб-застосунку:
https://jupiter1323.github.io/IC-34_WebLab3_Motliuk/
              
Посилання на репозиторій звітного html-документа:
https://github.com/Jupiter1323/IC-34_Report_Motliuk
                            
Посилання на живу сторінку звітного html-документа:
https://jupiter1323.github.io/IC-34_Report_Motliuk/
            `;
        } else if (sectionNumber === 2) {
            content.innerHTML = `
                <h3>ЗАВДАННЯ №1</h3>
Код-html:
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="uk"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Веб-застосунок для купівлі комп'ютерних ігор&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;div class="banner"&gt;
            &lt;h1&gt;GameHub&lt;/h1&gt;
        &lt;/div&gt;
        &lt;section class="main-content"&gt;
            &lt;h2&gt;Каталог ігор&lt;/h2&gt;
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
                    &lt;td&gt;Перша гра серії, що занурює в атмосферу Зони відчуження після Чорнобильської катастрофи, де гравець бореться за виживання серед мутантів та інших сталкерів.&lt;/td&gt;
                    &lt;td&gt;250 грн&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;2&lt;/td&gt;
                    &lt;td&gt;S.T.A.L.K.E.R.: Clear Sky&lt;/td&gt;
                    &lt;td&gt;Пріквел до "Shadow of Chernobyl", в якому розповідається про події перед основною грою та боротьбу між сталкерами й військовими угрупованнями.&lt;/td&gt;
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
            &lt;/table&gt;

            &lt;h3&gt;Особливості кожної гри:&lt;/h3&gt;
            &lt;ol&gt;
                &lt;li&gt;&lt;strong&gt;S.T.A.L.K.E.R.: Shadow of Chernobyl:&lt;/strong&gt; Реалістична атмосфера постапокаліпсису з глибоким сюжетом.&lt;/li&gt;
                &lt;li&gt;&lt;strong&gt;S.T.A.L.K.E.R.: Clear Sky:&lt;/strong&gt; Додаткові місії та сюжетні лінії з новими персонажами.&lt;/li&gt;
                &lt;li&gt;&lt;strong&gt;S.T.A.L.K.E.R.: Call of Pripyat:&lt;/strong&gt; Покращена графіка та більш різноманітні аномалії.&lt;/li&gt;
                &lt;li&gt;&lt;strong&gt;S.T.A.L.K.E.R. 2: Heart of Chernobyl:&lt;/strong&gt; Інноваційний відкритий світ та нові технології гри.&lt;/li&gt;
            &lt;/ol&gt;

            &lt;h3&gt;Функції та можливості ігор:&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;Відкритий світ з можливістю дослідження&lt;/li&gt;
                &lt;li&gt;Реалістичні погодні умови та день-ніч&lt;/li&gt;
                &lt;li&gt;Механіка виживання і ресурси&lt;/li&gt;
                &lt;li&gt;Система репутації та вплив на сюжет&lt;/li&gt;
            &lt;/ul&gt;

            &lt;h3&gt;Форма:&lt;/h3&gt;
            &lt;form action="#"&gt;
                &lt;label for="feedback"&gt;Ваш відгук:&lt;/label&gt;
                &lt;textarea id="feedback" name="feedback" rows="4" placeholder="Напишіть ваш відгук..."&gt;&lt;/textarea&gt;
                &lt;button type="submit"&gt;Відправити відгук&lt;/button&gt;
            &lt;/form&gt;
            &lt;p&gt;Для перегляду опис предметного середовища перейдіть за посиланням: &lt;a href="subject.html" target="_blank"&gt;Опис предметного середовища&lt;/a&gt;&lt;/p&gt;
        &lt;/section&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2025 Ваш сайт. Всі права захищені.&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Код-css:
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}


.banner {
    width: 80%; 
    height: 400px;
    background-image: url('images/image2.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0 auto;
    border: 3px solid #4CAF50;
    border-radius: 10px;
}

.banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

.banner h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.main-content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

h1, h2, h3 {
    color: #333;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 15px;
    text-align: left;
    border: 1px solid #ddd;
}

th {
    background-color: #4CAF50;
    color: white;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

form {
    margin-top: 30px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

textarea, input {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

nav {
    background-color: #333;
    padding: 10px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 18px;
}

nav ul li a:hover {
    color: #4CAF50;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: white;
}
                 ${imageCaseHTML6}
                  ${imageCaseHTML7}
            `;
        }
         else if (sectionNumber === 3) {
            content.innerHTML = `
                <h3>Фіксована таблична верстка</h3>
Код-html:
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Fixed Table Layout&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;2,1,1.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;table&gt;
            &lt;tr&gt;
                &lt;td class=&quot;blue&quot; colspan=&quot;2&quot;&gt;
                    &lt;div class=&quot;white-rectangle&quot;&gt;&lt;/div&gt; 
                    1
                &lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td class=&quot;second&quot; rowspan=&quot;2&quot;&gt;2&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td class=&quot;white-space&quot;&gt;
                    &lt;div class=&quot;third&quot;&gt;
                        &lt;div class=&quot;red-rectangle&quot;&gt;&lt;/div&gt; 
                    &lt;/div&gt;
                    &lt;div class=&quot;fourth&quot;&gt;&lt;/div&gt;
                    &lt;span class=&quot;text-3&quot;&gt;3&lt;/span&gt;
                    &lt;span class=&quot;text-4&quot;&gt;4&lt;/span&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td class=&quot;blue&quot; colspan=&quot;2&quot;&gt;5&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/table&gt;
    &lt;/main&gt;
    &lt;footer&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Код-css:
main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px; 
    font-size: 18px;
    font-weight: bold;
    font-family: sans-serif;
    margin: 0; 
}

table {
    width: 350px; 
    border-collapse: collapse;
    margin: auto; 
}

td {
    border: 2px solid black;
    text-align: center;
    height: 50px;
}

.blue {
    background-color: rgb(249, 208, 6);
    position: relative;
}

.white-rectangle {
    position: absolute;
    top: 12px;
    left: 10px;
    width: 130px;
    height: 24px;
    background-color: white;
    border: 2px solid black;
}

.second {
    background-color: rgb(34, 34, 236);
    width: 30px;
    height: 100px;
}

.white-space {
    height: 300px;
    width: 100px;
    position: relative;
}

.third {
    position: absolute;
    top: 0;
    left: 15px;
    width: 120px;
    height: 265px;
    background-color: white;
    border: 2px solid rgb(121, 120, 120);
    position: relative;
    bottom: 10px;
}

.red-rectangle {
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 118px;
    height: 30px;
    background-color: red;
    border: 3px solid black;
}

.fourth {
    position: absolute;
    top: 15px;
    left: 150px;
    width: 100px;
    height: 265px;
    background-color: rgb(34, 34, 236);
    border: 2px solid black;
}

.text-4,
.text-3 {
    position: absolute;
    font-size: 20px;
    color: black;
}

.text-3 {
    top: 135px;
    left: 70px;
}

.text-4 {
    top: 135px;
    left: 195px;
}
                 ${imageCaseHTML8}
            `;
        } else if (sectionNumber === 4) {
            content.innerHTML = `
                <h3>Гумова таблична верстка</h3>
Код-html:
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Fluid Table Layout&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;2,1,2.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;footer&gt;
    &lt;/footer&gt;
    &lt;main&gt;
        &lt;table&gt;
            &lt;tr&gt;
                &lt;td class=&quot;blue&quot; colspan=&quot;2&quot;&gt;
                    &lt;div class=&quot;white-rectangle&quot;&gt;&lt;/div&gt; 
                    1
                &lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td class=&quot;second&quot; rowspan=&quot;2&quot;&gt;2&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td class=&quot;white-space&quot;&gt;
                    &lt;div class=&quot;third&quot;&gt;
                        &lt;div class=&quot;red-rectangle&quot;&gt;&lt;/div&gt; 
                    &lt;/div&gt;
                    &lt;div class=&quot;fourth&quot;&gt;&lt;/div&gt;
                    &lt;span class=&quot;text-3&quot;&gt;3&lt;/span&gt;
                    &lt;span class=&quot;text-4&quot;&gt;4&lt;/span&gt;
                &lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td class=&quot;blue&quot; colspan=&quot;2&quot;&gt;5&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/table&gt;
    &lt;/main&gt;
    &lt;footer&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>


Код-css:main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 700px;
    font-size: 18px;
    font-weight: bold;
    font-family: sans-serif;
}

table {
    width: 33%; 
    min-width: 250px;
    border-collapse: collapse;
    height: 600px; 
}

td {
    border: 2px solid black;
    text-align: center;
    height: 60px;
}

.blue {
    background-color: rgb(249, 208, 6);
    position: relative;
}

.white-rectangle {
    position: absolute;
    top: 15px;
    left: 10px;
    width: 35%; 
    height: 30px;
    background-color: white;
    border: 2px solid black;
}

.second {
    background-color: rgb(34, 34, 236);
    width: 6%; 
    height: 100px;
}

.white-space {
    height: 100%;
    width: 20%; 
    position: relative;
}

.third {
    position: absolute;
    top: 2%;
    left: 5%;
    width: 47%;
    height: 95%;
    background-color: white;
    border: 2px solid rgb(121, 120, 120);
}

.red-rectangle {
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 99%;
    height: 10%;
    background-color: red;
    border: 3px solid black;
}

.fourth {
    position: absolute;
    top: 2%;
    left: 57%;
    width: 37%;
    height: 95%;
    background-color: rgb(34, 34, 236);
    border: 2px solid black;
}

.text-4,
.text-3 {
    position: absolute;
    font-size: 20px;
    color: black;
}

.text-3 {
    top: 135px;
    left: 30%;
}

.text-4 {
    top: 135px;
    left: 60%;
}
                 ${imageCaseHTML9}
            `;
        } else if (sectionNumber === 5) {
            content.innerHTML = `
                <h3>Фіксована блокова верстка</h3>
Код-html:
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Fixed Block Layout&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;2,2,1.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;div class=&quot;block blue&quot;&gt;
            &lt;div class=&quot;white-rectangle&quot;&gt;&lt;/div&gt; 
            &lt;span&gt;1&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;block-wrapper&quot;&gt;
            &lt;div class=&quot;block second&quot;&gt;2&lt;/div&gt;
            &lt;div class=&quot;block-container&quot;&gt;
                &lt;div class=&quot;third&quot;&gt;
                    &lt;div class=&quot;red-rectangle&quot;&gt;&lt;/div&gt; 
                &lt;/div&gt;
                &lt;div class=&quot;fourth&quot;&gt;&lt;/div&gt;
                &lt;span class=&quot;text-3&quot;&gt;3&lt;/span&gt;
                &lt;span class=&quot;text-4&quot;&gt;4&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;block blue&quot;&gt;5&lt;/div&gt;
    &lt;/main&gt;
    &lt;footer&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Код-css:main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 700px;
    font-size: 18px;
    font-weight: bold;
    font-family: sans-serif;
}

.block {
    width: 340px; 
    height: 50px; 
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.block.blue {
    background-color: rgb(249, 208, 6);
}

.white-rectangle {
    position: absolute;
    top: 12px;
    left: 10px;
    width: 130px;
    height: 26px;
    background-color: white;
    border: 2px solid black;
}

.block-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 350px;
    height: 300px;
    position: relative;
}

.block.second {
    background-color: rgb(34, 34, 236);
    width: 90px; 
    height: 300px;
    margin-top: -2px; 
    margin-left: 3px; 
}

.block-container {
    position: relative;
    width: 300px;
    height: 300px;
    border: 2px solid rgb(0, 0, 0);
    bottom: 2px;
    left: -3px;

}

.third {
    position: absolute;
    top: 15px;
    left: 12px;
    width: 116px;
    height: 265px;
    background-color: white;
    border: 2px solid rgb(121, 120, 120);
}

.red-rectangle {
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 112px;
    height: 30px;
    background-color: red;
    border: 3px solid black;
}

.fourth {
    position: absolute;
    top: 15px;
    left: 148px;
    width: 100px;
    height: 265px;
    background-color: rgb(34, 34, 236);
    border: 2px solid black;
}

.text-3,
.text-4 {
    position: absolute;
    font-size: 20px;
    color: black;
}

.text-3 {
    top: 135px;
    left: 50px;
}

.text-4 {
    top: 135px;
    left: 200px;
}
                 ${imageCaseHTML10}
            `;
        } else if (sectionNumber === 6) {
            content.innerHTML = `
                <h3>Гумова блокова верстка</h3>
Код-html:
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;2,2,2.css&quot; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;blue top&quot;&gt;
          &lt;div class=&quot;white-rect&quot;&gt;&lt;/div&gt; 
          &lt;p&gt;1&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;main-content&quot;&gt;
          &lt;div class=&quot;second&quot;&gt;&lt;p&gt;2&lt;/p&gt;&lt;/div&gt;
          &lt;div class=&quot;two&quot;&gt;
            &lt;div class=&quot;space&quot;&gt;
              &lt;div class=&quot;third&quot;&gt;
                &lt;div class=&quot;red-rect&quot;&gt;&lt;/div&gt; 
                &lt;p&gt;3&lt;/p&gt;
              &lt;/div&gt;
              &lt;div class=&quot;fourth&quot;&gt;&lt;p&gt;4&lt;/p&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;blue bottom&quot;&gt;&lt;p&gt;5&lt;/p&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/main&gt;
    &lt;footer&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

Код-css:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="2,2,2.css" />
  </head>
  <body>
    <header>
    </header>
    <main>
      <div class="container">
        <div class="blue top">
          <div class="white-rect"></div> 
          <p>1</p>
        </div>
        <div class="main-content">
          <div class="second"><p>2</p></div>
          <div class="two">
            <div class="space">
              <div class="third">
                <div class="red-rect"></div> 
                <p>3</p>
              </div>
              <div class="fourth"><p>4</p></div>
            </div>
          </div>
        </div>
        <div class="blue bottom"><p>5</p></div>
      </div>
    </main>
    <footer>
    </footer>
  </body>
</html>
                ${imageCaseHTML11}
            `;
        } else if (sectionNumber === 7) {
            content.innerHTML = `
                <h3>ЗАВДАННЯ №3 FLEXBOX</h3>
Код-html:
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="uk"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Курс програмування JAVA з працевлаштуванням та стажуванням в IT-компаніях. Створи портфоліо та отримай реальний досвід роботи."&gt;
    &lt;meta name="keywords" content="курс програмування, JAVA, працевлаштування, стажування, IT-сфера"&gt;
    &lt;meta name="author" content="Ваша Академія"&gt;
    &lt;title&gt;Курс програмування&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header class="header"&gt;
      &lt;div class="navbar"&gt;
        &lt;button class="nav-button formy-navchannya"&gt;Форми навчання&lt;/button&gt;
        &lt;button class="nav-button zakhody"&gt;Заходи&lt;/button&gt;
        &lt;button class="nav-button pro-akademiyu"&gt;Про Академію&lt;/button&gt;
        &lt;button class="nav-button kontakty"&gt;Контакти&lt;/button&gt;
        &lt;button class="city-button"&gt;Київ
          &lt;div class="triangle"&gt;&lt;/div&gt;
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/header&gt;

    &lt;main&gt;
      &lt;section class="course-info"&gt;
        &lt;div class="course-text"&gt;
          &lt;h1&gt;&lt;strong&gt;КУРС ПРОГРАМУВАННЯ&lt;/strong&gt;&lt;/h1&gt;
          &lt;h2&gt;&lt;strong&gt;JAVA З ПРАЦЕВЛАШТУВАННЯМ:&lt;/strong&gt;&lt;/h2&gt;
        &lt;/div&gt;
        &lt;div class="course-container1"&gt;&gt;
          &lt;div class="course-image-container"&gt;
            &lt;img src="images/image1.png" alt="Курс програмування" class="course-image"&gt;
          &lt;/div&gt;
          &lt;div class="course-details"&gt;
            &lt;ul&gt;
                &lt;span class="orange-dot"&gt;&lt;/span&gt;
                &lt;strong&gt;СТАЖУВАННЯ В IT-КОМПАНІЇ&lt;/strong&gt;
                &lt;p class="indented-text"&gt;Покажи себе на курсі і ще до закінчення навчання ми відправимо тебе на стажування в IT-компанію.&lt;/p&gt;
                &lt;span class="orange-dot"&gt;&lt;/span&gt;
                &lt;strong&gt;ТРИ ВИПУСКНИХ ПРОЕКТИ&lt;/strong&gt;
                &lt;p class="indented-text"&gt;Наприкінці курсу ти будеш мати три проекти, з якими легко працевлаштуєшся.&lt;/p&gt;
                &lt;span class="orange-dot"&gt;&lt;/span&gt;
                &lt;strong&gt;ІНТЕНСИВНІСТЬ&lt;/strong&gt;
                &lt;p class="indented-text"&gt;На відміну від інших наші студенти вчаться 6 разів на тиждень впродовж всього терміну. Саме тому вони краще за випускників всіх інших шкіл та легко працевлаштовуються.&lt;/p&gt;
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section class="graduates"&gt;
        &lt;h2&gt;&lt;strong&gt;Більше 800 випускників&lt;/strong&gt;&lt;/h2&gt;
        &lt;h3&gt;&lt;strong&gt;досягли успіху у IT-сфері&lt;/strong&gt;&lt;/h3&gt;
        &lt;div class="graduates-gallery"&gt;
          &lt;div class="graduate-card"&gt;
            &lt;div class="case"&gt;
              &lt;img src="images/1.png" alt="Анна"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="graduate-card"&gt;
            &lt;div class="case"&gt;
              &lt;img src="images/2.png" alt="Оля"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="graduate-card"&gt;
            &lt;div class="case"&gt;
              &lt;img src="images/3.png" alt="Іван"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="graduate-card"&gt;
            &lt;div class="case"&gt;
              &lt;img src="images/4.png" alt="Артур"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="graduate-card"&gt;
            &lt;div class="case"&gt;
              &lt;img src="images/5.png" alt="Катерина"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="graduate-card"&gt;
            &lt;div class="case"&gt;
              &lt;img src="images/6.png" alt="Андрій"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;section class="faq"&gt;
        &lt;h2&gt;Чому варто нам довіряти?&lt;/h2&gt;
        &lt;h3&gt;Часті запитання&lt;/h3&gt;
        &lt;div class="faq-container"&gt;
          &lt;div class="faq-left"&gt;
            &lt;p&gt;&lt;span class="faq-number"&gt;01&lt;/span&gt;&lt;span class="faq-title"&gt;ГАРАНТІЇ ПРАЦЕВЛАШТУВАННЯ?&lt;/span&gt;&lt;/p&gt;
            &lt;p&gt;Всі хто проходив наш унікальний курс з інкубатором досвіду влаштувались на роботу. І ми єдині в Україні, хто мають відео відгуки від роботодавців.&lt;/p&gt;
            &lt;p&gt;&lt;span class="faq-number"&gt;02&lt;/span&gt;&lt;span class="faq-title"&gt;ЩО ТАКЕ "ПОВТОРКА"?&lt;/span&gt;&lt;/p&gt;
            &lt;p&gt;Це можливість пройти курс повторно у разі якщо ви щось пропустили. Вона повністю безкоштовна, та має необмежену кількість разів. Іншими словами з нами ви отримаєте знання не переплачуючи за них.&lt;/p&gt;
            &lt;p&gt;&lt;span class="faq-number"&gt;03&lt;/span&gt;&lt;span class="faq-title"&gt;ЩО ТАКЕ ІНКУБАТОР?&lt;/span&gt;&lt;/p&gt;
            &lt;p&gt;Інкубатор досвіду це стажування на власному проєкті впродовж 5 місяців після закінчення навчання. Саме під час цього періоду ви отримаєте практичний досвід, який так необхідний для успішного проходження співбесіди.&lt;/p&gt;
          &lt;/div&gt;

          &lt;div class="faq-center"&gt;
            &lt;img src="images/image2.png" alt="Інкубатор досвіду"&gt;
          &lt;/div&gt;

          &lt;div class="faq-right"&gt;
            &lt;p&gt;&lt;span class="faq-number"&gt;04&lt;/span&gt;&lt;span class="faq-title"&gt;РЕЙТИНГ КОМПАНІЇ?&lt;/span&gt;&lt;/p&gt;
            &lt;p&gt;Більше 300 відео відгуків від працевлаштованих, відео відгуки роботодавців, більше 600 відгуків в Google та Facebook з загальним рейтингом 4.9 зірок, та більше 800 працевлаштованих випускників.&lt;/p&gt;
            &lt;p&gt;&lt;span class="faq-number"&gt;05&lt;/span&gt;&lt;span class="faq-title"&gt;РОЗТЕРМІНУВАННЯ?&lt;/span&gt;&lt;/p&gt;
            &lt;p&gt;Є можливість розтермінування платежів строком до 24 місяців з закріпленням ціни. Це найкращі умови розтермінування в Україні. Всі деталі щодо розтермінування, ви можете дізнатись в нашого менеджера.&lt;/p&gt;
            &lt;p&gt;&lt;span class="faq-number"&gt;06&lt;/span&gt;&lt;span class="faq-title"&gt;СКІЛЬКИ ТРИВАЄ КУРС?&lt;/span&gt;&lt;/p&gt;
            &lt;p&gt;Базовий курс з інкубатором досвіду триває 909 годин, базовий курс 230 годин. Це найбільший курс на ринку України та СНД. Заняття 6 разів на тиждень. Саме тому така висока продуктивність. Поки інші відпочивають, ви навчаєтесь.&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt>

      &lt;section class="study-now"&gt;
        &lt;div class="camera-frame"&gt;
          &lt;span class="camera-text"&gt;НАВЧАЙСЯ ЗАРАЗ, СПЛАЧУЙ ПОТІМ&lt;/span&gt;
        &lt;/div&gt;  
        &lt;div class="check-circle"&gt;
          &lt;div class="checkmark"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="increase-text"&gt;
          Розтермінування на 24 місяці
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
    &lt;footer class="footer"&gt;
      &lt;p&gt;Повернутися на головну&lt;/p&gt;
      &lt;a href="index.html" class="back-button"&gt;На головну&lt;/a&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

Код-css:
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #ffffff;
  margin: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.indented-text {
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 20px;
}
/* Частина 1: Кнопки */
.header {
  background-color: #ffffff;
  padding: 30px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.nav-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  text-align: center;
  white-space: nowrap; 
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: gray;
}

.city-button {
  background-color: #2b2b2b;
  color: white;
  font-size: 40px;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  white-space: nowrap;
  transition: background-color 0.3s ease;
  height: 68px;
  width: 200px;
  min-width: 325px;
  font-weight: bold;
}

.city-button .triangle {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%) rotate(90deg);
  width: 0;
  height: 0;
  border-left: 8px solid #00bfff;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: none;
}
/* Частина 2: КУРС ПРОГРАМУВАННЯ */
.course-info {
  background-color: #ffffff;
}

.course-container1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 1800px;
  margin: 30px;
}

.course-image-container {
  width: 45%;
}

.course-details {
  width: 50%;
}

.course-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.course-text {
  width: 100%;
  text-align: center;
}

.course-text h1 {
  color: #fd9e0f;
  font-size: 22px;
  font-weight: bold;
}

.course-text h2 {
  color: #000000;
  font-size: 32px;
  font-weight: bold;
}

.course-text ul {
  list-style: none;
  padding: 0;
}

.course-text li {
  margin-bottom: 20px;
  font-size: 18px;
  color: #555555;
}

.course-text li strong {
  color: #333333;
}

.orange-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fd9e0f;
  border: 2px solid black;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  top: -3px;
}
/* Частина 3: Більше 800 випускників */
.graduates {
  text-align: center;
  padding: 20px;
  background-color: #2b2b2b;
  color: white;
}

.graduates h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
}

.graduates h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: rgb(80, 157, 219);
  font-weight: bold;
}

/* Частина 3: Більше 800 випускників */
.graduates-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.graduate-card img {
  width: 100%;
  max-width: 425px; 
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}
/* Частина 4: Чому варто нам довіряти? */
.faq {
  padding: 10px;
  background-color: #ffffff;
}

.faq h2 {
  text-align: center;
  color: rgb(80, 157, 219);
  font-size: 22px;
  font-weight: bold;
}

.faq h3 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: bold;
}

.faq-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.faq-left, .faq-right {
  flex: 1;
  padding: 10px;
}

.faq-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.faq-center img {
  max-width: 100%;
  height: auto;
  border-radius: 2px;
}

.faq-number {
  color: #007bff;
  font-weight: bold;
  font-size: 4em;
  display: inline;
  margin: 0;
}

.faq-title {
  color: #fd9e0f;
  font-weight: bold;
  font-size: 1.2em;
  display: inline;
  margin-left: 0px;
}

.faq-left p, .faq-right p {
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.2;
  color: #555;
}
/* Частина 5: НАВЧАЙСЯ ЗАРАЗ, СПЛАЧУЙ ПОТІМ */
.study-now {
  display: flex;
  gap: 60px;
  align-items: center;
  background-color: #fd9e0f;
  padding: 20px;
  text-align: center;
  width: 98%;
  box-sizing: border-box;
}

.study-now h2 {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
  
}

.study-now p {
  color: #555;
  font-size: 16px;
}

.camera-frame {
  position: relative;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 36px;
  text-align: center;
  color: #395bb8;
  font-weight: bold;
}

.camera-text {
  color: #ffffff; 
}

.camera-frame::before,
.camera-frame::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  border: 3px solid;
  border-radius: 3px;
}

.camera-frame::before {
  top: -5px;
  right: -5px;
  border-left: none;
  border-bottom: none;
}

.camera-frame::after {
  bottom: -5px;
  left: -5px;
  border-right: none;
  border-top: none;
}

.frame-blue::before,
.frame-blue::after {
  border-color: rgb(36, 76, 121);
}

.check-circle {
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.checkmark {
  width: 20px; 
  height: 40px; 
  border: 3px solid #23d349; 
  border-width: 0 4px 4px 0;
  transform: rotate(45deg);
  display: inline-block;
  position: relative;
  top: -12px; 
  left: 6px; 
  transition: transform 0.3s ease-in-out; 
}

.check-circle:hover .checkmark {
  transform: rotate(45deg) scale(1.2); 
}

.increase-text {
  font-size: 25px;
  font-weight: bold; /
}
/* Частина 6: Повернутися на головну */
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  width: 98%;
  box-sizing: border-box;
}

.footer .back-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

}
.footer .back-button:hover {
  background-color: #0056b3;
}
                   ${imageCaseHTML12}
                   ${imageCaseHTML13}
                   ${imageCaseHTML14}
            `;
        }  else if (sectionNumber === 8) {
            content.innerHTML = `
                <h3>Висновок</h3>
У ході роботи опановано верстку HTML-документу із застосуванням CSS та FLEXBOX. Реалізовано принципи блочної верстки та верстки на основі плаваючих елементів.  
Застосовано CSS-властивості для адаптивного розташування блоків і оформлення елементів сторінки. Використано FLEXBOX для створення сучасних і зручних макетів.  
Отримано практичні навички для розробки стильних і структурованих веб-сторінок.
            `;
          }
        }  else if (currentLab === 4) {
            if (sectionNumber === 1) {
                content.innerHTML = `
                    <h3>Тема Мета Місце</h3>
Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.   

Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.             

Місце: 
Посилання на репозиторій веб-застосунку:
https://github.com/Jupiter1323/IC-34_WebLab4_Motliuk
              
Посилання на живу сторінку веб-застосунку:
https://jupiter1323.github.io/IC-34_WebLab4_Motliuk/
              
Посилання на репозиторій звітного html-документа:
https://github.com/Jupiter1323/IC-34_Report_Motliuk
                            
Посилання на живу сторінку звітного html-документа:
https://jupiter1323.github.io/IC-34_Report_Motliuk/
                `;
            } else if (sectionNumber === 2) {
                content.innerHTML = `
                    <h3>Десктопна версія</h3>
Код-html:

&lt;!DOCTYPE html&gt;
&lt;html lang="uk"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Гра - СТАЛКЕР 2&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;div class="banner"&gt;
            &lt;!-- Банер гри --&gt;
            &lt;h1&gt;СТАЛКЕР 2&lt;/h1&gt;
        &lt;/div&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Про гру&lt;/h2&gt;
            &lt;div class="game-description"&gt;
                &lt;img src="image/image1.png" alt="СТАЛКЕР 2" class="game-image"&gt;
                &lt;div&gt;
                    &lt;h3&gt;СТАЛКЕР 2&lt;/h3&gt;
                    &lt;p&gt;СТАЛКЕР 2 - це продовження популярної серії відеоігор, яка занурює гравців у постапокаліптичний світ Чорнобильської зони. Відкрийте для себе нові локації та таємниці, долаючи небезпеки цього світу.&lt;/p&gt;
                    &lt;p&gt;&lt;strong&gt;Дата виходу:&lt;/strong&gt; 2025&lt;/p&gt;
                    &lt;p&gt;&lt;strong&gt;Розробник:&lt;/strong&gt; GSC Game World&lt;/p&gt;
                    &lt;p&gt;&lt;strong&gt;Движок:&lt;/strong&gt; Unreal Engine 4&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;section&gt;
            &lt;h2&gt;DLC&lt;/h2&gt;
            &lt;div class="dlc-card"&gt;
                &lt;h3&gt;Оновлення DLC: Холодний острів&lt;/h3&gt;
                &lt;p&gt;Новий DLC приносить гравцям віддалену частину зони відчуження, де небезпека таємничого світу посилюється. Перевірте нові локації та випробування!&lt;/p&gt;
                &lt;a href="#"&gt;Детальніше&lt;/a&gt;
            &lt;/div&gt;
            &lt;div class="dlc-card"&gt;
                &lt;h3&gt;Оновлення DLC: Піщаний кар'єр&lt;/h3&gt;
                &lt;p&gt;Подорожуйте в піщаний кар'єр, де нові монстри та сюжети чекають на гравців. Випробуйте свої навички в новому середовищі!&lt;/p&gt;
                &lt;a href="#"&gt;Детальніше&lt;/a&gt;
            &lt;/div&gt;
            &lt;div class="dlc-card"&gt;
                &lt;h3&gt;Оновлення DLC: Лиманськ&lt;/h3&gt;
                &lt;p&gt;Лиманськ - нова ігрова локація з непередбачуваними поворотами та зловісною атмосферою. Зустрічайте нові виклики та розкривайте таємниці цієї локації.&lt;/p&gt;
                &lt;a href="#"&gt;Детальніше&lt;/a&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;section&gt;
            &lt;h2&gt;Оновлення&lt;/h2&gt;
            &lt;h3&gt;Оновлення 3&lt;/h3&gt;
            &lt;p&gt;Оновлення 3 для &lt;strong&gt;СТАЛКЕР 2&lt;/strong&gt; було випущене 15 січня 2025 року. Включає нові функції, а також виправлення багів, що поліпшують стабільність та геймплей гри:&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Покращена оптимізація графіки та продуктивності.&lt;/li&gt;
                &lt;li&gt;Виправлені помилки з анімацією персонажів.&lt;/li&gt;
                &lt;li&gt;Оновлені механізми взаємодії з NPC.&lt;/li&gt;
                &lt;li&gt;Поліпшена система AI ворогів.&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/section&gt>

        &lt;section&gt;
            &lt;h2&gt;Підтримка&lt;/h2&gt;
            &lt;p&gt;Якщо у вас виникли проблеми з грою, ви можете звернутися до нашої служби підтримки через Steam:&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Натисніть "Підтримка".&lt;/li&gt;
                &lt;li&gt;Створіть запит на допомогу, описавши вашу проблему.&lt;/li&gt;
            &lt;/ul&gt;
            &lt;a href="#" class="support-btn"&gt;Зв'язатися з підтримкою&lt;/a&gt;
        &lt;/section&gt;

        &lt;section&gt;
            &lt;h2&gt;Технічні вимоги&lt;/h2&gt;
            &lt;table&gt;
                &lt;thead&gt;
                    &lt;tr&gt;
                        &lt;th&gt;Системна вимога&lt;/th&gt;
                        &lt;th&gt;Мінімальні вимоги&lt;/th&gt;
                        &lt;th&gt;Рекомендовані вимоги&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/thead&gt;
                &lt;tbody&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Процесор&lt;/td&gt;
                        &lt;td&gt;Intel Core i5&lt;/td&gt;
                        &lt;td&gt;Intel Core i7&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Оперативна пам'ять&lt;/td&gt;
                        &lt;td&gt;8 GB&lt;/td&gt;
                        &lt;td&gt;16 GB&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Відеокарта&lt;/td&gt;
                        &lt;td&gt;NVIDIA GTX 1060&lt;/td&gt;
                        &lt;td&gt;NVIDIA RTX 3060&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Місце на диску&lt;/td&gt;
                        &lt;td&gt;50 GB&lt;/td&gt;
                        &lt;td&gt;50 GB&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                        &lt;td&gt;Операційна система&lt;/td&gt;
                        &lt;td&gt;Windows 10&lt;/td&gt;
                        &lt;td&gt;Windows 10&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/tbody&gt;
            &lt;/table&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;div class="container"&gt;
            &lt;p&gt;&copy; 2025 СТАЛКЕР 2. Усі права захищені.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/footer&gt;    
&lt;/body&gt;
&lt;/html&gt;



Код-css:
/* Загальні стилі */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f5f5f5;
}

.banner {
    width: 80%;
    height: 400px;
    background-image: url('image/image2.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0 auto;
    border: 3px solid #4CAF50;
    border-radius: 10px;
}

.banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

.banner h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

/* Стилі для основного контенту */
main {
    padding: 20px;
}

/* Заголовки */
h2 {
    text-align: center;
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 20px;
}

/* Секції */
section {
    background: #fff;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 900px;
}

/* Картки для оновлень DLC */
.dlc-card {
    background-color: #f0fff0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dlc-card h3 {
    color: #000000;
    font-size: 1.5rem;
}

.dlc-card p {
    font-size: 1rem;
    color: #333;
}

.dlc-card a {
    color: #4CAF50;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
    display: inline-block;
    margin-top: 10px;
}

/* Кнопка для підтримки */
.support-btn {
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.support-btn:hover {
    background-color: #4CAF50;
}

/* Оновлення для таблиць */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table th, table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    font-size: 1rem;
}

table th {
    background-color: #4CAF50;
    color: white;
    font-size: 1.1rem;
}

table tr:nth-child(even) {
    background-color: #f9f9f9;
}

table tr:hover {
    background-color: #f1f1f1;
}

/* Адаптивні стилі */
/* Десктопна версія */
@media (min-width: 1025px) {
    .banner h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .dlc-card h3 {
        font-size: 1.5rem;
    }

    table th, table td {
        font-size: 1rem;
    }

    section {
        padding: 20px;
    }
}

/* Загальні стилі футера */
footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
}

footer .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

footer p {
    font-size: 1rem;
    margin: 0;
} </pre>                   
                 ${imageCaseHTML15}
                `;
            } else if (sectionNumber === 3) {
                content.innerHTML = `
                    <h3>Планшетна версія</h3>
Код-css:          
/* Планшетна версія */
@media (min-width: 768px) and (max-width: 1024px) {
    .banner h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.7rem;
    }

    .dlc-card h3 {
        font-size: 1.4rem;
    }

    table th, table td {
        font-size: 1rem;
    }

    section {
        padding: 15px;
    }
}

                 ${imageCaseHTML16}
                `;
            } else if (sectionNumber === 4) {
                content.innerHTML = `
                    <h3>Мобільна версія</h3>
Код-css:  
/* Мобільна версія */
@media (max-width: 767px) {
    .banner h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .dlc-card h3 {
        font-size: 1.3rem;
    }

    table th, table td {
        font-size: 0.9rem;
    }

    section {
        padding: 10px;
    }

    .game-image {
        width: 100%;
        margin-bottom: 10px;
    }
}
                 ${imageCaseHTML17}
                `;
            } else if (sectionNumber === 5) {
                content.innerHTML = `
                    <h3>Висновок</h3>
                    У ході роботи опрацьовано адаптивну верстку з використанням медіа-запитів, метатегу viewport та стратегії Mobile First. 
                    Застосовано медіа-типи та функції для коректного відображення на різних пристроях. 
                    Отримано навички створення адаптивних веб-сторінок для мобільних і десктопних пристроїв.
                `;
               }
            } else {
        content.innerHTML = `Вміст для лабораторної роботи №${currentLab}. ${sectionTitle}`;
          }
        }



