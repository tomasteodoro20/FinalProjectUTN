import { ListGroup, Card } from 'react-bootstrap';

function WishlistList () {

    return (
        
        <ListGroup as="ul">
        <ListGroup.Item className='list-style' as="li">
        <div class="card flex-row card-style">
            <img class="img-style" src="img-test1.jpg" alt='#'/>
             <div class="card-body card-text-style">
                 <h4 class="card-title h5 h4-sm">Left image</h4>
                 <p class="card-text">Example text</p>
             </div>
             <button class="btn btn-black" type="button">Remover</button>
        </div>
        </ListGroup.Item>
        <ListGroup.Item className='list-style'  as="li">
        <div class="card flex-row card-style">
            <img class="img-style" src="img-test1.jpg" alt='#'/>
             <div class="card-body card-text-style">
                 <h4 class="card-title h5 h4-sm">Left image</h4>
                 <p class="card-text">Example text</p>
             </div>
             <button class="btn btn-black" type="button">Remover</button>
        </div>
        </ListGroup.Item>
        <ListGroup.Item className='list-style'  as="li">
        <div class="card flex-row card-style">
            <img class="img-style" src="img-test1.jpg" alt='#'/>
             <div class="card-body card-text-style">
                 <h4 class="card-title h5 h4-sm">Left image</h4>
                 <p class="card-text">Example text</p>
             </div>
             <button class="btn btn-black" type="button">Remover</button>
        </div>
        </ListGroup.Item>
        </ListGroup>
    )
}

export default WishlistList;