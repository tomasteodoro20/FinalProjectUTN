import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchXboxGames } from "../../constants";

function XBOX() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de XBOX"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchXboxGames}
    />
    <NavFooter/>
    </>
    )
}

export default XBOX; 