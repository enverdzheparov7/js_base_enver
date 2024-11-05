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

