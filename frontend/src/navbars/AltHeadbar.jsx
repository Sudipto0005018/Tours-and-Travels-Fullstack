import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Badge,
  Dropdown,
} from "react-bootstrap";
import logo from "../assets/wanderlust2.png";

function AltHeadbar({ logoutHandler }) {
  const [emailshort, setEmailshort] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();

  const getuser = async () => {
    let token = localStorage.getItem("usertoken");

    const response = await axios.get("http://localhost:7000/user/getuser", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("user response : ", response.data);

    setEmail(response?.data?.user?.email || "");
  };

  useEffect(() => {
    getuser();
  }, []);

  useEffect(() => {
    setEmailshort(email.substring(0, 2).toUpperCase());
  }, [email]);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar-dark fixed-top bg-dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home" style={{ fontFamily: "serif", fontSize: "25px" }}>
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="40"
            className="d-inline-block align-top"
            style={{ marginRight: "10px" }}
          />
          Wanderlust
        </Navbar.Brand>
        {/* Updated Navbar.Toggle with variant="outline-light" */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          variant="outline-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className={`nav-link text-white ${isActive("/")}`}>
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link text-white ${isActive("/about")}`}
            >
              About us
            </Link>
            <Link
              to="/tours"
              className={`nav-link text-white ${isActive("/tours")}`}
            >
              Tours
            </Link>
            <Link
              to="/cart"
              className={`nav-link text-white ${isActive("/cart")}`}
              style={{ position: "relative" }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Cart
              {/* Cart Badge (optional, if cart items are available) */}
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-100 translate-middle"
              >
                {/* Add cart item count here if available */}
              </Badge>
            </Link>
            <Link
              to="/order"
              className={`nav-link text-white ${isActive("/order")}`}
            >
              Orders
            </Link>
          </Nav>

          {email && (
            <Link
              to="/dashboard"
              className="nav-link text-white email text-sm-md bg-dark"
            >
              <span>{emailshort}</span>
            </Link>
          )}

          
            {/* {email && (
            <Dropdown align="end">
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                {email}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/dashboard">Dashboard</Dropdown.Item>
                <Dropdown.Item as={Link} to="/order">Orders</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
             )} */}

          <Button
            variant="outline-light"
            onClick={logoutHandler}
            className="ms-3"
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AltHeadbar;
