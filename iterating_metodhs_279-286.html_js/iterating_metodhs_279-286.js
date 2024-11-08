//279 

let arr = [1, 2, 3, 4, 5];

let res = arr.map(function(elem) {
	return elem ** 2;
});

console.log(res); 


//2

let arr1 = [1, 2, 3, 4, 5];

let res1 = arr1.map(function(elem) {
	return elem + '!';
});

console.log(res1);

//3

let arr2 = ['java', 'css', 'html'];

let res2 = arr2.map(function(elem) {
	return elem.split('').reverse().join(''); 
});

console.log(res2);

//4

let arr3 = ['123', '456', '789'];

let res3 = arr3.map(function(elem) {
	return elem.split(''); 
});

console.log(res3);


//5

let arr4 = [1, 2, 3, 4, 5];

let res4 = arr4.map(function(elem, index) {
	return elem * index;
});

console.log(res4);

//280 

let arr5 = [1, 2, 3, 4, 5];
let sum5 = 0;

arr.forEach(function(elem) {
	sum5 += elem**2;
});

console.log(sum5);