import React from 'react';
import {LEVELS} from '../../models/levels.enum.js'
import {Task} from '../../models/task.class.js'
import TaskComponent from '../pure/task'


const TaskListComponent = () => {

    const defaultTask = new Task('Mi primera tarea', 'Default Description', true, LEVELS.NORMAL)
    /*changeSate = (id){
        console.log('TODO: Cambiar estado de una tarea');
    }*/
    return (
        <div>
        <div>
            Your Tasks:
        </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;




