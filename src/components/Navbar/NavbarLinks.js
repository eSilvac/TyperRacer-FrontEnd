// Configurations
import React from 'react';
import { Link } from "react-router-dom";

// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from './../../redux/actions/index';

function NavbarLinks({ currentUser, logoutUser }) {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      {!Object.keys(currentUser).length ? (
        <Nav className="ml-auto">
          <Link className="nav-link mr-2" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Sign up</Link>
        </Nav>
      ) : (
        <Nav className="ml-auto">
          <Navbar.Text className="mr-3">{currentUser.username}</Navbar.Text>
          { currentUser.admin ? (
            <Link className="nav-link text-white mr-1" to="/quote/new">Create Quote</Link>
          ) : ('') }
          <Nav.Link className="nav-link text-white" onClick={logoutUser}>Log Out</Nav.Link>
        </Nav>
      )}
    </Navbar.Collapse>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLinks);
