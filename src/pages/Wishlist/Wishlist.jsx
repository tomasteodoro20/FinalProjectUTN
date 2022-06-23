import React from 'react';
import { Card } from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import './wishlist.css';

function Wishlist () {

    return (
        <>
        <NavBar/>
        <h2 className='text-style'>Lista de deseados</h2>
        <Divider/>
        <Card className="bg-dark text-white">
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Game</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur.
            </Card.Text>
            <Card.Text>Rating</Card.Text>
        </Card.ImgOverlay>
        </Card>
        <NavFooter/>
        </>
    )
}

export default Wishlist;