import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

export function PlantListPage(props) {
    let plants = props.plants;

    // creating dom elements for filter
    const costArray = ['$', '$$', '$$$'];
    const [selectedCost, isSelectedCostType] = useState('');

    const costOptionElems = costArray.map((level) => {
        return <option key={level} value={level}>{level}</option>
    })

    // search bar
    const [query, setQuery] = useState("");
    const plantsFiltered = plants.filter(plant => plant.name.toLowerCase().includes(query)).map((plant) => {
        return <PlantCard key={plant.name} plants={plant} />
    }
    );

    function changeCostSelectedElem(event) {
        isSelectedCostType(event.target.value);
    }

    function handleClick() {
        props.applyFilterCallback(selectedCost);
    }

    return (
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index!</h2>
            <h3>Click the cards below to learn more about each plant!</h3>
            {/* Search Bar */}
            <input className="search-bar" type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
           
            {/* Filter By */}
            <div className="row align-items-center mb-3">
                <div className="col-auto">
                    <select id="costSelect" className="form-select" value={selectedCost} onChange={changeCostSelectedElem}>
                        <option value="">Select Cost Level</option>
                        {costOptionElems}
                    </select>
                    <div className="col-auto">
                        <button onClick={handleClick} id="submitButton" type="submit" className="btn btn-secondary" aria-label="apply filter">Apply Filter</button>
                    </div>
                </div>

            </div>
           
            {/* Plant Cards */}
            <div className="explore-container">
                {plantsFiltered}
                {plantsFiltered.length < 1 && <h2>Sorry, there are no results for your search.</h2>}
            </div>
        </div>
    )
}

function PlantCard(props) {
    const [flip, setFlip] = useState(false);
    let plant = props.plants;

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <div role="plant info card" className="explore-item text-center" onClick={() => setFlip(!flip)}>
                <h3>{plant.name}</h3>
                <div className="plant-img">
                    <img title={plant.Source} src={plant.img} alt={plant.alt}></img>
                </div>
            </div>
            <div className="explore-item" onClick={() => setFlip(!flip)}>
                <div className="card-info">
                    <h4><em>Maintenance: </em>{plant.MAINTENANCE}</h4>
                    <h4><em>Lighting: </em>{plant.LIGHTING}</h4>
                    <h4><em>Humidity: </em>{plant.HUMIDITY}</h4>
                    <h4><em>Cost: </em>{plant.COST}</h4> 
                    <Link to={"/Explore/" + plant.name} className="btn btn-default more-info" >
                        More Info...
                    </Link>
                </div>
            </div>
        </ReactCardFlip>
    )
}
