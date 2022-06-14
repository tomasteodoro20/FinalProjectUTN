import {useState} from "react";
import './App.css';
import NavBar from './components/navbar/NavBar';
import ControlledCarousel from './components/carousel/Controlled-Carousel';
import Recommendations from './components/cards/Recommendations';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <>
    <NavBar />
    <ControlledCarousel/>
    <Recommendations 
    recommendations={recommendations} 
    setRecommendations={setRecommendations}/>
    </>
  );
}

export default App;
