import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchStrategyGames} from "../../constants";

function Strategy() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de estrategia"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchStrategyGames}
    />
    <Footer/>
    </>
    )
}

export default Strategy; 