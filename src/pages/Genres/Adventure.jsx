import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchAdventureGames} from "../../constants";

function Adventure() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de aventura"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchAdventureGames}
    />
    <NavFooter/>
    </>
    )
}

export default Adventure; 