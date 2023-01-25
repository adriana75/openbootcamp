import React, {useRef} from "react";
import PropTypes from 'prop-types'
import {levels} from '../../../models/levels.enum'
import { Task } from "../../../models/task.class";

const TaskForm = ({add, length}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(levels.NORMAL)

    function addTask(e){
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }


    return(
        <form onSubmit={addTask} className= 'd-flex justify-content-center align-items-center mb-4'>
            <div className="form-putline flex-fill">
                <input ref={nameRef} id='inputName' type='text' className="form-control form-control-lg" required autoFocus placeholder="Task Name"></input>
                <input ref={descriptionRef} id='inputDescription' type='text'className="form-control form-control-lg" required autoFocus placeholder="Task Description"></input>
                <select ref={levelRef} defaultValue={levels.NORMAL} id='selectLevel' className="form-control form-control-lg">
                    <option value={levels.NORMAL}>
                        Normal
                    </option>
                    <option value={levels.URGENT}>
                        Urgente
                    </option>
                    <option value={levels.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className="btn btn-success btn-lg ms-2">{length >0 ? 'Add':'Create'}</button>
            </div> 
        </form>
    )
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;