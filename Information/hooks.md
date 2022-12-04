# Hooks en React. 🤔

|Métodos de Lifecycle | Hooks de LifeCycle |
| --------------------- | -------------------- |
| Introduciendo en versiones anteriores | Introducido en 2018 |
| Funciona con ES5 | Funciona con >ES6 |
| Incorporado en componentes de clase | Incorporado para componentes funcionales |
| Necesita de un cosntructor para inicializarlo | No necesita un *constructor* |
| Uso de **this** bindeado en la clase | No necesita de un **this** para ser usado |

Los **hooks** viene  para simplificar los _metodos de cilco de vida_ de componentes en react, ya que los _hooks_ son funciones que tiene la capacidad de simplificar mecanismos para el trabajop continuo de componentes funcionales.

>**Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una `function`.** Esto, antes, no era posible y nos obligaba a crear un componente con `class` para poder acceder a todas las posibilidades de la librería. Y de ahí viene el nombre. _Hooks_ es gancho y, precisamente, lo que hacen, es que te permiten _enganchar_ tus componentes funcionales a todas las características que ofrece React.

_Fuente:_ [midudev](https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/)

## UseState

Un ejemplo claro y tipico de usos de _hooks_, es el `useState`, un ejemplo tipico es el crear un componente de tipo funcion y acceder a sus estados privados a traves de un hook y, ademas, poder modificarlo. Tenemos los siguientes variables iniciales:

````jsx
export const Ejem1 = () => {


    // Valor inicniar para un contador

    const valorIni = 0;

  

    // valor inicial para una persona

    const personIni = {

        name: 'Miguel',

        email: 'hoodloom07@outlook.es'

    }
}
````

Deseamos que los valores iniciales formen parte del _estado del componente_  para dar uso de visualizar y modificar.

Tenmos la siguinete estructura:

>  const [NombreVariable, funcionParaCambiar] =  useState(valorInicial)

````jsx
    const [contador, setContador] = useState(valorIni);

    const [persona, setPersona] = useState(personIni);
````

> Tenemos el _Nombre de la variable_ y la funcion _setVariable_ que esta insertara la modificación que nosotros indiquemos posteriormente, usamos el `useState(valorInicial)` para insertar al estado nuestras variables iniciales.

````jsx
function incrementaContador(){

        setContador(contador + 1)
    }


    function actualizarPersona(){

        setPersona(
            {
                name: 'Jose',
                email: 'mikeanva74@gmail.com'
            }
        )
    }
````
En este apartado ya insertamos nuestras variables modificadas y insertadas en el estado del  componente.

---
Posteriro a esto, dentro de nuestro `app.js` es necesario importar nuestor componente desde la localidad correcta y usar el componente `Ejem1.jsx`
![app.js](https://raw.githubusercontent.com/Mike-std-cpu/OB-ReactJS/main/Information/img/US-1.jpg)

Ejecutamos nuestra terminal `npm start`

![npmStart](https://raw.githubusercontent.com/Mike-std-cpu/OB-ReactJS/main/Information/img/npm-start.gif)

Y verificaremos nuestros _estados_.

![testState](https://raw.githubusercontent.com/Mike-std-cpu/OB-ReactJS/main/Information/img/useState.gif)

---

## UseRef.

Otro _hook_ muy usado, es el famoso `useRef()` donde nos ayuda a tener controlado el uso de los estdos de los componentes.

> `useRef` devuelve un objeto _ref_ mutable cuya propiedad `.current` se inicializa con el argumento pasado (`initialValue`). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

_Fuentes:_  [beta.react](https://beta.reactjs.org/apis/react/useRef) [React.org](https://es.reactjs.org/docs/hooks-reference.html#useref)

En palabras más faciles, `useRef()` ya que este valor se mantendra referenciado en el _ciclo de vida_ del DOM del sitio. En el ejemplo de este repositorio, se tiene lo siguiente:

````jsx
const miRef = useRef();
````

````html
        <h5 ref={miRef}>
            Ejemplo de elemento referenciado.
        </h5>
````

Dentro del ciclo de vida del DOM del sitio, cada que haya un cambio de estado se hara referencia a este etiqueta `h5` demostrando que cada uno de los cambios realizados, se pueden prevalecerer.

> Más adelante se complementara con el uso del hook `useEffect()`.👨‍💻

---
## UseEffect.

El hook, `useEffect()` dentro de nuestro código ejecutara siempre un _snippet_. Siempre que haya un cambio en el esatdo en algun componente, se ejecutara.

> Acepta una función que contiene código imperativo, posiblemente código efectivo.
> Las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no están permitidos dentro del cuerpo principal de un componente de función (denominado como _render phase_ de React). Si lo hace, dará lugar a errores confusos e inconsistencias en la interfaz de usuario.
> En su lugar, use `useEffect`. La función pasada a `useEffect` se ejecutará después de que el renderizado es confirmado en la pantalla. Piense en los efectos como una escotilla de escape de React del mundo puramente funcional al mundo imperativo.Por defecto, los efectos se ejecutan después de cada renderizado completado, pero puede elegir ejecutarlo solo cuando ciertos valores han cambiado.

_Fuentes::_ [React.org](https://es.reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect)

Dentro de nuestro ejemplo de este repositorio, tenemos declarado o siguiente:

````jsx
  useEffect(() => {

        console.log("Firts: Cambio en el estado del componente")
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef)

    })
````

Dando enfasis al `miRef` cada que haya un cambio dentro del DOM, este ejecutar los `consolee.log()` correspondientes y dando de referenia nuestro hook, ref.

---

🪄 Thanks for watching by [@Mike Andrade](https://github.com/Mike-std-cpu)<img align="right" src="https://media2.giphy.com/media/uL23EgTN7oEweMVy7R/200w.webp?cid=ecf05e47ev3qz7stswwx3ottvkvinyaw9bq36k6jao82l1ts&rid=200w.webp&ct=s" width="30">