import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchNintendoGames} from "../../constants";

function Nintendo() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de Nintendo"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchNintendoGames}
    />
    </>
    )
}

export default Nintendo; 