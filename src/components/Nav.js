import React from 'react'; //import React Component
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function PlantNav() {
  return (
    <>
    <Navbar className="color-Nav" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">Plant Parenthood</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link aria-label="Quiz Page" as={Link} to='/QuestionTemplate.js'>Quiz</Nav.Link>
                    <Nav.Link aria-label="Calendar Page" as={Link} to='/Calendar.js'>Calendar</Nav.Link>
                    <Nav.Link aria-label="Explore Page" as={Link} to='/Explore.js'>Explore</Nav.Link>
                    <Nav.Link as={Link} aria-label="About Page" to='/About.js'>About</Nav.Link>
                    <Button variant="light" aria-label="Sign In" href='/SignIn.js'>Sign In</Button>
                    {/* <Nav.Item>
                        <Button variant="light" href='/SignOut.js'>Sign Out</Button>
                    </Nav.Item> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</>
  );
}