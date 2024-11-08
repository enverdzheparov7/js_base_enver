//292

function average(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce(function(sum, elem) {
        return sum + elem;
    }, 0) / numbers.length;
}

console.log(average(1, 2, 3, 4, 5)); 
console.log(average(10, 20, 30)); 
console.log(average()); 
