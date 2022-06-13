import {React} from 'react'
import {Nav} from 'react-bootstrap'
import './nav.css'

<>
  <Nav /*className="justify-content-end"*/ activeKey="/home">
    <p>2022 - ©Chomyszyn/Vila - Powered by RAWG.io</p>
    <Nav.Item>
      <Nav.Link href="/home"><img src='./icons-facebook.png' alt="Icono 1" />Icono 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"><img src='./icons-instagram.png' alt="Icono 2" />Icono 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"><img src='./icons-twitter.png' alt="Icono 3" />Icono 3</Nav.Link>
    </Nav.Item>
  </Nav>
</>

export default Nav;