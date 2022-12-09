import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { Routes, Route, Link, useNavigate} from "react-router-dom";
import { Home } from "./Home.js";
import { PlantCalendar } from "./Calendar.js";
import { PlantList } from "./Explore.js";
import { About } from "./About.js"
import { Question } from './QuestionTemplate.js';
import { PlantInfo } from './PlantInfo.js' 
import SignIn from './SignIn.js'

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import DEFAULT_USERS from '../data/users.json';

export default function App(props) {

    // state data for filter
    const [displayedPlants, changeDisplayedPlants] = useState(props.plants);

    function applyFilter(selectedCostLevel) {
        if (selectedCostLevel === "") {
            changeDisplayedPlants(props.plants);
        } else {
            changeDisplayedPlants(props.plants.filter((plant) => {
                if (plant.COST === selectedCostLevel) {
                    return plant;
                }
            }));
        }
    }

    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

    const navigateTo = useNavigate(); //navigation hook

    //effect to run when the component first loads
    useEffect(() => {
        //log in a default user
        // loginUser(DEFAULT_USERS[1])
    
        const auth = getAuth();
        //                 authenticator, a callback
        onAuthStateChanged(auth, (firebaseUser) => {
          if(firebaseUser) {
            console.log("signing in as", firebaseUser.displayName)
            console.log(firebaseUser);
            firebaseUser.userId = firebaseUser.uid;
            firebaseUser.userName = firebaseUser.displayName;
            firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
            setCurrentUser(firebaseUser);
          }
          else { //no user
            console.log("signed out");
            setCurrentUser(DEFAULT_USERS[0]); //change the null user
          }
        })
    
    
      }, [])

    const loginUser = (userObj) => {
        console.log("logging in as", userObj.userName);
        setCurrentUser(userObj);
        if(userObj.userId !== null){
          navigateTo('/'); //go to home
        }
    }

    // calendar popup
    const [show, setShow] = useState(false)

    return (
        <div>
            <>
                <Navbar className="color-Nav" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Plant Parenthood</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to='/QuestionTemplate.js'>Quiz</Nav.Link>
                                <Nav.Link as={Link} to='/Calendar.js'>Calendar</Nav.Link>
                                <Nav.Link as={Link} to='/Explore.js'>Explore</Nav.Link>
                                <Nav.Link as={Link} to='/About.js'>About</Nav.Link>
                            </Nav>
                            <Button variant="light">Login</Button>
                            <Button variant="light">Sign Up</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
            <div>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/QuestionTemplate.js" element={<Question />} />
                        <Route path="/SignIn.js" element={<SignIn currentUser={currentUser} loginCallback={loginUser} />} />
                        <Route path="/Calendar.js" element={<PlantCalendar />} />
                        <Route path="/Explore.js" element={<PlantList applyFilterCallback={applyFilter} plants={displayedPlants} />} />
                        <Route path="/PlantInfo.js" element={<PlantInfo plants={displayedPlants}/>}/>
                        <Route path="/About.js" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}