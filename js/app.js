/*challenge 38*/

const tiempo = document.getElementById('tiempo');
const btnComenzar = document.getElementById('comenzar');
const btnPausar = document.getElementById('pausar');
const btnDetener = document.getElementById('detener');

let arranque, intervalo;

btnComenzar.addEventListener('click', () => {
  arranque = Date.now();
  intervalo = setInterval(actualizarTiempo, 50);
});

btnPausar.addEventListener('click', () => {
  clearInterval(intervalo);
});

btnDetener.addEventListener('click', () => {
  clearInterval(intervalo);
  tiempo.textContent = '00:00:00:00';
});

function actualizarTiempo(){
  const diferencia = Date.now() - arranque;
  const diftiempo = new Date(diferencia);
  const horas = diftiempo.getMinutes().toString().padStart(2, '0');
  const minutos = diftiempo.getMinutes().toString().padStart(2, '0');
  const segundos = diftiempo.getSeconds().toString().padStart(2, '0');
  const millisegundos = diftiempo.getMilliseconds().toString().padStart(3, '0');
  tiempo.textContent = `${horas}:${minutos}:${segundos}:${millisegundos}`;
}