import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import CardsList from '../../components/cards/CardsList';
import { searchGamesTest } from '../../constants/index';

function SearchGame () {
    const { name } = useParams();
    const url = searchGamesTest + name;
    const [gameList, setGameList] = useState([]);

    return (
        <>
        <NavBar/>
        <CardsList 
        title="Se encontraron ..."
        gameList={gameList} 
        setGameList={setGameList}
        url={url}
        />
        <NavFooter/>
        </>
    )
}

export default SearchGame;