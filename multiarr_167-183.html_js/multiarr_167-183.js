//168 
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];


console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

//2

let arr1 = [[1, 2], [3, 4], [5, 6]];
let Sum = 0;

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    Sum += arr1[i][j];
  }
}

console.log(Sum);

//169
let arr2 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let Sum1 = 0;

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    for (let k = 0; k < arr2[j].length; k++) {
    Sum1 += arr2[i][j][k];
  }
}
}
console.log(Sum1);

//170
console.log('55');




//171_1
let arr6 = [[1, 2, 3], [4, 5], [6]];
for (let sub of arr6) {
	for (let elem of sub) {
		console.log(elem);
	}
}

//2
let arr7 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

for (let subArr of arr7) {
	for (let elem of subArr) {
	  for (let elem1 of elem) {
		console.log(elem1);
	}
}
}
//172_1
for (let i = 0; i < arr6.length; i++) {
	for (let j = 0; j < arr6[i].length; j++) {
		console.log(arr6[i][j]);
	}
}

//2 
for (let i = 0; i < arr7.length; i++) {
	for (let j = 0; j < arr7[i].length; j++) {
	  	for (let k = 0; k < arr7[i].length; k++) {
		console.log(arr7[i][j][k]);
	  	}
	}
}