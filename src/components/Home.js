import React from 'react';
import { SignIn } from './Nav.js';

export function HomePage(props) {

    return (
        <>
        <div className="home-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col backdrop-container"></div>
                    <div className="col">
                        <div className="right-col-container">
                        <img
                            className="plant"
                            src="img/plant-icon-green.png"
                            alt="plant icon"
                        />
                        <h1>Plant Parenthood</h1>
                        <p>Start your plant journey today</p> 
                        <p>Explore different types of plants</p>
                        <p>Take the quiz to find the plants that work best for you</p>
                        <p>Use the calendar to track your watering schedule</p>
                        <SignIn />
                    </div>
                    </div>
                </div>
            </div>
            <footer>
                <cite>© Alp Duran https://unsplash.com/photos/5MrddkW_Cbg</cite>
            </footer>
        </div>
        </>
    );
}