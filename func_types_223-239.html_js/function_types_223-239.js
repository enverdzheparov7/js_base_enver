
//223
function func() {
	return '!';
}

console.log(func); 
//224 
//1
function func() {
	console.log('Привет, мой друг, испугался? Не бойся, я тебя не обижу');
}
//2
func();
//3
console.log(func); 
//4
func = '123'; // затрем переменную func
console.log(func);

///225
//1
function func3(){
    return 3;
}
//2
let func4 = func3;
//3
console.log(func3()+func4()) 

//226

let func1 = function() {
	return 1
};

let funci2 = func1

let func2 = function() {
	return 2
};

let funci3 = func2  

alert(funci3()+funci2())

//228 
//1 Function Declaration (объявление функции)
function func() {
	console.log('!');
} 

//2 Function Expression (функциональное выражение)
let func5 = function() {
	console.log('!');
}
 
//229
//1
// Обращаемся к функции до ее объявления:
func6(); //выведет '!'

function func6() {
	console.log('!');
}

//2
//func7(); //ошибка, такой функции еще нет!

let func7 = function() {
	console.log('!');
}; 

//230

let func11 = function() {console.log('!')};
let func22 = function() {
	console.log('!')
};
function func33() {
	console.log('!')
}; 


//231 

//1


//Function Declaration
function func231_1() {
	console.log('!');
}
//2


//Function Expression
let func231_2 = function() {
	console.log('!');
}
//3


//Function Expression
+function() {
	console.log('!');
}
//4


//Function Expression
!function func231_4() {
	console.log('!');
}
//5


//Function Expression
-function func231_5() {
	console.log('!');
}
//6


//Function Expression
1 + function func231_6() {
	console.log('!');
}
//7


//Function Expression
(function func231_7() {
	console.log('!');
})
//8


//Function Expression
console.log(
	function() {
		console.log('!');
	}
); 

//234

//1

//testik();// выведет ошибку в консоль, значит Function Expression

let testik = function func234_1() {
	console.log('!');
}
//2

//func234_2();// выведет ошибку в консоль, значит Function Expression
console.log(
	function func234_2() {
		console.log('!');
	}
);
//3

//func234_3();// выведет ошибку в консоль, значит Function Expression

+function func234_3() {
	console.log('!');
}
//4


func234_4();// выведет '!', значит Function Declaration
function func234_4() {
	console.log('!');
}