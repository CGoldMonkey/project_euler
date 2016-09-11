//By considering the terms in the Fibonacci sequence whose values 
//do not exceed four million, find the sum of the even-valued terms.

var sum = 0; //sum of the Fibonnaci Numbers that are of even value
var firstFib = 1; //first Fibbonaci number
var secondFib = 2; //second Fibonnaci number
var newFib; //new Fibonnaci number

if(firstFib%2 === 0){
	sum += firstFib;
}

if(secondFib%2 === 0){
	sum += secondFib;
}

while (secondFib < 4000000) {
	newFib = firstFib + secondFib;
	firstFib = secondFib;
	secondFib = newFib;
	if (newFib%2 === 0) {
		sum += newFib;
	}
}

console.log(sum);
