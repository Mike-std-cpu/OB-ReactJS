//* Este es un componente que tiene una propiedad task con el contenido que va a pintar los diferentes contenidos HTML


import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({task}) => {
  return (
    <div>
        <h2>
           Nombre: { task.name }
        </h2>
        <h3>
            Descripción: { task.description }
        </h3>
        <h4>
            Level: { task.level }
        </h4>
        <h5>
            This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
        </h5>
    </div>
  )
}


//* Este propTypes contendra las diferentes instancias de las propiedades (props)
TaskComponent.propTypes = {
    taks: PropTypes.instanceOf(Task)// defininimos que es una instancia de la clase task.js
}

export default TaskComponent
