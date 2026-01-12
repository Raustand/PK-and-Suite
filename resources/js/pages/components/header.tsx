import React from "react";
import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo1.png";
import Logo1 from "../../assets/logo.png";
import Logo2 from "../../assets/h-logo.png";
import { type SharedData } from '@/types';




const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="ms-auto bg-blue-900 font-sans">
      <Container>
        <Navbar.Brand as={Link} href="/" className="group">
          <span className="text-red-900 font-black text-2xl lg:text-3xl tracking-tight bg-gradient-to-r from-white via-indigo-100 to-transparent bg-clip-text group-hover:from-indigo-100 group-hover:to-white transition-all duration-300">
           PK-Hotel
          </span>
         <span className="text-amber-400 text-lg font-light ml-2 group-hover:text-indigo-100 transition-colors">
            & Suite
         </span>
        </Navbar.Brand>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold nav-white">
          <Link href="/" prefetch className="nav-link text-decoration-none">Home</Link>
          <Link href="/aboutus" prefetch className="nav-link text-decoration-none">About us</Link>
          <Link href="/services" prefetch className="nav-link text-decoration-none">Services</Link>
          <Link href="/ourrooms" prefetch className="nav-link text-decoration-none">Rooms</Link>
          <Link href="/gallery" prefetch className="nav-link text-decoration-none">Gallery</Link>
          <Link href="/contactus" prefetch className="nav-link text-decoration-none">Contact Us</Link>
          <Link href="/login" prefetch className="nav-link text-decoration-none">Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </>
   );
};

export default Header;