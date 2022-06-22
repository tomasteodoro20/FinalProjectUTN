import React from "react";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import "./navbar.styles.css";
import SearchBar from "./SearchBar/SearchBar";
import ProfileMenu from "./Profile Menu/ProfileMenu";
import { Link } from 'react-router-dom';

function NavBar() {
    return (    
    <Navbar collapseOnSelect expand="md" variant="dark" className="bg-color">
    <Container fluid>
        <img height="60" src="logo.png" alt="logo GameOn"/>
        <Navbar.Brand><Link className="logo-style" to='/Home'>GameOn</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="GÉNEROS" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="#action4"><Link to='/Action'>Acción</Link></NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="#action4"><Link to='/Adventure'>Aventura</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4"><Link to='/Strategy'>Estrategia</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4"><Link to='/Racing'>Carrera</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4"><Link to='/Shooter'>Shooter</Link></NavDropdown.Item>
                <NavDropdown.Divider />         
                <NavDropdown.Item href="#action4"><Link to='/Simulation'>Simulación</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CONSOLAS" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="#action4">PC</NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="#action4">PlayStation</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Xbox</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Nintendo</NavDropdown.Item>                
            </NavDropdown>
            <NavDropdown title="PLATAFORMA" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="#action4">Steam</NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="#action4">Epic Games</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Origin</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Android</NavDropdown.Item>                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">IOS</NavDropdown.Item>                
            </NavDropdown>
        </Nav>
        <SearchBar />
        <ProfileMenu/>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar;