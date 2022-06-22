import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchSimulationGames } from "../../constants";

function Simulation() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de simulación"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchSimulationGames}
    />
    <NavFooter/>
    </>
    )
}

export default Simulation; 