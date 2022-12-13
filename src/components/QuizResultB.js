import React from 'react';

export function QuizResultBPage (props) {

    return (
        <div className="explore-container">
            <h1 className = "plant-info-heading quiz-result-heading">Medium Maintenance Plants Would Fit You Best!</h1>
            <div className="plant-info-img">
                <div className = "quiz-img-column">
                    <img src = "../img/africanviolet.png" alt = "African Violet" Source = "ROBERT HORVAT/GETTY IMAGES"/>
                    <figcaption>African Violet</figcaption>
                </div>
                <div className = "quiz-img-column">
                    <img src = "../img/angelwingbegonia.png" alt = "Angel Wing Begonia" Source = "HOME FOR THE HARVEST"/>
                    <figcaption>Angel Wing Begonia</figcaption>
                </div>
                <div className = "quiz-img-column">
                    <img src = "../img/Cyclamen.png" alt = "Cyclamen" Source = "Plant Care Today" />
                    <figcaption>Cyclamen</figcaption>
                </div>
            </div>
            <p className = "result-descrip">You like a plant that can present a bit of a challenge, but nothing too crazy. You're willing to put in some work, frequent watering and the occassional need for fertilizer doesn't scare you. We respect that. These are our recommendations for you: African Violet, Angel Wing Begonia, and Cyclamen! Refer to our Explore Page for more information!</p>
        </div>
    )
}