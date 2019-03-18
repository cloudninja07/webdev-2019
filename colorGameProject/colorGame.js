let colors = [
	'rgb(255, 0, 0)',
	'rgb(255, 255, 0)',
	'rgb(255, 255, 255)',
	'rgb(0, 255, 0)',
	'rgb(255, 0, 255)',
	'rgb(0, 255, 255)'
];
let squares = document.getElementsByClassName('square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click', () => {
		let clickedColor = squares[i].style.backgroundColor;
		if (clickedColor === pickedColor) {
			message.textContent = 'Correct';
			changeColor(clickedColor);
		} else {
			squares[i].style.backgroundColor = '#232323';
			message.textContent = 'Try Again';
		}
	});
}

function changeColor(color) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
