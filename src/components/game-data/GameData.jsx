import React, {useState, useEffect} from "react";
import './game-data.css';
import GameScreenshots from "./GameScreenshots";
import Divider from "../divider/Divider";
import { apiKey } from "../../constants/index";
import { useParams } from "react-router-dom";
import GameGenres from "./GameGenres";
import GameConsoles from "./GameConsoles";
import GameStores from "./GameStores";
import LoadingGif from "../loading/LoadingGif";
import axios from "axios";

function GameData () {
    const { slug } = useParams();
    const [gameDetails, setGameDetails] = useState("");
    const [loading, setLoading] = useState(true);
    const ratingStyle = `${
        gameDetails.rating > 3.5 ? "good" : gameDetails.rating < 3.5 && gameDetails.rating > 0 ? "bad" : "no"
    }-rating`;
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;

    const [success, setSuccess] = useState(null);
    const [error, setError ] = useState(null);

    
    const fetchDetails = async () => {
        const response = await fetch(url);
            const data = await response.json();
            setGameDetails(data);
            setLoading(false);
        };
        
    useEffect(() => {
        fetchDetails();
    }, []);

    const handleClick = async () => {        
        const {name, background_image, description, slug} = gameDetails;

        const listedGame = {wishlist: [
            {name: name,
            background_image: background_image,
            description: description,
            slug: slug}
        ]};
        
        console.log(listedGame)
        const response = await axios.post("http://localhost:5000/wishlist", listedGame)
        .catch((err) => {
            if(err && err.response)
            setError(err.response.data.message)            
        })    
        if (response && response.data) {            
            setSuccess(response.data.message);
        }        
        console.log(response.data)
    }
    
    if (loading) {
        return <LoadingGif/>
    }

    return (
    <>
           {gameDetails.detail === "Not found." ? <p className="no-results">La página no se encuentra disponible</p> : 
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
            
            <button className='custom-btn' type="submit" onClick={handleClick}>
            Añadir a la Lista de Deseados ❤
            </button>     
            
        </div>
            {/* <WishlistBtnAdd onSubmit={handleSubmit}/> */}
            <h2 className="success-message">{success}</h2>
            {!success && <span className="error-message">{error ? error : ""}</span>}
    </div> 
    </>
    }   
    </>
    );
  }

export default GameData;