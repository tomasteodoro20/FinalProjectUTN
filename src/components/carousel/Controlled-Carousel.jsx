import {React} from "react";
import {Carousel, Card, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./carousel.css";
import ReactPlayer from "react-player";

const videoProperties = [
  {
    id:1,
    title: "The Last of Us",
    src: 'https://www.youtube.com/watch?v=9pmw4z3k_zg',
    game_details:"",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id:2,
    title: "Star Wars Jedi Fallen Order",
    src: 'https://www.youtube.com/watch?v=xIl2z5wwjdA',
    game_details:"",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id:3,
    title: "Ghost of Tsushima",
    src: 'https://www.youtube.com/watch?v=jPeyWo1fWRw',
    game_details:"",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
]

function ControlledCarousel() {
  return (
    <>
    <div className="carousel">
    <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
            <div className="video-container">
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={false}
              />
              <Col lg={3} md={11}>              
                <Card className="card-carousel">
                <Card.Body>                
                  <Card.Title as="h4">{videoObj.title}</Card.Title>
                  <Card.Text>{videoObj.description}
                  </Card.Text>
                  <Link to='/:slug'><Card.Link className="link-style">Ver más</Card.Link></Link>
                </Card.Body>
                </Card>
              </Col>

            </div>
            </Carousel.Item>
          );
        })}
      </Carousel>  
    </div>
  </>
  );
}


export default ControlledCarousel;