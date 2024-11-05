
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
let func = function() {
	console.log('!');
}