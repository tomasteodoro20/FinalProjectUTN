import React from "react";
import { Form, Button } from 'react-bootstrap';
import './register-form.css';
import axios from 'axios';
import { database } from "../../db-config/db";

class Register extends React.Component{

    
    state={
        form:{
            "username":"",
            "password":"",
            "repeatpassword":"",
            "firstname":"",
            "lastname":"",
            "email":"",
        },
        error:false,
        errorMsg:"",
    }
    
    
    handlerSubmit=(e) => {
        const url = database;
        e.preventDefault();
        axios.post(url,this.state.form)
        .then( response =>{
            console.log(response);
        })
    }
    
    hanlderOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
    render(){
    return (
    <Form className="register-form" onSubmit={this.handlerSubmit}>
    <Form.Group controlId="formBasicUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="username" placeholder="Usuario" name="username" onChange={this.hanlderOnChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={this.hanlderOnChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Repetir contraseña</Form.Label>
        <Form.Control type="password" placeholder="RepeatPassword" name="repeatpassword" onChange={this.hanlderOnChange}/>
    </Form.Group>


    <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="firstname" placeholder="Nombre" name="firstname" onChange={this.hanlderOnChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="lastname" placeholder="Apellido" name="lastname" onChange={this.hanlderOnChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicDate">
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control type="date" placeholder="Fecha" name="date" onChange={this.hanlderOnChange}/>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.hanlderOnChange}/>
    </Form.Group>

    {/* <Form.Group controlId="file">
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="file" placeholder="file" name="avatar" onChange={this.hanlderOnChange}/>
    </Form.Group> */}


    <Button className="custom-btn" type="submit">
        Crear usuario
    </Button>
    </Form>
    )}
}

export default Register;