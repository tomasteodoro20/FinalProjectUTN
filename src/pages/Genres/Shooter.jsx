import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchShooterGames} from "../../constants";

function Shooter() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos shooter"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchShooterGames}
    />
    <NavFooter/>
    </>
    )
}

export default Shooter; 