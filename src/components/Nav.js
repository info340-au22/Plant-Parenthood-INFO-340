import React from 'react'; //import React Component
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { getAuth, signOut } from 'firebase/auth';

function SignIn() {
    return (
        <Button variant="light" aria-label="Sign In" href='/SignIn'>Sign In</Button>
    );
}

function SignOut() {
    const handleSignOut = (event) => {
        signOut(getAuth());
        console.log("signed out");
    }
    return (
        <Button variant="light" aria-label="Sign Out" onClick={handleSignOut}>Sign Out</Button>
    );
}

export function PlantNav(props) {
    const currentUser = props.currentUser;
    let SignComponent = null;

    if (currentUser.userId === null) {
        console.log("show sign in button")
        SignComponent = <SignIn />;
    } else {
        console.log("show sign out button")
        SignComponent = <SignOut />;
    }

    return (
        <>
            {/* might need to make into flexbox, check if it's a flexbox, 
        one div for left elems and one for right elems */}
            <Navbar className="color-Nav" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Plant Parenthood</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link aria-label="Quiz Page" as={Link} to='/QuestionTemplate'>Quiz</Nav.Link>
                            <Nav.Link aria-label="Calendar Page" as={Link} to='/Calendar'>Calendar</Nav.Link>
                            <Nav.Link aria-label="Explore Page" as={Link} to='/Explore'>Explore</Nav.Link>
                            <Nav.Link as={Link} aria-label="About Page" to='/About'>About</Nav.Link>
                            {SignComponent}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}