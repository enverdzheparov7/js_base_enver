//274 



function func(arr) {
	console.log(arr.shift(), arr);
	
	if (arr.length != 0) {
		func(arr);
	}
}
let arr = [1, 2, 3, 4, 5];
func(arr)
//275
function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(getSum(arr1));


