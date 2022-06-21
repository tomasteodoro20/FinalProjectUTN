import {React, useState} from 'react';
import {Button, Image, Container, Col, Row} from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';
import CardsList from  '../../components/cards/CardsList'
import { latestGames} from "../../constants";

function MyProfile () {

    const [gameList, setGameList] = useState([]);

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
    <CardsList

    title="Últimas novedades"

    gameList={gameList}

    setGameList={setGameList}

    url={latestGames}

    />
    <NavFooter/>
    </>
    )
}

export default MyProfile;