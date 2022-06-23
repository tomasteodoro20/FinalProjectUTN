import React, {useEffect, useState} from "react";
import './game-data.css';
import {apiKey} from "../../constants/index"

const GameScreenshots = ({slug}) => {    
    const url = `https://api.rawg.io/api/games/${slug}/screenshots?key=${apiKey}`;    

    const [gameScreenshots, setGameScreenshots] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameScreenshots(data.results));
    },[setGameScreenshots]);

    return (
        <>            
            {gameScreenshots.slice(0, 3).map((game) => (
                <img className="screenshots-img" key={game.id} src={game.image} alt="Screenshot" />
            )
            )}          
        </>
    )
}

export default GameScreenshots