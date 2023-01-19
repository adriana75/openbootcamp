import React from 'react'
import { levels } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

  const defaultTask = new Task("Example", "Default description", false, levels.NORMAL)

  const changeState = (id) => {
    console.log("Cambiar estado de una tarea");
  }

  return (
    <div>
      <div>
        Tus Tareas: 
      </div>
      <TaskComponent task = {defaultTask}></TaskComponent>
    </div>
  )
}


export default TaskListComponent

