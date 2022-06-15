import {React, useState} from "react";
import ControlledCarousel from "../../components/carousel/Controlled-Carousel";
import NavBar from "../../components/navbar/NavBar";
import NavFooter from '../../components/nav/NavFooter';
import Divider from '../../components/divider/Divider';
import Recommendations from "../../components/cards/Recommendations";
import "./home.css";

function Home() {
    const [recommendations, setRecommendations] = useState([]);

    return (
    <>
    <NavBar/>
    <ControlledCarousel/>
    <Divider/>
    <Recommendations 
    recommendations={recommendations} 
    setRecommendations={setRecommendations}/>
    <NavFooter/>
    </>
    )
}

export default Home; 