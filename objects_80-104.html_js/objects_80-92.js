

let obj = {1: 'Понедельник',
2: 'Вторник',
3: 'Среда',
4: 'Четверг',
5: 'Пятница',
6: 'Суббота',
7: 'Воскресенье'};

alert(`ЗАДАНИЕ 80:` + '\n' +  obj[1] + '\n' +  obj[2]+ '\n' +  obj[3]+ '\n' +  obj[4]+ '\n' +  obj[5]+ '\n' +  obj[6]+ '\n' +  obj[7]);


let obj1 = {
    1: 'January', 
    2: 'February', 
    3: 'March', 
    4: 'April', 
    5: 'May', 
    6: 'June', 
    7: 'July', 
    8: 'August', 
    9: 'September', 
    10: 'October', 
    11: 'November', 
    12: 'December'
};
console.log(obj1);

let user = {'name': 'Иван', 'surname': 'Серлифт', 'patronymic': 'Серлифтович'};
alert(`ЗАДАНИЕ 82:` + '\n' + user['name'] +' ' + user['surname']  +' ' + user['patronymic'] )

let date = {'year': 2024,  'month': 10, 'day': 19};
alert(`ЗАДАНИЕ 83:` + '\n' + date.year + '-' +date.month + '-' + date.day)
alert(`ЗАДАНИЕ 84.1:` + '\n' + `Дан объект:

let obj = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};
Для каких ключей данного объекта кавычки обязательны, а для каких нет?

Ответ: 0,2,3`)

alert(`ЗАДАНИЕ 84.2:`+ '\n'+ `вывод консоли: 1
2
3
4
5`);
    let obj5 = {
        '1a': 1,
        'b2': 2,
        'с-с': 3,
        'd 4': 4,
        'e5': 5
    };
    
    console.log(obj5['1a']);
    console.log(obj5.b2);
    console.log(obj5['с-с']);
    console.log(obj5['d 4']);
    console.log(obj5.e5);

    let obj6 = {x: 1, y: 2, z: 3};
    obj.x = 1*1;
    obj.y = 2*2;
    obj.z = 3*3;
    alert(`ЗАДАНИЕ 85:`+ '\n'+ obj.x + '\n' + obj.y + '\n' + obj.z)

    //86
let obj7 ={};
obj7.a = 1;
obj7.b = 2;
obj7.c = 3;
console.log (obj7);

//87
let obj8 = {12: 'a', 50: 'b', 2: 'c'};
console.log(obj8[2]);
console.log(obj8[12]);
console.log(obj8[50]);
//88
let obj9 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj9);
console.log(keys);