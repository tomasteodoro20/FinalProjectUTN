import {React, useState, useEffect} from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';
import CardsList from  '../../components/cards/CardsList'
import { latestGames} from "../../constants";
import axios from 'axios';

const getData = axios.create({
    baseURL: "http://localhost:5000/login" 
  });

function MyProfile () {

    const [gameList, setGameList] = useState([]);
    const [values, setValues] = useState({
        "username":"",
        "firstname":"",
        "lastname":"",
        "email":"",    
    });

    useEffect(() => {
        getData.get(`http://localhost:5000/login`, values).then((values) => {
           setValues(values.data);
        });
     }, [setValues]);
 

    return (
    <>
    <div className='flex-style'>
    <h2 className='title-style'>Mi Perfil</h2>
    <button className='delete-profile-btn'>Eliminar cuenta</button>
    </div>
    <Divider/>
    <Row>
        <Col>
            <Image src='logo.png' roundedCircle></Image>
        </Col>
        <Col className='text-style'>
            <p>Usuario: {values.username}.</p>
            <p>Nombre: {values.firstname}.</p> 
            <p>Apellido: {values.lastname}.</p>
            <p>E-mail: {values.email}.</p>
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