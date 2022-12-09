import React from 'react';
import { useState } from 'react';
import { PlantList } from "./Explore.js";

export function PlantInfo(props) {
    const plants = props.plants.map((plant) => 
        <p key={plant.name} plantData={plant}></p>
    );
    console.log(props.plantData);

    return (
        <div className="plant-info-container">
            {plants}
            <h1 className="plant-info-heading">{props.plants.name}</h1>
                <div className="plant-img-container">
                    <div className="plant-img">
                        <img src={props.plants.img} alt={props.plants.alt} />
                    </div>
                </div>
            <div className="care-info">
                <p>Plant Care Information</p>
                <ul>
                    <li>Lighting Description: {props.plants.LIGHTING_DESCRIPTION}</li>
                    <li>Watering: {props.plants.WATERING}</li>
                    <li>Props: {props.plants.TEMPERATURE}</li>
                    {/* <li>WATERING: Keep compost moist and allow it to dry out slightly between watering's.</li>
                    <li>Average warmth at 15°C - 21°C / 60°F - 72°F. Try to keep the temperature above 15°C / 60°F in Winter.</li> */}
                </ul>
            </div>
      </div>
    )
}


