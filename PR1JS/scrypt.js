//--------------------------task 1--------------------------------
document.write("<h1>PR1</h1>");
document.write("<h2>Завдання 1</h2>");
let first = ["a", "b", "c"];
let second = [1, 2, 3];

document.write("Масив букв: " + first + "</br>");
document.write("Масив чисел: " + second + "</br>");

var finish = second.concat(first);
document.write("Результат об'єднання: " + finish);


//--------------------------task 2--------------------------------
document.write("<h2>Завдання 2</h2>");
var arr = ['a', 'b', 'c'];

document.write("Початковий масив : " + arr + "</br>");
arr.push(1, 2, 3);
document.write("Результат додавання 1,2,3: " + arr);

//--------------------------task 3--------------------------------
document.write("<h2>Завдання 3</h2>");
let arr1 = [1, 2, 3];
document.write("Початковий масив: " + arr1 + "</br>");
document.write("Реверс масиву: " + arr1);

//--------------------------task 4--------------------------------
document.write("<h2>Завдання 4</h2>");
let arr4 = ['js', 'css', 'jq']
document.writeln("Масив [ js, css, jq ]" + "</br>")
document.writeln("Останій елемент масиву: " + arr4[arr4.length - 1])
//--------------------------task 5--------------------------------
document.write("<h2>Завдання 5</h2>");
let arr5 = [1, 2, 3, 4, 5]
let arrNew = arr5.slice(3, 5)

document.writeln("Початковий масив :" + arr5 + "<br>")
document.writeln("Новий масив :" + arrNew)

//--------------------------task 6--------------------------------
document.write("<h2>Завдання 6</h2>");
let arr6 = [1, 2, 3, 4, 5]
document.writeln("Початковий масив :" + arr6 + "<br>")
arr6.splice(1, 2);
document.writeln("Новий масив :" + arr6)

//--------------------------task 7--------------------------------
document.write("<h2>Завдання 7</h2>");
let arr7 = [1, 2, 3, 4, 5]
let arr7New = arr7.splice(1, 3);
document.writeln("Початковий масив: [ 1, 2, 3, 4, 5 ]" + "<br>")
document.writeln("Новий масив : " + arr7New)

//--------------------------task 8--------------------------------
document.write("<h2>Завдання 8</h2>");
let arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 0, "a", "b", "c");

document.write("Початковий масив: [ 1, 2, 3, 4, 5 ]" + "</br>")
document.write("Новий масив: " + arr8)
//--------------------------task 9--------------------------------
document.write("<h2>Завдання 9</h2>");

let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 0, "a", "b");
arr9.splice(6, 0, "c");
arr9.splice(8, 0, "e");

document.write("Початковий масив: [ 1, 2, 3, 4, 5 ]" + "</br>")
document.write("Новий масив: " + arr9)

//--------------------------task 10--------------------------------
document.write("<h2>Завдання 10</h2>");
var arr10 = [3, 4, 1, 2, 7];
arr10.sort();

document.write("Початковий масив: [ 3, 4, 1, 2, 7 ]" + "</br>")
document.write("Посортований масив: " + arr10)

//--------------------------task 11--------------------------------
document.write("<h2>Завдання 11</h2>");
var arr11 = { js: 'test', jq: 'hello', css: 'world' };
arr11Key = Object.keys(arr11);
document.write("Масив ключів: " + arr11Key);

//--------------------------task 12--------------------------------
document.write("<h2>Завдання 12</h2>");
arr = 'aaa@bbb@ccc';
document.writeln("Початковий рядок aaa@bbb@ccc " + "<br>")
document.write("Новий рядок: " + arr.replace(/@/g, '!') + "<br>")

//--------------------------task 13--------------------------------
document.write("<h2>Завдання 13</h2>");
let date = "2025-12-31";
date = date.split("-").reverse().join("/");
document.write("Перетворення дати 2025-12-31 = " + date);

//--------------------------task 14--------------------------------
document.write("<h2>Завдання 14</h2>");
arr = 'я вчу javascript!'
document.writeln("Початковий масив: " + arr + "<br>")
document.writeln("Новий масив: " + arr.split('') + "<br>")

