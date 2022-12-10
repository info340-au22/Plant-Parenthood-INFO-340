import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

export function PlantList(props) {
    let plants = props.plants;

    // creating dom elements for filter
    const costArray = ['$', '$$', '$$$'];
    const [selectedCost, isSelectedCostType] = useState('');

    const optionElems = costArray.map((level) => {
        return <option key={level} value={level}>{level}</option>
    })

    // search bar
    const [query, setQuery] = useState("");
    const plantsFiltered = plants.filter(plant => plant.name.toLowerCase().includes(query)).map((plant) => {
        return <PlantCard key={plant.name} plants={plant} />
    }
    );

    function changeSelectedElem(event) {
        isSelectedCostType(event.target.value);
    }

    function handleClick() {
        props.applyFilterCallback(selectedCost);
    }

    return (
        <div>
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
            {/* yarn add react-card-flip */}

            <div className="explore-item">
                <h3>{plant.name}</h3>
                <div className="plant-img">
                    <img src={plant.img} alt={plant.alt}></img>
                </div>
                <button className="btn btn-default" aria-label="View Details" onClick={() => setFlip(!flip)} >Details</button>
            </div>
            <div className="explore-item">
                <div className="card-info">
                    <h5>Maintenance:</h5>
                    <p>{plant.MAINTENANCE}</p>

                    <h5>Lighting:</h5>
                    <p>{plant.LIGHTING}</p>

                    <h5>Humidity:</h5>
                    <p>{plant.HUMIDITY}</p>

                    <h5>Cost:</h5>
                    <p>{plant.COST}</p>

                    <Link to={"/Explore.js/" + plant.name} className="plant-more-info-" >
                        More Info...
                    </Link>

                </div>

                <br />
                <button className="btn btn-default" aria-label="View Plant" onClick={() => setFlip(!flip)}>Plant</button>
            </div>
        </ReactCardFlip>


        //</ReactCardFlip>
    )
}
