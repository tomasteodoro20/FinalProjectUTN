import React from 'react';
import { Link } from 'react-router-dom'
;import './wishlist-button.css'


function WishlistBtn () {
    
    return (
<>
    <Link to="/Wishlist" className='custom-btn' type="button">
        Lista de deseados ❤
    </Link> 
</>
 )
}

export default WishlistBtn;