import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchPCGames } from "../../constants";

function PC() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de PC"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPCGames}
    />
    </>
    )
}

export default PC; 