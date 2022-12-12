# JSX📦

React ofrece una API “cruda” que te permite crear componentes y en realidad realizar todo lo que pienses sin necesidad de utilizar JSX.

Esta API es la que se encarga de la creación de los componentes y elementos sin que tengas que tocar directamente la API imperativa del DOM, aún así la API de React mantiene cierta semejanza con el DOM.

DOM API:
`document.createElement(‘h1’)`

React API.
`React.createElement(‘h1’, props)`

La gran (e importante) diferencia es que la ``API de React`` acepta **props**. _Un objeto que describe los atributos que este componente u elemento tendrá._ En el caso de la API del DOM, si quieres modificar, por ejemplo, el contenido de texto de un elemento harías:
```javascript

const h1 = document.createElement('h1')

h1.textNode = 'Este es el título'

```

Con la API de React tienes una forma más declarativa:
```javascript

const h1 = React.createElement('h1', {children: 'Este es el titulo'})

```
Es también importante notar que para poder ejecutar React en el browser debes agregar dos script base `react` y `react-dom`.

`react` es la librería que implementa las API necesarias para crear y manejar tus componentes. `react-dom` es quien "traduce" el árbol de componentes de React a algo que el DOM pueda entender.

Para renderizar tus componentes en pantalla usamos
```javascript

ReactDOM.render(rootElement, tuApp)

```
En el siguiente script viene un ejemplo completo:

````html
<!DOCTYPE html>

<html>

  <head>

    <meta charset="UTF-8" />

    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Fundamentos de React -Lección 03</title>

    <!-- 💡 Estos son los archivos de React -->

  

    <script

      src="https://unpkg.com/react@17/umd/react.development.js"

      crossorigin

    ></script>

    <script

      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"

      crossorigin

    ></script>

  </head>

  <body>

    <!--💡  Este div actuará como "base" para renderizar nuestros elementos -->

    <div id="root1"></div>

  

    <!--💡  Este div actuará como "base" para renderizar nuestros elementos con React -->

    <div id="root2"></div>

    <!-- 💡 Aquí será donde escribamos nuestros scripts -->

  

    <script type="text/javascript">

      // 🏋️‍♂️ 1. Crea elementos de interfaz utilizando la api DOM de Javascript

  

    // - [x] Crea un elemento H1.

    const rooot = document.getElementById("root1")

    const h1 = document.createElement('h1')

    h1.innerHTML = 'Hola mundo con HTML🙂'

    rooot.appendChild(h1)

    //- [X] Crea una lista de al menos dos items

      const root2 = document.getElementById('root2')

      const ul = document.createElement('ul')

      const l1 = document.createElement('li')

      l1.innerHTML = 'Elemento 1'

      const l2 = document.createElement('li')

      l2.innerHTML = 'Elemento 2'

      ul.appendChild(l1)

      ul.appendChild(l2)

      root2.appendChild(ul)

      const root = document.getElementById('root1')

  

      // 💡

      // root.appendChild()


      /* 🏋️‍♂️ 2. Crea un elemento h1 utilizando las API de React.

    En React las atributos de los elementos HTML son props

    el atributo textNode o el contenido que se renderizará dentro

    del elemento creado es agregado utilizando la prop "children"

    */
    const title = React.createElement('h1', {children: 'Hola mundo con React'})
    
      /* 🏋️‍♂️ 3. Crea un elementos anidados utilizando las API de React */

      // <h1>Hola <strong>Mundo!</strong></h1>

		const strong = React.createElement('strong', {
		children: 'Mundo! 🚀'
		
		  })
      const title2 = React.createElement('h1', children: ['Hola', strong])

      /* 🍬  Utilizando `React.createElement` crea una lista de 3 elementos utilizando `ul` y `li`. */

		const li = React.createElement('li', {children: 'Elemento 1'})
		const li2 = React.createElement('li',null, 'Elemento 2')
		const ul2 = React.createElement('ul', null, [li, li2])
		//renderizamos
		ReactDOM.render(ul2, root2)

      // 💡Para renderizar tus componentes en la pagina debes usar ReactDOM

      // const root2 = document.getElementById('root2')

      // ReactDOM.render(h1, root2)

      // ReactDOM.render(componente, lugarParaRenderizar)

      ReactDOM.render(title, root2)
      ReactDOM.render(title2, root2)
    </script>

  </body>

</html>

````

> Debemos de tener en cuenta que `children` es una **props** que contendra un elemetno o un arreglo de elementos.

Una de las grandes diferencias entre la API de Javascript y React es que React usa props de manera _declarativa_.

---

🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">