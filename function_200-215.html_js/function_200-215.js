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
