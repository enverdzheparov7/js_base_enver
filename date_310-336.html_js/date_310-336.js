//311
console.log('-------------------------------------311');

function day() {
	return (new Date).getDate();
}
function month(){
    return (new Date).getMonth()+1;
}
function year(){
    return (new Date).getFullYear();
}
console.log(day());
console.log(month());
console.log(year());

let date = new Date();

console.log('часы ' + date.getHours());    // часы
console.log('минуты ' + date.getMinutes());  // минуты
console.log('секунды ' + date.getSeconds()); // секунды

//312
console.log('-------------------------------------312');

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

let data = new Date();

console.log(
	addZero(data.getFullYear()) + '-' + 
	addZero(data.getMonth() + 1) + '-' +
	addZero(data.getDate())
);

console.log(
	addZero(data.getHours()) + ':' + 
	addZero(data.getMinutes() + 1) + ':' +
	addZero(data.getSeconds())
);

//313

console.log('-------------------------------------313');

let str = addZero(data.getFullYear()) + '-' + 
addZero(data.getMonth() + 1) + '-' +
addZero(data.getDate());

let res = str.split('-').reverse().join('.');
console.log(res)



//314
console.log('-------------------------------------314');
let date2 = new Date();
console.log('1. ' + date2.getDay());

if(date2.getDay>5 || date2.getDay()<1){
	console.log('2. выходной')
}else{
	console.log('2. рабочий день')
}

console.log('3. '+ (7-date2.getDay()))

//315 

console.log('-------------------------------------315');
let manth = new Date();
let month2  = manth.getMonth();

let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноябрь', 'декабрь'
];

console.log(months[month2])

//316

console.log('-------------------------------------316');

let datas = new Date(2006, 7, 3); 
let day1  = datas.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day1]);


//317
console.log('-------------------------------------317');


let date3 = new Date(2025, 1, 1, 0,0, 0);//new Date(год, месяц, день, часы, минуты, секунды, миллисекунды)
console.log(date3.getTime() + ' секунд');

console.log('-------------------------------------318');


//318

let january = new Date(2000, 0, 10, 0,0, 0);

let march = new Date(1998, 2, 1, 0,0, 0);

let diff = january.getTime() - march.getTime()

console.log((diff/ (1000 * 60 * 60 * 24)+ ' дней'))

let now = new Date()
let bday = new Date(2006, 7, 3);
let different = now.getTime() - bday.getTime();
console.log(Math.floor(different/(1000 * 60 * 60 * 24))+ ' дней')

console.log('-------------------------------------319');

//319

let date319 = new Date(2010, 1, 15, 0, 0, 0);

let date319_1 = new Date(2000, 8, 1, 0, 0, 0);

let differ = date319 - date319_1

console.log((differ + ' миллисекунд'))
console.log(Math.floor(differ/ (1000 * 60 * 60 * 24))+ ' дней')
console.log(Math.floor(differ/ (1000 * 60 * 60 * 24 * 30.41 ))+ ' месяцев')
console.log(Math.floor(differ/ (1000 * 60 * 60 * 24 * 30.41 * 12))+ ' лет')


console.log('-------------------------------------320');

//320


//1


let date4 = new Date(2018, 1, 35); //4 февраля 2018
console.log(date4); // какая дата будет?
//2


let date5 = new Date(2018, 15, 1); //1 февраля 2019
console.log(date5); // какая дата будет?
//3


let date6 = new Date(2018, 3, 31);//1 мая 2018
console.log(date6); // какая дата будет?
//4


let date7 = new Date(2018, 1, 31);//3 марта
console.log(date7); // какая дата будет?
//5


let date8 = new Date(2018, 12, 33); //2 февраля
console.log(date8); // какая дата будет?
//6


let date9 = new Date(2018, 33, 33);
console.log(date9); // какая дата будет? 2020 2 ноября
//7


let date10 = new Date(2018, 5, 0);
console.log(date10); // какая дата будет? 31 мая 2018
//8


let date11 = new Date(2018, 0, 0);
console.log(date11); // какая дата будет? 31 декабря 2017
//9


let date12 = new Date(2018, -12, -33);
console.log(date12); // какая дата будет? 28 ноября 2016
//10


let date13 = new Date(2018, 0, 1, 23, 0, 60);
console.log(date13); // какая дата будет? 23:01:00 2018 год 1 января

//11


let date14 = new Date(2018, 0, 1, 23, 60, 0);
console.log(date14); // какая дата будет? 2 января 2018 00:00:00
//12


let date15 = new Date(2018, 0, 1, 100, 100, 100);
console.log(date15); // какая дата будет? 5 января 2018 05:41:40


//321
console.log('-------------------------------------321');
console.log('-------------------------------------321');
console.log('-------------------------------------321');

function LastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
}


let lastDay = LastDayOfMonth(2020, 3);
console.log('lastDay: ' + lastDay); 

let five = new Date(2025, 4, 0);
let dayin  = datas.getDay();
let daysis = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(daysis[dayin])


//322

console.log('-------------------------------------322');

let febr = new Date(2024, 2, 0);
function isLeap(data){
   if(data.getDate()>28)
{
	return true;
}else{
	return false;
}

}

console.log(isLeap(febr));



