# JSX desde cero.🚀

Como vimos en el ejemplo anterior de la nota [Ejemplos de usos de JSX](obsidian://open?vault=Obsidian%20Vault&file=React%2FStart%20with%20React%2FEjemplos%20de%20%20usos%20de%20JSX.) podemos renderizar componentes de manera declarativa, ahora bien, dentro del mundo de *JSX* sabemos que es una **Abtracción de la API de react directa de** `React.createElement` esta permite expresar de una manera más declarativa la definición de la UI que nosotros desemos renderizar.

JSX es una forma más intuitiva de crear componentes, al menos más intuitiva o declarativa que la API `React.createElement`. Es muy similar a HTML.

Pero JSX no es javascript por lo que necesitamos algunas herramientas extra, en particular [Babel](https://babeljs.io/).

> En grandes rasgo dando una explicación más certera de la funcionalidad de babel es que [Babel](http://babeljs.io/) es una herramienta que nos permite transformar nuestro _código JS de última generación (o con funcionalidades extras) a un código de Javascript que cualquier navegador o versión de Node.js pueda entender._ Si la definimos en una sola oracion...
> 
> **Babel se encarga de transpilar o transformar el código JSX en javascript puro, es decir en llamadas a `React.createElement`.**
> 
> Un ejemplo sensillo de explicar seria que pBabel funciona mediante plugins para que le indiquemos que cosas queremos que transforme, por ejemplo con el plugin [babel-plugin-transform-es2015-arrow-functions](https://www.npmjs.com/package/babel-plugin-transform-es2015-arrow-functions) podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales, con [babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx) podemos hacer que entienda código de JSX y lo convierta a código JS normal.

## Instalación de babel.

Dentro de la instalación de babel, existen maneras más completas como la de fomra estatica como en los siguientes ejemplos.

* **Estatica**
````html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
````

> Para este punto, tenemos que realizar una pequeña modificación extra, en el tag `<script>`que contiene nuestro trabajo agregaremos al atributo `type=“text/babel”
`
* **Completa para deploy.**

````
npm i -D babel-core babel-cli
````
> Y para ejecución

````
babel script.js --out-file script-compiled.js
````

En otro apartado más copmpleto explicare con profundidad la instalación para _adeploy_ de babel, dando click en [babel]()

### Ejemplo.🐈‍⬛

Como ya hemos mencionado, el navegador no entiende JSX, para poder ejecutar JSX en el navegador como uso de _"Translator"_, usaremos la opcion uno de versiopn estatic ade babel _(Explicada anteriormente)_.

````html
<html>
  <head>
  <!-- Incorporacion de babel estatico-->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
     Hola Mundo
  </body>
  <script type="text/babel">
    const h1 = <h1 className="title">Hola Mundo</h1>
    
    const root = document.getElementById('root')
    ReactDOM.render(h1,root)
  </script>
</html>
````

> En el siguente apartado, tendremos los elementos anidados con strong para un hola mundo usando jsx.

```html
<html>
  <head>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
     Hola Mundo
  </body>
  <script type="text/babel">
    const nestedH1 = <h1>Hola <strong>Mundo</strong></h1>
    
    const root = document.getElementById('root')
    ReactDOM.render(nestedH1,root)
  </script>
</html>
```

> Podmeos observar que al momento de renderizar un `h1` ya no es tan enredado o crudo, podemos observar que se declara la lista, se ocncatena con el valor de **strong** y se cierra. Es mayormente declarativa.😲

---
🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">