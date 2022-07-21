import {React, useState, useEffect, useContext} from 'react';
import {Col, Row} from 'react-bootstrap';
import Divider from '../../components/divider/Divider';
import './profile.css'
import WishlistButton from '../../components/wishlist/WishlistButton';
import CardsList from  '../../components/cards/CardsList'
import { latestGames} from "../../constants";
import ProfileGif from '../../components/my-profile/profile-gif';
import ProfileData from '../../components/my-profile/profile-data';
import DeleteAccountBtn from '../../components/my-profile/delete-account-btn';

function MyProfile () {

    const [gameList, setGameList] = useState([]);
    
    return (
    <>
    <Row>
        <Col className='flex-style' sm={8}>
            <h2 className='title-style'>Mi Perfil</h2>
        </Col>
        <Col className='d-flex align-items-center' sm={4}>
            <DeleteAccountBtn/>
        </Col>
    </Row>
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