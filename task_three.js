let str1 = prompt('Введите число:');
let str2 = prompt('Введите число:');

function  func1(a) {
	let num1 = Number(str1);
	return num1
}

function  func2(a, b) {
	let num2 = Number(str2);
	return num2 + b
}

console.log(func2(str2, func1(str1)))