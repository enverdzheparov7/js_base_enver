//264

//1
!function() {
	console.log('!');
}();// !

//2

//function() {
//	console.log('!');
//}();//ошибка 

//265

let result = function() {
	return '!';
}();
		
console.log(result);//!

//2
let result2 = function() {
	return '!';
};
		
console.log(result2);//function() {return '!';};

//3

let result3 = function() {
	return '!';
};
		
console.log(result3());//!

//266

//1

let result4 = function() {return 1;}() + function() {return 2;}();
console.log(result4);//3

//267

//1. !
let result5 = (function() {
	return '!';
}());

console.log(result5);
//2. !
let result6 = (function() {
	return '!';
})();

console.log(result6);
//3. function() { return '!'; }
let result7 = (function() {
	return '!';
});

console.log(result7);
//4. !
let result8 = (function() {
	return '!';
});

console.log(result8());