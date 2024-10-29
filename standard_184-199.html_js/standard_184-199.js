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