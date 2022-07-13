import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useState } from "react";
import "./login-form.css";

const LoginForm = () => {
    const [success, setSuccess] = useState(null);
    const [error, setError ] = useState(null);
    const {values, setValues} = useState({
        "username":"",
        "password":"",
})

const validationSchema = yup.object({
        email: yup.string().email("Ingrese un email válido")
        .required("Introduzca un mail por favor"),

        password: yup.string()
            .min(5, "No puede tener menos de 5 caracteres")
            .required("Introduzca una contraseña por favor"),
    })
    

const onChange = async (e) => {    
    await setValues(values[e.target.name] = e.target.value)
}

const onSubmit = async (values) => {
    const {confirmPassword, ...data} = values;

    const response = await axios.get("http://localhost:5000/login", data).catch((err) => {
      if(err && err.response)
        setError(err.response.data.message)
        setSuccess(null);
    })
    
    if (response === response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
    
  };
    
const formik = useFormik({
    initialValues: values,
    validateOnBlur: true,
    onChange,
    onSubmit,
    validationSchema: validationSchema})
        
    return (
        <Formik>
        <Form  className="login-form" onSubmit={formik.handleSubmit}>
        {!error && <span style={{color:"green"}}>{success ? success : ""}</span>}
        {!success && <span style={{color:"red"}}>{error ? error : ""}</span>}
            <label htmlFor="email">Email</label>
            <Field name="email" type="email"  
            value={formik.values.email || ""} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? 
            <span className="error-color">{formik.errors.email}</span> : ""}
                        

            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password"
            value={formik.values.password || ""} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? 
            <span className="error-color">{formik.errors.password}</span> : ""}
            
            <button className="custom-btn" type="submit" >Iniciar Sesión</button>
            </Form>

        </Formik>
    )
}

export default LoginForm;