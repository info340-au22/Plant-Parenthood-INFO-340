import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, Link} from "react-router-dom";
import { Home } from "./Home.js";
import { Quiz } from "./Quiz.js";
import { Calendar } from "./Calendar.js";
import { Explore, PlantList } from "./Explore.js";
import { About } from "./About.js"



export default function App(props) {
    return (
        <div>
        <>
            <Navbar className="color-Nav" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Plant Parenthood</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to='/'>Home</Nav.Link> */}
                        <Nav.Link as={Link} to='/Quiz.js'>Quiz</Nav.Link>
                        <Nav.Link as={Link} to='/Calendar.js'>Calendar</Nav.Link>
                        <Nav.Link as={Link} to='/Explore.js'>Explore</Nav.Link>
                        <Nav.Link as={Link} to='/About.js'>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Quiz.js" element={<Quiz/>}/>
                <Route path="/Calendar.js" element={<Calendar/>}/>
                <Route path="/Explore.js" element={<PlantList  plants={props.plants}/>}/>
                <Route path="/About.js" element={<About/>}/>
            </Routes>
        </div>

        </div>
    )
}