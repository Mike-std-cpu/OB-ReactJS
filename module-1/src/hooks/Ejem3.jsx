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

const Componente1 = () => {

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

 const Componente2 = () => {

    const state = useContext(miContexto);

    return (
      <div>
        <h2>
            La sesion es : { state.session }
        </h2>
      </div>
    );
  }

  export default function MiComponenteContexto() {

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
                session: sessionData.session + 1
            }
        );
    }
    
    return (
      <miContexto.Provider value={sessionData}>
        {/* Todo lo que este aqui dentro pude leer los datos de session data, ademas de actualziarserse
        Si se actualzia los copnentes de este aparte tambien se actualzian */}
        <h1>Ejemplo de useState & useContext</h1>
        <Componente1></Componente1>
        <button onClick={actualizasSesion}>Actualizar Sesion</button>
      </miContexto.Provider>

    )
  }
