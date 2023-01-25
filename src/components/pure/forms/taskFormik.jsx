import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import useList from '../../../hooks/useList';

function TaskFormik() {

    let task = new Task();

    const initialValues = {
        name: "",
        description: "",
        completed: false,
        level: levels.NORMAL,
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(2, 'Name too short')
                .max(15, 'Name too long')
                .required('Name required'),
            description: Yup.string()
                .min(2, 'Description too short')
                .max(100, 'Description too long')
                .required('Description is required'),
            completed: Yup.boolean(),
            level: Yup.string()
                .oneOf([levels.NORMAL, levels.URGENT, levels.URGENT], 'Select level')
                .required('Level is required'),
        }
    )
    const submit = (values) => {
        alert('Register task')
    }

    const tasks = useList([initialValues]);


  return (
    <div>
      <h4>Add Task</h4>
      <Formik
      initialValues={initialValues}
      validationSchema = {registerSchema}
      onSubmit={(values, actions) => {
          setTimeout(() => {
            tasks.push(values);
            actions.resetForm({});
            actions.setSubmitting(false);
          }, 500);
            alert(JSON.stringify(values, null, 2))
       }}
       >

        {({values, touched, errors, isSubmitting, handleChange, handleBlur})=>(
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="name" type='text'/>
                {
                    errors.name &&  touched.name && (
                        <ErrorMessage name='name' component='div'></ErrorMessage>
                    )
                }
                <label htmlFor="description">Description</label>
                <Field id="description" name="description" placeholder="description" type='text'/>
                {
                    errors.description &&  touched.description && (
                        <ErrorMessage name='description' component='div'></ErrorMessage>
                    )
                }
                <Field as="select" name="level">
                    <option value={levels.NORMAL}>Normal</option>
                    <option value={levels.URGENT}>Urgent</option>
                    <option value={levels.BLOCKING}>Blocking</option>
                </Field>
                
                <button type="submit">Add Task</button>
                {isSubmitting ? (<p>Send your task</p>):null}
            </Form>
        )}    

      </Formik>

      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        tasks.value.map((task, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" onClick={() => tasks.remove(index)} checked={false} />
            <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
            <p>{task.description}</p>
          </li>
        ))
      )}

    </div>
  )
}

export default TaskFormik
