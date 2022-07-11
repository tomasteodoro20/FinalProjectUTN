import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { database } from "../../db-config/db";
import { useState } from "react";
import "./register-form.css";

const RegisterValidations = () => {
    const {state, setState} = useState({       
        form:{
            "username":"",
            "password":"",
            "repeatpassword":"",
            "firstname":"",
            "lastname":"",
            "email":"",
    },
})
 
    const handlerSubmit=(e) => {
        const url = database;
        e.preventDefault();
        axios.post(url,state.form)
        .then( response =>{
            console.log(response);
        })
    }
    
    const hanlderOnChange = async e =>{
        await setState({
            form:{
                ...state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    return (
        <Formik 
        initialValues={{
            username: "",
            password: "",
            repeatpassword: "",
            firstname: "",
            lastname: "",
            email: "",    }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .min(3, "No puede tener menos de 3 caracteres ")
                    .max(15, "No puede tener más de 15 caracteres")
                    .required("Introduzca un nombre de usuario por favor"),
                password: Yup.string()
                    .min(5, "No puede tener menos de 5 caracteres")
                    .required("Introduzca una contraseña por favor"),
                repeatpassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben ser iguales'),
                firstname: Yup.string()
                    .min(2, "No puede contener menos de 2 caracteres")
                    .max(15, "No puede tener mas de 15 caracteres")
                    .matches(/^[aA-zZ\s]+$/, "No se permiten números ni caracteres especiales")
                    .required("Introduzca su primer nombre por favor"),
                lastname: Yup.string()
                    .min(2, "No puede tener menos de 2 caracteres")
                    .matches(/^[aA-zZ\s]+$/, "No se permiten números ni caracteres especiales")
                    .required("Introduzca su apellido por favor"),
                email: Yup.string().email("Ingrese un email válido")
                    .required("Introduzca un mail por favor"),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    state.setState = handlerSubmit();
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form className="register-form">
            <label htmlFor="username">Nombre de usuario</label>
            <Field name="username" type="text"/>
            <ErrorMessage name="username">
            { msg => <div className='error-color'>{msg}</div> }
            </ErrorMessage>            

            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password"/>
            <ErrorMessage name="password">
            { msg => <div className='error-color'>{msg}</div> }
            </ErrorMessage>            
            
            <label htmlFor="repeatpassword">Confirmar Contraseña</label>
            <Field name="repeatpassword" type="password"/>
            <ErrorMessage name="repeatpassword">
            { msg => <div className='error-color'>{msg}</div> }
            </ErrorMessage>            
            
            <label htmlFor="firstname">Nombre</label>
            <Field name="firstname" type="text"/>
            <ErrorMessage name="firstname">
            { msg => <div className='error-color'>{msg}</div> }
            </ErrorMessage>            
            
            <label htmlFor="lastname">Apellido</label>
            <Field name="lastname" type="text"/>
            <ErrorMessage name="lastname">
            { msg => <div className='error-color'>{msg}</div> }
            </ErrorMessage>            
           
            <label htmlFor="email">Email</label>
            <Field name="email" type="email"/>
            <ErrorMessage name="email">
            { msg => <div className='error-color'>{msg}</div> }
            </ErrorMessage>            

            <button className="custom-btn" type="submit" >Registrarme</button>
            </Form>

        </Formik>
    )
}

export default RegisterValidations;