// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
//
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//
let str = 'Каждый охотник желает знать';
function stringToarray(str) {

    return str.split(' ');
}
console.log(stringToarray(str));

// - Напишіть функцію delete_characters(str, length),
// яка повертає підрядок, що складається із зазначеної кількості символів.

    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
function delete_characters(str, length) {
    return str.substring(0, length);
}
document.writeln(delete_characters(str, 9));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.

    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str = "HTML JavaScript PHP";
function insert_dash(str){
    return str.replaceAll(' ','-').
                 toUpperCase();
}
document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу
// рядка з нижнього регістру у верхній.

let str = 'интерпретируемый';
function firstUp(str){
    return str[0].toUpperCase() + str.slice(1);
}
document.write(firstUp(str))


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str = "The CSS specification allows elements to be identified by their attributes."
function capitalize (str)  {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
document.write(capitalize(str));
console.log(capitalize(str));