import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { database } from "../../db-config/db";
import { useState } from "react";
import "./register-form.css";

const RegisterForm = () => {
    const {values, setValues} = useState({
        "username":"",
        "password":"",
        "repeatpassword":"",
        "firstname":"",
        "lastname":"",
        "email":"",   
})

const validationSchema = yup.object({
        username: yup.string()
            .min(3, "No puede tener menos de 3 caracteres ")
            .max(15, "No puede tener más de 15 caracteres")
            .required("Introduzca un nombre de usuario por favor"),
        password: yup.string()
            .min(5, "No puede tener menos de 5 caracteres")
            .required("Introduzca una contraseña por favor"),
        repeatpassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales'),
        firstname: yup.string()
            .min(2, "No puede contener menos de 2 caracteres")
            .max(15, "No puede tener mas de 15 caracteres")
            .matches(/^[aA-zZ\s]+$/, "No se permiten números ni caracteres especiales")
            .required("Introduzca su primer nombre por favor"),
        lastname: yup.string()
            .min(2, "No puede tener menos de 2 caracteres")
            .matches(/^[aA-zZ\s]+$/, "No se permiten números ni caracteres especiales")
            .required("Introduzca su apellido por favor"),
        email: yup.string().email("Ingrese un email válido")
            .required("Introduzca un mail por favor"),
    })
    
const url = database;

const onChange = async (e) => {    
    await setValues(values[e.target.name] = e.target.value)
}

const onSubmit = (values, {setValues}) => {        
    setValues(values);    
    axios.post(url, values)
    // alert(JSON.stringify(values));
};

// const onSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//         values.setValues = handlerSubmit();
//         setSubmitting(false);
//     }, 500);
// }

// const handlerSubmit=(e) => {
//     const url = database;
//     e.preventDefault();
//     axios.post(url, values.form)
//     .then( response =>{
//         console.log(response);
//     })
// }
    
const formik = useFormik({
    initialValues: values,
    validateOnBlur: true,
    onChange,
    onSubmit,
    validationSchema: validationSchema})
    
    // console.log("error:", formik.errors)
    
    // const hanlderOnChange = async e =>{
    //     await setState({
    //         form:{
    //             ...state.form,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }
    
    return (
        <Formik 
        // initialValues={{
        //     username: "",
        //     password: "",
        //     repeatpassword: "",
        //     firstname: "",
        //     lastname: "",
        //     email: "",    }}
        //     validationSchema={yup.object({
        //         username: yup.string()
        //             .min(3, "No puede tener menos de 3 caracteres ")
        //             .max(15, "No puede tener más de 15 caracteres")
        //             .required("Introduzca un nombre de usuario por favor"),
        //         password: yup.string()
        //             .min(5, "No puede tener menos de 5 caracteres")
        //             .required("Introduzca una contraseña por favor"),
        //         repeatpassword: yup.string()
        //             .oneOf([yup.ref('password'), null], 'Las contraseñas deben ser iguales'),
        //         firstname: yup.string()
        //             .min(2, "No puede contener menos de 2 caracteres")
        //             .max(15, "No puede tener mas de 15 caracteres")
        //             .matches(/^[aA-zZ\s]+$/, "No se permiten números ni caracteres especiales")
        //             .required("Introduzca su primer nombre por favor"),
        //         lastname: yup.string()
        //             .min(2, "No puede tener menos de 2 caracteres")
        //             .matches(/^[aA-zZ\s]+$/, "No se permiten números ni caracteres especiales")
        //             .required("Introduzca su apellido por favor"),
        //         email: yup.string().email("Ingrese un email válido")
        //             .required("Introduzca un mail por favor"),
        //     })}
        //     onSubmit={(values, { setSubmitting }) => {
        //         setTimeout(() => {
        //             state.setState = handlerSubmit();
        //             setSubmitting(false);
        //         }, 500);
        //     }}        
        >
            <Form className="register-form" onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Nombre de usuario</label>
            <Field name="username" type="text"  
            value={formik.values.username || ""} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.username && formik.errors.username ? 
            <span className="error-color">{formik.errors.username}</span> : ""}
                        

            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password"
            value={formik.values.password || ""} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? 
            <span className="error-color">{formik.errors.password}</span> : ""}
            
            <label htmlFor="repeatpassword">Confirmar Contraseña</label>
            <Field name="repeatpassword" type="password"
            value={formik.values.repeatpassword || ""} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {formik.touched.repeatpassword && formik.errors.repeatpassword ? 
            <span className="error-color">{formik.errors.repeatpassword}</span> : ""}
            
            <label htmlFor="firstname">Nombre</label>
            <Field name="firstname" type="text"
            value={formik.values.firstname || ""} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname ? 
            <span className="error-color">{formik.errors.firstname}</span> : ""}
            
            <label htmlFor="lastname">Apellido</label>
            <Field name="lastname" type="text"
            value={formik.values.lastname || ""} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? 
            <span className="error-color">{formik.errors.lastname}</span> : ""}
           
            <label htmlFor="email">Email</label>
            <Field name="email" type="email"           
            value={formik.values.email || ""} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? 
            <span className="error-color">{formik.errors.email}</span> : ""}

            <button className="custom-btn" type="submit" >Registrarme</button>
            </Form>

        </Formik>
    )
}

export default RegisterForm;