import React from 'react';
import {Container} from 'react-bootstrap';
import RegisterForm from '../../components/register/RegisterForm';
import NavBar from '../../components/navbar/NavBar';
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import './register.css'

function Register () {
    return (
        <>
        <NavBar/>
        <Container>
        <h2 className='title'>Registrate</h2>
        <Divider/>
        <RegisterForm/>
        </Container>
        <NavFooter/>
        </>
    )
}

export default Register;