import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { PlantNav } from './Nav.js';
import { Home } from "./Home.js";
import { PlantCalendar } from "./Calendar.js";
import { About } from "./About.js"
import { Question } from './QuestionTemplate.js';
import { PlantInfo } from './PlantInfo.js';
import { Explore } from './Explore.js';
import { PlantList } from './PlantList.js';

import SignIn from './SignIn.js'

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import DEFAULT_USERS from '../data/users.json';

export default function App(props) {
    // Search/filter rendered plants
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

    // Sign in user
    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user
    const navigateTo = useNavigate(); 

    //effect to run when the component first loads
    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("signing in as", firebaseUser.displayName)
                console.log(firebaseUser);
                firebaseUser.userId = firebaseUser.uid;
                firebaseUser.userName = firebaseUser.displayName;
                firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
                setCurrentUser(firebaseUser);
            }
            else { //no user
                console.log("signed out");
                setCurrentUser(DEFAULT_USERS[0]);
            }
        })

    }, [])

    const loginUser = (userObj) => {
        console.log("logging in as", userObj.userName);
        setCurrentUser(userObj);
    }

    return (
        <div>
            <PlantNav currentUser={currentUser}/>
            <div>
                {/* name route components after what they are, state 'page' */}
                <Routes>  
                    <Route path="/" element={<Home />} />
                    <Route path="/QuestionTemplate.js" element={<Question />} />
                    <Route path="/Explore.js" element={<Explore />} >
                        <Route path="/Explore.js/:plantName" element={<PlantInfo plants={displayedPlants} />} />
                        <Route index={true} element={<PlantList applyFilterCallback={applyFilter} plants={displayedPlants}/>} />
                    </Route>
                    <Route path="/About.js" element={<About />} />
                    <Route path="/SignIn.js" element={<SignIn currentUser={currentUser} loginCallback={loginUser} />} />
                    {/* Calendar Page Protected */}
                    <Route element={<ProtectedPage currentUser={currentUser} />}>
                        <Route path="/Calendar.js" element={<PlantCalendar currentUser={currentUser} />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );

    // Protected Routes
    function ProtectedPage(props) {
        if (props.currentUser.userId == null) {                
            return <Navigate to="/SignIn.js"></Navigate>
        } 
        else { 
            return <Outlet />
        }
    }
}