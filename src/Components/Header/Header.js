import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Header.css'
const Header = () => {
    return (
        <Navbar className='our_menu' expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/home'><img style={{width:'120px', filter:'contrast(0%) brightness(250%)'}} src={logo} alt=""/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="Search Your Destination" className="header_input" />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link > <Link to='/news' className='menu_list'>News</Link> </Nav.Link>
                        <Nav.Link > <Link to='/destination' className='menu_list'>Destination</Link> </Nav.Link>
                        <Nav.Link > <Link to='/blog' className='menu_list'>Blog</Link> </Nav.Link>
                        <Nav.Link > <Link to='/contact' className='menu_list'>Contact</Link> </Nav.Link>
                          <Link to='/login'><button className='btn menu_btn'> Login </button></Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;