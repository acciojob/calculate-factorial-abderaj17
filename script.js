//your JS code here. If required.
function calculateFactorial() {
	let number = prompt("Enter a number");
	number = Number(number);
	let factorial = 1;

		for(let i = 1; i <= number; i++){
		factorial *= i;
	}
 alert(`The factorial of ${number} is ${factorial}`);
}
calculateFactorial()
