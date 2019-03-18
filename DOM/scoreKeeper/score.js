let p1 = document.getElementById('p1'),
	p2 = document.getElementById('p2'),
	p1Display = document.getElementById('p1Display'),
	p2Display = document.getElementById('p2Display'),
	reset = document.getElementById('reset'),
	input = document.querySelector('input'),
	winnerInput = document.querySelector('p span'),
	p1score = 0,
	p2score = 0,
	gameOver = false,
	winningScore = 5;

p1.addEventListener('click', () => {
	if (!gameOver) {
		p1score++;
		if (p1score === winningScore) {
			p1Display.classList.add('winner');
			gameOver = true;
		}
		p1Display.textContent = p1score;
	}
});

p2.addEventListener('click', () => {
	if (!gameOver) {
		p2score++;
		if (p2score === winningScore) {
			p2Display.classList.add('winner');
			gameOver = true;
		}
		p2Display.textContent = p2score;
	}
});

reset.addEventListener('click', () => {
	p1score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove('winner');
	p2score = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove('winner');
	gameOver = false;
});

input.addEventListener('change', () => {
	winnerInput.textContent = input.value;
	winningScore = Number(input.value);
});

let links = document.querySelectorAll('a');
console.log(links);
links.forEach((link) => {
	link.getAttribute('src');
});

/*
// FIND LINK ON MDN PAGE DOM
let tables = document.querySelectorAll('.standard-table');
tables.forEach((table) => {
	console.log(table);
});
*/
