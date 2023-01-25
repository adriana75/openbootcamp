import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {User} from '../../../models/user.class'
import { roles } from '../../../models/roles.enum';

function RegisterFormik() {

    let user = new User();
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: roles.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([roles.USER, roles.ADMIN], 'Select role')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Passwords must match!'
                    )
                }).required('You must confirm the password')   
        }
    )
    const submit = (values) => {
        alert('Register user')
    }

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
      initialValues={initialValues}
      validationSchema = {registerSchema}
      onSubmit={async(values)=>{
            await new Promise((r)=>setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
       }}
       >

        {({values, touched, errors, isSubmitting, handleChange, handleBlur})=>(
            <Form>
                <label htmlFor="username">Username</label>
                <Field id="username" name="username" placeholder="username" type='text'/>
                {
                    errors.username &&  touched.username && (
                        <ErrorMessage name='username' component='div'></ErrorMessage>
                    )
                }
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="example@mail.com" type='email'/>
                {
                    errors.email &&  touched.email && (
                        <ErrorMessage name='email' component='div'></ErrorMessage>
                    )
                }
                <label htmlFor="password">Contraseña</label>
                <Field id="password" name="password" placeholder="password" type='password'/>
                {
                    errors.password &&  touched.password && (
                        <ErrorMessage name='password' component='div'></ErrorMessage>
                    )
                }
                <label htmlFor="confirm">Confirm</label>
                <Field id="confirm" name="confirm" placeholder="Confirm Password" type='password'/>
                {
                    errors.confirm &&  touched.confirm && (
                        <ErrorMessage name='confirm' component='div'></ErrorMessage>
                    )
                }
                <button type="submit">Register Account</button>
                {isSubmitting ? (<p>Send ypur credentials</p>):null}
            </Form>
        )}    

      </Formik>
    </div>
  )
}

export default RegisterFormik
