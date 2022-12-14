# Los props.馃懢

Lo que se ha trabajado hasta el momento con le uso de _Componentes_, que dentro de react son usados como abstracciones aisladas de c贸digo para poder rendereizarlas en un componentes unico `HTML`. Tambien podemos usar valores que los mismos componentes pueden usar para su implementacion.

> En React los componentes son representados por funciones encapsulan l贸gica y descripci贸n de la UI usando JSX. Tambi茅n sabemos que un componente React es en cierta forma una unidad aislada del mundo, pero al mismo tiempo sabemos que debe existir una forma de que el componente se comunique con el mundo exterior.

En este caso, al igual que las funciones aceptan "Argumetnos", un componente react acepta _"Valores"_ que son pasados en forma de `Object` llamados o conocidos como **Props**.

````js
React.createElement(type, [props], [...children])
````

Lo que esta definici贸n indica es que un componente creado con聽`React.createElement`聽acepta un objeto opcional llamado聽**props**聽y un n煤mero indefinido de hijos.

````html
<Title color="red">Este es el Titulo</Title>
````

De la manera anterior, agregamos unos atributos a las declaraciones ne html, en este mismo ejemplo podemos ver `color = "red"` que es entendida como una **prop** _llamada `color` con un valor string `red`_.  Ok, teniendo entendido esto, ahora te preguntaras 驴como reciben estas props en un componente?馃

Al momento de declarar un file de tipo jsx,estamos indicado que esta funci贸n sea conciderada un componente **react** valido. En el siguiente ejemplo podemos observcarlo.

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

El componente `Title` es una funci贸n que acepta un argumento, este argumento llamado聽**props**聽es un objeto `object` cuyos atributos son los nombres que has dado a las props, por lo que puedes usar destructuring para acceder a ellos (puedes hacerlo tambi茅n directamente en los argumentos).

## Children.馃懆鈥嶐煈┾?嶐煈?

Existe una **prop** por defecto que no fue definida por ti.聽**children**. Esta prop (opcional) hace referencia a el tercer argumento de聽`React.createElement.`聽**children**聽es una estructura de datos opaca, es decir, no hay que lidiar con ella directamente, si no, utilizando las utilidades que la propia API ofrece.

- **children**聽puede ser: Un string, boolean, n煤mero, null, un elemento, un componente, o un array de los anteriores.

Tambien datos interesantes que nos podrian ayudar a un mejor entendimiento del c贸digo anterior, es que se uso una caracteristica paricular dentro de jsx, que es la **Interpolaci贸n**, esta _caracteristica_ dentro de JSX es que podemos ingresar mediante el uso de `{}` c贸digo crudo de JavaScript, es como poner un mundo dentro de otro.馃樀鈥嶐煉?

> En resumen... abrimos el uso de JSX y usamos las llaves聽`{}` para determinar que estaremos interpolando javascript dentro de JSX. 

驴Existen restricciones?馃槻 Pues dependera del c贸digo que estes ingresando, es de mucho valor tener encuenta quer puedes interpolar lo que sea dentro de las llaves聽`{}`聽mientras sea **javascript v谩lido**, solo recuerda que lo que est谩s haciendo al interpolar dentro de JSX es en realidad creando un nuevo聽**children**聽que es el tercer arugmento de聽`React.createElement`

```jsx
const Title = (props) => {
	const { color, children } = props
	return <h1>{children} - {color}</h1>
}
鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?

const Title = (props) => {
	const { color, childrn } = props
	return React.createElement('h1',null, children, " _ ", color)
}
鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?	鈫?
const Title = ({ color, children })=> {
	return React.createElement('h1',null, children, " _ ", color)
}
```

En el c贸digo anterior podemos ver las manera de declarar las **props**, de maneras en la que podamos tener en claro que podemos crear componentes que tienen valores por defecto y que podemos usar.

---

馃獎 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">