import React, {useState, useEffect} from "react";
import Searchfilter from './Searchfilter';
import { searchGames } from "../../constants";

function Searchbar () {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState("");
    const [selectedGame, setSelectedGame] = useState(null);

    function handleErrors(res) {
        if (!res.ok) throw Error(res.status)
        return res.json();
    }

    useEffect(() => {
        fetch(searchGames)
            .then(res => handleErrors(res))
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            width: "60vw",
            padding: "1rem",
        }}
        >
            <h1 className="title">Se encontró</h1>
            <div style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "80% 20%",
                gap: "2rem",
            }}>
                <div>
                    <Searchfilter 
                    setFilter={setFilter}
                    />

                </div>
            </div>
        </div>
    )

}

export default Searchbar;