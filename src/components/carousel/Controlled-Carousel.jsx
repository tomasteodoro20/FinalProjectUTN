import {React, useState} from "react";
import {Carousel, Card} from "react-bootstrap";
// import PlayerControlExample from "../video-player/VideoPlayer";
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
    title: "Ghost of Tsushim",
    src: 'https://www.youtube.com/watch?v=jPeyWo1fWRw',
    game_details:"",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
]

function ControlledCarousel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
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
            
              <Card style={{ width: '16rem' }} className="card-carousel">
              <Card.Body>
                <Card.Title>{videoObj.title}</Card.Title>
                <Card.Text>{videoObj.description}
                </Card.Text>
                <Card.Link href={videoObj.game_details}>Más información</Card.Link>
              </Card.Body>
              </Card>


            </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    {/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
          className="d-block"
          src="img-test1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Primer Trailer</h3>
          <link src=""></link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block"
          src="img-test2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Segundo Trailer</h3>
          <link src=""></link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="img-test3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tercer Trailer</h3>
          <link src=""></link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;