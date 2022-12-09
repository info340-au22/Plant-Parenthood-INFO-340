import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";


export function PlantCard(props) {
    const [flip, setFlip] = useState(false);

    return (
        <ReactCardFlip isFlipped= {flip} flipDirection="vertical">
            {/* yarn add react-card-flip */}

            <div className="explore-item">
                <h3>{props.plants.name}</h3>
                <div className="plant-img">
                    <img src={props.plants.img} alt={props.plants.alt}></img>
                </div>
                <button className="btn btn-default" onClick={() => setFlip(!flip)}>Details</button>
            </div>
            <div className="explore-item">
                <div className = "card-info">
                    <h5>
                        Maintenance: 
                    </h5>
                    <p> 
                        {props.plants.MAINTENANCE}
                    </p>

                    <h5>
                        Lighting: 
                    </h5>
                    <p>
                        {props.plants.LIGHTING}
                    </p>

                    <h5>   
                        Humidity:
                    </h5>
                    <p>
                        {props.plants.HUMIDITY}
                    </p>

                    <h5>
                        Cost:
                    </h5>
                    <p>
                        {props.plants.COST}
                    </p>
                </div>
                {/* <h5>
                    Lighting Description: 
                </h5>
                <p>
                    {props.plants.LIGHTING_DESCRIPTION}
                </p> */}
            
                {/* <h5>
                    Watering:
                </h5>
                <p>
                    {props.plants.WATERING}
                </p> */}

                <br />
                <button className="btn btn-default" onClick={() => setFlip(!flip)}>Plant</button>

                {/* <button></button> */}
            </div>

            {/* <div className="explore-item">
                <h3>{props.plants.name}</h3>
                <div className="plant-img">
                    <img src={props.plants.img} alt={props.plants.alt}></img>
                </div>
            </div> */}
        </ReactCardFlip>
            

        //</ReactCardFlip>
    )
}

export function PlantList(props) {
    
    // creating dom elements for filter
    const costArray = ['$', '$$', '$$$'];
    const [selectedCost, isSelectedCostType] = useState('');

    const optionElems = costArray.map((level) => {
        return <option key={level} value={level}>{level}</option>
    })

    // search bar
    const [query, setQuery] = useState("");
    const plants = props.plants.filter(plant => plant.name.toLowerCase().includes(query)).map((plant) =>
        <PlantCard key={plant.name} plants={plant} />
    );

    function changeSelectedElem(event) {
        isSelectedCostType(event.target.value);
    }

    function handleClick() {
        props.applyFilterCallback(selectedCost);
    }

    return (
        <div className="explore-body">
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>
            {/* Search Bar */}
            <input className="search-bar" type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
            {/* Filter By */}
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <select id="costSelect" className="form-select" value={selectedCost} onChange={changeSelectedElem}>
                        <option value="">Select Cost level</option>
                        {optionElems}
                    </select>
                    <div className="col-auto">
                        <button onClick={handleClick} id="submitButton" type="submit" className="btn btn-secondary">Apply Filter</button>
                    </div>
                </div>
            </div>
            {/* Plant Cards */}
            <div className="explore-container">
                {plants}
            </div>
        </div>
    )
}


