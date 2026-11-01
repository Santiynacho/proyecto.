// FASE 4: actividad interactiva sobre el Beato David Carlos.
// Usamos variables, getElementById(), addEventListener() e if / else.

// Buscamos en el HTML los elementos que vamos a utilizar.
const botonComprobar = document.getElementById("check-answer");
const botonReintentar = document.getElementById("retry-quiz");
const mensaje = document.getElementById("quiz-feedback");
const resultado = document.getElementById("quiz-result");
const formulario = document.getElementById("quiz-form");

// Esta variable guarda la cantidad de respuestas correctas.
let puntaje = 0;

// Cuando se hace clic en "Comprobar respuestas", se revisan las opciones.
botonComprobar.addEventListener("click", function() {
    puntaje = 0;

    // Pregunta 1: la respuesta correcta es la opción A.
    if (document.getElementById("p1a").checked) {
        puntaje = puntaje + 1;
    }

    // Pregunta 2: la respuesta correcta es la opción B.
    if (document.getElementById("p2b").checked) {
        puntaje = puntaje + 1;
    }

    // Pregunta 3: la respuesta correcta es la opción A.
    if (document.getElementById("p3a").checked) {
        puntaje = puntaje + 1;
    }

    // Pregunta 4: la respuesta correcta es la opción C.
    if (document.getElementById("p4c").checked) {
        puntaje = puntaje + 1;
    }

    // Pregunta 5: la respuesta correcta es la opción A.
    if (document.getElementById("p5a").checked) {
        puntaje = puntaje + 1;
    }

    // Mostramos el resultado según el puntaje obtenido.
    if (puntaje == 5) {
        mensaje.textContent = "¡Excelente! Todas las respuestas son correctas.";
    } else if (puntaje >= 3) {
        mensaje.textContent = "¡Muy bien! Conocés varios datos de su historia.";
    } else {
        mensaje.textContent = "Podés volver a leer la página e intentarlo otra vez.";
    }

    resultado.textContent = "Tu puntaje es: " + puntaje + " de 5.";

    // Ocultamos el botón de comprobar y mostramos el de volver a intentar.
    botonComprobar.hidden = true;
    botonReintentar.hidden = false;
});

// El botón permite borrar las respuestas y comenzar nuevamente.
botonReintentar.addEventListener("click", function() {
    formulario.reset();
    puntaje = 0;
    mensaje.textContent = "";
    resultado.textContent = "";
    botonComprobar.hidden = false;
    botonReintentar.hidden = true;
});

// Menú para celulares: al hacer clic se muestra u oculta la navegación.
const botonMenu = document.getElementById("nav-links");
const abrirMenu = document.getElementById("menu-toggle");

abrirMenu.addEventListener("click", function() {
    if (botonMenu.classList.contains("is-open")) {
        botonMenu.classList.remove("is-open");
        abrirMenu.setAttribute("aria-expanded", "false");
    } else {
        botonMenu.classList.add("is-open");
        abrirMenu.setAttribute("aria-expanded", "true");
    }
});
