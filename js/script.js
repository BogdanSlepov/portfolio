const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-counter'),
		lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});

let a = 10;

if (a) {
	let a = 3;
	a *= a;
	console.log(a);
}

console.log(a);