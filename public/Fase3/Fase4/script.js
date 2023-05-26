function procesarRespuestas() {
  const respuestas = document.forms["formulario"];
  const respuestasCorrectas = ["c", "a", "b", "a", "a"];
  let puntaje = 0;

  for (let i = 1; i <= 5; i++) {
    const respuesta = respuestas["r" + i].value;

    if (respuesta == null || respuesta === "") {
      alert('Favor responder todas las preguntas');
      return false;
    }

    if (respuesta === respuestasCorrectas[i - 1]) {
      puntaje++;
    }
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Obtuviste ' + puntaje + ' puntos de 5 posibles';
  return false;

}
function volverInicio() {
  window.location.href = "public/Fase3/index.html";
}
