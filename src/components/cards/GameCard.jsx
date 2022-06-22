import React from "react";
import "./gamecard.styles.css";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

const GameCard = (game) => {
    const ratingStyle = `${game.rating > 3.5 ? "good" : "bad"}-rating`;
    
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
                <p>Rating: <span className={ratingStyle}>{game.rating}</span>
                </p>                
            </div>
        </div>
    )
}

export default GameCard;