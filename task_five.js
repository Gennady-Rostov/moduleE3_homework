let str1 = prompt('Введите число:');
let str2 = prompt('Введите число:');
let num1 = Number(str1);
let num2 = Number(str2);

const func = (x, n) => {
	return x ** n
}

console.log(func(num1, num2))