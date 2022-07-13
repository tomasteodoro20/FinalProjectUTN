import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchPS4Games } from "../../constants";

function PlayStation() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de PS4"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPS4Games}
    />
    </>
    )
}

export default PlayStation; 