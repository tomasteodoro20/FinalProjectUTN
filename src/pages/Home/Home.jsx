import {React, Headers, Footer, Body} from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../components/carousel/Controlled-Carousel";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import "../../components/navbar/NavBar";
import "../../components/nav/Nav";
import "./home.css";

function Home() {
    return (
    <>
    <Headers>
        <Navbar/>
    </Headers>
    <Body>
        <ControlledCarousel/>
    </Body>
    <Footer>
        <Nav/>             
    </Footer>
    </>
    )
}

export default Home; 