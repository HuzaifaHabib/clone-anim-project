import React, { useState } from 'react';
//styles
import './NavBar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md" fixed="top" className="nav-bar">
        <NavbarBrand href='/'>
            <img className="logo-img" width='300px' height='98px' src='https://junto.digital/wp-content/uploads/2019/01/logo-junto-main.png' alt='junto-logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav-items" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-srv-btn" href="/">Get Started <i className="fa fa-long-arrow-right" aria-hidden="true"></i></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;