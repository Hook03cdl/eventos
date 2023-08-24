const micanvas = document.getElementById('micanvas');

const altura = window.innerHeight - 50;
const ancho = window.innerWidth - 200;

micanvas.height = altura;
micanvas.width = ancho;
const ctx = micanvas.getContext('2d');

window.addEventListener('keydown', () => {
	pintarRandom();
});

function pintarRandom() {
	let x = Math.floor(Math.random() * ancho - 100);
	let y = Math.floor(Math.random() * altura - 100);
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
