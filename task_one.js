let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, null, 'sdf']
let a = 0
let b = 0

numbers.forEach(funcNam);

function funcNam(item, index) {
	if (item == 0) {
		console.log(item)
	}
	else if (typeof (item) == 'number') {
		if (item % 2 == 0) {
			a += 1
	}
		else if (item % 2 == 1) {
			b += 1
	}
	}
	else {
		console.log(item)
	}
}
console.log(`Четных чисел в массиве ${a}, Нечетных чисел в массиве ${a}`)