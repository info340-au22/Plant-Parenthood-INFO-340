import React from 'react';
<<<<<<< HEAD
import axios from 'axios';

// import nav bar
import { NavBar } from './NavBar.js'

=======
>>>>>>> 099b668e6bc3a352ec1a14c29099ab828619d1a1
export function Explore(props) {

    return(
        <div>
            <h1 className="explore-heading">Find your perfect plant!</h1>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index.</h2>

            <div className="explore-container">
                <div className="explore-item">
                    <h3>{props.plants.name}</h3>
                    <div className="plant-img">
                        {/* <a href="plantinfo.html"> LINK THIS LATER*/}
                            <img src={props.plants.img} alt={props.plants.alt}></img>
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
} 



