/**
 * Ejemplo de uso del hook useState
 */

//* Crear un componente de tipo funcion ya cceder a sus estados privados a traves de un hook y, ademas, poder modificarlo

import React, { useState } from 'react'

export const ejem1 = () => {

    // Valor inicniar para un contador
    const valorIni = 0;

    // valor inicial para una persona
    const personIni = {
        name: 'Miguel',
        email: 'hoodloom07@outlook.es'
    }


    //* Queremos que el valor inicial y persona Inicial sea parte del estado(state) del componente,
    //* para poder asi, dar caambios y que se ve sea reflejado en el componente deseado.

    //* Estructura: const [NombreVariable, funcionParaCambiar] =  useState(valorInicial)

    const [contador, setContador] = useState(valorIni);
    const [persona, setPersona] = useState(personIni);

    /**
     * Funcion para actualizar el esatdo privado que contiene el contador
     */
    function incrementaContador(){
        // ? funcionParaCamviar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Funcion par actualizar el estado de persona en el componente.
     */
    function actualizarPersona(){
        setPersona(
            {
                name: 'Jose',
                email: 'mikeanva74@gmail.com'
            }
        )
    }

  return (
    <div>ejem1</div>
  )
}
