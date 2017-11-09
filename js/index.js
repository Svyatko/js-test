let askNumber = Number(prompt('Type your number: '));

for(let i = 1; i < askNumber; i++) {
	console.log('i: ' + fibonacci(askNumber) + "\n");
}

function fibonacci(n) {
	if(n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}