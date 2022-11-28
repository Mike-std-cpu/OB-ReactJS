//* Este file coniente la la tarea de ejemplo para verificar que todo nos esta correindo correctamente
//* Se podria decir que seria nuestro file main, donde instanciaremos todos los componentes de niveles posteriores

import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import {Task} from '../../models/task.class'
import TaskComponent from '../pure/task';
//Este va dentro del app.js
const TaskListComponent = () => {

    const defaultTask = new Task('Example✨', 'Default Description🔥', false, LEVELS.NORMAL);

  return (
    <div>
        <div>
            Your Task:
        </div>
        {/* Aplicar un FOR/MAP para renderizar una lista */}
        <TaskComponent task={defaultTask}></TaskComponent>
        {/* Arriba se mostrara lo que se declaro en task.jsx en la clas TaskComponent */}
    </div>
  )
}



export default TaskListComponent
