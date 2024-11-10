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

