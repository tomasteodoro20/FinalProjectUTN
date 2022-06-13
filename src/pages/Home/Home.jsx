import {React, Headers} from "react";
import { Navbar } from "react-bootstrap";
import "../../components/carousel/Controlled-Carousel"
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import "../../components/navbar/NavBar"
import "./home.css"

function Home() {
    return (
    <>
    <Headers>
    <Navbar/>
    </Headers>
    <ControlledCarousel/>
    </>
    )
}

export default Home; 