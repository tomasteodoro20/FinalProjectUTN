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
      {<img className='profile-button' src='./icon-account.png' alt='Perfil'></img>}
      {children}
    </a>
  ));
  
  function ProfileMenu () {

 return(
    <>
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>
  
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Mi Perfil</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey="2">Lista de Deseados</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey="3" active>
          Eliminar cuenta
        </Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item eventKey="1">Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>,
    </>
);
}

  export default ProfileMenu;