import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

export function PlantList(props) {
    let plants = props.plants;

    // creating dom elements for filter
    const costArray = ['$', '$$', '$$$'];
    const [selectedCost, isSelectedCostType] = useState('');

    // const maintenanceArray = ['Low', 'Medium', 'High'];
    // const [selectedMaintenance, isSelectedMaintenanceType] = useState('');

    const costOptionElems = costArray.map((level) => {
        return <option key={level} value={level}>{level}</option>
    })

    // const maintenanceOptionElems = maintenanceArray.map((level) => {
    //     return <option key={level} value={level}>{level}</option>
    // })

    // search bar
    const [query, setQuery] = useState("");
    const plantsFiltered = plants.filter(plant => plant.name.toLowerCase().includes(query)).map((plant) => {
        return <PlantCard key={plant.name} plants={plant} />
    }
    );

    function changeCostSelectedElem(event) {
        isSelectedCostType(event.target.value);
    }

    // function changeMaintenanceSelectedElem(event) {
    //     isSelectedMaintenanceType(event.target.value);
    // }

    function handleClick() {
        props.applyFilterCallback(selectedCost);
    }

    // function handleClick() {
    //     props.applyFilterCallback(selectedMaintenance);
    // }

    return (
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>
            {/* Search Bar */}
            <input className="search-bar" type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
            {/* Filter By */}
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <select id="costSelect" className="form-select" value={selectedCost} onChange={changeCostSelectedElem}>
                        <option value="">Select Cost Level</option>
                        {costOptionElems}
                    </select>

                    {/* <select id="maintenanceSelect" className="form-select" value={selectedMaintenance} onChange={changeMaintenanceSelectedElem}>
                        <option value="">Select Maintenance level</option>
                        {maintenanceOptionElems}
                    </select> */}

                    <div className="col-auto">
                        <button onClick={handleClick} id="submitButton" type="submit" className="btn btn-secondary" aria-label="Apply Filter">Apply Filter</button>
                    </div>
                </div>

            </div>
            {/* Plant Cards */}
            <div className="explore-container">
                {plantsFiltered}
            </div>
        </div>
    )
}

function PlantCard(props) {
    const [flip, setFlip] = useState(false);
    let plant = props.plants;

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <div className="explore-item text-center">
                <h3>{plant.name}</h3>
                <div className="plant-img">
                    <img src={plant.img} alt={plant.alt}></img>
                </div>
                <button className="btn btn-default detail" aria-label="View Details" onClick={() => setFlip(!flip)}>Details</button>
            </div>
            <div className="explore-item">
                <div className="card-info">
                    <h4><em>Maintenance: </em>{plant.MAINTENANCE}</h4>
                    <h4><em>Lighting: </em>{plant.LIGHTING}</h4>
                    <h4><em>Humidity: </em>{plant.HUMIDITY}</h4>
                    <h4><em>Cost: </em>{plant.COST}</h4> 
                    <Link to={"/Explore.js/" + plant.name} className="plant-more-info" >
                        More Info...
                    </Link>
                </div>
                <br />
                <div className="text-center">
                    <button className="btn btn-default explore-plant" aria-label="View Plant" onClick={() => setFlip(!flip)}>Plant</button>
                </div>
            </div>
        </ReactCardFlip>


        //</ReactCardFlip>
    )
}
