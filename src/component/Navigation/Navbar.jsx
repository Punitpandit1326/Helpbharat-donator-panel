import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
// import { IoMdArrowDropdown } from "react-icons/io";
import { useAuth } from "../../App"


const Navigation = ({ activeLink }) => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useAuth();

  const handleClick = () => {
    navigate('/login')
  }
  const userLogout = () => {
    logout()
    navigate("/login")
  };

  return (
    <>
      <div className="top-strip">
        <div className="left">
          <a href='#' className='top-strip-connect'><i className="fas fa-phone"></i> <span>+1-206-156 2849</span></a>
          <a href='#' className='top-strip-connect'><i className="fas fa-envelope"></i> <span>info@helpbharat.com</span></a>
        </div>
        <div className="right ms-5">
          <ul>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </ul>
        </div>
      </div>
      <Navbar expand="lg" variant='dark' className='NavbarMAin'>
        <Container>
          <Navbar.Brand href="#" className='logo'>
            <h4 className='text-white'><Link to={'/'} className='logo-link'>HelpBharat</Link></h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="NavFont ms-auto my-lg-0 navfont"
              navbarScroll
            >
              <Link to={'/fundraiser'} className='link-nav'>Start a fundraiser</Link>
              <Link to={'/'} className='link-nav'>Donate</Link>
              <Link to={'/'} className='link-nav'>About us</Link>
              <Link to={'/'} className='link-nav'>News</Link>
            </Nav>
            {loggedIn ? (<Button className='btn-donate' onClick={userLogout}>Logout</Button>) :
              <Button onClick={handleClick} className='btn-donate'>Get Started</Button>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
