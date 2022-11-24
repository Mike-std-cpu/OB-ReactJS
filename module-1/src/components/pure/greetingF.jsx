//* Diferencia entre clase y  Componentes Funcion, es que a diferencia de los coponentes clase que tienen sus contructores y propiedad
//* En cualquier situacion puede devolver un componente html

import PropTypes from 'prop-types'
import { useState } from 'react'

function Greetingf(props) {
    //! Breve introduccion a useState
    //*const ["VARIABLE", "METODO PARA ACTUALIZAR"] = useState("VALOR INICNIAL")
    const [age, setage] = useState(29)
    const birtday = () =>{
        setage(age + 1)
    }
  return (
    <div>
        <p>
            ¡Hola {props.name} desde componente Funcional!
        </p>
         <p> Tu edad es { age }</p>
        <div>
            <button onClick={birtday}>
                Cumplir años
            </button>
        </div>
    </div>
  )
}

Greetingf.ropTypes = {
    name: PropTypes.string
}

export default Greetingf
