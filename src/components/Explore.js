import React from 'react';
import axios from 'axios';

export function PlantCard(props) {
    console.log(props.plants.name);

    return(
        //<div>
            
                <div className="explore-item">
                    <h3>{props.plants.name}</h3>
                    <div className="plant-img">
                        <img src={props.plants.img} alt={props.plants.alt}></img>
                    </div>
                </div>
        //</div>
    )
} 

export function PlantList(props) {
    const plants = props.plants.map((plant) => 
        <PlantCard key={plant.name} plants={plant} />
    );

    return (
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>
            <div className="explore-container">
                {plants}
            </div>
        </div>
    )
}


