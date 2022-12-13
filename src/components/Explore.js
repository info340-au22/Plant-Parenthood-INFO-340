import React from 'react';
import { Outlet } from "react-router-dom";



export function ExplorePage(props) {
    return (
        <div className="explore-body">
            <Outlet/>
        </div>
    )

}




