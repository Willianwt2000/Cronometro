const cronometro = document.getElementById('cronometro')
const botonInicioPausa = document.getElementById('btn-start-pause');
const botonReiniciar = document.getElementById('btn-restart');

let [horas, minutos, segundos] = [0,0,0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
	segundos++;

	if (segundos / 60 === 1) {
			segundos = 0;
			minutos++;

			if (minutos / 60 === 1) {
					minutos = 0;
					horas++;
			}
	}

	const segundosConFormatos = asignarFormato(segundos);
	const minutosConFormatos = asignarFormato(minutos);
	const horasConFormatos = asignarFormato(horas);

	cronometro.innerText = `${horasConFormatos}:${minutosConFormatos}:${segundosConFormatos}`;


};

function asignarFormato(unidadDeTiempo) {
	return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;

}

botonInicioPausa.addEventListener("click", function () {
	if (estadoCronometro === 'pausado') {
			intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
			botonInicioPausa.innerHTML = `<img src="boton-de-pausa.png">`;
			botonInicioPausa.classList.remove('start');
			botonInicioPausa.classList.add('pause')
			estadoCronometro = 'andando';
	} else {
			window.clearInterval(intervaloDeTiempo);
			botonInicioPausa.innerHTML = `<img src="punta-de-flecha-del-boton-de-reproduccion.png">
			`;
			botonInicioPausa.classList.remove('pause')
			botonInicioPausa.classList.add('start')
	}
});

botonReiniciar.addEventListener('click', function () {
	window.clearInterval(intervaloDeTiempo)
	horas = 0;
	minutos = 0;
	segundos = 0;

	//actualizar
	cronometro.innerText = '00:00:00';
	//actuAlizar botones
	botonInicioPausa.innerHTML = `<img src="punta-de-flecha-del-boton-de-reproduccion.png">
	`;
	botonInicioPausa.classList.remove('pause')
	botonInicioPausa.classList.add('start')

	//estado de cronometro
	estadoCronometro = 'pausado'
})