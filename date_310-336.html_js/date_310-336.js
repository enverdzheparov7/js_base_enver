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