import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function MyNavbar() {
  return (
    <div className='container-fluid'>
      <Navbar bg="" variant="dark" expand="md" className='Navbar'>
        <Navbar.Brand className='text-dark' href="/">
        <Link to="/" className='text-dark'>
        Swat's Anime Blog
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"   style={{
          backgroundColor: '#f1356d',
        }}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='home' href="/">
            <Link to="/" className='home'>
            Home
            </Link>
            </Nav.Link>
            <Nav.Link href="/create" className='new'>
            <Link to="/create" className='new'>
            Create a blog
            </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
