import { TiDeleteOutline } from "react-icons/ti";
import "../../pages/Wishlist/wishlist.css"
import { useState, useEffect } from "react";
import axios from "axios";

const WishlistList = () => {
    // const [wishlist, setWishlist] = useState();

    // const fetchDetails = async () => {
    //     const response = await axios.get("http://localhost:5000/wishlist");
    //         // const data = await response.wishlist.json();
    //         setWishlist(JSON.stringify(response));
    //         // setLoading(false);
    //     };

    // useEffect(() => {
    //     fetchDetails();
    // }, []);

    const wishlist = [    
{      
    "name": "Inscryption",      
    "background_image": "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",      
    "description": "<p>From the creator of Pony Island and The Hex comes the latest mind melting, self-destructing</p>",
    "slug": "inscryption",
    "_id": {"$oid": "62d1973ff86c71eb0d2291cc"}
},
{
    "name": "Elden Ring",      
    "background_image": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg",      
    "description": "<p>The Golden Order has been broken.</p>\n<p>Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands </p>",
    "slug": "elden-ring",
    "_id": {
        "$oid": "62d19762982ca23bc982da6e"
}}]
        
    //     {
    //         name: "Ghost of Tsushima Director's Cut",
    //         background_image: "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
    //         description: "Explore the brand new Iki Island, plus PS5-specific enhancements like DualSense haptic feedback, Japanese lip sync, and more.",
    //         slug: "ghost-of-tsushima-directors-cut"
    //     },
    //     {
    //         name: "Ghost of Tsushima Director's Cut",
    //         background_image: "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
    //         description: "Explore the brand new Iki Island, plus PS5-specific enhancements like DualSense haptic feedback, Japanese lip sync, and more.",
    //         slug: "ghost-of-tsushima-directors-cut"
    //     }
    // ];

    return (   
        <>     
        {wishlist.map((game) => {
            return (
            <div className="card flex-row card-style m-4 bg-dark" key={game._id.$oid}>
                <img className="wishlist-card-img" src={game.background_image ? game.background_image : "notfound.png"} alt={game.name}/>
                <div className="card-body card-text">
                    <h5 className="card-header">{game.name.length > 30 ? game.name.slice(0,30) + "..." : game.name}</h5>
                    <div className="card-body"
                        dangerouslySetInnerHTML={{__html: game.description.length > 130 ? game.description.slice(0,130) + "..." : game.description}}
                    />
                    {/* <p className="card-body">{game.description}</p> */}
                </div>
                <button className="wishlist-card-btn" type="button"><TiDeleteOutline/></button>
            </div>
            )
        })}
        </>
    )
}

export default WishlistList;