# Red Light - Green Light

INFORMACIÓN GENERAL SOBRE LA APLICACIÓN:

Se basa en un simple juego, en el que nos registraremos con un usario, y nos llevara a la pantalla de juego, en esta tendremos dos botones de izquieda y derecha que los pulsaremos en orden alterno cuando tengamos semaforo en verde y sumaremos un punto, si pulsamos el mismo boton restaremos un punto
Si pulsamos cualquiera de los dos botones cuando esta la señal prohibida nuestra puntuacion caeráa 0.
El boton salir guardara la información de puntos y el mejor puntuaje, cuando vuelva a jugar con el mismo nombre continuara con estos puntos.

### LENGUAJES:

Esta aplicación ha sido desarrollada con javascript con la librería React.

### LIBRERIAS DESTACADAS:

- styled-components: Para usar CSS in JS y estilizar los componentes.
- react-router-dom v6: Permite redirigir al usuario a una pagina u otra en funcion de las acciones que haga y si lo tiene permitido.

- Jest.js y react-testing-library: para realizar las pruebas de forma rápida y sencilla.

- localbase: Guardar el estado de los jugadores en base de datos local. Es un wrapper del API de IndexedDB
- eslint: Calidad de codigo.
- prettier: Formatea de forma automatica el codigo

### ARRANQUE

- Se puede ver la aplicacion desplegada en netlify yendo a la URL:
 
  > https://bbvapruebatecnica.netlify.app/login

- Para arrancar el proyecto en development:

  > npm start

- Para ver si tenemos fallos de codigo o malas practicas, formatear el codigo, y ver los test:

  > npm run build

- Arrancar modo production ver funcionamiento PWA (modo offline)

1. Instalar primero serve de forma global:

   > npm i serve -g

2. Arrancar mediante el comando

   > serve -s build
