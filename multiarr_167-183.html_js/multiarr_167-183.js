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



//173_1
let arr5 =[]

for(let i = 0; i < 3; i++){
  arr5[i]=[]

for(let j = 0; j < 5; j++){
  arr5[i].push(j+1);
}
}
console.log(arr5)

//2
let arr8 =[]

for(let i = 0; i < 3; i++){
  arr8[i]=[]

for(let j = 0; j < 4; j++){
  arr8[i].push('x');
}
}
console.log(arr8)

//173_3

let arr9 = [];
for (let i = 0; i < 3; i++) {
    arr9[i] = []; 
    for (let j = 0; j < 2; j++) {
        arr9[i][j] = [];
        for (let k = 0; k < 5; k++) { 
            arr9[i][j].push(k + 1); 
        }
    }
}
console.log(arr9);

//175 1
let ar1 = [];

for (let i = 0, k = 1; i < 4; i++) {
	ar1[i] = [];
	
	for (let j = 0; j < 2; j++) {
		ar1[i].push(k++);
	}
}

console.log(ar1);

//2 

let ar2 = [];

for (let i = 0, k = 1; i < 4; i++) {
	ar2[i] = [];
	
	for (let j = 0; j < 3; j++) {
	  k++;
		ar2[i].push(k++);
	}
}

console.log(ar2);

//3 

let ar3 = [];

for (let i = 0, k = 1; i < 2; i++) {
	ar3[i] = [];
	
	for (let j = 0; j < 2; j++) {
	  ar3[i][j] = [];
	  for(let t = 0; t < 2; t++){
		ar3[i][j].push(k++);
	  }
	}
}

console.log(ar3);

console.log(`175 
	№4
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
				 
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k++; //let k = 1;  ?????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№5
	
	Автор следующего кода хотел сделать вот такой массив:
	
	 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k = 1;
	
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k; // k++; ??????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№6
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k = 1;
	
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k--;  //k++;...................................
		}
	}
	
	console.log(arr);
	
	
	№7
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k; // let k = 1;?????????????????????????????????
	
	for (let i = 0; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k++;
		}
	}
	
	console.log(arr);
	
	
	№8
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k; //k++;?????????????????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№9
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0, k++; j < 3; j++) {
			arr[i][j] = k;
			//k++;??????????????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№10
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++; k++) { //k должно обновляться по истечению цикла 
			arr[i][j] = k
			//тут k++; ???????????????????????????????????????
		}
	}
	
	console.log(arr);
	
	
	№11
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = ++k; // начнёт  с 2 ( надо k++)??????????????????
		}
	}
	
	console.log(arr);
	
	
	№12
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	let k = 1;
	
	for (let i = 0; i < 3; i++) {
		arr[k] = [];//arr[i]=[]???????????????????????????????
		
		for (let j = 0; j < 3; j++) {
			arr[i][j] = k;
			k++;
		}
	}
	
	console.log(arr);
	
	
	№13
	
	Автор следующего кода хотел сделать вот такой массив:
	
	[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	
	let arr = [];
	//let k;
	for (let i = 0, k = 1; i < 3; i++) {
		arr[i] = [];
		
		for (let j = 0; j < 3; k++) {/j++ вместо k++
			arr[i][j] = k;
			//k++; тут 
		}
	}
	
	console.log(arr);
	`)