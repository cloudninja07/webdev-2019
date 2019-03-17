/*let todos = [ 'hello' ];
let input = prompt('what is your choice');

while (input !== 'quit') {
	if (input === 'list') {
		console.log('*******************');
		todos.forEach((todo, index) => {
			console.log(index + ': ' + todo);
		});
		console.log('*******************');
	} else if (input === 'new') {
		let newtodo = prompt('enter new todo');
		todos.push(newtodo);
	} else if (input === 'delete') {
		let index = prompt('which index do you want to delete');
		todos.splice(index, 1);
		console.log('removed successfully');
	}
	input = prompt('what is your choice');
}
console.log('ok you quit it!!');
*/

// let items = [];
// function printReverse(items) {
// 	items.forEach((item) => {
// 		console.log(item);
// 		for (let i = item; i > item; i++) {
// 			console.log(item);
// 		}
// 	});
// }
// printReverse([ 1, 2, 3, 4 ].reverse());

// function isUniform(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i] !== arr[i + 1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// let arr = isUniform([ 'b', 'b', 'b' ]);
// console.log(arr);
// let sum = [ -5, 100 ];

// function sumArray(arr) {
// 	let total = 0;
// arr.forEach((element)=>{
//     total += element;
// });
// return total;
// }

function max(arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
max([ 1, 2, 3, 4 ]);
