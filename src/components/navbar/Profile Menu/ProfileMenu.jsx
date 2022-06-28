import React from 'react'
import {Dropdown} from 'react-bootstrap'
import '../navbar.styles.css'

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
    <Dropdown align="end">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>
  
      <Dropdown.Menu>
        <Dropdown.Item className='link-style' href="/MyProfile">Mi Perfil</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item className='link-style' href='/Wishlist'>Lista de Deseados</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item className='link-style' href='/Wishlist'>Eliminar cuenta</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item className='link-style' href='/Wishlist'>Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
);
}

  export default ProfileMenu;