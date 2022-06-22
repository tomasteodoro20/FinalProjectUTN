import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import CardsList from "../../components/cards/CardsList";
import { fetchPlatformEpicGames } from "../../constants";

function EpicGames() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <CardsList 
    title="Juegos en Epic Games"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPlatformEpicGames}
    />
    <NavFooter/>
    </>
    )
}

export default EpicGames; 