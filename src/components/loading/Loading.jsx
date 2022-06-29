import {React, useState, useEffect} from "react";
import GameCard from "../cards/GameCard"
import LoadingGif from "./LoadingGif";

const Loading = ({game}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await GameCard(game);
                setData(data);
                setError(false);
            } catch (err) {
                setError(true)
                setData(null)
            }
            setIsLoading(false);
        };
        fetchData();
    }, [game]);

    if (isLoading) {
        return (
            <div>
                Cargando... <LoadingGif/>
            </div>
        )
    }

    if(error) {
        return (
            <div className="alert alert-danger">
                Error, no se encuentra el juego.
            </div>
        )
    }

    return (
        <article>
            <GameCard/>
        </article>
    )
}