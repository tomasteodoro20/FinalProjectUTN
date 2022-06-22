import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import CardsList from "../../components/cards/CardsList";
import { fetchActionGames} from "../../constants";

function Action() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <CardsList 
    title="Juegos de acción"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchActionGames}
    />
    <NavFooter/>
    </>
    )
}

export default Action; 