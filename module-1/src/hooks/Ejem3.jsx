/**
 * Ejmplo de uso de otros hooks 3:
 * useState()
 * useContext(): Poder utilizar el contexto y pasarlo a otros componentes.
 */

import React , { useState, useContext } from 'react'

/**
 * 
 * @returns  Componente 1
 * Dispone de un contexto que contendra un valor que recibe desde el padre.
 */

    //? Se inicializa un estado vacio que se llenara con los datos del contexto que le mandemos  del padre.
    const miContexto = React.createContext(null);

export const Componente1 = () => {

    const state = useContext(miContexto);

  return (
    <div>

        <h1>
            El token es: { state.token }
        </h1>

        {/* Componente 2 */}
        <Componente2></Componente2>

    </div>
  );
}

export const Componente2 = () => {

    const state = useContext(miContexto);

    return (
      <div>
        <h2>
            La sesion es : { state.session }
        </h2>
      </div>
    );
  }

  export const  MiComponenteContexto = () => {

    const estadoInicial = {
        token: '12345589',
        session: 1
    }

    // Estado del componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizasSesion(){
        setSessionData(
            {
                token: 'JET159863479',
                session: sessionData.sesion + 1
            }
        )
    }
    return (
      <miContexto.provider value={sessionData}>
        {/* Todo lo que este aqui dentro pude leer los datos de session data, ademas de actualziarserse
        Si se actualzia los copnentes de este aparte tambien se actualzian */}
        <Componente1></Componente1>
        <button onClick={actualizasSesion}></button>
      </miContexto.provider>
    );
  }