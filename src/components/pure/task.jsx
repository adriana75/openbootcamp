import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { levels } from '../../models/levels.enum'

const TaskComponent = ({task, complete, remove}) => {
  useEffect(() => {
    console.log("Tarea creada");
  
    return () => {
      console.log( `Tarea creada ${task.name}`);
    }
  }, [task])

  function taskLevelBadge(){
    switch (task.level) {
      case levels.NORMAL:
        return(<h6 className='mb-0'>
          <span className='badge bg-primary'>
            {task.level}
          </span>
        </h6>)
      case levels.URGENT:
        return(<h6 className='mb-0'>
          <span className='badge bg-warning'>
            {task.level}
          </span>
        </h6>)           
      case levels.BLOCKING:
        return(<h6 className='mb-0'>
          <span className='badge bg-danger'>
            {task.level}
          </span>
        </h6>)    
      default:
        break;
    }
  }

  function taskIconCompleted(){
    if(task.completed){
      return (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color: 'green', fontWeight: 'bold'}}></i>)
    }else return (<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color: 'gray', fontWeight: 'bold'}}></i>)
  }

  const taskCompleted = {
    fontWeight: "bold",
    color: 'gray',
    textDecoration: 'line-through'
  }

  const taskPending = {    
    fontWeight: "bold",
    color: 'tomato',
  }


 
  return (

    <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
        {taskIconCompleted()}
        <i className='bi-trash onClick={complete(task)}' style={{color: 'tomato'}} onClick={()=>remove(task)}></i>
      </td>
    </tr>

  );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired 
};

export default TaskComponent

