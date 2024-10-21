
let test = 11;

if (test > 10) {
alert('105.1 ' + '+++'); // сработает это
} else {
alert('105.1 ' +'---');
}

if (test < 10) {
alert('105.2 ' + '+++'); 
} else {
alert('105.2 ' +'---'); // сработает это
}

if (test >= 10) {
alert('105.3 ' + '+++'); // сработает это
} else { 
alert('105.3 ' +'---');
}

if (test <= 10) {
alert('105.4 ' + '+++'); 
} else {
alert('105.4 ' +'---'); // сработает это
}

if (test == 10) {
alert('106 ' + '+++'); 
} else {
alert('106 ' +'---'); // сработает это
}

if (test != 10) {
alert('107 ' + '+++'); 
} else {
alert('107 ' +'---'); // сработает это
}

let test1 = 12;
let test2 = 13;

if (test1 > test2) {
alert('108.1 ' + '+++'); 
} else {
alert('108.1 ' +'---'); 
}

if (test1 == test2) {
alert('108.2 ' + '+++'); 
} else {
alert('108.2 ' +'---'); 
}

let test3 = 'afk';
let test4 = 'afk';
if (test3 == test4) {
alert('109 ' + '+++'); 
} else {
alert('109 ' +'---'); 
}

let test5 = '123';
let test6 = 123;
if (test5 == test6) {
alert('110 ' + '+++'); 
} else {
alert('110 ' +'---'); 
}
alert(`ЗАДАНИЕ 111: 
1. +++
2. +++
3. +++
4. ---
5. +++ `)

alert(`ЗАДАНИЕ 112: 
1. ---
2. ---
3. ---
4. +++
5. --- `);

let num = 7;
if (num > 0 && num < 5) {
alert('113.1 ' + '+++'); 
} else {
alert('113.1 ' +'---'); 
}

if (num => 10 && num <= 20) {
alert('113.2 ' + '+++'); 
} else {
alert('113.2 ' +'---'); 
}

let num1 = 0, num2 = 5;
if (num1 <= 1 && num2 >= 3) {
alert('113.3 ' + '+++'); 
} else {
alert('113.3 ' +'---'); 
}


alert(`ЗАДАНИЕ 114: 
1. ---      2. +++
3. +++   4. +++
5. +++   6. +++
7. ---      8. +++

ЗАДАНИЕ 115: 
если при сравнении num равен 0 ИЛИ входит в диапозон от 1 до 5, то результат будет равен +++ `);

alert(`ЗАДАНИЕ 116.1 
if ((num > 5 && num < 10) || num == 20)
	ЗАДАНИЕ 116.2
if (num > 5 || (num > 0 && num < 3))
	ЗАДАНИЕ 116.3
if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30))
	`)

// num1 = 0, num2 = 5;
if (!(num1 >= 0 || num2 <= 10)) {
	alert('117.1 ' + '+++');
} else {
	alert('117.1 ' + '---');
}

let test7 = true;

if (test7 === true) {
	alert('118.1 ' + '+++');
} else {
	alert('118.1 ' + '---');
}

alert( `ЗАДАНИЕ 119
1. undefined, false, 0, null, NaN, ''
2. +++  3. ---  4. ---
5. ---  6. +++  7. ---
8. ---`)

	let test8 = true;

if (test8) {
	alert('120 ' + '+++');
} else {
	alert('120 ' + '---');
}

/*
121/1
let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}
121/2
let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

121/3
let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}
*/

alert(` 122 ЗАДАНИЕ
+++
---
---
---
---
---
---
+++
+++`)


/*123 ЗАДАНИЕ
№1

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}
№2

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 && !test2 ) {
	console.log('+++');
} else {
	console.log('---');
}
№3

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (!test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}
№4

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}
№5

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}
№6

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || (test2 && test3)) {
	console.log('+++');
} else {
	console.log('---');
}
№7

Перепишите следующий код в сокращенной форме:

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || (!test2 && !test3)) {
	console.log('+++');
} else {
	console.log('---');
}*/

test = 10;

if (test == 10){
	alert('124 задание ' + 'yes');
}

//125
if (test > 0) console.log('+++'); else console.log('---');
if (test > 0) console.log('+++');

//127
let day = 22;

if (day >= 1 && day <=11) {
	console.log('1 декада');
} else if (day >= 11 && day <=21) {
	console.log('2 декада');
} else if (day >= 21 &&  day<=31 ) {
	console.log('3 декада');
}
//128
num = 26;

if (num >= 10 && num<=99) {
	if ((num%10+num/10) <= 9 ) {
		console.log('сумма цифр однозначна');
	} else {
		console.log('сумма цифр двузначна');
	}
} else {
	console.log('меньше нуля');
}

//129
let lang = 'ru';

switch(lang){
	case 'ru':
			console.log('рус');
		break;
    case 'en':
			console.log('анг');
			break;
	case 'de':
			console.log('нем');
	break;

    default:
	        console.log('язык не поддерживается');
		        break;
}

/*131 Было
let num = 1;
let res;

if (num >= 0) {
	res = '1';
} else {
	res = '2';
}

console.log(res);

Стало
let num = 1;
let res = num >= 0 ? res = '1': res = '2';
console.log(res);
*/

//132

let a = 2 * (3 - 1);
let b = 6 - 2;
let res = a == b;
 console.log(res)

 a = 5 * (7 - 4);
 b = 1 + 2 + 7;
 res = a > b;
 console.log(res)

 a = 2 ** 4;
 b = 4 ** 2;
res = a !=b;
  console.log(res)