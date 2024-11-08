//286 

let arrays = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}

console.log(func(...arrays))//... - оператор spread, разделяет массив на отдельные значения