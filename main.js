const micanvas = document.getElementById('micanvas');

const altura = window.innerHeight - 50;
const ancho = window.innerWidth - 200;

micanvas.height = altura;
micanvas.width = ancho;
const ctx = micanvas.getContext('2d');
var x = ancho / 2 - 25;
var y = altura / 2 - 25;
ctx.strokeRect(x, y, 100, 100, 10);
colorRandom();
ctx.fillRect(x, y, 100, 100);

window.addEventListener('keydown', (event) => {
	switch (event.keyCode) {
		case 87:
			y -= 30;
			pintarRandom();
			break;
		case 83:
			y += 30;
			pintarRandom();
			break;
		case 68:
			x += 30;
			pintarRandom();
			break;
		case 65:
			x -= 30;
			pintarRandom();
			break;
	}
});

function pintarRandom() {
	ctx.strokeRect(x, y, 100, 100, 10);
	colorRandom();
	ctx.fillRect(x, y, 100, 100);
}

function colorRandom() {
	let rojo = Math.floor(Math.random() * 256);
	let verde = Math.floor(Math.random() * 256);
	let azul = Math.floor(Math.random() * 256);
	let alpha = Math.random() * 1;
	alpha = alpha.toFixed(2);
	ctx.fillStyle = `rgba(${rojo},${verde},${azul},${alpha})`;
	return ctx.fillStyle;
}
