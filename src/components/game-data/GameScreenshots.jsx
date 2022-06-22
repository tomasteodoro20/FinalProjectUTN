import React, {useEffect, useState} from "react";
import './game-data.css';


const GameScreenshots = (game) => {    
    const [gameScreenshots, setGameScreenshots] = useState([]);

    const url = "https://api.rawg.io/api/games/123/screenshots?key=55381525b8814ed8b7afabaa2999118a";

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameScreenshots(data.results));
    },[]);

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