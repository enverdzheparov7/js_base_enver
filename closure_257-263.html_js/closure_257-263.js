

//259

//1



function test1() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func1 = test1();
console.log(func1());//3
//2



function test2() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

console.log(test2()());//3
//3


function test3() {
	let num1 = 1;
	
	return function() {
		return num1 + num2;
	}
}

let num2 = 2;
let func3 = test3();
console.log(func3());//3
//4



function test4() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num4 = 2;
let func4 = test4();
console.log(func4());//1

//261
//1-2-3
function test() {
	let num = 10;
	
	return function() {
        
        if(num>0){
		console.log(num);
        }
        num--;
        if(num<=0){  
            console.log('отсчёт окончен')
        }
	}
}

let func = test();

func(); 
func();
func();
func(); 
func(); 
func(); 
func();
func();
func(); 
func(); 
func(); 
func(); 