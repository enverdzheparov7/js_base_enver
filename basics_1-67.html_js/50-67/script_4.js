

alert(`ЗАДАНИЕ 51:
1. true 
2. false
3. true
4. false
5. false
6. true
7. false
8. true
9. true
10. false
11. true
12. true
13. false
14. false
15. false
16. true
17. false
18. true
19. true
20. true
21. false
`)

alert(`ЗАДАНИЕ 52.1:`);
let str ='abcde';
let num0 = 0, num1 = 1, num2 = 2, num3 = 3, num4 = 4;
alert(str[num0]), alert(str[num2]), alert(str[num4]);
alert(`ЗАДАНИЕ 52.2:`);
let stroka = str[num4] + str[num3] + str[num2] + str[num1] + str[num0];
alert(stroka);
alert(`ЗАДАНИЕ 52.3:`);
let num = 3;
alert(str[num])



str = 'Werner';
last = str.length - 1;
alert('ЗАДАНИЕ 54.1: Ключевое слово - ' + str + ' его последняя буква...' );
alert(str[last]);

last = str.length - 2;
alert('ЗАДАНИЕ 54.2: Ключевое слово - ' + str + ' его предпоследняя буква...' );
alert(str[last]);

last = str.length - 3;
alert('ЗАДАНИЕ 54.3: Ключевое слово - ' + str + ' его предпредпоследняя буква...' );
alert(str[last]);

alert(`ЗАДАНИЕ 55:`);
str = '12345';
alert(+str[0]+ +str[1]+ +str[2]+ +str[3]+ +str[4]);

alert(`ЗАДАНИЕ 56.1:`);
let test = String(12345); 
alert(Number(test[0]) + Number(test[1])+ Number(test[2])+ Number(test[3])+ Number(test[4]));
alert(`ЗАДАНИЕ 56.2:`);
alert(test[0]*test[1]*test[2]*test[3]*test[4]);
alert(`ЗАДАНИЕ 56.3:`);
alert(test[4]+test[3]+test[2]+test[1]+test[0]);
alert(`ЗАДАНИЕ 57:
    1. 3
    2. 6
    `);
    alert(`ЗАДАНИЕ 58:`);
    num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);
alert(`ЗАДАНИЕ 59:`);
num = 10;
num = num++;
num = num++;
num = num--;
alert(num);

alert(`ЗАДАНИЕ 60:
    1. 4
    2. 3
    3. 2
    4. 3
    5. 4 4
    6. 4 3
    7. 2 2
    8. 2 3
    9. 3 3
    `);
alert(`ЗАДАНИЕ 61:`);
    alert(0.1 * 0.2);
    alert(0.3 - 0.1);
    let a = 0.1 * 0.2;
alert(+a.toFixed(2));
alert(`ЗАДАНИЕ 62:`);


let your_age = prompt('Ваш возраст?');
alert('Ваш возраст: ' + your_age)

alert(`ЗАДАНИЕ 63.1:`);
num1 = prompt('Введите первое число');
num2 = prompt('Введите второе число');
alert(`ЗАДАНИЕ 63.2:`);
alert(+num1 + +num2);
let S = prompt('Введите значение стороны квадрата');
alert(S * S);
alert(`ЗАДАНИЕ 63.3:`);
let one = prompt('Введите первую сторону');
let two = prompt('Введите вторую сторону');
alert((2* one) + (2 * two));
alert(`ЗАДАНИЕ 64.1:`);
document.write('.txt');
alert(`ЗАДАНИЕ 64.2:`);
document.write('<i>.txt </i>');
alert(`ЗАДАНИЕ 64.3:`);
let str1 = 'text ';
document.write('<i>'+ str1 + '</i>')
alert(`ЗАДАНИЕ 64.4:`);
document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');

num1 = 1;
num2 = 2;
console.log('сумма: ' + num1 + num2);

alert(`ЗАДАНИЕ 65:
    1. объединяет две цифры в строку, неверно
    2. не инициализированная переменна c, неверно
    3. объединяет цифры в строку, неверно
    нужно преобразовать символы в числа
    4. верно
    5. так и есть. дабы исправить это нужно перед инкрементом
    6. значение num необходимо преобразовать в строку
    7. неверно, следует заменить операцию деления на 
    операцию умножения
    8. заменить num в последней строке на str
    9. заменить последнюю строку на console.log(str[2]);
    10. верно
    11. заменить последнюю строку на console.log(str[2]);
    12. следует преобразовать b в Number
    13. всё верно
 
    `);
alert(`ЗАДАНИЕ 66:`)
    alert('1. ' + 24 * 60 * 60 +'\n'+ '2. ' + 30 * 24 * 60 * 60 +'\n'+ '3. ' + 365 * 24 * 60 * 60 +'\n'+
'4. ' + 24* 60 +'\n'+
'5. ' + 365 * 24* 60 +'\n'+
'6. ' + 1024 * 1024 + ' байт' +'\n'+
'7. ' + 1024 * 1024 * 1024 + ' байт' +'\n'+
'8. ' + 10 * 1024 * 1024 * 1024 + ' байт' +'\n'+
'9. ' + 1024 * 1024 * 1024 * 1024 + ' байт' +'\n'+
'10. ' + 1024 * 1024 * 1024 + ' килобайт'
    );

    alert(`ЗАДАНИЕ 67:`)
   
let r = 6; 
let s_1 = Math.PI * r * r; 
console.log(s_1); 

a = 4; 
let s_2= a * a; 
console.log(s_2); 

a = 4; 
let b = 6; 
let s_3 = a * b; 
console.log(s_3); 

 a = 2; 
 b = 5; 
let p_4 = 2 * (a + b); 
console.log(p_4); 

let celsius = 25; 
let faren = (celsius * (9 / 5)) + 32; 
console.log(faren); 

faren = 99; 
celsius = (faren - 32) * (5 / 9); 
console.log(celsius); 