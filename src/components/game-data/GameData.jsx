import React, {useState, useEffect} from "react";
import './game-data.css';
import GameScreenshots from "./GameScreenshots";
import Divider from "../divider/Divider";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import {apiKey} from "../../constants/index"


function GameData ({slug}) {
    const [gameDetails, setGameDetails] = useState("");
    const ratingStyle = `${gameDetails.rating > 3.5 ? "good" : "bad"}-rating`;
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
    <div className="game-title">
            <h2>{gameDetails.name}</h2>            
            <span className={ratingStyle}>Rating: {gameDetails.rating}</span>
    </div>
    <Divider />
    <div className="game-data">
        <div className="game-details">
            <p
                dangerouslySetInnerHTML={{__html: gameDetails.description}}
            />         
            <p>Fecha de lanzamiento: {gameDetails.released}</p>
            <div className="available-consoles">
                <FaWindows/>
                <FaPlaystation/>
                <FaXbox/>
                <SiNintendoswitch />
            </div>
            <p>Disponible en las siguientes plataformas: </p>
            {gameDetails.website && <p className="website-button"><a href={gameDetails.website}>Sitio oficial</a></p>}
        </div>
        <div className="game-screenshots">
            <GameScreenshots slug={gameDetails.slug}/>        
        </div>
    </div>
    </>
    );
  }

// {
//     const [gameList, setGameList] = useState("");

//     const url = "https://api.rawg.io/api/games/543?key=55381525b8814ed8b7afabaa2999118a";
//     useEffect(() => {
//         fetch(url)
//         .then((res) => res.json())
//         .then((data) => setGameList(data.results));
//     },[]);
//     return (
//         <>
//         <div className="row-style">
//             <h2>{game.name}</h2>
//             <p>Rating: {game.rating}</p>
//             <p>{game.description}</p>
//             <img src="" alt="Game platforms" />
//         </div>
//         <div className="row-style">
//             <p>{game.details}</p>
//             <Container>                
//                 <GameScreenshots/>                
//             </Container>
//         </div>
//         </>
//     )
// }

export default GameData;