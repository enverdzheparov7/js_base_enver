//296
/* В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.*/

//296
let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let [name, surname, department, position, salary] = arr ;

console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);


//297

/*function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

let arr = func();

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];*/

//297
function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

 [name, surname, department, position, salary] = func() ;

console.log('-------------------------------------');
 console.log(name);
 console.log(surname);
 console.log(department);
 console.log(position);
 console.log(salary);


 //298

 let arr3 = ['John', 'Smit', 'development', 'programmer', 2000];

 [, surname, department ,,] = arr3;

 console.log('-------------------------------------');
 console.log(surname);
 console.log(department); 


 //300

 let arr4 = ['John', 'Smit', 'development', 'programmer', 2000];

 [name, surname, ...lasts] = arr4;

 console.log('-------------------------------------');
 console.log(name);
 console.log(surname);
 console.log(lasts);

 //301

 let arr5 = ['John', 'Smit', 'development'];//['John', 'Smit', 'development', 'programmer']

[name, surname, department, position] = arr5;

if (arr5[3] !== undefined) {
	position = arr5[3];
} else {
	position = 'trainee';
}

console.log('-------------------------------------');
console.log(name);
console.log(surname);
console.log(department);
console.log(position);


//302
function func1() {
	return (new Date).getDate();
    
}
function fun(){
    return (new Date).getMonth()+1;
}
function funt(){
    return (new Date).getFullYear();
}
let arr6 = [,,'6']
console.log('-------------------------------------');
let [year=funt(), month=fun(), day ] = arr6;

console.log(year);
console.log(month);
console.log(day);