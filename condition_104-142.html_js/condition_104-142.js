
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

  //133

  let ok = confirm('Вам есть 18?');

if (ok) {
	console.log('Текст для взрослых *****');
} else {
	console.log('Доступ запрещён');
}

//134

let age = 17;
let adult;
if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}

console.log(adult);

//135
//1
let age1 = 17;
let adult1;

if (age1 >= 18) {
	 adult1 = true;
} else {
	 adult1 = false;
}
console.log(adult1);
//2

let age2 = 17;
let adult2;

if (age1 >= 18) {
	 adult2 = true;
} else {
	 adult2 = false;
}
console.log(adult2);

//3

let age3 = 24;
let res1;

if (age3 >= 18) {
	if (age3 <= 23) {
		 res1 = 'от 18 до 23';
	} else {
		 res1 = 'больше 23';
	}
} else {
	 res1 = 'меньше 18';
}

console.log(res1);

//4
let age4 = 19;
let res2;

if (age4 >= 18) {
	if (age4 <= 23) {
		res2 = 'от 18 до 23';
	} else {
		res2 = 'больше 23';
	}
} else {
	res2 = 'меньше 18';
}

console.log(res2);


let min = 10;

if (min >= 0 && min <= 19) {
	alert('136 ЗАДАНИЕ: 1 треть');
}

if (min >=20 && min <= 39) {
    alert ('136 ЗАДАНИЕ: 2 треть');
}

if (min >= 40 && min <= 59) {
	alert('136 ЗАДАНИЕ: 3 треть');
}

//137
let arr = [1, 2, 3, 4, 5]

if (arr.length >= 3) {
	console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]);
}

//138.1
str ='bbc'

if(str[0]==='a'){
	console.log('!!!')
}else{
	console.log('((((')
}
//2
str='axel.x'
if(str[str.length - 1]==='x'){
	console.log('!!!')
}else{
	console.log('((((')
}
//138_3
str='cba'
if(str[0]==='a'||str[0]==='b'){
	console.log('!!!')
}else{
	console.log('((((')
}
//139

let numba = 123450;
res = String(numba);
res1 = res.length -1;

let last = String(numba)[res1] ;

if(last == 0){
	console.log('+++');
} else { 
	console.log('---');
}
 
//139.2

let numba1 = 3;

if(numba1 % 2 == 0){
	console.log('Число чётное');
} else { 
	console.log('Число нечётное');
}

let numba2 = 3;

if(numba2 % 2 == 0){
	console.log('Число чётное');
} else { 
	console.log('Число нечётное' + 'остаток=' + numba2%2);
}

let numba3 = 3;

if(numba3 % 3 == 0){
	console.log('Число делится на 3');
} else { 
	console.log('Число нацело не делится на 3');
}

//141
/* №1

 Код должен проверить сумму чисел:

 let num1 = 1;
 let num2 = 2;

 if (num1 + num2 === 3) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = 1;
num2 = 2;

if (num1 + num2 == 3) {
  console.log('+++');
} else {
  console.log('---');
}

/* №2

 Код должен проверить сумму чисел:

 let num1 = '1';
 let num2 = '2';

 if (num1 + num2 === 3) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = '1';
num2 = '2';

if (Number(num1) + Number(num2) === 3) {
  console.log('+++');
} else {
  console.log('---');
}

/* №3

 Код должен проверить сумму чисел:

 let num1 = '1';
 let num2 = '2';

 if (Number(num1 + num2) === 3) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = '1';
num2 = '2';

if (Number(num1) + Number(num2) === 3) {
  console.log('+++');
} else {
  console.log('---');
}

/* №4

 Код должен проверить первую цифру числа:

 let num = 123;

 if (num[0] === 1) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = 123;

if (String(num1)[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}
/* №5

 Код должен проверить первую цифру числа:

 let num = 123;

 if (String(num[0]) === 1) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/

num1 = 123;

if (String(num1)[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}


/* №6

 Код должен проверить первую цифру числа:

 let num = 123;

 if (String(num)[0] === 1) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = 123;

if (String(num1)[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}

/* №7

 Код должен проверить первую цифру числа:

 let num = 123;
 let first = String(num)[0];

 if (first === 1) {
 	console.log('+++');
 } else {
 	console.log('---');
 }*/

num1 = 123;
let first1 = String(num1)[0];

if (first1 === '1') {
  console.log('+++');
} else {
  console.log('---');
}

/* №8

 Код должен проверить, что в числе ровно две цифры:

 let num = 12;

 if (num.length === 2) {
 	console.log('+++');
 } else {
 	console.log('---');
 }*/

num1 = 12;

if (String(num1).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

/* №9

 Код должен проверить, что в числе ровно две цифры:

 let num = 12;
 let str = Number(str);

 if (str.length === 2) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = 12;

if (String(num1.length) === 2) {
  console.log('+++');
} else {
  console.log('---');
}

/* №10

 Код должен проверить, что в числе ровно две цифры:

 let num = 12;

 if (String(num.length) === 2) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1= 12;

if (String(num1).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

/* №11

 Код должен проверить, что в числе ровно две цифры:

 let num = 12;

 if (String(num).length === String(2)) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 = 12;

if (String(num1).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

/* №12

 Код должен проверить, что в числе ровно две цифры:

 let num = 12;

 if (String(num).lenght === 2) {
 	console.log('+++');
 } else {
 	console.log('---');
 }
*/
num1 =  12;

if (String(num1).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

/* №13

 Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

 let num = '123033';  берем в кавычки, чтобы обращаться к цифрам

 let sum1 = num[0] + num[1] + num[2];
 let sum2 = num[3] + num[4] + num[5];

 if (sum1 == sum2) {
 	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
*/
num1 = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num1[0]) + Number(num1[1]) + Number(num1[2]);
let sum2 = Number(num1[3]) + Number(num1[4]) + Number(num1[5]);

if (sum1 === sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}


let month = 4;
if (month==1 || month==2 || month==12 )
	console.log('зима')
if (month>=3 && month<=5 )
	console.log('весна')
if (month>=6 && month<=8 )
	console.log('лето')
if (month>=9 && month<=11 )
	console.log('осень')

str ='abcde'

if(str[0]==='a'){
	console.log('да')
}else{
	console.log('нет')
}

let number = 423450;

let first = String(number)[0] ;

if(first == 1 || first == 2 || first == 3){
	console.log('+++');
} else { 
	console.log('---');
}

let three = 123;

let sum = three%10+Math.floor((three/100)%10)+Math.floor((three/10)%10);
console.log(sum) 

let num5 = 123123; 

let first2 = Math.floor(num5 / 1000) % 10 + Math.floor(num5 / 100) % 10 + Math.floor(num5 / 10) % 10;
let second2 = num5% 10 + Math.floor(num5 / 10) % 10 + Math.floor(num5 / 100) % 10;

if ( first2 === second2) {
    console.log('да');
} else {
    console.log('нет');
} 