[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/MjcDy95B)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18098034&assignment_repo_type=AssignmentRepo)
## Práctica 7 Inserción de Sonido, Vídeo y Animaciones
## 3 Inserción de Vídeo
Utilizando como base la web creada para la práctica de Bootstrap, inserta, mediante la etiqueta \<video>, en cada card, el mismo vídeo en formato webm y mp4 previamente codificados con VLC

Indica los valores correspondientes en el atributo type.

## 4 Inserción de audio
Insertar en la misma web, mediante la etiqueta \<audio>, dos archivos de audio en formato mp3 y ogg
  
## 5 Control de Audio y Video con Javascript
Partiendo del siguiente código en el que están implementadas las funcionalidades de los botones play/pause.

HTML
```html
<video id="medio" width="720" height="400">
  <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4">
</video>

		
<nav>
		<input type="button" id="reiniciar" value="reiniciar">
		<input type="button" id="retrasar" value="&laquo;">
		<input type="button" id="play" value="&#9658;">
		<input type="button" id="adelantar" value="&raquo;">
		<input type="button" id="silenciar" value="silenciar">
		<label>Volumen</label>
		<input type="button" id="menosVolumen" value="-">
		<input type="button" id="masVolumen" value="+">
</nav>
```
JAVASCRIPT
``` javascript
function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
}
function accionRetrasar()
{
	//Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration	
}
function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);
```

Implementa las siguientes funcionalidades extra:

* Al pulsar el botón “reiniciar” si el vídeo está iniciado se reiniciará, es decir, comenzará a reproducirse de nuevo desde el inicio.
* Al pulsar el botón “retrasar” la reproducción del vídeo saltará 5 segundos hacia atrás.
* Al pulsar el botón “adelantar” la reproducción del vídeo saltará 5 segundos hacia delante.
* Al pulsar el botón “silenciar” el sonido del vídeo se desactivará y el texto del botón cambiará a “escuchar”. Al volver a pulsar el botón se activará el sonido y se cambiará de nuevo el texto a “silenciar”.
* Al pulsar el botón “menosVolumen” se bajará el volumen del vídeo 0.1 puntos hasta llegar a 0.
* Al pulsar el botón masVolumen ( ) se subirá el volumen del vídeo 0.1 puntos hasta llegar a 1.






Incluye el vídeo con todas sus funcionalidades implementadas en una nueva página de tu proyecto web con el título “Control de vídeo”. Realiza los ajustes necesarios para que se adapte a los distintos dispositivos.

Realiza los cambios en el repositorio creado para la práctica y activa Github Pages para que se pueda visualizar la web.

Una vez acabada la práctica agrega un issue nombrandome para que quede constancia de la entrega.
