import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchPCGames } from "../../constants";

function PC() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de PC"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPCGames}
    />
    <NavFooter/>
    </>
    )
}

export default PC; 