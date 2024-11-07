
//240
test(
    function (){return 1;},
    function (){return 2;},
    function (){return 3;}
) 

function test(func1, func2, func3){
    console.log(func1()+func2()+func3())
} 

//241
//1
test1(
    function func1(){return 7;},
    function func2(){return 6;},
    function func2(){return 4;}
) 

function test1(func1, func2, func3){
    console.log(func1()+func2()+func3())
} 
//2

test1(
    function func1(){return 1;},
    function func2(){return 2;},
    function func2(){return 3;}
) 
//3
test1(
    func1 = function (){return 1;},
    func2 = function (){return 2;},
    func2 = function (){return 3;}
) 

//242
// 1 2
test2(func5 = function(num) {
	return num * num * num;
});
//3
test2( function func6 (num) {
	return num * num * num;
});

function test2(func) {
	console.log(func(3));
} 


//4
test3( function func7 (num1, num2) {
	return num1 + num2;
}); 

function test3(func1) {
	console.log(func1(2, 3)); 
} 


//243


function test4(num, func1, func2) { 
    return func1(num) + func2(num); 
}


let result = test4(3, function square(num) {
    return num * num; 
},

function cube(num) {
    return num * num * num; 
});


console.log(result); 

//244

function test7(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	
	return arr;
}

let rezik = test7 ([2,3,4], function kubik(num){return num * num * num})
console.log(rezik) 

//245

function fun(num1,num2){
    function square1(num1){
        return num1 * num1;
    }
    function cube1(num2){
        return num2 * num2 * num2;
    }
    return square1(num1)+cube1(num2)
}

let res = fun(9,3);

console.log(res);

//246 

//1

//

function test246() {
	let num = 1;
	
	function func() {
		console.log(num);//1
	}
	
	func();
}

test246();
//2

//

function test246_2() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test246_2(); //ничего не выведет
//3

//

function test246_3() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();//1
}

//4

//

function test246_4() {
	let num;
	
	function func() {
		console.log(num); 
	}
	
	num = 1
	func();//выведет 1
	
	num = 2
	func();//2
}

test246_4();

//247 

//1 

function test247(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();//3
}

test247(1, 2);

//2

function test247_2(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();//4
}

test247_2(1, 2);


//248

//1



function test248_1(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);//1
}

test248_1(1);
//2



function test248_2(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num + 1);//2
}

test248_2(1);
//3



function test248_3(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);//1
}

test248_3(1);
//4



function test248_4(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);//1
}

test248_4(1);
//5


/*
function test248_5(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum);
}

test248_5(1);*/ //ошибка
//6



function test248_6(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);//2
}

test248_6(1); 

//249 

//1//

//

function test249(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
}

test249(1);
//2//

//

function test249_2(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test249_2(1);
//3//

//

function test249_3(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test249_3(1);
//4//

//

function test249_4(num) {
	function func(num) {
		console.log(num);
	}
	
	func(num);
	num = 2;
}

test249_4(1);

//с пункта 1 по 4 задания 249 будут выведены единицы 