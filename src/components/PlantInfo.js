import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PlantList } from "./Explore.js";
import PLANT_DATA from "../data/plants.json";
import _ from 'lodash';


export function PlantInfo(props) {
    const plantNameString = useParams();
    console.log(plantNameString);

    let plant =  _.find(PLANT_DATA, {name: plantNameString.plantName}); //find pet in data

    console.log(plant)

    // const plants = props.plants.map((plant) => {
    //     return <p key={plant.name} plantdata={plant}></p>
    // }
    // );

    return (
        <div className="plant-info-container">
            {/* {plants} */}
            <h1 className="plant-info-heading">{plant.name}</h1>
                <div className="plant-img-container">
                    <div className="plant-img">
                        <img src={plant.img} alt={plant.alt} />
                    </div>
                </div>
            <div className="care-info">
                <p>Plant Care Information</p>
                <ul>
                    <li>Lighting Description: {plant.LIGHTING_DESCRIPTION}</li>
                    <li>Watering: {plant.WATERING}</li>
                    <li>Temperature: {plant.TEMPERATURE}</li>
                    {/* <li>WATERING: Keep compost moist and allow it to dry out slightly between watering's.</li>
                    <li>Average warmth at 15°C - 21°C / 60°F - 72°F. Try to keep the temperature above 15°C / 60°F in Winter.</li> */}
                </ul>
            </div>
      </div>
    )
}


