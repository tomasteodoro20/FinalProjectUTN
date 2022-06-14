import React from 'react'
import {Nav} from 'react-bootstrap'
import './nav.css'


function NavFooter() {
  return (
  <>
  <footer className="footer-container">
    <span className='text-color'>2022 - ©Chomyszyn/Vila - Powered by <a href="https://rawg.io/">RAWG.io</a></span>  
    <div className="redes-sociales">
    <a href="https://facebook.com/"><img height="20" src='icons-facebook.png' alt="facebook" /></a>
    <a href="https://instagram.com/"><img height="20" src='icons-instagram.png ' alt="instagram" /></a>
    <a href="https://twitter.com/"><img height="20" src='icons-twitter.png' alt="twitter" /></a>
    </div>
  </footer>
{/* 
  <Nav className="justify-content-end bg-color" activeKey="/home">  
  <p className='text-color'>2022 - ©Chomyszyn/Vila - Powered by RAWG.io</p>
    <Nav.Item>
      <Nav.Link href="/home"><img height="20" src='icons-facebook.png' alt="facebook" /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><img height="20" src='icons-instagram.png ' alt="instagram" /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><img height="20" src='icons-twitter.png' alt="twitter" /></Nav.Link>
    </Nav.Item>
  </Nav> */}
  </>
  )
}

export default NavFooter;