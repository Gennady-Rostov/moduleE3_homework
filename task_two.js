let str = prompt('Введите число:');
let num = Number(str);

let arr = []
function primeNumbers (i) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) {
			return false;
		};
	}
	return true;
}
for (let i = 2 ; i <= 1000; i++) {
		if (primeNumbers(i)) {
			arr.push(i);
		};
};

if (num > 1000) {
	console.log('Данные неверны')
}
else {
	if (arr.includes(num)){
		console.log(`Число ${num} простое`)
	}
	else {
		console.log(`Число ${num} непростое`)
	}
};