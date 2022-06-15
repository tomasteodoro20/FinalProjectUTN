import React from "react";
import {Container, Image} from 'react-bootstrap';
import './game-data.css'

function GameData (game){
    return (
        <>
        <div className="row-style">
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            <img src="" alt="Game platforms" />
        </div>
        <div className="row-style">
            <p>{game.details}</p>
            <Container>
                <Image>
                    <img src={game.screenshot} alt="" />
                    <img src={game.screenshot} alt="" />
                    <img src={game.screenshot} alt="" />
                    <img src={game.screenshot} alt="" />
                </Image>
            </Container>
        </div>
        </>
    )
}

export default GameData;