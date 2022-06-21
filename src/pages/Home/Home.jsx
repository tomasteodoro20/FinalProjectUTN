import {React, useState} from "react";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import Recommendations from "../../components/cards/Recommendations";
import CardsList from "../../components/cards/CardsList";
import "./home.css";
import { popularGamesGet, fetchActionGames, fetchStrategyGames } from "../../constants";

function Home() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <ControlledCarousel/>
    <Divider/>
    <CardsList 
    title="Recomendados"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchStrategyGames}
    />
    <NavFooter/>
    </>
    )
}

export default Home; 