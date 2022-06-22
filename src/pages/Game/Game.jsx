import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import GameData from '../../components/game-data/GameData';

function Game () {
    return (
        <>
        <NavBar/>
        <GameData />
        <NavFooter/>
        </>
    )
}

export default Game;