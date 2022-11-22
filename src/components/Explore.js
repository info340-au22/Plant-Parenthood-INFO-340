import React from 'react';
import axios from 'axios';

// import nav bar
import { NavBar } from './NavBar.js'

export function Explore(props) {
    console.log(props.plants.name);

    return(
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>
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



