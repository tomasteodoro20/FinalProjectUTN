import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import WishlistList from './WishlistList';
import { Container } from 'react-bootstrap';
import './wishlist.css';

function Wishlist () {

    return (
        <>
        <NavBar/>
        <h2 className='title-style'>Lista de deseados ❤</h2>
        <Divider/>
        <Container>
            <WishlistList/>
        </Container>
        <NavFooter/>
        </>
    )
}

export default Wishlist;