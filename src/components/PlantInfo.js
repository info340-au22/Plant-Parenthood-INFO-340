import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { PlantListPage } from "./Explore.js";
import PLANT_DATA from "../data/plants.json";
import _ from 'lodash';


export function PlantInfoPage(props) {
    const plantNameString = useParams();
    let plant =  _.find(PLANT_DATA, {name: plantNameString.plantName}); //find plant in data

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
