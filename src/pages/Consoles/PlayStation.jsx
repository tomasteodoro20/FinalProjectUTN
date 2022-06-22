import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchPS4Games } from "../../constants";

function PlayStation() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de PS4"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPS4Games}
    />
    <NavFooter/>
    </>
    )
}

export default PlayStation; 