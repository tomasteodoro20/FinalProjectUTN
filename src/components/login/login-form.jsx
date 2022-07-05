import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { database } from "../../db-config/db";

class Login extends React.Component{

    state={
        form:{
            "username":"",
            "password":"",
        },
        error:false,
        errorMsg:"",
    }

    handlerSubmit(e){
        e.preventDefault();
    }

    hanlderOnChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handlerButton=()=>{
        const url = database;
        axios.get(url,this.state.form)
        .then( response =>{
            console.log(response);
        })
    }

    render(){
        return (
            <React.Fragment>
                <Form className="register-form" onSubmit={this.preventDefault}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="username" placeholder="Usuario" name="username" onChange={this.hanlderOnChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.hanlderOnChange}/>
                </Form.Group>
                <Button className="custom-btn" type="submit" onClick={this.handlerButton}>
                    Iniciar Sesión
                </Button>

                </Form>
            </React.Fragment>
        )
    };
}

export default Login;