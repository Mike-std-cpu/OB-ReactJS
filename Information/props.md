# Los props.👾

Lo que se ha trabajado hasta el momento con le uso de _Componentes_, que dentro de react son usados como abstracciones aisladas de código para poder rendereizarlas en un componentes unico `HTML`. Tambien podemos usar valores que los mismos componentes pueden usar para su implementacion.

> En React los componentes son representados por funciones encapsulan lógica y descripción de la UI usando JSX. También sabemos que un componente React es en cierta forma una unidad aislada del mundo, pero al mismo tiempo sabemos que debe existir una forma de que el componente se comunique con el mundo exterior.

En este caso, al igual que las funciones aceptan "Argumetnos", un componente react acepta _"Valores"_ que son pasados en forma de `Object` llamados o conocidos como **Props**.

````js
React.createElement(type, [props], [...children])
````

Lo que esta definición indica es que un componente creado con `React.createElement` acepta un objeto opcional llamado **props** y un número indefinido de hijos.

````html
<Title color="red">Este es el Titulo</Title>
````

De la manera anterior, agregamos unos atributos a las declaraciones ne html, en este mismo ejemplo podemos ver `color = "red"` que es entendida como una **prop** _llamada `color` con un valor string `red`_.  Ok, teniendo entendido esto, ahora te preguntaras ¿como reciben estas props en un componente?🤔

Al momento de declarar un file de tipo jsx,estamos indicado que esta función sea conciderada un componente **react** valido. En el siguiente ejemplo podemos observcarlo.

```jsx
const Title = props => {
  const {color, children} = props
  return (
    <h1>
      {children} - {color}
    </h1>
  )
}
```

El componente `Title` es una función que acepta un argumento, este argumento llamado **props** es un objeto `object` cuyos atributos son los nombres que has dado a las props, por lo que puedes usar destructuring para acceder a ellos (puedes hacerlo también directamente en los argumentos).

## Children.👨‍👩‍👦

Existe una **prop** por defecto que no fue definida por ti. **children**. Esta prop (opcional) hace referencia a el tercer argumento de `React.createElement.` **children** es una estructura de datos opaca, es decir, no hay que lidiar con ella directamente, si no, utilizando las utilidades que la propia API ofrece.

- **children** puede ser: Un string, boolean, número, null, un elemento, un componente, o un array de los anteriores.

Tambien datos interesantes que nos podrian ayudar a un mejor entendimiento del código anterior, es que se uso una caracteristica paricular dentro de jsx, que es la **Interpolación**, esta _caracteristica_ dentro de JSX es que podemos ingresar mediante el uso de `{}` código crudo de JavaScript, es como poner un mundo dentro de otro.😵‍💫

> En resumen... abrimos el uso de JSX y usamos las llaves `{}` para determinar que estaremos interpolando javascript dentro de JSX. 

¿Existen restricciones?😲 Pues dependera del código que estes ingresando, es de mucho valor tener encuenta quer puedes interpolar lo que sea dentro de las llaves `{}` mientras sea **javascript válido**, solo recuerda que lo que estás haciendo al interpolar dentro de JSX es en realidad creando un nuevo **children** que es el tercer arugmento de `React.createElement`

```jsx
const Title = (props) => {
	const { color, children } = props
	return <h1>{children} - {color}</h1>
}
↓	↓	↓	↓	↓	↓	↓	↓	↓	↓	↓	↓

const Title = (props) => {
	const { color, childrn } = props
	return React.createElement('h1',null, children, " _ ", color)
}
↓	↓	↓	↓	↓	↓	↓	↓	↓	↓	↓	↓
const Title = ({ color, children })=> {
	return React.createElement('h1',null, children, " _ ", color)
}
```

En el código anterior podemos ver las manera de declarar las **props**, de maneras en la que podamos tener en claro que podemos crear componentes que tienen valores por defecto y que podemos usar.

---

🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">