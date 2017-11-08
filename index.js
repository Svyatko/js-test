let hello = 'Hello';

const aksName = prompt('Type your name');

alert(hello + " " + aksName);

document.write('<h2>' + aksName + ', welcome to our calculator.\n'
	+ "We're happy to see you here;)</h2>");

//a*x^2 + b*x + c = 0;

alert(`Make sure you type equation like 
	a*x^2 + b*x + c = 0`);

const a = Number(prompt('Type a: '));
checkValue(a);
const b = Number(prompt('Type b: '));
const c = Number(prompt('Type c: '));

document.write('<br><b> '+ `
	You have a equation like:</b> ` + '<u>' + 
	+ a + 'x^2 + ' + b + 'x + ' + c + '</u>');

let d = disk(a, b, c);
let result = square(d, a, b, c);

function disk(a, b, c) {
	let D = null;

	D = Math.sqrt(b * b - 4 * a * c);

	return D;
}

function square (D, a, b, c) {
	let x1, x2 = null;

	if (D > 0) {
		x1 = (-b + D) / (2 * a);
		x2 = (-b - D) / (2 * a);
		return document.write('<br><b>x1:</b> <u>' + x1 + '</u>' +
			'<br><b>' +   'x2:</b> '+ '<u>' + x2 + '</u>');

	}
	else if (D == 0) {
		x1 = x2;
		x2 = - b / (2 * a)
		return document.write('<br> ' + '<b>x:</b> <u>' + x2 + '</u>');
		
	}
	else {
		return document.write('<br>x: infinity');
	}
}

function exit(){ break; }
function checkValue(a) {
	if(a == 0) {
		document.write('"a" must be > or < than 0');
		exit();	
	}
}