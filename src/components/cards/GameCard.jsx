import React from "react";
import "./gamecard.styles.css";

const GameCard = (game) => {
    return (
        <div className="gamecard">
            <img src={game.background_image} alt={game.name}/>
            <div className="game-info">
                <h3>{game.name}</h3>
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