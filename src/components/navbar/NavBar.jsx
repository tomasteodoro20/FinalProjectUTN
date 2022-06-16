import React from "react";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import "./navbar.styles.css";
import SearchBar from "./SearchBar/SearchBar";
import ProfileMenu from "./Profile Menu/ProfileMenu";

function NavBar() {
    return (    
    <Navbar collapseOnSelect expand="md" variant="dark" className="bg-color">
    <Container fluid>
        <img height="60" src="logo.png" alt="logo GameOn"/>
        <Navbar.Brand href="/">GameOn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="GÉNEROS" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="#action4">Acción</NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="#action4">Aventura</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">RPG</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Racing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Shooter</NavDropdown.Item>
                <NavDropdown.Divider />         
                <NavDropdown.Item href="#action4">Simulación</NavDropdown.Item>
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
        </Navbar.Collapse>
        <ProfileMenu/>
    </Container>
    </Navbar>
    )
}

export default NavBar;