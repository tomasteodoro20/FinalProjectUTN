import React from 'react';
import {Container } from 'react-bootstrap';
import NavBar from '../../components/navbar/NavBar';
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import WishlistList from './WishlistList';
import './wishlist.css';

function Wishlist () {

    return (
        <>
        <NavBar/>
        <h2 className='text-style'>Lista de deseados</h2>
        <Divider/>
        <Container className='container-style'>
            <WishlistList/>
        </Container>
        <NavFooter/>
        </>
    )
}

export default Wishlist;