import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
;import './wishlist-button.css'


function WishlistBtn () {
    
    return (
<>
    <Button className='custom-btn' onClick={<Link to='/Wishlist'></Link>}>Lista de Deseados ❤</Button>
    
</>
 )
}

export default WishlistBtn;