import React from 'react';

export function Home() {

    return (
        <>
        <div className="home-body">
            <div className="container-fluid">
                <div className="row">
                    <div id="backdrop-container" className="col"></div>
                    <div className="col">
                        <div className="right-col-container">
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
                        <a className="btn" aria-label = "Sign In" type="button" href="/SignIn.js">Sign In</a>
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