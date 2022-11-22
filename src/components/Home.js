import React from 'react';

export function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div id="backdrop-container" className="col"></div>
                    <div className="col">
                        <img
                            className="plant"
                            src="img/plant-icon-green.png"
                            alt="plant icon"
                        />
                        <h1>Plant Parenthood</h1>
                        <h2>Start your plant journey today</h2>
                        <h2>Explore different types of plants</h2>
                        <h2>Take the quiz to find the plants that work best for you</h2>
                        <h2>Use the calendar to track your watering schedule</h2>
                        <button className="btn btn-light" aria-label="login">
                            Login
                        </button>
                        <button className="btn btn-light" aria-label="sign up">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <footer>
                <cite>© Alp Duran https://unsplash.com/photos/5MrddkW_Cbg</cite>
            </footer>
        </>

    );
}