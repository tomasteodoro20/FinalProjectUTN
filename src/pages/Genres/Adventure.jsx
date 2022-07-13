import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchAdventureGames} from "../../constants";

function Adventure() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de aventura"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchAdventureGames}
    />
    </>
    )
}

export default Adventure; 