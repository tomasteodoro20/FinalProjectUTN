import {React} from "react";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/Nav';
import "./home.css";

function Home() {
    return (
    <>
    <NavBar/>
    <ControlledCarousel/>
    <NavFooter/>
    </>
    )
}

export default Home; 