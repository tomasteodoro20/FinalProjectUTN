import React, {useEffect} from "react";
import GameCard from "./GameCard";
import "./gamecard.styles.css";


const CardsList = ({title, url, gameList, setGameList}) => {    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setGameList(data.results));
    },[]);
    return (
        <>
            <h2 className="title">{title}</h2>
            <div className="container-gamecards">
                {gameList.map((game) => (
                    <GameCard 
                        key={game.id} 
                        name={game.name}
                        released={game.released}
                        background_image={game.background_image}
                        rating={game.rating}
                        description={game.description}
                    />
                )
                )}
            </div>
        </>
    )
}

export default CardsList