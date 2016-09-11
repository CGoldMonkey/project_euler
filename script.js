//Find the sum of all the multiples of 3 or 5 below 1000.
//Function checks the input against the sum above and if 
//true answers it is true else answers it is false
function problem1() {
	var sum = 0;
	var inputStr = document.getElementById("problem1Answer").value;
	var input = parseInt(inputStr); //convert the string to an integer
	var text; // the reply

	for(var x = 0; x < 1000; x++){
		if(x%3 === 0 || x%5 === 0){
			sum += x;
		}
	}

	if (input === sum) {
		text = "Correct, the answer is "+input+".";
		document.getElementById('guess').innerHTML = text;
	} else {
		text = "Wrong, the answer is not "+input+", try again."
		document.getElementById('guess').innerHTML = text;
	}
}