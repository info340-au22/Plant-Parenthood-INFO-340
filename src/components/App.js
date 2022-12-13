import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { PlantNav } from './Nav.js';
import { HomePage } from "./Home.js";
import { PlantCalendarPage } from "./Calendar.js";
import { AboutPage } from "./About.js"
import { QuestionPage } from './QuestionTemplate.js';
import { PlantInfoPage } from './PlantInfo.js';
import { ExplorePage } from './Explore.js';
import { PlantListPage } from './PlantList.js';
import { QuizResultAPage } from './QuizResultA.js';
import { QuizResultBPage } from './QuizResultB.js';
import { QuizResultCPage } from './QuizResultC.js';

import SignInPage from './SignIn.js'

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
                firebaseUser.userId = firebaseUser.uid;
                firebaseUser.userName = firebaseUser.displayName;
                firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
                setCurrentUser(firebaseUser);
            }
            else { //no user
                setCurrentUser(DEFAULT_USERS[0]);
            }
        })

    }, [])

    const loginUser = (userObj) => {
        setCurrentUser(userObj);
    }

    return (
        <div>
            <PlantNav currentUser={currentUser} />
            <div>
                <Routes>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<HomePage />} currentUser={currentUser} />
                    <Route path="/QuestionTemplate" element={<QuestionPage />} />
                    <Route path="/QuizResultA" element={<QuizResultAPage plants={displayedPlants} />} />
                    <Route path="/QuizResultB" element={<QuizResultBPage plants={displayedPlants} />} />
                    <Route path="/QuizResultC" element={<QuizResultCPage plants={displayedPlants} />} />
                    <Route path="/Explore" element={<ExplorePage />} >
                        <Route path="/Explore/:plantName" element={<PlantInfoPage plants={displayedPlants} />} />
                        <Route index={true} element={<PlantListPage applyFilterCallback={applyFilter} plants={displayedPlants} />} />
                    </Route>
                    <Route path="/About" element={<AboutPage />} />
                    <Route path="/SignIn" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />

                    {/* Calendar Page Protected */}
                    <Route element={<ProtectedPage currentUser={currentUser} />}>
                        <Route path="/Calendar" element={<PlantCalendarPage currentUser={currentUser} />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );

    // Protected Routes
    function ProtectedPage(props) {
        if (props.currentUser.userId === null) {
            return <Navigate to="/SignIn"></Navigate>
        }
        else {
            return <Outlet />
        }
    }
}