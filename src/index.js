import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from './pages/Profile/MyProfile';
import Home from './pages/Home/Home';
import Action from "./pages/Genres/Action"
import Adventure from './pages/Genres/Adventure';
import Game from './pages/Game/Game';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Action' element={<Action/>}></Route>
        <Route path='/Adventure' element={<Adventure/>}></Route>
        <Route path='/Game' element={<Game/>}></Route>
        <Route path='/MyProfile' element={<MyProfile/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
