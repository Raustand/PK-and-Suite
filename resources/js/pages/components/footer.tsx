import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo1.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Navbar.Brand href="/"> 
              <img src={Logo} alt="Pk-Hotel Logo" style={{ height: "80px", width: "90px", }}/>
              </Navbar.Brand>
            </div>
            <p className="text-sm text-white/90">
              Trusted in more than 100 countries & 5 million customers. Have any
              query? contact us we are here for you.
            </p>
          </div>

          <div className="nav-white mr-8 text-decoration-none space-y-4 ">
            <h3 className="text-lg font-bold">Quick links</h3>
            <div className="space-y-2 text-sm">
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p>hotel@pagedone.com</p>
              <p>+91 945 658 3256</p>
              <p> Douala, Cameroon.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <form className="space-y-2">
              <Input
                className="bg-white/10 border-white/20 placeholder:text-white/50"
                placeholder="Enter email.."
                type="email"
              />
              <Button
                className="bg-white/10 border-white/20 placeholder:text-white/50"
                type="submit"
              >
                Subscribe
                <svg
                  className="m ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>


        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-center gap-4 py-6 text-center text-sm md:h-16 md:flex-row md:py-0">
          <div className="text-white/60">
            © 2025 P-K Hotel & Suite | All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer ;
