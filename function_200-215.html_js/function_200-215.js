//200
//1


function func() {
	console.log('Enver');
}

func(); 
//2
function sum(){
  let sum = 0;
  for(let i = 1; i<100; i++){
     sum += i;
  }
  console.log(sum)
}

sum();


//201
//1
function funct(num) {
	console.log(num ** 3);
}

funct(9)
//2
function positive (numba) {
  if(numba>0){
    console.log('+++')
  }
  if(numba<0){
    console.log('---')
  }
}

positive(-7)

//202

function three(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}

three(1,7,9)



//203

function three1(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;
three1(param1,param2,param3)


/*
//204

//1 

function func(num = 5) {
	console.log(num * num);
}
//Функция без параметра выведет 25, остальные - 4, 9

func(2);
func(3);
func();

//2
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

//Функция без параметра выведет 0, самая первая - 5, а вторая, не имеющая второго параметра - 3
func(2, 3);
func(3);
func();

*/



//205
//1
function v3(num) {
	return num ** 3;
}

let res = v3(3);
console.log(res);

//2
function v2(num) {
	return num ** 2;
}

let rez1 = v2(3);
let rez2 = v2(4);
let summer = rez1 + rez2;
console.log(summer)
 


//206
//1

function sqrt1(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res23 = round(sqrt1(2))

console.log(res23)

//2 

function sqrt2(num) {
	return Math.sqrt(num);
}

function sum3(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res22 = sum3(sqrt2(2),sqrt2(3),sqrt2(4))

console.log(res22)

//3
function round1(num) {
	return num.toFixed(3);
}

let res21 = round1(res22)

console.log(res21)



//207
//1

function func8(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func8(3) );//выведется 3, так как код после return в функции не выполняется 

//2 

function func9(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func9(10) ); //выведет 100, так как выполняется return условия else 
console.log( func9(-5) ); //выведет 5 так как выполняется ретурн условия (num <= 0)

//3
function func10(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func10(10) ); //100. код условия проигнорируется и будет выполнен return num ** 2;
console.log( func10(-5) ); //выведет 5 по условию иф 



//208
//1

function func11(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

console.log( func11(5) );//ретурн прерывает цикл 



//209
//1

function func12(num) {
	let sum = 0;
	
	for (let i = 0; i <= num; i++) {
		num/=2;
		
	if(num < 10){
	  return i + 1;
	}
	}
}

console.log( func12(100) );



//210
//1

function func13(num1, num2) {
	
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
	
}

console.log(func13(3, 4));