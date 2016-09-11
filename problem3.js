var largest = 1; // largest prime factor
var number = 13195; //number to determine prime factor of

for(var x = 0; x <= number; x++) {
	var prime = true;
	for(var y = 2; y <= x; y++) {
		if(x%y === 0 && y !== x) {//if it is divisible by a number other than itself
			prime = false;
			break; //get out of the loop and look at the next number
		}
	}
	if(prime && number%x === 0 && largest < x) {//if it is a prime factor
		largest = x;
	}
}
console.log(largest);