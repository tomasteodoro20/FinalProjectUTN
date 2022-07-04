import React from 'react';
import {Container} from 'react-bootstrap';
import RegisterForm from '../../components/register/RegisterForm';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
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
        <Footer/>
        </>
    )
}

export default Register;