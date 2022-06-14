import React, {useEffect} from "react";
import GameCard from "./GameCard";
import "./gamecard.styles.css";


const Recommendations = ({recommendations, setRecommendations}) => {
    const url = "https://api.rawg.io/api/games?key=55381525b8814ed8b7afabaa2999118a";    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setRecommendations(data.results));
    },[setRecommendations]);
    return (
        <>
            <h2 className="title">Recomendaciones</h2>
            <div className="container-gamecards">
                {recommendations.map((game) => (
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

export default Recommendations