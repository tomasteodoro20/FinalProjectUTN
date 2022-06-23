import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
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
                <NavDropdown.Item href="/Action"><Link className="link-style" to='/Action'>Acción</Link></NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="/Adventure"><Link className="link-style" to='/Adventure'>Aventura</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Strategy"><Link className="link-style" to='/Strategy'>Estrategia</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Racing"><Link className="link-style" to='/Racing'>Carrera</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Shooter"><Link className="link-style" to='/Shooter'>Shooter</Link></NavDropdown.Item>
                <NavDropdown.Divider />         
                <NavDropdown.Item href="/Simulation"><Link className="link-style" to='/Simulation'>Simulación</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CONSOLAS" id="navbarScrollingDropdown" className="fontSize">            
                <NavDropdown.Item href="/PC"><Link className="link-style" to='/PC'>PC</Link></NavDropdown.Item>
                <NavDropdown.Divider />   
                <NavDropdown.Item href="/PlayStation"><Link className="link-style" to='/PlayStation'>PlayStation</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Xbox"><Link className="link-style" to='/Xbox'>Xbox</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Nintendo"><Link className="link-style" to='/Nintendo'>Nintendo</Link></NavDropdown.Item>
            </NavDropdown>
            <Button className="upcoming-btn"><Link className="upcoming-btn-style" to='/Upcoming'>Proximamente</Link></Button>
        </Nav>
        <SearchBar />
        <ProfileMenu/>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default NavBar;