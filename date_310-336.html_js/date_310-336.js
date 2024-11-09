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

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds()); // секунды

//312
console.log('-------------------------------------312');