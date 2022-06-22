import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchStrategyGames} from "../../constants";

function Strategy() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de estrategia"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchStrategyGames}
    />
    <NavFooter/>
    </>
    )
}

export default Strategy; 