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