//* Este file Basicamente tiene una clase de tipo tarea con sus caracteristias que se le mandara un componente inferior llamado task.jsx

import { LEVELS } from "./levels.enum"; // importamos la clase LEVELS de levels.enum.js

export class Task {
    name = '';
    description = '';
    completes = false;
    level = LEVELS.NORMAL//*diferentes niveles de importancia

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}