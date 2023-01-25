import React, { useState, useEffect } from 'react'
import { levels } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {

  const defaultTask1 = new Task("Example1", "Default description1", false, levels.NORMAL)
  const defaultTask2 = new Task("Example2", "Default description2", true, levels.URGENT)
  const defaultTask3 = new Task("Example3", "Default description", false, levels.BLOCKING)

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Modificación de tareas");
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  
    return () => {
      console.log("Cuando se actualiza");
    }
  }, [tasks])
  

  function completeTask(task){
    console.log('Complete this Task: ', task)
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks]
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }

  function deleteTask(task){
    console.log('Complete this Task: ', task)
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task){
    console.log('Complete this Task: ', task)
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks);
  }

  const Table = () => {
    return(
      <table>
        <thead>
          <tr>
            <th scope='col'>Título</th>
            <th scope='col'>Descripción</th>
            <th scope='col'>Prioridad</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
          return (
            <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}>
            </TaskComponent>
          )
        }
        )}   
        </tbody>
      </table>
    )
  }

  let tasksTable
  if(tasks.length > 0){
    tasksTable = <Table></Table>
  }else tasksTable = <div><h3>No hay tareas</h3><h4>Crea una tarea</h4></div>

  const loadingStyle = {
    color: 'gray',
    fontSize: '30px',
    fontWeight: 'bold'  
}

  return (
    <div>
      <div className='task-title col-12'>
      <div className='card'>
        <div className='card-header p-3'>
          <h5>Tus Tareas: </h5>
        </div>
        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
           {loading ? <p style={loadingStyle}>Loading tasks</p>:tasksTable}
        </div>
        <TaskForm add={addTask} length={tasks.length}></TaskForm>
      </div>
      </div>
      
    </div>
  )
}


export default TaskListComponent

