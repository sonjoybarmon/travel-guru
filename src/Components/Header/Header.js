import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/Logo.png';
import './Header.css';
const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

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

                        {!loggedInUser.email ?<Link to='/login'><button className='btn menu_btn'>Login</button></Link> : <Link to='/'><button className='btn menu_btn'>sign Out</button></Link>
                       }
                       <h6 style={{lineHeight:'40px',marginLeft:'5px', color:'#ffffff'}}>{!loggedInUser.email ? 'User' :` ${loggedInUser.name}`}</h6>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;