import React from 'react';
import {Button, Image, Container, Col, Row} from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';

function MyProfile () {

    return (
    <>
    <NavBar/>
    <Container>
    <h2 className='title-style'>Mi Perfil</h2>
    <Button className='delete-profile-btn'>Eliminar cuenta</Button>
    <Divider/>
    </Container>
        <Row>
        <Col>
        <Image src='logo.png' roundedCircle></Image>
        </Col>
        <Col className='text-style'>
        <p>Usuario: </p>
        <p>Nombre: </p> 
        <p>Apellido: </p>
        <p>E-mail: </p>
        <p>Fecha de nacimiento: </p>
    </Col>
    <Col>
    <WishlistButton/>
    </Col>
    </Row>
    <Divider/>
    <NavFooter/>
    </>
    )
}

export default MyProfile;