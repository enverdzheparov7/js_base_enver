
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