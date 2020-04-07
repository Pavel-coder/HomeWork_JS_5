// ==============================================
//     1.-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// ==============================================
// function descriptionTag( tag, action, descript) {
//     this.tag = tag;
//     this.action = action;
//     this.descrit = descript;
//
// }
//
// let aTag = new descriptionTag('a',
//     `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.`,
//     [{titleOfdescript: `accesskey`, actionOfdescript: `Активация ссылки с помощью комбинации клавиш.`},
//         {titleOfdescript: `coords`, actionOfdescript: `Устанавливает координаты активной области.`},
//         {titleOfdescript: `download`, actionOfdescript: `Предлагает скачать указанный по ссылке файл.`}
//     ]);
// let divTag = new descriptionTag('div',
//     `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
//     [{titleOfdescript: `align`, actionOfdescript: `Задает выравнивание содержимого тега <div>.`},
//         {titleOfdescript: `title`, actionOfdescript: `Добавляет всплывающую подсказку к содержимому.`}
//     ]);
// let h1Tag = new descriptionTag('h1',
//     `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//     [{titleOfdescript: `align`, actionOfdescript: `Определяет выравнивание заголовка.`},
//         {titleOfdescript: `<h1>`, actionOfdescript: `Заголовок первого уровня`}
//     ]);
//
// let spanTag = new descriptionTag('span', `Тег <span> предназначен для определения строчных элементов документа.`,
//     [{titleOfdescript: `<span>`, actionOfdescript: `Для этого тега доступны универсальные атрибуты и события.`}
//     ]);
//
// let inputTag = new descriptionTag('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.`,
//     [{titleOfdescript: `accept`, actionOfdescript: `Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.`},
//         {titleOfdescript: `accesskey`, actionOfdescript: `Переход к элементу с помощью комбинации клавиш.`},
//         {titleOfdescript: `align`, actionOfdescript: `Определяет выравнивание изображения.`}
//     ]);
//
// let formTag = new descriptionTag('form', `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.`,
//     [{titleOfdescript: `accept-charset`, actionOfdescript: `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.`},
//         {titleOfdescript: `action`, actionOfdescript: `Адрес программы или документа, который обрабатывает данные формы.`},
//         {titleOfdescript: `autocomplete`, actionOfdescript: `Включает автозаполнение полей формы.`}
//     ]);
//
// let optionTag = new descriptionTag('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.`,
//     [{titleOfdescript: `disabled`, actionOfdescript: `Заблокировать для доступа элемент списка.`},
//         {titleOfdescript: `label`, actionOfdescript: `Указание метки пункта списка.`},
//         {titleOfdescript: `selected`, actionOfdescript: `Заранее устанавливает определенный пункт списка выделенным.`}
//     ]);
//
// let selectTag = new descriptionTag('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
//     [{titleOfdescript: `accesskey`, actionOfdescript: `Позволяет перейти к списку с помощью некоторого сочетания клавиш.`},
//         {titleOfdescript: `autofocus`, actionOfdescript: `Устанавливает, что список получает фокус после загрузки страницы.`},
//         {titleOfdescript: `disabled`, actionOfdescript: `Блокирует доступ и изменение элемента.`}
//     ]);
//
// console.log(aTag);
// console.log(divTag);
// console.log(h1Tag);
// console.log(spanTag);
// console.log(inputTag);
// console.log(formTag);
// console.log(optionTag);
// console.log(selectTag);
// ==============================================
//     -2.  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Tag {
//     constructor (tag, action, descript){
//         this.tag = tag;
//         this.action = action;
//         this.descrit = descript;
//
//     }
// }
// let aTag = new Tag('a',
//     `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.`,
//     [{titleOfdescript: `accesskey`, actionOfdescript: `Активация ссылки с помощью комбинации клавиш.`},
//         {titleOfdescript: `coords`, actionOfdescript: `Устанавливает координаты активной области.`},
//         {titleOfdescript: `download`, actionOfdescript: `Предлагает скачать указанный по ссылке файл.`}
//     ]);
//
// let divTag = new Tag('div',
//     `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
//     [{titleOfdescript: `align`, actionOfdescript: `Задает выравнивание содержимого тега <div>.`},
//         {titleOfdescript: `title`, actionOfdescript: `Добавляет всплывающую подсказку к содержимому.`}
//     ]);
//
// let h1Tag = new Tag('h1',
//     `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`,
//     [{titleOfdescript: `align`, actionOfdescript: `Определяет выравнивание заголовка.`},
//         {titleOfdescript: `<h1>`, actionOfdescript: `Заголовок первого уровня`}
//     ]);
//
// let spanTag = new Tag('span', `Тег <span> предназначен для определения строчных элементов документа.`,
//     [{titleOfdescript: `<span>`, actionOfdescript: `Для этого тега доступны универсальные атрибуты и события.`}
//     ]);
//
// let inputTag = new Tag('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.`,
//     [{titleOfdescript: `accept`, actionOfdescript: `Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.`},
//         {titleOfdescript: `accesskey`, actionOfdescript: `Переход к элементу с помощью комбинации клавиш.`},
//         {titleOfdescript: `align`, actionOfdescript: `Определяет выравнивание изображения.`}
//     ]);
//
// let formTag = new Tag('form', `Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.`,
//     [{titleOfdescript: `accept-charset`, actionOfdescript: `Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.`},
//         {titleOfdescript: `action`, actionOfdescript: `Адрес программы или документа, который обрабатывает данные формы.`},
//         {titleOfdescript: `autocomplete`, actionOfdescript: `Включает автозаполнение полей формы.`}
//     ]);
//
// let optionTag = new Tag('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.`,
//     [{titleOfdescript: `disabled`, actionOfdescript: `Заблокировать для доступа элемент списка.`},
//         {titleOfdescript: `label`, actionOfdescript: `Указание метки пункта списка.`},
//         {titleOfdescript: `selected`, actionOfdescript: `Заранее устанавливает определенный пункт списка выделенным.`}
//     ]);
//
// let selectTag = new Tag('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.`,
//     [{titleOfdescript: `accesskey`, actionOfdescript: `Позволяет перейти к списку с помощью некоторого сочетания клавиш.`},
//         {titleOfdescript: `autofocus`, actionOfdescript: `Устанавливает, что список получает фокус после загрузки страницы.`},
//         {titleOfdescript: `disabled`, actionOfdescript: `Блокирует доступ и изменение элемента.`}
//     ]);
//
// console.log(aTag);
// console.log(divTag);
// console.log(h1Tag);
// console.log(spanTag);
// console.log(inputTag);
// console.log(formTag);
// console.log(optionTag);
// console.log(selectTag);
// ==============================================
//     -3.  Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car  = {
//     model: 'Q7',
//     made: 'Audi',
//     year: 2017,
//     max_speed: 280,
//     engine_capacity: 2.5,
//     drive: function () {
//     console.log (`їдемо зі швидкістю ${this.max_speed} на годину`);
//     },
//     info: function () {
//         console.log(this);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//     this.max_speed += newSpeed;
//         console.log(this.max_speed);
//     },
//     changeYear: function (newValue) {
//     this.year = newValue;
//         console.log(this.year);
//     },
//     addDriver: function (driver) {
//         this.car = driver;
//         console.log(this);
//     }
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(300);
// car.changeYear(2000);
// car.addDriver( {name : 'Vasya', age : 55});
// ==============================================
//     - 4. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function car (model, made, year, max_speed, engine_capacity) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine_capacity = engine_capacity;
//     this.drive =  function () {
//     console.log (`їдемо зі швидкістю ${this.max_speed} на годину`);
//     };
//     this.info = function () {
//         console.log(this);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//     this.max_speed += newSpeed;
//         console.log(this.max_speed);
//     };
//     this.changeYear = function (newValue) {
//     this.year = newValue;
//         console.log(this.year);
//     };
//     this.addDriver = function (driver) {
//         this.car = driver;
//         console.log(this);
//     };
// };
// let audi = new car('Q5', 'Audi', 1998, 850, 3 );
// ==============================================
//     - 5. Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car  {
//     constructor(model, made, year, max_speed, engine_capacity) {
//
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_capacity = engine_capacity;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//         };
//         this.info = function () {
//             console.log(this);
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.max_speed += newSpeed;
//             console.log(this.max_speed);
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//             console.log(this.year);
//         };
//         this.addDriver = function (driver) {
//             this.car = driver;
//             console.log(this);
//         };
//     };
// };
// let audi = new Car('Q5', 'Audi', 1998, 850, 3 );
// ==============================================
//     6. -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
// let anna = new Cinderella('anna', 33, 38);
// let luda = new Cinderella('luda', 30, 39);
// let kate = new Cinderella('kate', 20, 40);
// let sveta = new Cinderella('sveta', 25, 33);
// let ira = new Cinderella('ira', 28, 36);
// let alena = new Cinderella('alena', 32, 32);
// let masha = new Cinderella('masha', 21, 31);
// let zina = new Cinderella('zina', 18, 45);
// let olga = new Cinderella('olga', 38, 39);
// let nadia = new Cinderella('nadia', 25, 34);
// let arrCinderellas = [];
// arrCinderellas.push(anna,luda,kate,sveta,ira,alena,masha,zina,olga,nadia);
//
//
// class Prince {
//     constructor(name, age, slipper) {
//        this.name = name;
//        this.age = age;
//        this.slipper = slipper;
//     }
//
//     comp(){
//         for (const element of arrCinderellas) {
//             if (element.foot_size === this.slipper) {
//                 console.log(`I'm your Cinderella my name is ${element.name}`);
//             }
//             }
//         }
//     }
// let princeValue = new Prince('oleg', 22, 38);
// princeValue.comp();
// ==============================================
//     7. -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function cinderella (name, age, foot_size){
//     this.name = name;
//     this.age = age;
//     this.foot_size = foot_size;
// };
//
// let anna = new cinderella('anna', 33, 38);
// let luda = new cinderella('luda', 30, 39);
// let kate = new cinderella('kate', 20, 40);
// let sveta = new cinderella('sveta', 25, 33);
// let ira = new cinderella('ira', 28, 36);
// let alena = new cinderella('alena', 32, 32);
// let masha = new cinderella('masha', 21, 31);
// let zina = new cinderella('zina', 18, 45);
// let olga = new cinderella('olga', 38, 39);
// let nadia = new cinderella('nadia', 25, 34);
// let arrCinderellas = [];
// arrCinderellas.push(anna,luda,kate,sveta,ira,alena,masha,zina,olga,nadia);
//
//
// function prince(name, age, slipper) {
//     this.name = name;
//     this.age = age;
//     this.slipper = slipper;
//     this.comp = function (arr) {
//         for (const element of arrCinderellas) {
//             if (element.foot_size === this.slipper) {
//                 console.log(`I'm your Cinderella my name is ${element.name}`);
//             }
//
//         }
//
//     }
// }
//
//         let princeValue = new prince('oleg', 22, 38);
// princeValue.comp();