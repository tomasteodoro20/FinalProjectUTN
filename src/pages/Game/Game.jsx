import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import GameData from '../../components/game-data/GameData';

function Game ({slug}) {
    return (
        <>
        <GameData slug={slug}/>
        </>
    )
}

export default Game;