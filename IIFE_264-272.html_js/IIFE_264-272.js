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