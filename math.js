#!/usr/bin/env node
var mode = process.argv[2],
	firstNumber = process.argv[3],
	secondNumber = process.argv[4];
	

if (mode === "add") {
	console.log(+firstNumber + +secondNumber);
}

if (mode === "sub") {
	console.log(firstNumber - secondNumber);
}

if (mode === "div") {
	console.log(firstNumber / secondNumber);
}

if (mode === "mult") {
	console.log(firstNumber * secondNumber);
}

if (mode === "div" && secondNumber === "0") {
	console.log("Oh silly, you can't divide by zero!");
}
