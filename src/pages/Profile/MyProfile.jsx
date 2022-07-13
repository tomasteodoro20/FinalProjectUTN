import {React, useState} from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';
import CardsList from  '../../components/cards/CardsList'
import { latestGames} from "../../constants";

function MyProfile () {

    const [gameList, setGameList] = useState([]);

    return (
    <>
    <div className='flex-style'>
    <h2 className='title-style'>Mi Perfil</h2>
    <button className='delete-profile-btn'>Eliminar cuenta</button>
    </div>
    <Divider/>d
    <Row>
        <Col>
            <Image src='logo.png' roundedCircle></Image>
        </Col>
        <Col className='text-style'>
            <p>Usuario: </p>
            <p>Nombre: </p> 
            <p>Apellido: </p>
            <p>E-mail: </p>
        </Col>
        <Col className='d-flex align-items-center'>
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
    </>
    )
}

export default MyProfile;