import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PlantList } from "./Explore.js";
import PLANT_DATA from "../data/plants.json";
import _ from 'lodash';


export function PlantInfo(props) {
    const plantNameString = useParams();
    console.log(plantNameString);

    let plant = _.find(PLANT_DATA, { name: plantNameString.plantName }); //find pet in data

    console.log(plant)

    // const plants = props.plants.map((plant) => {
    //     return <p key={plant.name} plantdata={plant}></p>
    // }
    // );

    return (
        <div className="plant-info-container">
            {/* {plants} */}
            <h1 className="plant-info-heading">{plant.name}</h1>
            <div className="container plant-info-img-container">
                <div className="row">
                    <div className="col">
                        <div className="plant-info-img">
                            <img src={plant.img} alt={plant.alt} />
                        </div>
                    </div>
                    <div className="col care-info">
                        <h2>Plant Care Information</h2>
                        <ul>
                            <span><em>Maintenance:</em> {plant.MAINTENANCE}<hr className="solid"></hr></span>
                            <span><em>Lighting:</em> {plant.LIGHTING}<hr className="solid"></hr></span>
                            <span><em>Lighting Description:</em> {plant.LIGHTING_DESCRIPTION}<hr className="solid"></hr></span>
                            <span><em>Watering:</em> {plant.WATERING}<hr className="solid"></hr></span>
                            <span><em>Temperature:</em> {plant.TEMPERATURE}<hr className="solid"></hr></span>
                            <span><em>Cost:</em> {plant.COST}</span>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

// "name": "Areca Palm",
// "img": "../img/arecapalm.png",
// "MAINTENANCE": "Low",
// "LIGHTING": "Indirect",
// "LIGHTING_DESCRIPTION": "Areca Palm can survive in dark shady areas and also areas with direct sunlight but both must be moderated. To avoid changing locations of the plant, keep the plant in a bright spot that receives no direct sunlight.",
// "HUMIDITY": "Medium",
// "WATERING": "It would be ideal to ensure that the soil of the plant is always moist. In Spring and Summer months, you will need to water the plant more often to ensure that soil is moist.",
// "TEMPERATURE": "59 to 70 degrees",
// "COST": "$$",
// "alt": "Areca Palm",
// "Source": "GARDENING KNOW HOW
