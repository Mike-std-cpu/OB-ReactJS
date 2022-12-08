# Uso de snippets para uso de react estatico.

Hay muchas formas de utilizar React para nuestros desarrollos, la forma más simple y básica de hacerlo es simplemente utilizando archivos estáticos, tus viejos amigos HTML, CSS y Javascript.

> Revisa otras formas de crear una aplicación React [en este artículo](https://escuelafrontend.com/articulos/como-crear-una-aplicacion-en-react) para Escuela Frontend

Para crear una aplicación React en realidad necesitas dos librerías. React, que es la librería que se encarga de manejar el DOM virtual, interpretar tus componentes y manejar el estado y luego una librería que se encargue de traducir todo eso al “lenguaje” del dispositivo que estás usando, en el caso del browser hablamos de ReactDOM.

ReactDOM es la librería responsable de comunicarse con las API del DOM y renderizar los elementos en tu pantalla.

Esta arquitectura se debe a que React puede ser utilizado en diferentes dispositivos huéspedes como dispositivos móviles por medio de React Native o incluso video con [Remotion](https://github.com/JonnyBurger/remotion)

## Primeros Pasos


Para esta lección veremos como crear una aplicación estática con React desde cero, para esto necesitaremos la terminal y un editor de texto de tu elección.


## Pasos:

1. Crear archivos estáticos

Como puedes notar, el directorio para esta lección corresponde sólo a algunos archivos de configuración, y eso es intencional pues será en este ejercicio que crearemos nuestros primeros archivos.

Crea un archivo base `index.html` en el directorio raiz.


2. Agregar React utilizando unpkg

Ahora haremos que React entre en juego, para eso utilizaremos una versión empacada lista para ser utilizada desde un CDN llamado unpkg.

Tip: El snippet de código que necesitas es

````html

<script

  src="https://unpkg.com/react@17/umd/react.development.js"

  crossorigin

></script>

<script

  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"

  crossorigin

></script>

````
  
3. Explorar nuestros archivos y verificar que React está disponible

> La aplicación es servida por [Vite](https://vitejs.dev/), para ejecutar y ver el resultado de tu trabajo puedes ejecutar en la terminal y seleccionar la lección corresondiente 
> _"En pocas palabras **vite** es un entorno de desarrollo para el uso del framework react"_

> `$ npm run dev`

Debes revisar que al cargar el archivo html React esté disponible en el scope global. Tip: utiliza las DevTools

> Una observacion rapida es que al dar un `console.log(react)` donde destacara que *react* esta disponible.

---

🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">