//--------------------------task 15--------------------------------
document.write("<h2>Завдання 15</h2>");
let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr15.length; i++) {
    let x = "";
    for (let j = 0; j < i + 1; j++) {
        x += "x";
    }
    arr15[i] = x;
}
document.write("Заповнено масив таким чином: в перший елемент записано 'x', у другій 'xx', в третій'xxx' i так далі: "
    + arr15.toString()
);

//--------------------------task 16--------------------------------
document.write("<h2>Завдання 16</h2>");
function arrayFill(value, length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}

arr = arrayFill('x', 5)
document.writeln("Створений масив: [" + arr + "]");

//--------------------------task 17--------------------------------
document.write("<h2>Завдання 17</h2>");
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        for (var k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
document.writeln("Елементи три вимірного масиву: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]] " + '</br>');
document.writeln("Сума елементів: " + sum);

//--------------------------task 18--------------------------------
document.write("<h2>Завдання 18</h2>");
let styles = ["Jazz", "Blues"];
document.write("Початкові елементи: Jazz, Blues");
document.write("<br>Додано елемент: Rock-n-Roll");
styles.push("Rock-n-Roll");
styles[Math.ceil(styles.length / 2)] = "Classics";
document.write("<br>Видалено перший елемент: " + styles.shift());
styles.unshift("Rap", "Reggae");
document.write("<br> Поточні елементи масиву: " + styles.toString());

//--------------------------task 19--------------------------------
document.write("<h2>Завдання 19</h2>");
function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
document.writeln("background-color: перетворено на : " + camelize('background-color') + '</br>')
document.writeln("list-style-image: перетворено на : " + camelize('list-style-image') + '</br>')
document.writeln("-webkit-transition: перетворено на: " + camelize('-webkit-transition'))

//--------------------------task 20--------------------------------
document.write("<h2>Завдання 20</h2>");
function filterRange(arr20, a, b) {

    return arr20.filter(item => (a <= item && item <= b));
}

let arr20 = [5, 3, 8, 1];

let filtered = filterRange(arr20, 1, 4);

document.write("Відфільтровані значення: " + filtered + '</br>'); // 3,1 (совпадающие значения)
document.write("Без змін: " + arr20);

//--------------------------task 21--------------------------------
document.write("<h2>Завдання 21</h2>");
function copySorted(arr1) {
    return arr1.slice().sort()
}

arr1 = ["HTML", "JavaScript", "CSS"];
document.write("Масив: HTML, JavaScript, CSS" + '</br>');
document.write("Відсортований масив: " + copySorted(arr1));

//--------------------------task 22--------------------------------
document.write("<h2> Завданння 22</h2>");

function sortByAge(arr) {
    arr.sort(function (a, b) { a.age - b.age });
}

let ivan = { name: "Іван ", age: 25 };
let petro = { name: "Петро ", age: 30 };
let mariya = { name: "Марія ", age: 28 };

arr = [petro, ivan, mariya];
sortByAge(arr)

document.write("Відсортовано:" + arr[0].name + arr[1].name + arr[2].name);


//--------------------------task 23--------------------------------
document.write("<h2> Завданння 23</h2>");

function getAverageAge(users) {
    return users.reduce(function (prev, user) {
        return prev + user.age
    }, 0) / users.length;
}

ivan = { name: "Іван", age: 25 };
petro = { name: "Петро", age: 30 };
mariya = { name: "Марія", age: 28 };

arr = [ivan, petro, mariya];

document.write("Середнє: " + getAverageAge(arr));

//--------------------------task 24--------------------------------
document.write("<h2> Завданння 24</h2>");
let users = [
    { id: "іван", name: "Іван Іванко", age: 20 },
    { id: "ганна", name: "Ганна Іванко", age: 24 },
    { id: "петро", name: "Петро Петренко", age: 31 },
];

const groupById = (arr) => {
    return arr.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
    }, {});
};
document.write("Результат: " + JSON.stringify(groupById(users))
);

//--------------------------task 25--------------------------------
document.write("<h2> Завданння 25</h2>");

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

document.writeln("Сума = " + sumSalaries(salaries))
