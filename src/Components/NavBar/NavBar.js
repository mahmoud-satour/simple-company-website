import React from 'react';
import {Navbar ,Nav} from 'react-bootstrap';
import "./NavBar.css";

function NavBar() {
    return (
        <header>
            <Navbar  expand="lg" className="Nav shadow fixed-top">
                <Navbar.Brand href="#home" style={{paddingLeft:"105px"}}>Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" style={{paddingRight:"65px"}}>
                            <Nav.Link href="#ABOUT" className='NavItem active'>ABOUT</Nav.Link>
                            <Nav.Link href="#TEAM" className='NavItem active'>TEAM</Nav.Link>
                            <Nav.Link href="#WORK" className='NavItem active'>WORK</Nav.Link>
                            <Nav.Link href="#PRICING" className='NavItem active'>PRICING</Nav.Link>
                            <Nav.Link href="#CONTACT" className='NavItem active'>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default NavBar;
