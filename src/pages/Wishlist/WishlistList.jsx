import { ListGroup, Card, Container } from 'react-bootstrap';

function WishlistList () {

    return (
        
        <ListGroup as="ul">
        <ListGroup.Item as="li">
        <Card>
                <Card.Img className="container-style" src="img-test1.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Game</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur.
                    </Card.Text>
                    <Card.Text>Rating</Card.Text>
                </Card.ImgOverlay>
                </Card>
        </ListGroup.Item>
        <ListGroup.Item as="li">
        <Card>
                <Card.Img className="container-style" src="img-test1.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Game</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur.
                    </Card.Text>
                    <Card.Text>Rating</Card.Text>
                </Card.ImgOverlay>
                </Card>
        </ListGroup.Item>
        <ListGroup.Item as="li">
        <Card>
                <Card.Img className="container-style" src="img-test1.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Game</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur.
                    </Card.Text>
                    <Card.Text>Rating</Card.Text>
                </Card.ImgOverlay>
                </Card>
        </ListGroup.Item>
        </ListGroup>
    )
}

export default WishlistList;