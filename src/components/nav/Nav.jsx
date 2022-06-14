import React from 'react'
import {Nav} from 'react-bootstrap'
import './nav.css'


function NavFooter() {
  return (
  <>
  <Nav className="justify-content-end bg-color" activeKey="/home">
  <p className='text-color mt-2'>2022 - ©Chomyszyn/Vila - Powered by RAWG.io</p> 
    <Nav.Item>
      <Nav.Link href="/home"><img height="20" src='icons-facebook.png' alt="facebook" /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><img height="20" src='icons-instagram.png ' alt="instagram" /></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><img height="20" src='icons-twitter.png' alt="twitter" /></Nav.Link>
    </Nav.Item>
  </Nav>
  </>
  )
}

export default NavFooter;