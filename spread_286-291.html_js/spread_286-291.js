//286 

let arr = [1, 2, 3, 4, 5];

function func1(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}

console.log(func1(...arr)); 
//... - оператор spread, разделяет массив на отдельные значения

//287 

function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );//260


//288
// arr = [1, 2, 3, 4, 5];
console.log(Math.min(...arr))