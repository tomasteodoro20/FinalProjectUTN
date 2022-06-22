import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import CardsList from "../../components/cards/CardsList";
import { fetchPlatformIOS } from "../../constants";

function IOS() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <CardsList 
    title="Juegos en IOS"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPlatformIOS}
    />
    <NavFooter/>
    </>
    )
}

export default IOS; 