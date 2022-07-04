import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import GameData from '../../components/game-data/GameData';

function Game ({slug}) {
    return (
        <>
        <NavBar/>
        <GameData slug={slug}/>
        <Footer/>
        </>
    )
}

export default Game;