
let test = 11;

if (test > 10) {
	alert('105.1 ' + '+++'); // сработает это
} else {
	alert('105.1 ' +'---');
}

if (test < 10) {
	alert('105.2 ' + '+++'); 
} else {
	alert('105.2 ' +'---'); // сработает это
}

if (test >= 10) {
	alert('105.3 ' + '+++'); // сработает это
} else { 
	alert('105.3 ' +'---');
}

if (test <= 10) {
	alert('105.4 ' + '+++'); 
} else {
	alert('105.4 ' +'---'); // сработает это
}

if (test == 10) {
	alert('106 ' + '+++'); 
} else {
	alert('106 ' +'---'); // сработает это
}

if (test != 10) {
	alert('107 ' + '+++'); 
} else {
	alert('107 ' +'---'); // сработает это
}

let test1 = 12;
let test2 = 13;

if (test1 > test2) {
	alert('108.1 ' + '+++'); 
} else {
	alert('108.1 ' +'---'); 
}

if (test1 == test2) {
	alert('108.2 ' + '+++'); 
} else {
	alert('108.2 ' +'---'); 
}

let test3 = 'afk';
let test4 = 'afk';
if (test3 == test4) {
	alert('109 ' + '+++'); 
} else {
	alert('109 ' +'---'); 
}