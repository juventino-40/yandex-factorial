/* *** */
/* Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. */
/* getFactorial(n) - функция нахождения факториала числа n */
/* Исходя из существования факториала только для целых положительных чисел, проверку n > 0 опустим. */
/* Ио определению: 0! = 1 , что уже не подходит для нашей задачи. */
/* *** */

function showFactorials() {
	function getFactorial(n) {
		var result = 1;
		for (var i = 1; i <= n; i++) {
			result *= i;
		}
		return result;
	}
	function checkTask(n) {
		var count = n.toString();
		var total = 0;
		for (var k = 0; k < count.length; k++) {
			total += getFactorial(parseInt(count[k]));
		}
		return total;
	}
	for (var j = 1; j <= 1000000; j++) {
		//if (j == checkTask(j)) document.write(j+"<br />"); /* либо в документ */
		if (j == checkTask(j)) console.log(j); /* либо в консоль */
	}
}
