import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/footer/Footer';
import Divider from "../../components/divider/Divider";
import CardsList from "../../components/cards/CardsList";
import { upcomingGames } from "../../constants";

function Upcoming() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <Divider/>
    <CardsList 
    title="Próximos lanzamientos"
    gameList={gameList} 
    setGameList={setGameList}
    url={upcomingGames}
    />
    </>
    )
}

export default Upcoming; 