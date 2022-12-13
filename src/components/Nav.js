import React from 'react'; //import React Component
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { getAuth, signOut } from 'firebase/auth';

export function SignIn() {
    return (
        <Button variant="light" aria-label="sign in" href='/SignIn'>Sign In</Button>
    );
}

function SignOut() {
    const handleSignOut = (event) => {
        signOut(getAuth());
    }
    return (
        <Button variant="light" aria-label="sign out" onClick={handleSignOut}>Sign Out</Button>
    );
}

export function PlantNav(props) {
    const currentUser = props.currentUser;
    let SignComponent = null;

    if (currentUser.userId === null) {
        SignComponent = <SignIn />;
    } else {
        SignComponent = <SignOut />;
    }

    return (
        <>
            <Navbar className="color-Nav" variant="dark" expand="lg">
                <Navbar.Brand href="/">Plant Parenthood</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link aria-label="Quiz Page" as={Link} to='/QuestionTemplate'>Quiz</Nav.Link>
                        <Nav.Link aria-label="Calendar Page" as={Link} to='/Calendar'>Calendar</Nav.Link>
                        <Nav.Link aria-label="Explore Page" as={Link} to='/Explore'>Explore</Nav.Link>
                        <Nav.Link as={Link} aria-label="About Page" to='/About'>About</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto sign-in-button">
                        {SignComponent}
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </>
    );
}