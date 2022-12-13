import React from 'react';

export function QuizResultAPage (props) {

    return (
        <div className="explore-container">
            <h1 className = "plant-info-heading quiz-result-heading">Low Maintenace Plants Would Fit You Best!</h1>
            <div className="plant-info-img">
                <div className = "quiz-img-column">
                    <img src = "../img/aglaonema.png" alt = "Aglaonema" Source = "plants.com"/>
                </div>
                <div className = "quiz-img-column">
                    <img src = "../img/babyrubberplant.png" alt = "Baby Rubber Plant" Source = "Green Door Garden"/>                    </div>
                <div className = "quiz-img-column">
                    <img src = "../img/cacti.png" alt = "Cacti" Source = "House Beautiful" />
                </div>
            </div>
            <p className = "result-descrip">You're interested in a plant that will require low effort. Maybe you're a newbie who doesn't have much experience, or maybe you've had your fair share of plant care experience but you like a plant that doesn't require too much of a fuss. These are our recommendations for you: Aglaonema, Baby Rubber Plant and Cacti!</p>
        </div>
    )
}