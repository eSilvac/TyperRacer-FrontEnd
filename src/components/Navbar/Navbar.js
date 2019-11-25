import React from 'react';

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

// User
import NavbarLinks from './NavbarLinks'
import NavbarHomeButton from './NavbarHomeButton'

function PageNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarHomeButton />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarLinks />
      </Container>
    </Navbar> 
  );
}

export default PageNavbar;
