let str1 = prompt('Введите число:');
let str2 = prompt('Введите число:');
let num1 = Number(str1);
let num2 = Number(str2);
arr = []

for (i = num1; i <= num2; i ++) {
  arr.push(i)
}

arr.forEach((el, i) => {
  setTimeout(() => {
    console.log(el)
  }, (i + 1) * 1000)
})