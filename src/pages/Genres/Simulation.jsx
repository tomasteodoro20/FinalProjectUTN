import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchSimulationGames } from "../../constants";

function Simulation() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Juegos de simulación"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchSimulationGames}
    />
    </>
    )
}

export default Simulation; 