import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import CardsList from "../../components/cards/CardsList";
import { fetchPlatformSteam } from "../../constants";

function Steam() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <CardsList 
    title="Juegos en Steam"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPlatformSteam}
    />
    <NavFooter/>
    </>
    )
}

export default Steam; 