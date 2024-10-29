//184

console.log(Math.pow(2, 10))

console.log(Math.sqrt(245))



let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let num = Math.pow(arr[i], 3);
    sum += num;
}

console.log(sum);

console.log(Math.sqrt(sum))

//185 
let number = 379;

let sqrt = Math.sqrt(number)
let floor = Math.floor(sqrt);
let fix = sqrt.toFixed(1)
let fixed = sqrt.toFixed(2)

console.log(floor);
console.log(fix);
console.log(fixed);

let number1 = 587;

const result = {
    floor: Math.floor(Math.sqrt(number1)),
    ceil: Math.ceil(Math.sqrt(number1))
};

console.log(result);

//186 

console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))




//187
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

//2  

let arr5 = [];
for(let i = 0; i<10; i++){
function getRandomInt1(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numka = getRandomInt1(1, 100);
      arr5.push(numka);
}

console.log(arr5);