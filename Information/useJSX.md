# JSX desde cero.馃殌

Como vimos en el ejemplo anterior de la nota [Ejemplos de usos de JSX](obsidian://open?vault=Obsidian%20Vault&file=React%2FStart%20with%20React%2FEjemplos%20de%20%20usos%20de%20JSX.) podemos renderizar componentes de manera declarativa, ahora bien, dentro del mundo de *JSX* sabemos que es una **Abtracci贸n de la API de react directa de** `React.createElement` esta permite expresar de una manera m谩s declarativa la definici贸n de la UI que nosotros desemos renderizar.

JSX es una forma m谩s intuitiva de crear componentes, al menos m谩s intuitiva o declarativa que la API聽`React.createElement`. Es muy similar a HTML.

Pero JSX no es javascript por lo que necesitamos algunas herramientas extra, en particular聽[Babel](https://babeljs.io/).

> En grandes rasgo dando una explicaci贸n m谩s certera de la funcionalidad de babel es que [Babel](http://babeljs.io/)聽es una herramienta que nos permite transformar nuestro _c贸digo JS de 煤ltima generaci贸n (o con funcionalidades extras) a un c贸digo de Javascript que cualquier navegador o versi贸n de Node.js pueda entender._ Si la definimos en una sola oracion...
> 
> **Babel se encarga de transpilar o transformar el c贸digo JSX en javascript puro, es decir en llamadas a聽`React.createElement`.**
> 
> Un ejemplo sensillo de explicar seria que pBabel funciona mediante plugins para que le indiquemos que cosas queremos que transforme, por ejemplo con el plugin聽[babel-plugin-transform-es2015-arrow-functions](https://www.npmjs.com/package/babel-plugin-transform-es2015-arrow-functions)聽podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales, con聽[babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx)聽podemos hacer que entienda c贸digo de JSX y lo convierta a c贸digo JS normal.

## Instalaci贸n de babel.

Dentro de la instalaci贸n de babel, existen maneras m谩s completas como la de fomra estatica como en los siguientes ejemplos.

* **Estatica**
````html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
````

> Para este punto, tenemos que realizar una peque帽a modificaci贸n extra, en el tag聽`<script>`que contiene nuestro trabajo agregaremos al atributo聽`type=鈥渢ext/babel鈥?
`
* **Completa para deploy.**

````
npm i -D babel-core babel-cli
````
> Y para ejecuci贸n

````
babel script.js --out-file script-compiled.js
````

En otro apartado m谩s copmpleto explicare con profundidad la instalaci贸n para _adeploy_ de babel, dando click en [babel]()

### Ejemplo.馃悎鈥嶁瑳

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

> Podmeos observar que al momento de renderizar un `h1` ya no es tan enredado o crudo, podemos observar que se declara la lista, se ocncatena con el valor de **strong** y se cierra. Es mayormente declarativa.馃槻

---
馃獎 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">