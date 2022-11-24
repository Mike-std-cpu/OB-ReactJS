//* Diferencia entre clase y  Componentes Funcion, es que a diferencia de los coponentes clase que tienen sus contructores y propiedad
//* En cualquier situacion puede devolver un componente html

import React from 'react'
import PropTypes from 'prop-types'

function Greetingf(props) {
  return (
    <div>
        <p>
            ¡Hola {props.name} desde componente Funcional!
        </p>
        {/* <p> Tu edad es {this.state.age}</p> */}
        {/* <div>
            <button onClick={this.birtday}>
                Cumplir años
            </button>
        </div> */}
    </div>
  )
}

Greetingf.ropTypes = {
    name: PropTypes.string
}

export default Greetingf
