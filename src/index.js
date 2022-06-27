import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from './pages/Profile/MyProfile';
import Home from './pages/Home/Home';
import Action from "./pages/Genres/Action"
import Adventure from './pages/Genres/Adventure';
import Strategy from './pages/Genres/Strategy';
import Racing from './pages/Genres/Racing';
import Shooter from './pages/Genres/Shooter';
import Simulation from './pages/Genres/Simulation';
import PC from './pages/Consoles/PC';
import PlayStation from './pages/Consoles/PlayStation';
import XBOX from './pages/Consoles/XBOX';
import Nintendo from './pages/Consoles/Nintendo';
import Game from './pages/Game/Game';
import Upcoming from './pages/Upcoming/Upcoming'
import Wishlist from './pages/Wishlist/Wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Action' element={<Action/>}></Route>
        <Route path='/Adventure' element={<Adventure/>}></Route>
        <Route path='/Strategy' element={<Strategy/>}></Route>
        <Route path='/Racing' element={<Racing/>}></Route>
        <Route path='/Shooter' element={<Shooter/>}></Route>
        <Route path='/Simulation' element={<Simulation/>}></Route>
        <Route path=':slug' element={<Game />}></Route>
        <Route path='/MyProfile' element={<MyProfile/>}></Route>
        <Route path='/PC' element={<PC/>}></Route>
        <Route path='/PlayStation' element={<PlayStation/>}></Route>
        <Route path='/Xbox' element={<XBOX/>}></Route>
        <Route path='/Nintendo' element={<Nintendo/>}></Route>
        <Route path='/Upcoming' element={<Upcoming/>}></Route>
        <Route path='/Wishlist' element={<Wishlist/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
