import React from 'react';
import axios from 'axios';

// import nav bar
import { NavBar } from './NavBar.js'
import { PetCard } from '../../../problem-07-smcharu-2176857/problem-b/src/components/PetList.js';

export function plantCard(props) {
    console.log(props.plants.name);

    return(
        <div>
            <div className="explore-container">
                <div className="explore-item">
                    <h3>{props.plants.name}</h3>
                    <div className="plant-img">
                        <a href="plantinfo.html">
                            <img src={props.plants.img} alt={props.plants.alt}></img>
                         </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export function plantList(props) {
    const plants = props.plants.map((plant) => 
        <PlanctCard key={plant.name} plants={plant} />
    );

    return (
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>
            {plants}
        </div>
    )
}


