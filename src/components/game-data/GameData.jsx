import React, {useState, useEffect} from "react";
import './game-data.css';
import GameScreenshots from "./GameScreenshots";
import Divider from "../divider/Divider";
import { apiKey } from "../../constants/index";
import { useParams } from "react-router-dom";
import GameGenres from "./GameGenres";
import GameConsoles from "./GameConsoles";
import GameStores from "./GameStores";
import WishlistBtnAdd from "../wishlist/WishlistAdd";


function GameData () {
    const { slug } = useParams();
    const [gameDetails, setGameDetails] = useState("");
    const ratingStyle = `${
        gameDetails.rating > 3.5 ? "good" : gameDetails.rating < 3.5 && gameDetails.rating > 0 ? "bad" : "no"
    }-rating`;
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

    
    const fetchDetails = async () => {
        const response = await fetch(url);
            const data = await response.json();
            setGameDetails(data);
        };
        
        useEffect(() => {
            fetchDetails();
        }, []);
        

    return (
    <>
    <div className="game-header">
            <h2>{gameDetails.name}</h2>            
            <span className={ratingStyle}>Rating: {gameDetails.rating}</span>
            {gameDetails.website && <a href={gameDetails.website} className="website-button">Sitio oficial</a>}            
    </div>
    <Divider />
    <div className="game-data">
        <div className="game-details">
            <GameGenres url={url}/>
            <div className="consoles">            
            {gameDetails.released && <p><span className="release-date">Fecha de lanzamiento: </span>{gameDetails.released}</p>}            
            <GameConsoles slug={slug}/>
            </div>
            <div
                dangerouslySetInnerHTML={{__html: gameDetails.description}}
            />                     
            <GameStores slug={slug}/>
        </div>
        <div className="game-extra">
            <GameScreenshots/>        
            <WishlistBtnAdd />
        </div>
    </div>
    
    </>
    );
  }

export default GameData;