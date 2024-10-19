
let arr = [1, 2, 3];

console.log(arr);
alert(`ЗАДАНИЕ 68.1:` + '\n' + arr)


let arr_2 = ['Wer' + 'ner ' + 'Chelsea'];
alert(`ЗАДАНИЕ 68.2:` + '\n' + arr_2)
console.log(arr_2);


let arr_3 = ['1', '2', '3'];
alert(`ЗАДАНИЕ 69.1:` + '\n' + arr_3[0] + '\n' + arr_3[1]  + '\n' + arr_3[2]  );





let arr_4 = ['1', '2', '3'];

alert(`ЗАДАНИЕ 69.2:` + '\n' + arr_4[0] + '\n' + arr_4[1]  + '\n' + arr_4[2]  );

alert(`ЗАДАНИЕ 69.3:` + '\n' + arr[0] + arr[1] + arr[2]);



arr = ['a', 'b', 'c', 'd'];

alert(`ЗАДАНИЕ 69.4:` + '\n' + "'" + arr[0] +'+'+ arr[1] +'+'+ arr[2] +'+'+ arr[3]+"'");

arr = ['a', 'b', 'c', 'd'];
alert(`ЗАДАНИЕ 70.1:`+ '\n'+ arr.length);

alert(`ЗАДАНИЕ 70.2:` + '\n' + arr[arr.length - 1]);


arr = ['a', 'b', 'c'];
arr[0] = '1';
arr[1] = '2';
arr[2] = '3';
console.log(arr); 
alert(`ЗАДАНИЕ 71:`+ '\n' + arr);


arr = [1, 2, 3];
arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
alert(`ЗАДАНИЕ 72:`+ '\n' +  arr);

arr = [1, 2, 3];
++arr[0];
++arr[1];
++arr[2];
alert(`ЗАДАНИЕ 73:` + '\n' + arr);


let arr1 = [];

arr1[0] = '1';
arr1[1] = '2';
arr1[2] = '3';

alert(`ЗАДАНИЕ 74.1:` + '\n' + arr1);

arr1 = [1, 2, 3];


arr1[3] = '4';
arr1[4] = '5';


alert(`ЗАДАНИЕ 74.2:` + '\n' + arr1);

let arr3 = [];

arr3[3] = 'a';
arr3[8] = 'b';
alert(`ЗАДАНИЕ 75:` + '\n' + arr3.length);


let arr_ =[];
arr_.push(1);
arr_.push(2);
arr_.push(3);
alert(`ЗАДАНИЕ 76.1:` + '\n' + arr_);

let arr4 = [1, 2, 3];

arr4.push(4);
arr4.push(5);
alert(`ЗАДАНИЕ 76.2:` + '\n' + arr4);

let arr5 = ['a', 'b', 'c'];
let key = 1;

alert(`ЗАДАНИЕ 77.1:` + '\n' + arr5[key]);

let arr6 = [1, 2, 3, 4, 5];

let key1 = 1;
let key2 = 2;

alert(`ЗАДАНИЕ 77.2:` + '\n' + Number(arr6[key1] + arr6[key2]));


let arr7 = ['a', 'b', 'c', 'd', 'e'];

delete arr7[2];
delete arr7[4];

alert(`ЗАДАНИЕ 78:` + '\n' + arr7 + '\n' + 'Длина массива = ' + arr7.length);

