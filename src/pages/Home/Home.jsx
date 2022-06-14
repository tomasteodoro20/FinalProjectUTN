import {React, useState} from "react";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/Nav';
import Recommendations from "../../components/cards/Recommendations";
import "./home.css";

function Home() {
    const [recommendations, setRecommendations] = useState([]);

    return (
    <>
    <NavBar/>
    <ControlledCarousel/>
    <Recommendations 
    recommendations={recommendations} 
    setRecommendations={setRecommendations}/>
    <NavFooter/>
    </>
    )
}

export default Home; 