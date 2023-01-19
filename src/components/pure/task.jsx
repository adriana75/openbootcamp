import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'

const TaskComponent = ({task}) => {
  useEffect(() => {
    console.log("Tarea creada");
  
    return () => {
      console.log( `Tarea creada ${task.name}`);
    }
  }, [task])
 
  return (
    <div>
      <h2 className='task-name'>
        Nombre: { task.name }
      </h2>
      <h3>
        Descripción: { task.description }
      </h3>
      <h4>
        Nivel: { task.level }
      </h4>
      <h5>
        Esta tarea está: { task.completed ? "Completed" : "Pending" }
      </h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent

