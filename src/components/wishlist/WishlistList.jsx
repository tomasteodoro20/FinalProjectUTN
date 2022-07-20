import { TiDeleteOutline } from "react-icons/ti";
import "../../pages/Wishlist/wishlist.css"
import { useState, useEffect, useContext } from "react";
import Context from "../navbar/Profile Menu/context/UserContext";

const WishlistList = () => {
    const [wishlist, setWishlist] = useState([{}]);
    const {email, setEmail} = useContext(Context);
    
    
    const fetchDetails = async () => {
        setEmail(email);
        // console.log(email)
        const response = await fetch(`http://localhost:5000/userWishlist/${email}`);
        const data = await response.json();
        setWishlist(data[0].wishlist);
        // console.log(data[0].wishlist)
        };
        
    useEffect(() => {
        fetchDetails();
    }, []);

    // const fetchDetails = async () => {
    //     const response = await axios.get("http://localhost:5000/userWishlist");
    //         console.log(response)
    //         // const data =  response.json();
    //         setWishlist(response.data);
    //         // setLoading(false);
    //     };

    // useEffect(() => {
    //     fetchDetails();
    // }, []);

//     const wishlist = [    
// {      
//     "name": "Inscryption",      
//     "background_image": "https://media.rawg.io/media/games/99e/99e937e4cc518d641317116c9d8d9046.jpg",      
//     "description": "<p>From the creator of Pony Island and The Hex comes the latest mind melting, self-destructing</p>",
//     "slug": "inscryption",
//     "_id": {"$oid": "62d1973ff86c71eb0d2291cc"}
// },
// {
//     "name": "Elden Ring",      
//     "background_image": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg",      
//     "description": "<p>The Golden Order has been broken.</p>\n<p>Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands </p>",
//     "slug": "elden-ring",
//     "_id": {
//         "$oid": "62d19762982ca23bc982da6e"
// }}]
        
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
        {wishlist.map((game, id) => {
            return (
            <div className="card flex-row card-style m-4 bg-dark" key={id}>
                <img className="wishlist-card-img" src={game.background_image ? game.background_image : "notfound.png"} alt={game.name}/>
                <div className="card-body card-text">
                    <h5 className="card-header">{game.name}</h5>
                    <a href={game.slug} className="card-body card-text">Más detalles</a>
                    {/* <div className="card-body"
                        dangerouslySetInnerHTML={{__html: game.description}}
                    /> */}
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