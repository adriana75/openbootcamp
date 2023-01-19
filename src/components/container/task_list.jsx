import React, { useState, useEffect } from 'react'
import { levels } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'

const TaskListComponent = () => {

  const defaultTask = new Task("Example", "Default description", false, levels.NORMAL)
  const [tasks, setTask] = useState(defaultTask)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("Modificación de tareas");
    setLoading(false)
    return () => {
      console.log("Cuando se actualiza");
    }
  }, [tasks])
  

  const changeCompleted = (id) => {
    console.log("Cambiar estado de una tarea");
  }

  return (
    <div>
      <div className='task-title'>
        Tus Tareas: 
      </div>
      <TaskComponent task = {defaultTask}></TaskComponent>
    </div>
  )
}


export default TaskListComponent

