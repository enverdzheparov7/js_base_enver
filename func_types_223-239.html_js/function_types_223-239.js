
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