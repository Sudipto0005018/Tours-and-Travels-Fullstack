import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
import logo from '../assets/wanderlust2.png';

export const AdminHeadbar = ({ adminlogouthandler }) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-light p-3" style={{ backgroundColor: '#333' }}>
            <Container fluid>
                <Navbar.Brand href="/admin" className='text-white'>
                    <img
                        src={logo}
                        alt="Logo"
                        width="60"
                        height="50"
                        className="d-inline-block align-top"
                        style={{ marginRight: '10px' }}
                    />
                    Wanderlust
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/admin' className="nav-link text-white">
                            All Tours
                        </Link>
                        <Link to='/addtour' className="nav-link text-white">
                            Add Tour
                        </Link>
                        <Link to='/adminorders' className="nav-link text-white">
                            All Orders
                        </Link>
                    </Nav>
                    
                    {/* <Dropdown align="end">
                        <Dropdown.Toggle variant="outline-light" className="nav-link text-white rounded-circle bg-dark">
                            AD
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/adminorders">All Orders</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Link to='/dashboard' className="nav-link text-white email text-sm-md bg-dark">
                        <span>AD</span>
                    </Link>

                    <Button variant="outline-light" onClick={adminlogouthandler} className="ms-3">
                        Logout
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
