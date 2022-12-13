import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { PlantList } from "./Explore.js";
import PLANT_DATA from "../data/plants.json";
import _ from 'lodash';

export function QuizResultAPage (props) {
    const plantNameString = useParams();
    let plant =  _.find(PLANT_DATA, {name: plantNameString.plantName}); //find plant in data

    return (
        <div className="explore-container">
            <h1 className = "plant-info-heading quiz-result-heading">Low Maintenace Plants Would Fit You Best!</h1>
            {/* <div className = "row"> */}
                <div className="plant-info-img quiz.img">
                    <div className = "quiz-img-column">
                        <img src = "../img/aglaonema.png" alt = "Aglaonema" Source = "plants.com"/>
                    </div>
                    <div className = "quiz-img-column">
                        <img src = "../img/babyrubberplant.png" alt = "Baby Rubber Plant" Source = "Green Door Garden"/>
                    </div>
                    <div className = "quiz-img-column">
                        <img src = "../img/cacti.png" alt = "Cacti" Source = "House Beautiful" />
                    </div>
                </div>
            {/* </div> */}
            <p>A low maintenance plant would fit you best. You're interested in a plant that will require low effort. Maybe you're a newbie who doesn't have much experience, or maybe you've had your fair share of plant care experience but you like a plant that doesn't require too much of a fuss. These are our recommendations for you: Aglaonema, Baby Rubber Plant and Cacti!</p>
        </div>
    )
}