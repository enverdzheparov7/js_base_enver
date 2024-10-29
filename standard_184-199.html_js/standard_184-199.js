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



//188

let a = - 7
let b =  8 
console.log(Math.abs(a+b))

//189

let str = 'JS'
console.log(str.toLowerCase())
str='js'
console.log(str.toUpperCase())

//190 

let stroka = 'я учу javascript'

console.log(stroka.substring(2, 5))
console.log(stroka.slice(2, 5))
console.log(stroka.substr(2, 3))

console.log(stroka.substring(6, 16))

console.log(stroka.slice(6, 16))



console.log(stroka.substr(6, 10))

//191 

str4 = 'dghsjka.html'
console.log(str4.endsWith('.html'))

str4 = 'http://'
console.log(str4.startsWith('http://'))
//192
let elem = '-'
let str5 = '1-2-3-4-5'
while(str5.includes(elem)){
 str5 = str5.replace(elem,'.')
}

console.log(str5)

//193 
let str7 = '1-2-3-4-5'

let arr7 = str7.split('-')
console.log(arr7)

let str8 = '12345'
arr7 = str8.split('')
console.log(arr7)

let arr8 = [1, 2, 3, 4, 5];

let str9 = arr8.join('-')
console.log(str9)

//194-196 сделаю

//197 
let arr10 = [1, 2, 3, 4, 5];
let res = arr10.includes(3);

console.log(res);

//198

let obj = {'a': 1, 'b': 2, 'c': 3};
console.log(Object.keys(obj));