import React from "react";
import { Form, Button } from 'react-bootstrap';
import './register-form.css';

function RegisterForm () {
    return (
    <Form className="register-form">
    <Form.Group controlId="formBasicUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="user" placeholder="Usuario" />
        <Form.Text>
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Nombre" />
        <Form.Text>
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="name" placeholder="Apellido" />
        <Form.Text>
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicDate">
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control type="date" placeholder="Fecha" />
        <Form.Text>
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text>
        </Form.Text>
    </Form.Group>

    <Button className="custom-btn" type="submit">
        Crear usuario
    </Button>
    </Form>
    )
}

export default RegisterForm;