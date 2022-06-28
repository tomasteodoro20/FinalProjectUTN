import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from "../../components/divider/Divider";
import CardsList from "../../components/cards/CardsList";
import { upcomingGames } from "../../constants";

function Upcoming() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <Divider/>
    <CardsList 
    title="Próximos lanzamientos"
    gameList={gameList} 
    setGameList={setGameList}
    url={upcomingGames}
    />
    <NavFooter/>
    </>
    )
}

export default Upcoming; 