import React from "react";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import "./navbar.styles.css";
import NuevaSearchBar from "./NuevaSearchBar/NuevaSearchBar";
// import SearchBar from "./SearchBar/SearchBar";
import ProfileMenu from "./Profile Menu/ProfileMenu";

function NavBar() {
    return (    
    <Navbar collapseOnSelect expand="md" variant="dark" className="bg-color">
    <Container fluid>        
        <Navbar.Brand href="/Home"><img height="60" src="logo.png" alt="logo GameOn"/>GameOn</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="GÉNEROS" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="/Action" className="link-style">Acción</NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="/Adventure" className="link-style" >Aventura</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Strategy" className="link-style" >Estrategia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Racing" className="link-style" >Carrera</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Shooter" className="link-style" >Shooter</NavDropdown.Item>
                <NavDropdown.Divider />         
                <NavDropdown.Item href="/Simulation" className="link-style" >Simulación</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CONSOLAS" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="/PC" className="link-style" >PC</NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="/PlayStation" className="link-style" >PlayStation</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Xbox" className="link-style" >Xbox</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Nintendo" className="link-style" >Nintendo</NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link className="upcoming-btn" href="/Upcoming">Proximamente</Nav.Link>            
        </Nav>
        <NuevaSearchBar />
        {/* <SearchBar /> */}
        <ProfileMenu/>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar;