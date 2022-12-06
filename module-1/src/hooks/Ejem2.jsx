/**
 * Ejmplo de uso de otros hooks:
 * useState()
 * useRef(): Identificar elementos dentro de la vista
 * useEffect() : Controlar vistas
 */

import React, {useState, useRef, useEffect} from 'react'

export const Ejem2 = () => {

    //* contadores con estados diferentes

    const [contador, setContador] = useState(0) //Que se inicialice en 0
    const [contador2, setContador2] = useState(0)

    //! creacion de una referencia (useRef) para asociar una variable a un evento del DOM de la vista HTML
    const miRef = useRef();

    function incrementoUno(){
        setContador(contador + 1)
    }

    function incrementoDos(){
        setContador2(contador2 + 1)
    }

    //! useEffect para controlar vistas
    //? Caso 1: Ejecutar siempre un snippet de código. (Cada que haya un cambio estado en el componente se ejecuta el useEffect())
    // useEffect(() => {
    //     console.log("Firts: Cambio en el estado del componente")
    //     console.log("Mostrando referencia a elemento del DOM:");
    //     console.log(miRef)
    // })

    //? Caso 2: Ejecutar solo en algunos casos especificados. en este caso, cuando el contador 1, si es en el caso 2, NO ABRA EJECUCIÓN
    // Hora solo se estaran registrando los cambios que se hagan en el caso 1 marcado
    // useEffect(() => {
    //     console.log("Firts: Cambio en el estado del contador 1")
    //     console.log("Mostrando referencia a elemento del DOM:");
    //     console.log(miRef)
    // }, [contador])

        //? Caso 3: Ejecutar solo en algunos casos especificados. en este caso, cuando el contador 1 o contador 2

    useEffect(() => {
        console.log("Firts: Cambio en el estado del contador 1/contador 2")
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef)
    }, [contador, contador2])


    
    

  
    return (
    <div>
        <h1> Ejemplo de hooks con useState - useRef - useEffect </h1>
        <h3> Contador 1: {contador}</h3>
        <h3> Contador 2: {contador2}</h3>
        {/* Elemento referenciado */}
        <h5 ref={miRef}>
            Ejemplo de elemento referenciado.
        </h5>
            {/* botones */}
        <div>
        <button onClick={incrementoUno}>Incrementar 1</button>
        <button onClick={incrementoDos}>Incrementar 2</button>
        </div>
    </div>
  )
}
