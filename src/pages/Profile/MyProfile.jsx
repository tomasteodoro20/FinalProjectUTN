import {React, useState, useEffect, useContext} from 'react';
import {Col, Row} from 'react-bootstrap';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';
import CardsList from  '../../components/cards/CardsList'
import { latestGames} from "../../constants";
import ProfileGif from '../../components/my-profile/profile-gif';
import ProfileData from '../../components/my-profile/profile-data';

function MyProfile () {

    const [gameList, setGameList] = useState([]);
    
    return (
    <>
    <div className='flex-style'>
    <h2 className='title-style'>Mi Perfil</h2>
    <button className='delete-profile-btn'>Eliminar cuenta</button>
    </div>
    <Divider/>
    <Row>
        <Col>
            <ProfileGif/>
        </Col>
        <Col>
            <ProfileData/>
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