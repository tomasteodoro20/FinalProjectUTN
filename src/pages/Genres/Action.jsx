import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import { fetchActionGames} from "../../constants";

function Action() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Juegos de acción"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchActionGames}
    />
    <Footer/>
    </>
    )
}

export default Action; 