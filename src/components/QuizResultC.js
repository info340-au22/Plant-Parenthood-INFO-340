import React from 'react';

export function QuizResultCPage (props) {

    return (
        <div className="explore-container">
            <h1 className = "plant-info-heading quiz-result-heading">High Maintenance Plants Would Fit You Best!</h1>
            <div className="plant-info-img">
                <div className = "quiz-img-column">
                    <img src = "../img/bonsai.png" alt = "Bonsai" Source = "OurHousePlants"/>
                </div>
                <div className = "quiz-img-column">
                    <img src = "../img/Calathea.png" alt = "Calathea" Source = "Hirt's Gardens"/>
                </div>
                <div className = "quiz-img-column">
                    <img src = "../img/Croton.png" alt = "Croton" Source = "Jackson Perkins" />                    
                </div>
            </div>
            <p className = "result-descrip">Looks like we got a plant care expert in the house! You don't mind plants that require the perfect amount of lighting, watering, and temperature to thrive. You're ready to take on a challenge - we love to see it. These are our recommendations for you: Bonsai, Calathea, and Croton!</p>
        </div>
    )
}