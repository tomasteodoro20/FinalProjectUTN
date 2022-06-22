import {React, useState} from "react";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import CardsList from "../../components/cards/CardsList";
import { fetchPlatformGPlay } from "../../constants";

function Android() {
    const [gameList, setGameList] = useState([]);

    return (
    <>
    <NavBar/>
    <CardsList 
    title="Juegos en Android"
    gameList={gameList} 
    setGameList={setGameList}
    url={fetchPlatformGPlay}
    />
    <NavFooter/>
    </>
    )
}

export default Android; 