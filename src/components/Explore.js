import React from 'react';
import axios from 'axios';
import { useState } from 'react';


export function PlantCard(props) {

    return (
        <div className="explore-item">
            <h3>{props.plants.name}</h3>
            <div className="plant-img">
                <img src={props.plants.img} alt={props.plants.alt}></img>
            </div>
        </div>
    )
}

export function PlantList(props) {
    const [query, setQuery] = useState("");

    const plants = props.plants.filter(plant=>plant.name.toLowerCase().includes(query)).map((plant) => 
        <PlantCard key={plant.name} plants={plant} />
    );

    const [selectedMaintenance, isSelectedMaintenanceType] = useState('');

    return (
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>
            <input type="text" placeholder="Search..." onChange={(e)=> setQuery(e.target.value)}/>
            
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <select id="teamSelect" className="form-select" value={selectedMaintenance}>
                        <option value="">Show all teams</option>
                            {/* {optionElems} */}
                    </select>
                <div className="col-auto">
                    <button id="submitButton" type="submit" className="btn btn-warning">Apply Filter</button>
                </div> 
            </div>
        </div>
            <div className="explore-container">
                {plants}
            </div>
        </div>
    )
}


