import { TiDeleteOutline } from "react-icons/ti";
import "../../pages/Wishlist/wishlist.css"
import { useState, useEffect, useContext } from "react";
import Context from "../navbar/Profile Menu/context/UserContext";

const WishlistList = () => {
    const [wishlist, setWishlist] = useState([{}]);
    const {email, setEmail} = useContext(Context);
    
    
    const fetchDetails = async () => {
        setEmail(email);
        const response = await fetch(`http://localhost:5000/userWishlist/${email}`);
        const data = await response.json();
        setWishlist(data[0].wishlist);
        };
        
    useEffect(() => {
        fetchDetails();
    }, []);

    return (   
        <>     
        {wishlist.map((game, id) => {
            return (
            <div className="card flex-row card-style m-4 bg-dark" key={id}>
                <img className="wishlist-card-img" src={game.background_image ? game.background_image : "notfound.png"} alt={game.name}/>
                <div className="card-body card-text">
                    <h5 className="card-header">{game.name}</h5>
                    <a href={game.slug} className="card-body card-text">Más detalles</a>
                </div>
                <button className="wishlist-card-btn" type="button"><TiDeleteOutline/></button>
            </div>
            )
        })}
        </>
    )
}

export default WishlistList;