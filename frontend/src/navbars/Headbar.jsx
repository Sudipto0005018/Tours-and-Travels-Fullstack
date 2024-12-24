import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/wanderlust2.png'; 

const Headbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar expand="lg" className="navbar navbar-dark fixed-top bg-dark">
      <Container fluid>
      <Navbar.Brand href="#home" style={{ fontFamily: 'serif' }}>
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About us</Link>
            <Link to="/tours" className={`nav-link ${isActive('/tours')}`}>Tours</Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/register" variant={location.pathname === '/register' ? 'light' : 'outline-light'} className="me-2">Register</Button>
            <Button as={Link} to="/login" variant={location.pathname === '/login' ? 'light' : 'outline-light'}>Login</Button>
            <Button as={Link} to="/adminlogin" variant={location.pathname === '/adminlogin' ? 'light' : 'outline-light'} style={{ marginLeft: '7px'}}>Admin</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headbar;
