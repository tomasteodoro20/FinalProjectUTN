import { TiDeleteOutline } from "react-icons/ti";

function WishlistList () {

    const wishlist = [
        {
            name: "Ghost of Tsushima Director's Cut",
            background_image: "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
            description: "Explore the brand new Iki Island, plus PS5-specific enhancements like DualSense haptic feedback, Japanese lip sync, and more.",
            slug: "ghost-of-tsushima-directors-cut"
        },
        {
            name: "Ghost of Tsushima Director's Cut",
            background_image: "https://media.rawg.io/media/games/193/193c9fe23ca026914fdf41d551ff3df9.jpg",
            description: "Explore the brand new Iki Island, plus PS5-specific enhancements like DualSense haptic feedback, Japanese lip sync, and more.",
            slug: "ghost-of-tsushima-directors-cut"
        }
    ];

    return (   
        <>     
        {wishlist.map((game) => {
            return (
            <div className="card flex-row card-style m-4 bg-dark">
                <img className="wishlist-card-img" src={game.background_image ? game.background_image : "notfound.png"} alt={game.name}/>
                <div className="card-body card-text">
                    <h5 className="card-header">{game.name.length > 30 ? game.name.slice(0,30) + "..." : game.name}</h5>
                    <p className="card-body">{game.description}</p>
                </div>
                <button className="wishlist-card-btn" type="button"><TiDeleteOutline/></button>
            </div>
            )
        })}
        </>
    )
}

export default WishlistList;