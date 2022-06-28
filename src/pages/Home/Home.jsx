import {React, useState} from "react";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import NavBarFix from "../../components/navbar/NavBarFix";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import CardsList from "../../components/cards/CardsList";
import "./home.css";
import { popularGames} from "../../constants";


function Home() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBarFix/>    
    <ControlledCarousel/>
    <Divider/>
    <CardsList 
    title="Recomendados"
    gameList={gameList} 
    setGameList={setGameList}
    url={popularGames}
    />
    <NavFooter/>
    </>
    )
}

export default Home; 