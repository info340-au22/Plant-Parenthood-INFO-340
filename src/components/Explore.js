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
    
    // creating dom elements for filter
    const maintenanceArray = ['Low', 'Medium', 'High'];
    const [selectedMaintenance, isSelectedMaintenanceType] = useState('');

    const optionElems = maintenanceArray.map((level) => {
        return <option key={level} value={level}>{level}</option>
    })

    // search bar
    const [query, setQuery] = useState("");
    const plants = props.plants.filter(plant => plant.name.toLowerCase().includes(query)).map((plant) =>
        <PlantCard key={plant.name} plants={plant} />
    );

    function changeSelectedElem(event) {
        isSelectedMaintenanceType(event.target.value);
    }

    function handleClick() {
        props.applyFilterCallback(selectedMaintenance);
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
                    <select id="maintenanceSelect" className="form-select" value={selectedMaintenance} onChange={changeSelectedElem}>
                        <option value="">Select maintenance level</option>
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


