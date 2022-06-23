import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import GameData from '../../components/game-data/GameData';

function Game ({slug}) {
    return (
        <>
        <NavBar/>
        <GameData slug={slug}/>
        <NavFooter/>
        </>
    )
}

export default Game;