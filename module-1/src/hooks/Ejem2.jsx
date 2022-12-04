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

    function incrementarDos(){
        setContador2(contador2 + 1)
    }

    //! useEffect para controlar vistas
    //? Caso 1: Ejecutar siempre un snippet de código. (Cada que haya un cambio estado en el componente se ejecuta el useEffect())
    useEffect(() => {
        console.log("Firts: Cambio en el estado del componente")
        console.log("Mostrando referencia a elemento del DOM:");
        console.log(miRef)
    })
    

  
    return (
    <div>Ejem2</div>
  )
}
