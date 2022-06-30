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
import LoadingGif from "../loading/LoadingGif";

function GameData () {
    const { slug } = useParams();
    const [gameDetails, setGameDetails] = useState("");
    const [loading, setLoading] = useState(true);
    const ratingStyle = `${
        gameDetails.rating > 3.5 ? "good" : gameDetails.rating < 3.5 && gameDetails.rating > 0 ? "bad" : "no"
    }-rating`;
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

    
    const fetchDetails = async () => {
        const response = await fetch(url);
            const data = await response.json();
            setGameDetails(data);
            setLoading(false);
        };
        
        useEffect(() => {
            fetchDetails();
        }, []);
        

    return (
    <>
           {loading ? <LoadingGif/> : 
           <>
    <div className="game-header">
        <h2>{gameDetails.name}</h2>            
        <span className={ratingStyle}>Rating: {gameDetails.rating}</span>
        {gameDetails.website && <a href={gameDetails.website} className="website-button" target="__blank">Sitio oficial</a>}            
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
            <GameScreenshots background_image={gameDetails.background_image}/>        
            <WishlistBtnAdd />
        </div>
    </div> 
    </>
    }   
    </>
    );
  }

export default GameData;