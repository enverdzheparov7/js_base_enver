//216_1
let num0 = 1;
		
function func1() {
	console.log(num0);
}

func1();//1

//216_2


let num1 = 1;
		
function func2() {
	console.log(num1);
}

num1 = 2;//2
func2();

//216_3


function func3() {
	console.log(num2);
}

let num2;

num2 = 1;
func3();//1

num2 = 2;
func3();//2 



//217 

//1
function func4() {
	let num = 5;
	return num;
}

//console.log(num);//ошибка

//2
function func5() {
	let num = 5;
	return num;
}

console.log(func5()); 

//218

//1
let num4 = 1;

function func6() {
	num4 = 2;
}
func6();

console.log(num4);//2

//2

let num5 = 1;

function func7() {
	let num5 = 2;
}
func7();

console.log(num5);//1 

//№1

//Определите, не запуская код, что выведется в консоль:

let num6 = 1;

function func8() {
	num6 = 2;
}
func8();

console.log(num6);//2
//№2

//Определите, не запуская код, что выведется в консоль:

let num7 = 1;

function func9() {
	num7 = 2;
}

console.log(num7);//1
//№3

//Определите, не запуская код, что выведется в консоль:

let num8 = 1;

function func10() {
	let num8 = 2;
}
func10();

console.log(num8);//1
//№4

//Определите, не запуская код, что выведется в консоль:

let num9 = 1;

function func11() {
	let num = 2;//1
}

console.log(num9);
func11();
//№5

//Определите, не запуская код, что выведется в консоль:

let num10 = 1;

function func12() {
	num10 = 2;
}

console.log(num10);//1
func12();
//№6

//Определите, не запуская код, что выведется в консоль:

let num11 = 1;

function func13() {
	num11++;
}

func13();
func13();
func13();
console.log(num11);//4
//№7

//Определите, не запуская код, что выведется в консоль:

function func14() {
	num12 = 2;
}

let num12 = 1;
console.log(num12);
func14();//1
//№8

//Определите, не запуская код, что выведется в консоль:

function func15() {
	num13 = 2;
}

let num13 = 1;
func15();
console.log(num13);//2