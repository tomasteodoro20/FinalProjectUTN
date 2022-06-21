import React from "react";
import "./gamecard.styles.css";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

const GameCard = (game) => {
    return (
        <div className="gamecard">
            <img src={game.background_image} alt={game.name}/>
            <div className="game-info">
                <h3 className="game-info">{game.name}</h3>
            <div className="game-console">
                <FaWindows/>
                <FaPlaystation/>
                <FaXbox/>
                <SiNintendoswitch />
            </div>    
            </div>
            <div className="game-overview">
                <h3>{game.name}</h3>    
                <p>Fecha de lanzamiento: {game.released}</p>
                <p>Rating: {game.rating}</p>                
            </div>
        </div>
    )
}

export default GameCard;