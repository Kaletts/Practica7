function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '▶️'; //\u25BA esto es igual pero en vez de texto estoy usando emojis
        play.innerText = "▶️"
        mensajes.innerText = ""
        document.body.style.backgroundColor = '#fff';
    }
    else {
        medio.play();
        play.value = '⏸️';
        play.innerText = "⏸️"
        mensajes.innerText = ""
        document.body.style.backgroundColor = 'grey';
    }
}
function accionReiniciar() {
    //Aqui tuve que usar 0.2 porque segun MDN Web Docs por privacidad se suele redondear este valor y en 0 el boton de reinicio
    //tambien iniciaba la reproducción
    mensajes.innerText = ""
    if (medio.currentTime >= 0.2) {
        medio.currentTime = 0
        play.innerText = "⏸️"
        medio.play()
    } else {
        mensajes.innerText = "No se puede reiniciar, ya esta en el inicio el video"
    }
}
function accionRetrasar() {
    mensajes.innerText = ""
    if (medio.currentTime >= 5) {
        medio.currentTime -= 5
    } else if (medio.currentTime <= 0.2) {
        mensajes.innerText = "No se esta reproduciendo nada aún"
    } else {
        mensajes.innerText = "¡No han pasado 5 segundos espera!"
    }
}
function accionAdelantar() {
    mensajes.innerText = ""
    if (medio.currentTime + 5 > medio.duration) {
        medio.currentTime = medio.duration
        mensajes.innerText = "Quedaban menos de 5 segundos de video, te llevo al final"
    } else {
        medio.currentTime += 5
    }
}
function accionSilenciar() {
    mensajes.innerText = ""
    if (medio.muted === true) {
        medio.muted = false
        silenciar.innerText = "🔊"
    } else {
        medio.muted = true
        silenciar.innerText = "🔇"
    }
}
function accionMasVolumen() {
    mensajes.innerText = ""
    if (medio.volume + 0.1 <= 1) {
        medio.volume += 0.1;
    } else {
        medio.volume = 1;
        mensajes.innerText = "¡No se puede subir más el volumen! 📢";
    }
}
function accionMenosVolumen() {
    mensajes.innerText = ""
    if (medio.volume - 0.1 >= 0) {
        medio.volume -= 0.1;
    } else {
        medio.volume = 0;
        mensajes.innerText = "¡No se puede bajar más el volumen! 🔈";
    }
}

function iniciar() {

    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');
    mensajes = document.getElementById("mensajes");

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);

/* 
Implementa las siguientes funcionalidades extra:

Al pulsar el botón “reiniciar” si el vídeo está iniciado se reiniciará, es decir, comenzará a reproducirse de nuevo desde el inicio.
Al pulsar el botón “retrasar” la reproducción del vídeo saltará 5 segundos hacia atrás.
Al pulsar el botón “adelantar” la reproducción del vídeo saltará 5 segundos hacia delante.
Al pulsar el botón “silenciar” el sonido del vídeo se desactivará y el texto del botón cambiará a “escuchar”. Al volver a pulsar el botón se activará el sonido y se cambiará de nuevo el texto a “silenciar”.
Al pulsar el botón “menosVolumen” se bajará el volumen del vídeo 0.1 puntos hasta llegar a 0.
Al pulsar el botón masVolumen ( ) se subirá el volumen del vídeo 0.1 puntos hasta llegar a 1.
Incluye el vídeo con todas sus funcionalidades implementadas en una nueva página de tu proyecto web con el título “Control de vídeo”. Realiza los ajustes necesarios para que se adapte a los distintos dispositivos.

Realiza los cambios en el repositorio creado para la práctica y activa Github Pages para que se pueda visualizar la web. */