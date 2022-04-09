<div align="center">

![image](https://drive.google.com/uc?export=view&id=1cRrTFvEG8LH-FKFpWjXIMHyIHzH7WIFZ)
    
<!-- Encabezado -->
## Rendering Raycasting
### Abril 2022
### Autor 

| Nombre | Numero De Cuenta | Correo |
|:-------------:| :-----:|:-----:|
| Edgar Josué Benedetto Godoy | `20171033802` | [Gmail](mailto:ejbg597@gmail.com) |

</div>

### Introducción
Raycasting es una técnica de renderizado para crear una perspectiva 3D en un mapa 2D. Antes, cuando las computadoras eran más lentas, no era posible ejecutar motores 3D reales en tiempo real, y el raycasting fue la primera solución. Raycasting puede ir muy rápido, porque solo se tiene que hacer un cálculo para cada línea vertical de la pantalla. El juego más conocido que utilizó esta técnica es, por supuesto, Wolfenstein 3D.

El motor de emisión de rayos de Wolfenstein 3D era muy limitado, lo que le permitía ejecutarse incluso en una computadora 286: todas las paredes tienen la misma altura y son cuadrados ortogonales en una cuadrícula 2D, como se puede ver en esta captura de pantalla de un editor de mapas para Wolf3D:
* Cosas como escaleras, saltos o desniveles son imposibles de hacer con este motor. Juegos posteriores como Doom y Duke Nukem 3D también utilizaron raycasting, pero motores mucho más avanzados que permitían paredes inclinadas, diferentes alturas, suelos y techos texturizados, paredes transparentes, etc... Los sprites (enemigos, objetos y golosinas) son imágenes en 2D , pero los sprites no se tratan en este tutorial por ahora.

¡Raycasting no es lo mismo que raytracing! Raycasting es una técnica semi-3D rápida que funciona en tiempo real incluso en calculadoras gráficas de 4 MHz, mientras que raytracing es una técnica de representación realista que admite reflejos y sombras en escenas 3D reales, y solo recientemente las computadoras se volvieron lo suficientemente rápidas para hacerlo en tiempo real por razonablemente alto. resoluciones y escenas complejas.

### La idea básica 
La idea básica del raycasting es la siguiente: el mapa es una cuadrícula cuadrada en 2D, y cada cuadrado puede ser 0 (= sin pared) o un valor positivo (= una pared con cierto color o textura). Para cada x de la pantalla (es decir, para cada franja vertical de la pantalla), envíe un rayo que comience en la ubicación del jugador y con una dirección que dependa tanto de la dirección de la mirada del jugador como de la coordenada x de la pantalla. Luego, deje que este rayo avance en el mapa 2D, hasta que golpee un cuadrado del mapa que es una pared. Si golpeó una pared, calcule la distancia de este punto de golpe al jugador y use esta distancia para calcular qué tan alto debe dibujarse esta pared en la pantalla: cuanto más lejos esté la pared, más pequeña será en la pantalla y más cerca. , más alto parece ser. Todos estos son cálculos 2D. Esta imagen muestra una descripción general de arriba hacia abajo de dos de esos rayos (rojo) que comienzan en el jugador (punto verde) y golpean las paredes azules:

![Basic idea](https://lodev.org/cgtutor/images/raycastgrid.gif)

### Conceptos
A partir del 2D Raycasting se deben de modificar algunos conceptos para que funcione en 3D:
1. Limitar la visión de la particula, dado que un personaje en un videojuego no puede ver en un angulo de 360 grados se debe limitar a que solamente pueda ver hacía entrente en un angulo y rango determinado como de 0 a 400. 

### Documentación

* [Paper Original](https://lodev.org/cgtutor/raycasting.html)
* [Vídeo Tutorial](https://www.youtube.com/watch?v=vYgIKn7iDH8)
* [Libreria P5 Collide 2D](https://github.com/bmoren/p5.collide2D)
* [Documentación P5js](https://p5js.org/es/get-started/#settingUp)