import {React, useState} from "react";
import {Carousel} from "react-bootstrap";
// import PlayerControlExample from "../video-player/VideoPlayer";
import "./carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
    <Carousel activeIndex={index} onSelect={handleSelect}>
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
    </Carousel>
    </div>
  );
}

// render(<ControlledCarousel />);

export default ControlledCarousel;