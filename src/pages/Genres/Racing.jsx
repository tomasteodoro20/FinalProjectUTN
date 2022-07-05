import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Divider from '../../components/divider/Divider';
import Footer from '../../components/footer/Footer';
import CardsList from "../../components/cards/CardsList";
import { fetchRacingGames} from "../../constants";

function Racing() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de carreras"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchRacingGames}
    />
    <Footer/>
    </>
    )
}

export default Racing; 