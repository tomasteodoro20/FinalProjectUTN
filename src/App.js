import {useState} from "react";
import './App.css';
<<<<<<< HEAD
import NavBar from './components/navbar/NavBar';
import ControlledCarousel from './components/carousel/Controlled-Carousel';
import Recommendations from './components/cards/Recommendations';
=======
import Home from './pages/Home/Home'
// import NavBar from './components/navbar/NavBar';
// import ControlledCarousel from './components/carousel/Controlled-Carousel';
// import NavFooter from './components/nav/Nav';
>>>>>>> d84a98d4e0740c5b461188b987b56549e67528cf

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <>
<<<<<<< HEAD
    <NavBar />
    <ControlledCarousel/>
    <Recommendations 
    recommendations={recommendations} 
    setRecommendations={setRecommendations}/>
=======
    <Home/>
>>>>>>> d84a98d4e0740c5b461188b987b56549e67528cf
    </>
  );
}

export default App;
