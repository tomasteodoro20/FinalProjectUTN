import React from 'react'
import {Dropdown} from 'react-bootstrap'
import '../navbar.styles.css'
import { Link } from 'react-router-dom'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="Profile"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {<img className='profile-button' src='./icon-account.png' alt="Profile"></img>}
      {children}
    </a>
  ));
  
  function ProfileMenu () {

 return(
    <>
    <Dropdown align={{md:"end"}}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>
  
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1" className='profile-color' href="/MyProfile"><Link className='link-style' to="/MyProfile">Mi Perfil</Link></Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey="2"><Link className='link-style' to='/Wishlist'>Lista de Deseados</Link></Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey="3" active>
          Eliminar cuenta
        </Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey="4">Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
);
}

  export default ProfileMenu;